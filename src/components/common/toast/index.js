import Toast from './Toast.vue'
const obj = {}

obj.install = function(Vue) {
    // 创建组建构造器
    const ToastConstructor = Vue.extend(Toast)
        // 根据组建构造器创建组建实例
    const toast = new ToastConstructor()
        // 将组件实例挂载到指定元素上
    toast.$mount(document.createElement('div'))
        // toast.$el就是toast组件实例所挂在的div
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}

export default obj