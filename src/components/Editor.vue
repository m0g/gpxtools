<template>
  <main>
    <Map 
      :bounds="bounds"
      :hover-pos="hoverPos"
      :polylines="polylines" />
    <ElevationProfile 
      @hover="onHover"
      :distance="distance" 
      :latlngs="latlngs" 
      :elevations="elevations" />
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
    let elevations = [];

    if (this.gpx) {
      const segments = this.gpx.querySelectorAll('trkseg');

      for (const segment of segments) {
        const polyline = { latlngs: [], color: 'green' };

        // Create polyline
        const points = segment.querySelectorAll('trkpt')

        console.log(points[0].children[0].textContent)
        for (const point of points) {
          const latlng = [
            point.getAttribute('lat'),
            point.getAttribute('lon'),
          ]

          elevations.push(parseFloat(point.children[0].textContent))
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
      hoverPos: null,
      polylines,
      bounds,
      distance,
      latlngs,
      elevations,
    }
  },
  methods: {
    onHover(step) {
      this.hoverPos = this.latlngs[step]
    }
  }
}
</script>
