<template>
  <highcharts id="container" :options="chartOptions"></highcharts>
</template>

<script>
import Highcharts from 'highcharts'
export default {
  name: 'ElevationProfile',
  props: ['distance', 'latlngs', 'elevations', 'title'],

  data() {
    let maxEle = 0;
    let profile = [];

    if (this.elevations) {
      for (const elevation of this.elevations) {
        if (elevation > maxEle) {
          maxEle = elevation
        }
      }

      for (let i = 0; i < this.elevations.length; i++) {
        profile.push([
          this.distance / this.elevations.length * i,
          this.elevations[i],
          i
        ])
      }
    }

    return { 
      maxEle,
      profile,
      chartOptions: {
        title: { 
          text: this.title
        },
        subtitle: {
          text: `${this.distance ? this.distance.toFixed(2) : '0'} kms`
        },
        chart: {
          type: 'area',
          zoomType: 'x',
          panning: true,
          panKey: 'shift',
          scrollablePlotArea: {
              minWidth: 600
          }
        },
        series: [{
          data: profile,
          lineColor: Highcharts.getOptions().colors[1],
          color: Highcharts.getOptions().colors[2],
          fillOpacity: 0.5,
          name: 'Elevation',
          marker: {
            enabled: false
          },
          threshold: null
        }],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: this.onMouseOver
              }
            }
          }
        }
      }
    }
  },

  methods: {
    onMouseOver(e) {
      const x = e.target.options.x
      let step = 0;

      for (let i = 0; i < this.profile.length; i++) {
        if (x === this.profile[i][0]) {
          step = i;
        }
      }

      this.$emit('hover', step);
    }
  }
}
</script>

<style scoped>
  #container {
    position: absolute;
    width: 100%;
    height: 30vh;
  }
</style>
