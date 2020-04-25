<template>
  <div id="app">
    <el-container>

      <el-header>
        <v-header></v-header>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <v-sidebar></v-sidebar>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>
        <v-footer></v-footer>
      </el-footer>
    </el-container>
        
  </div>
</template>

<script>
import vHeader from './components/public/header.vue'
import vSidebar from './components/public/sidebar.vue'
import vFooter from './components/public/footer.vue'
export default {
  name: 'app',
  components: {
    vHeader,
    vSidebar,
    vFooter
  }

}
</script>

<style  scoped>
@import 'assets/style/app.less'
</style>
