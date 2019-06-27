<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          🔧 GPXTools
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    <Uploader v-if="!gpx" @uploaded="onUploadComplete" />
    <Editor v-if="gpx" v-bind:gpx="gpx" />
  </div>
</template>

<script>
import Uploader from './components/Uploader.vue'
import Editor from './components/Editor.vue'

export default {
  name: 'app',
  components: {
    Uploader,
    Editor,
  },
  data() {
    return {
      gpx: null
    }
  },
  methods: {
    onUploadComplete(value) {
      this.gpx = value;
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
