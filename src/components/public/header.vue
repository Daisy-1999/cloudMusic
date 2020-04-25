<template>
    <div class="music-header">
        <div class="header-left">
            <img class="logo" src="../../assets/logo.jpg" alt="">
            <span>网易云音乐</span>
        </div>
        <div class="header-content">
            <i class="el-icon-arrow-left next"></i>
            <i class="el-icon-arrow-right back"></i>
            <el-input size="mini" v-model="searchText" v-popover:popover
            :placeholder="placeholder" @blur="getTip" @focus="missTip"
            @keyup.enter = "searchicon(searchText)">
            <i slot="suffix" @click="searchicon(searchText)" class="el-input__icon el-icon-search search"></i>
            </el-input>
        </div> 
        <div class="header-right">
           <el-row>
                <el-avatar :src="avatarUrl" size="small" v-if="loginCode === 200"></el-avatar>
                <el-avatar icon="el-icon-user-solid" size="small" v-else></el-avatar>
                
                <div class="unsign" @click="showSignDialogVisible" v-popover:backSign>
                    <i class="unsign-text">{{ avatarName }}</i>
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <i class="vip">开通vip</i>
                <i class="el-icon-orange"></i>
                <i class="el-icon-message"></i>
                <i class="el-icon-setting"></i>
           </el-row>
        </div>
         <!-- 获得焦点之后的信息框 -->
        <el-popover ref="popover" placement="bottom-start"
             class="search-tip"   width="350" trigger="focus"
             v-model="visible1">
            <div class="tip-top">
                <p>搜索历史</p>
                <p><i class="el-icon-delete delete"></i></p>
                <p class="seeall">查看全部</p>
            </div>
            <div class="tip-center">
                <el-tag class="tag" closable>标签三</el-tag>
            </div>
            <div class="tip-bottom">
                <p>热搜榜</p>
                <ul>
                    <li><span>1</span> number1</li>
                    <li><span>2</span> number2</li>
                </ul>
            </div>   
        </el-popover>
        <!-- 弹出登录的对话框 -->
        <el-dialog v-if = "isToken === ''"
            title="手机号登录"
            :visible.sync="signDialogVisible"
            width="50%">
            <span>
                <el-form ref="loginFormRef" :model="loginForm" label-width="0px" :rules="loginFremRules">
                    <!-- 用户名 -->
                    <el-form-item prop="phone">
                        <el-input v-model="loginForm.userphone" prefix-icon="el-icon-user"></el-input>
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item prop="password">
                        <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-phone"></el-input>
                    </el-form-item>
    
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="login">登录</el-button>
                <el-button type="primary" @click="signDialogVisible = false">取消</el-button>
            </span>
        </el-dialog>
         
        <el-popover :model="isToken !== '' ? false:true"
            ref="backSign"
            placement="bottom"
            title="标题"
            width="200"
            trigger="click">
            <el-button type="primary" round @click="logout">退出登录</el-button>
        </el-popover>
    
    </div>
   
</template>

<script>
    export default {
        data() {
            return {
                placeholder: '搜索音乐，视频，歌词，电台',
                searchText: '',
                visible1: false,
                signDialogVisible: false,
                //登录表单的数据绑定对象
                loginForm: {
                    userphone: '18811935404',
                    password: 'pangyao12345'
                },
                //表单的验证规则
                loginFremRules: {
                    userphone: [
                       { required: true, message: '请输入手机号码', trigger: 'blur' },
                       { min: 11, max: 11, message: '请输入正确的手机  号码', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入正确的密码', trigger: 'blur' },
                    ]
                },
                avatarUrl: '',
                loginCode: 404,
                avatarName: '未登录',
                isToken: ''
            }
        },
        created(){
            // this.loginStatus()
        },
        methods: {
            missTip(){
                this.placeholder = ''
            },
            getTip(){
              this.placeholder = '搜索音乐，视频，歌词，电台'
            
            },
            async searchicon(keywords){
                keywords = keywords.trim()
                if (keywords === '') return alert('输入关键词搜索')
                //通过路由传参
                this.$router.push({name: 'searchsong', params: {keywords: keywords}})
                this.visible = false
                // const {data: res} = await this.$http.get('search?keywords= this.searchmusic')
                // console.log(res)
                //console.log(keywords)
            },
            showSignDialogVisible(){
               this.signDialogVisible = true
            },
            async login(){
                this.signDialogVisible = false
                const { data: res} = await this.$http.get("/login/cellphone?phone="
                    +this.loginForm.userphone+"&password="
                    +this.loginForm.password)
                    //console.log(res)
                    //console.log(res.code)
                    if(res.code !== 200){
                        this.$message.error('登陆失败')
                    } else{
                        //this.$message.success('登陆成功')
                        this.loginCode = res.code
                        this.avatarUrl = res.profile.avatarUrl
                        this.avatarName = res.profile.nickname 
                        this.isToken = res.token
                        console.log(res.token)

                        // 将登陆成功之后的 token 保存到客户端的sessionStorage中
                        //因为有些接口必须在登陆了之后才能访问到
                        window.sessionStorage.setItem('token', res.token)
                        this.$router.push('./mymusic')
                    }
                },
            logout(){
                //this.$http.get("logout")
                this.avatarName = '未登录'
                this.loginCode = 404
                window.sessionStorage.clear()
                this.$router.push('/recommendmusic')
                this.isToken = window.sessionStorage.getItem('token')
            }
        }

    }
</script>

<style scoped>
@import '../../assets/style/header.less'
</style>