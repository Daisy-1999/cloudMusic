<template>
    <div>
        <v-findmusic></v-findmusic>
        <!-- <div class="recommend">
            <div class="text">
                <p>推荐歌单</p>
                <p class="more">更多></p>
            </div>
            <div class="boxs">
                <div class="box" v-for="item in personalizedList" :key="item.id">
                    <img :src="item.picUrl" alt="">
                    <div class="copywriter">
                        {{ item.copywriter }}
                    </div>
                    <p>{{ item.name}}</p>
                    
                </div>
            </div>
        </div> -->

        <!-- <div class="recommend">
            <div class="text">
                <p>独家放送</p>
                <p class="more">更多></p>
            </div>
            <div class="dujias">
                <div class="dujia" v-for="item in dujiaList" :key="item.id">
                    <img :src="item.picUrl" alt="">
                    <p> {{ item.name }} </p>
                    <i class="el-icon-video-camera vedio"></i>
                </div>
            </div> 
        </div>
         <div class="recommend">
            <div class="text">
                <p>最新音乐</p>
                <p class="more">更多></p>
            </div>
            <div class="newSongs">
                
            </div> 
        </div> -->
    </div>
</template>

<script>
import vFindmusic from '../components/recommend/findmusic.vue'

    export default {
        components: {
            vFindmusic
        },
       
    }
</script>

<style scoped>
@import '../assets/style/recommendMusic.less'
</style>