<template>
    <div class="searchsongs">

        <el-tabs stretch class="searchList" border>
            <el-tab-pane label="单曲">
                <v-showsongs></v-showsongs>
            </el-tab-pane>
            <el-tab-pane label="歌手">配置管理
            </el-tab-pane>
            <el-tab-pane label="专辑">角色管理</el-tab-pane>
            <el-tab-pane label="视频">定时任务补偿</el-tab-pane>
            <el-tab-pane label="歌单">用户管理</el-tab-pane>
            <el-tab-pane label="歌词">配置管理</el-tab-pane>
            <el-tab-pane label="主播电台">角色管理</el-tab-pane>
            <el-tab-pane label="用户">定时任务补偿</el-tab-pane>
        </el-tabs>

         
    </div>
</template>
<script>
import vShowsongs from './show/Showsongs.vue'
    export default {
        name: 'searchsong',
        components: {
            vShowsongs
        }
    }
</script>

<style scoped>
@import '../assets/style/searchsong.less'
</style>