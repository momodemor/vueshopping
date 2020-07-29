<template>
  <div class="wrapper" ref="wrapper">
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    click: {
      type: Boolean,
      default: false
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      click: this.click,
      pullUpLoad: this.pullUpLoad
    }),

    this.scroll.on('scroll',(position) => {
      this.$emit('bscroll',position)
    }),
    
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x,y,time=500) {
     this.scroll.scrollTo(x,y,time)
    },
    refresh() {
      this.scroll.refresh()
    }

  }
}
</script>

<style scoped>

</style>