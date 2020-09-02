<template>
  <main>
    <Map 
      :bounds="bounds"
      :hover-pos="hoverPos"
      :polylines="polylines" />
    <ElevationProfile 
      @hover="onHover"
      :title="title"
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
    let title = '';

    if (this.gpx) {
      const segments = this.gpx.querySelectorAll('trkseg');
      title = this.gpx.querySelector('trk name').textContent

      for (const segment of segments) {
        const polyline = { latlngs: [], color: 'green' };

        // Create polyline
        const points = segment.querySelectorAll('trkpt')

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
        // For some reason this is required by turf.js
        // https://github.com/Turfjs/turf/issues/843
        const reversedPolyline = polyline.latlngs.map(p => [p[1], p[0]]);
        distance += length(lineString(reversedPolyline));
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
      title,
    }
  },
  methods: {
    onHover(step) {
      this.hoverPos = this.latlngs[step]
    }
  }
}
</script>
