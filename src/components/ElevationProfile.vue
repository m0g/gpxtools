<template>
  <section>
    <svg>
      <g class="labels x-labels">
        <text x="100" y="60">0</text>
        <text x="350" y="60">250</text>
        <text x="600" y="60">500</text>
      </g>
      <g class="labels y-labels">
        <text x="80" y="20">10</text>
        <text x="80" y="50">0</text>
      </g>
    </svg>
  </section>
</template>

<script>
export default {
  name: 'ElevationProfile',
  props: ['distance', 'latlngs'],
}
</script>

<style scoped>
  svg {
    width: 100%;
  }
</style>
