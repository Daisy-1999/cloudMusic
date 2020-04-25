<template>
    <div>
         <el-tabs stretch>
            <el-tab-pane label="个性推荐">
                <v-banner></v-banner>
                <div class="recommend">
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
                </div>
                <v-recommendelse></v-recommendelse>
            </el-tab-pane>
            <el-tab-pane label="歌单">配置管理</el-tab-pane>
            <el-tab-pane label="主播电台">角色管理</el-tab-pane>
            <el-tab-pane label="排行榜">定时任务补偿</el-tab-pane>
            <el-tab-pane label="歌手">角色管理</el-tab-pane>
            <el-tab-pane label="最新音乐">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import vBanner from '../search/Banner.vue'
import vRecommendelse from '../show/RecommendElse.vue'
    export default {
        name: 'vFindmusic',
        components:{
            vBanner,
            vRecommendelse
        },
         data() {
            return {
                personalizedList: []
               
            }
        },
        created(){
            this.personalized()
            
        },
        methods: {
            async personalized(){
                const { data: res} = await this.$http.get('personalized?limit=10')
                if(res.code !== 200) return
                this.personalizedList = res.result
                // this.personalizedList.forEach(item => {                 
                // });
            }
           
        }
    }
</script>

<style scoped>
@import '../../assets/style/findmusic.less';
</style>