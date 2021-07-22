// es6只有export可以触发tree shaking机制。commonjs只有exports可以触发tree shaking机制
import Test from './components/Test/index'

import VueEcharts from './components/VueEcharts/index'

export default function(Vue) {
  Vue.use(Test)
  Vue.use(VueEcharts)
}