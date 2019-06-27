<template>
  <section>
    <div>
      <p>Distance: {{distance}} kms</p>
      <p>Total points: {{polyline.latlngs.length}}</p>
    </div>
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      :bounds="bounds"
      style="width: 80vw; height: 80vh"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-polyline
        :lat-lngs="polyline.latlngs"
        :color="polyline.color">
      </l-polyline>
    </l-map>
  </section>
</template>

<script>
import { latLng, LatLngBounds } from "leaflet";
import {LMap, LTileLayer, LPolyline } from 'vue2-leaflet';
import { lineString, length } from '@turf/turf'

export default {
  name: 'Map',
  props: ['gpx'],
  data() {
    const polyline = { latlngs: [], color: 'green' };
    let bounds = null;
    let distance = 0;

    if (this.gpx) {
      // Create polyline
      const points = this.gpx.querySelectorAll('trkseg trkpt')

      for (const point of points) {
        polyline.latlngs.push([
          point.getAttribute('lat'),
          point.getAttribute('lon'),
        ])
      }

      // Define bounds
      bounds = new LatLngBounds(polyline.latlngs);

      // Calculate distances
      // TODO: the distance is wrong, fix it
      distance = length(lineString(polyline.latlngs));
    }

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
      polyline,
      bounds,
      distance,
    };
  },
  components: {
    LMap,
    LTileLayer,
    LPolyline
    // LMarker
  },
  watch: {
    gpx: (newVal, oldVal) => {
      console.log(newVal, oldVal);
    }
  }
}
</script>
