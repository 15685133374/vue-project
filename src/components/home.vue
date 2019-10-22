<template>
  <div>
    <h1>home</h1>
    <p>
      <router-link to="/home/phone">手机</router-link>
      <router-link to="/home/tablet">平板</router-link>
      <router-link to="/home/computer">电脑</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
</style>
