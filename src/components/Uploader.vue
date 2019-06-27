<template>
  <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
    <h1>Upload your GPX track</h1>
    <div class="dropbox">
      <input 
        type="file" 
        :name="uploadFieldName" 
        :disabled="isSaving" 
        @change="processGPX($event)"
        accept="application/gpx+xml" 
        class="input-file">
        <p v-if="isInitial">
          Drag your file(s) here to begin<br> or click to browse
        </p>
        <p v-if="isSaving">
          Uploading {{ fileCount }} files...
        </p>
    </div>
  </form>
</template>

<script>
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
    processGPX(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const base64 = reader.result.split(',').pop();
        console.log(base64);
        console.log(atob(base64));
      }
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      // append the files to FormData
      Array
        .from(Array(fileList.length).keys())
        .map(x => {
          formData.append(fieldName, fileList[x], fileList[x].name);
        });

      console.log(fileList)
      console.log(formData)
      const reader = new FileReader();
      const file = reader.readAsDataURL(fileList[0]);
      console.log(file);
      // save it
      // this.save(formData);
    }
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