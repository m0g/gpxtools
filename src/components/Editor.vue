<template>
  <main>
    <Map :bounds="bounds" :polylines="polylines" />
    <ElevationProfile :distance="distance" :latlngs="latlngs" />
  </main>
</template>

<script>
import { LatLngBounds } from "leaflet";
import { lineString, length } from '@turf/turf'
import Map from './Map'
import ElevationProfile from './ElevationProfile'

export default {
  name: 'Editor',
  props: ['gpx'],
  components: { Map, ElevationProfile },
  data() {
    let latlngs = [];
    let polylines = [];
    let bounds = null;
    let distance = 0;

    if (this.gpx) {
      const segments = this.gpx.querySelectorAll('trkseg');

      for (const segment of segments) {
        const polyline = { latlngs: [], color: 'green' };

        // Create polyline
        const points = segment.querySelectorAll('trkpt')

        for (const point of points) {
          const latlng = [
            point.getAttribute('lat'),
            point.getAttribute('lon'),
          ]

          polyline.latlngs.push(latlng)
          latlngs.push(latlng)
        }

        polylines.push(polyline)

        // Calculate distances
        // TODO: the distance is wrong, fix it
        distance += length(lineString(polyline.latlngs));
      }
      // Define bounds
      bounds = new LatLngBounds(latlngs);

    }

    return {
      polylines,
      bounds,
      distance,
      latlngs,
    }
  }
}
</script>
