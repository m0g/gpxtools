<template>
  <svg>
    <g class="labels x-labels">
      <text x="100" y="60">0</text>
      <text x="350" y="60">{{distance / 2 }}</text>
      <text x="600" y="60">{{distance}}</text>
    </g>
    <g class="labels y-labels">
      <text x="80" y="20">{{maxEle}}</text>
      <text x="80" y="50">0</text>
    </g>
    <polyline
      fill="none"
      stroke="#0074d9"
      stroke-width="3"
      :points="pointsStr" />
  </svg>
</template>

<script>
export default {
  name: 'ElevationProfile',
  props: ['distance', 'latlngs', 'elevations'],

  data() {
    let maxEle = 0;
    let line = [];
    let pointsStr = ''

    if (this.elevations) {
      for (const elevation of this.elevations) {
        if (elevation > maxEle) {
          maxEle = elevation
        }
      }
    }

    if (this.elevations && this.latlngs) {
      for (let i = 0; i < this.elevations.length; i++) {
        line.push([
          this.distance / this.elevations.length * i,
          this.elevations[i]
        ])
      }
    }

    for (const point of line) {
      pointsStr += `${point.join(',')} `
    }

    return { maxEle, pointsStr }
  }
}
</script>

<style scoped>
  svg {
    width: 100%;
  }
</style>
