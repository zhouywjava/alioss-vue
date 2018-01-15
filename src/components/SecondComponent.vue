<template>
    <div class="secondcomponent">
      <h1>I am another page</h1>
      <a> written by {{author}}</a>
      <p>感谢的指导</p>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h1 style="line-height: 36px;color: #20A0FF">豆瓣电影排行榜</h1>
        </div>
        <div v-for="article in articles" class="text item">
          {{article.title}}
        </div>
      </el-card>
    </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/index.css'
    export default {
        name: 'secondcomponent',
        data(){
          return{
              author: 'zhouyiwei',
              articles:''
          }
        },
        mounted:function(){
          this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
              headers:{},
          }).then((res)=>{
              this.articles = res.data.subjects
          },(res)=>{
              console.log(res)
          });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
