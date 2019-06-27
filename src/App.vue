<template>
  <div id="app">
    <Uploader v-if="!gpx" @uploaded="onUploadComplete" />
    <Map />
  </div>
</template>

<script>
import Uploader from './components/Uploader.vue'
import Map from './components/Map.vue'

export default {
  name: 'app',
  components: {
    Uploader,
    Map,
  },
  data() {
    return {
      gpx: null
    }
  },
  methods: {
    onUploadComplete(value) {
      console.log(value);
      this.gpx = value;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
