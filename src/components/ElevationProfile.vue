<template>
    <highcharts id="container" :options="chartOptions"></highcharts>
</template>

<script>
import Highcharts from 'highcharts'
export default {
  name: 'ElevationProfile',
  props: ['distance', 'latlngs', 'elevations'],

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
          this.elevations[i]
        ])
      }
    }

    return { 
      maxEle,
      chartOptions: {
        title: { text: 'Elevation profile' },
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
        }]
      }}
  },
}
</script>

<style scoped>
  #container {
    position: absolute;
    width: 100%;
    height: 30vh;
  }
</style>
