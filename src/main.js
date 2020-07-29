import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// 导入插件
import obj from 'components/common/toast'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
    // 安装插件，将会运行插件对应的install
Vue.use(obj)

import { request1, request2, request3, request4 } from './network/request'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')