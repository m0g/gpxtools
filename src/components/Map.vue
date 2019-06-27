<template>
  <l-map
    :zoom="zoom"
    :center="center"
    :options="mapOptions"
    :bounds="bounds"
    style="width: 100vw; height: 70vh"
  >
    <l-tile-layer :url="url" :attribution="attribution" />
    <l-polyline
      v-for="(polyline, index) in polylines"
      :key="index"
      :lat-lngs="polyline.latlngs"
      :color="polyline.color">
    </l-polyline>
  </l-map>
</template>

<script>
import { latLng } from "leaflet";
import {LMap, LTileLayer, LPolyline } from 'vue2-leaflet';

export default {
  name: 'Map',
  props: ['polylines', 'bounds'],
  data() {
    return {
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5
      },
    };
  },
  components: {
    LMap,
    LTileLayer,
    LPolyline
  },
  watch: {
    gpx: (newVal, oldVal) => {
      console.log(newVal, oldVal);
    }
  }
}
</script>
