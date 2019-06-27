<template>
  <main>
    <Map :bounds="bounds" :polyline="polyline" />
    <div>
      <p>Distance: {{distance}} kms</p>
      <p>Total points: {{polyline.latlngs.length}}</p>
    </div>
  </main>
</template>

<script>
import { LatLngBounds } from "leaflet";
import { lineString, length } from '@turf/turf'
import Map from './Map';

export default {
  name: 'Editor',
  props: ['gpx'],
  components: { Map },
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
      polyline,
      bounds,
      distance
    }
  }
}
</script>
