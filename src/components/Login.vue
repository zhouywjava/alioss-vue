<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="login">
    <div class="login-wrap" v-show="showLogin">
      <h3>登录</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="text" placeholder="请输入密码" v-model="password">
      <button v-on:click="login">登录</button>
      <span v-on:click="ToRegister">没有账号?马上注册</span>
    </div>
    <div class="register-wrap" v-show="showRegister">
      <h3>注册</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入新用户名" v-model="newUsername">
      <input type="text" placeholder="请输入新密码" v-model="newPassword">
      <button v-on:click="register">注册</button>
      <span v-on:click="ToLogin">已有账号?马上登录</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function(){
      return {
          showLogin:true,
          showRegister:false,
          showTishi:false,
          tishi:'',
          username:'',
          password:'',
          newUsername:'',
          newPassword:''
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
