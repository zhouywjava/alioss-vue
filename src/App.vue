<template>
  <div id="app">
   <!--<h1>服务端数据为:{{serverData}}</h1>-->
    <img src="./assets/logo.png">
    <firstcomponent></firstcomponent>
    <router-view/>
  </div>
</template>
<script>
  import firstcomponent from '@/components/FirstComponent'
export default {
  name: 'app',
  data:function() {
    return {
      serverData: 'data from server'
    }
  },
  mounted: function () {
    this.getData();
  },
  methods: {
    getData () {
      console.log("------------getData-------------");
      var $this = this;
      this.$http.get('http://localhost:9090/alioss-server/home/hello').then(function(response) {
        console.log(response);
        this.serverData=response.data;
      })
        .catch(function(error) {
          console.log(error);
        })
    }
  },
  components:{firstcomponent}
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
</style>
