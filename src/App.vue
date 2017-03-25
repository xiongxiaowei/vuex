<template>
  <div id="app">
    <h1>welcome to vuex</h1>
    <input type="button" name="" value="点击增加" @click='increment'>
    <input type="button" name="" value="点击减少" @click="decrement">
    <input type="button" name="" value="只有偶数才能点击+" @click="clickOdd">
    <input type="button" name="" value="异步增加" @click="clickAsync">
    <div class="">
      现在的数字是:{{count}},他是{{odd}}
    </div>
  </div>

</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:mapGetters([
    'count',
    'odd'
  ]),
  methods:mapActions([
    'increment',
    'decrement',
    "clickOdd",
    "clickAsync"
  ])
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
