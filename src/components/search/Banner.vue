<template>
    <div>
        <div class="banner">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in bannerImgList" :key=item.id>
                    <img class="bannerImg" :src="item.imageUrl" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vPersonal',
        data() {
            return {
                bannerImgList: [],
                recommendText: '',

            }
        },
        created() {
            this.getBanner()
        },
        methods: {
           async getBanner(){
                const {data: res} = await this.$http.get('banner')
                //console.log(res)
                //console.log(res.banners)
                this.bannerImgList = res.banners
            }
            
        }
    }
</script>

<style scoped>
@import '../../assets/style/personal.less'
</style>