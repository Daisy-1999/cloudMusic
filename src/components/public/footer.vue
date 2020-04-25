<template>
    <div class="footer">
        <div class="footer-left">
            <el-button size="small" type="danger" class="prexSong" icon="el-icon-d-arrow-left" circle></el-button>
            <el-button type="danger" class="stopOrStart" icon="el-icon-video-pause" circle></el-button>
            <el-button size="small" type="danger" class="nextSong" icon="el-icon-d-arrow-right" circle></el-button>
        </div>
        <div class="footer-progress">
            <p>{{tolTime}}</p>
            <div class="progress">
                <el-progress :show-text="false" :percentage="percentage" color="rgb(232, 60, 60)">
                </el-progress>
                <span></span>
            </div> 
            <p>{{tolTime}}</p>
        </div>
        <div class="footer-voice">
            <i class="el-icon-headset"></i>
            <div class="voice">
                <el-progress :percentage="50" :show-text="false"
                 class="voice" color="rgb(232, 60, 60)"></el-progress>
                <span></span>
            </div>
        </div>
        <div class="footer-else">
            <i class="el-icon-aim"></i>
            <i>标准</i>
            <i class="el-icon-connection"></i>
            <i>词</i>
            <i class="el-icon-tickets"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vFooter',
        data() {
            return {
                curTime: '00:00',
                tolTime: '00:00',
                percentage: 20
            }
        },
        created(){

        },
        methods: {
            
        }
    }
</script>

<style scoped>
@import '../../assets/style/footer.less'
</style>