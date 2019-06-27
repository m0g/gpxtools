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
  props: ['polyline', 'bounds'],
  data() {
    return {
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
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
