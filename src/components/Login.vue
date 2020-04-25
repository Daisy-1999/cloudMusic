
<template>
    <div>
        <!-- 登录组件有待开发 目前还不清楚怎样拆分比较合适 -->
        <!-- 弹出登录的对话框 -->
        <el-dialog
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                signDialogVisible: true,
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
                }
            }
        },
        methods: {
            login(){
                this.signDialogVisible = false
                 //表单的预验证
                this.$refs.loginFormRef.validate(async valid => {
                    if (!valid) return;
                    const { data: res} = await this.$http.get("/login/cellphone?phone="
                    +this.loginForm.userphone+"&password="
                    +this.loginForm.password)
                    console.log(res)
                    console.log(res.code)
                    if(res.code !== 200){
                        this.$message.error('登陆失败')
                    } else{
                        this.$message.success('登陆成功')
                        this.loginCode = res.code
                        this.avatarUrl = res.profile.avatarUrl
                        this.avatarName = res.profile.nickname 
                    }
                    this.$router.push('./findmusic')
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>