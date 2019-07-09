<template>
  <section>
    <span>{{maxEle}}</span>
    <trend
      :data="elevations"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      smooth />
  </section>
</template>

<script>
export default {
  name: 'ElevationProfile',
  props: ['distance', 'latlngs', 'elevations'],

  data() {
    let maxEle = 0;

    if (this.elevations) {
      for (const elevation of this.elevations) {
        if (elevation > maxEle) {
          maxEle = elevation
        }
      }
    }

    return { maxEle }
  },
}
</script>

<style scoped>
  section {
    position: relative;
    width: 100%;
    height: 30vh;
  }

  svg {
    width: 100%;
    height: 90%;
    position: absolute;
    top: 0;
  }
</style>
