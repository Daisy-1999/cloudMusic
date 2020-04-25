<template>
    <div>
        <div class="recommend">
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
                <div class="newSong" v-for="item in newsong" :key="item.id">
                    <p class="number" >
                        {{ item.song.disc }}
                    </p>
                    <div class="songInfo">
                        <img :src="item.picUrl" alt="">
                        <div class="songText">
                            <span> {{ item.name }}</span> 
                            <span class="name">{{ item.song.artists[0].name}}</span>
                        </div>
            
                    </div>
                </div> 
            </div>
        </div>
        <div class="recommend">
            <div class="text">
                <p>推荐MV</p>
                <p class="more">更多></p>
            </div>
            <div class="recommendMvs">
                <div class="recommendMv" v-for="item in mvList" :key="item.id">
                    <img :src="item.picUrl" alt="">
                    <div class="copywriter">
                        {{ item.copywriter }}
                    </div>
                    <p class="songName"> {{ item.name }} </p>
                    <span class="artistName"> {{ item.artists[0].name}}</span>
                    <i class="el-icon-video-camera vedio-right"></i>
                </div>
            </div> 
        </div>
         <div class="recommend">
            <div class="text">
                <p>主播电台</p>
                <p class="more">更多></p>
            </div>
             <div class="djprograms">
                <div class="djprogram" v-for="item in djprogramList" :key="item.id">
                    <img :src="item.picUrl" alt="">
                    <p> {{ item.name }} </p>
                    
                </div>
            </div> 
         </div>
    </div>
</template>

<script>
    export default {
        name: 'vRecommendelse',
        data() {
            return {
                 dujiaList: [],
                 newsong: [],
                 mvList: [],
                 djprogramList: []
            }
        },
        created(){
            this.privatecontent(),
            this.getNewSong(),
            this.getMv(),
            this.getdjprogram()
        },
        methods: {
             async privatecontent(){
                const {data: res} = await this.$http.get('personalized/privatecontent')
                //console.log(res)
                this.dujiaList = res.result
               
            },
            async getNewSong(){
                const { data: res} = await this.$http.get('personalized/newsong')
                //console.log(res)
                this.newsong = res.result
                //console.log(this.newsong)
            },
            async getMv(){
                const { data: res} = await this.$http.get('personalized/mv')
                //console.log(res)
                this.mvList = res.result
                //console.log(this.mvList)
            },
            async getdjprogram(){
                const { data : res} = await this.$http.get('personalized/djprogram')
                this.djprogramList = res.result
                //console.log(this.djprogramList)
            }
        }
    }
</script>

<style scoped>
@import '../../assets/style/recommendelse.less'
</style>