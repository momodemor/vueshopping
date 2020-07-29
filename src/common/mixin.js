import { debounce } from './tool'

export const imageLoadMiXin = {
    data() {
        return {
            imageLoadListener: null,
            newRefresh: null
        }
    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroll.refresh, 100)

        this.imageLoadListener = () => {
            this.newRefresh()
        }
        this.$bus.$on('imageLoad', this.imageLoadListener)
        console.log(混入内容);

    },
}