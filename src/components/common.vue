<template>
  <div>
    <h3>第一次写子路由</h3>
    <div>{{about}}</div>
    <button @click="clickEvent">点击按钮</button>
  </div>
</template>

<script>
  export default {
    name:'common',
    props:['about'],
    methods:{
      clickEvent(){
        this.$emit('sendValueToParent','this message is from child')
      }
    },
  }
</script>

<style>
</style>
