<template>
    <div class="firstcomponent">
      <h1>I am a title</h1>
      <a>written by {{author}}</a>
    </div>
</template>

<script>
    export default {
        name: 'firstcomponent',
        data(){
          return {
              author: 'zhouyiwei'
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
