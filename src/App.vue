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
      <div class="navbar-end">
        <div class="navbar-item">
          <button v-if="gpx" class="button is-primary" @click="exportGPX()">
            Export
          </button>
        </div>
      </div>
    </nav>
    <Uploader v-if="!gpx" @uploaded="onUploadComplete" />
    <Editor v-if="gpx" v-bind:gpx="gpx" />
  </div>
</template>

<script>
import { saveAs } from 'file-saver'
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
    },
    exportGPX() {
      var oSerializer = new XMLSerializer();
      var sXML = oSerializer.serializeToString(this.gpx);
      var blob = new Blob([sXML], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "track.gpx");
    }
  }
}
</script>