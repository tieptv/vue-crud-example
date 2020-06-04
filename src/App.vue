<template>
   <div id="app">
   <div class="title">Trắc nghiệm vui</div>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
.title{
  background-color: #343a40;
  color: white;
  height: 60px;
  font-size: 1.25rem;
  text-align: center;
  vertical-align: middle;
  line-height: 60px;
}
</style>
