<template>
  <div>
    <h1>about</h1>
    <common :about='value1' @sendValueToParent='getValueFromchild'></common>
  </div>
</template>

<script>
  import common from '@/components/common'
  export default{
    name:'about',
    components:{common},
    methods:{
      getValueFromchild:function(data){
        console.log(data)
      }
    },
    data (){
      return {
        value1:'父级向子级传值'
      }
    },
  }
</script>

<style>
</style>
