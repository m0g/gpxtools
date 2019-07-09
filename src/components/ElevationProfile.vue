<template>
  <section>
    <div>
      <p>Distance: {{distance}} kms</p>
      <p>Total points: {{latlngs.length}}</p>
    </div>
    <svg>
      <g class="x axis"></g>
      <g class="y axis"></g>
    </svg>
  </section>
</template>

<script>
export default {
  name: 'ElevationProfile',
  props: ['distance', 'latlngs'],
}
</script>

<style>
  /* svg {
    width: 100%;
  } */
</style>
