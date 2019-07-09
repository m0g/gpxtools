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
    <l-marker v-if="hoverPos" :lat-lng="hoverPos" />
  </l-map>
</template>

<script>
import { latLng } from "leaflet";
import {LMap, LTileLayer, LPolyline, LMarker } from 'vue2-leaflet';

export default {
  name: 'Map',
  props: ['polylines', 'bounds', 'hoverPos'],
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
    LPolyline,
    LMarker,
  },
}
</script>
