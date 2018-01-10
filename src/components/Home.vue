<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="home">
      <h3>欢迎 {{name}}</h3>
      <a href="#" v-on:click="quit">注销登录</a>
    </div>
</template>

<script>
  import {getCookie,setCookie,delCookie} from './../assets/js/cookie'
    export default {
        name: 'home',
        data(){
            return{
                name: ''
            }
        },
      mounted(){
        let uname = getCookie('username')
        this.name = uname
        if(uname == "" || uname == undefined){
            this.$router.push("/login")
        }
      },
      methods:{
          quit(){
              delCookie('username')
            this.$router.push("/login")
          }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
