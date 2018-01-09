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
  import {setCookie,getCookie} from './../assets/js/cookie'
export default {
  name: 'Login',
  data: function(){
      return {
          showLogin:true,
          showRegister:false,
          showTishi:false,
          tishi:'no show',
          username:'',
          password:'',
          newUsername:'',
          newPassword:''
      }
  },
  mounted(){
    if(getCookie('username')){
        this.$router.push('/home');
    }
  },
  methods:{
      login(){
          if(this.username == "" || this.password == ""){
              alert("请输入用户名和密码");
          }else{
              let data = {'username':this.username,'password':this.password}
              this.$http.post('http://localhost:9090/alioss-server/home/login').then((res)=>{
                  console.log(res);
                  if(res.data == -1){
                      this.tishi = "该用户不存在";
                      this.showTishi = true;
                  }else if(res.data == 0){
                      this.tishi = "密码输入错误";
                      this.showTishi = true;
                  }else if(res.data == 'admin'){
                      this.$router.push('/main');
                  }else{
                      this.tishi = '登录成功';
                      this.showTishi = true;
                      setCookie('username',this.username,1000*60);
                      setTimeout(function () {
                        this.$router.push('/home');
                      }.bind(this),1000);
                  }
              });
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-wrap{text-align:center;}
  input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
  p{color:red;}
  button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
  span{cursor:pointer;}
  span:hover{color:#41b883;}
</style>
