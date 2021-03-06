import Vue from 'vue'
import App from './App.vue'
import { Icon }  from 'leaflet'
import HighchartsVue from 'highcharts-vue'

import 'leaflet/dist/leaflet.css'
import 'bulma/css/bulma.css'
import './style.css'

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.config.productionTip = false

Vue.use(HighchartsVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
