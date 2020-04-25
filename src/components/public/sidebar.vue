<template>
    <div class="music-aside">
        <div class="aside-top">
            <p>推荐</p>
            <ul>
                <li  @click="gotoFindmusic"><i class="el-icon-headset"></i>发现音乐</li>
                <li><i class="el-icon-magic-stick"></i>私人FM</li>
                <li><i class="el-icon-bangzhu"></i>LOOK直播</li>
                <li><i class="el-icon-video-camera"></i>视频</li>
                <li><i class="el-icon-s-check"></i>朋友</li>
            </ul>
        </div>
        <div class="aside-center">
            <p>我的音乐</p>
            <ul>
                <li><i class="el-icon-sold-out"></i>本地音乐</li>
                <li><i class="el-icon-download"></i>下载管理</li>
            </ul>
        </div>
        <div class="aside-bottom">
            <p>创建的歌单<i v-popover:popover class="el-icon-plus addSonglist"></i></p>
        </div>
        <el-popover
            class="addSongtip"
            ref="popover"  v-model="isShowTipVisible"
            placement="right-start"
            title="新建歌单"
            width="200" trigger="click"><br>
            <el-input v-model="newSonglist" placeholder="请输入新歌单标题"
             size="mini"></el-input> <br><br>
            <el-checkbox :disabled="newSonglist?false:true">设置为隐私歌单</el-checkbox>
            <br><br>
            <el-button :disabled="newSonglist?false:true" size="mini" type="primary">创建</el-button>
            <el-button size="mini" @click="isShowTipVisible=false">取消</el-button>
        </el-popover>
    </div>
    
</template>

<script>
    export default {
        name: 'vSidebar',
        data() {
            return {
                newSonglist: '',
                isShowTipVisible: false
                
            }
        },
        methods: {
            gotoFindmusic(){
                this.$router.replace('/findmusic')
            }
        }
    }
</script>

<style scoped>
@import '../../assets/style/sidebar.less'
</style>