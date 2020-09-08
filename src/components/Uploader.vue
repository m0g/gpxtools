<template>
<section class="hero is-link is-fullheight-with-navbar">
  <div class="hero-body">
    <div class="container">
      <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
        <h1>Upload your GPX track</h1>
        <div class="dropbox">
          <input 
            type="file" 
            :name="uploadFieldName" 
            :disabled="isSaving" 
            @change="processGPX($event)"
            multiple="true"
            accept="application/gpx+xml" 
            class="input-file">
            <p v-if="isInitial">
              Drag your GPX file(s) here to begin<br> or click to browse
            </p>
            <p v-if="isSaving">
              Uploading {{ fileCount }} files...
            </p>
        </div>
      </form>
    </div>
  </div>
</section>
</template>

<script>
const parseUploadedFile = async file => {
  const reader = new FileReader();

  reader.readAsDataURL(file);

  return await new Promise((resolve) => {
    reader.onload = () => {
      const base64 = reader.result.split(',').pop();
      const xml = atob(base64);
      const parser = new DOMParser();
      
      resolve(parser.parseFromString(xml, 'application/xml'))
    }
  });
};

export default {
  name: 'Uploader',
  data() {
    return {
      uploadedFiles: [],
      uploadFieldName: 'GPX',
      isInitial: true,
      isSaving: false
    }
  },
  methods: {
    async processGPX(event) {
      this.isInitial = false;
      this.isSaving = true;

      const files = event.target.files;
      let tracks = [];

      for (const file of files) {
        tracks.push(await parseUploadedFile(file));
      }

      const gpx = tracks.shift();

      for (const track of tracks) {
        const segments = track.querySelectorAll('trkseg');

        for (const segment of segments) {
          gpx.querySelector('trk').appendChild(segment)
        }
      }

      this.$emit('uploaded', gpx);
    },
  }
}
</script>

<style>
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>