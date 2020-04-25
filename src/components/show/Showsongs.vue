<template>
    <div>
       <p>搜索<span class="keywords">"{{$route.params.keywords}}"</span>，找到{{ this.totalSongs }}首单曲</p>
        <el-table stripe border style="width: 100%"
            :data="searchSongsList" fit @row-dblclick="playMusic">
            <el-table-column type="index" :index="indexMethod" ></el-table-column>
            <el-table-column prop="date"
                label="操作">
                <template>
                    <i class="el-icon-pear"></i>
                    <i class="el-icon-download"></i>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="音乐标题">
            </el-table-column>
            <el-table-column prop="artists[0].name" label="歌手">
            </el-table-column>
            <el-table-column prop="album.name" label="专辑">
            </el-table-column>
            <el-table-column prop="duration" label="时长">
                <template v-slot="slot">
                        {{ slot.row.duration | formatTime}}
                    </template>
            </el-table-column>
            <el-table-column prop="" label="热度">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        name: 'vShowsongs',
        data() {
            return {
                searchSongsList: {},
                totalSongs: 0,
                songId: 0
            }
        },
        created() {
            this.fetchData()
            
        },
        methods: {
            async fetchData(){
                //this.axios.get(`http://localhost:3000/search?keywords=${this.$route.params.keywords}`)
                const {data: res} = await this.$http.get(`search?keywords=${this.$route.params.keywords}`)
               // console.log(res)
                if(res.code !== 200){
                    return this.$message.error("搜索失败")
                }
                this.searchSongsList = res.result.songs
                this.totalSongs = res.result.songCount
                //console.log(this.searchSongsList)
             
            },
            indexMethod(index){
                return index+1<10? '0'+(index+1): index+1
            },
            async playMusic(row){
               //console.log(row)
               this.songId = row.id
               //console.log(this.songId)
               
                const {data: res} = await this.$http.get(`song/url?id=${this.songId}`)
                console.log(res)
                console.log(res.data[0])
                console.log(res.data[0].url)
              
            }
        }
    }
</script>

<style scoped>
@import '../../assets/style/showsongs.less'
</style>