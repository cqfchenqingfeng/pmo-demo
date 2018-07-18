/* eslint-disable */
<template>
  <div class="Body">
       <div class="info" style="height: 100px">
         <div class="title">生产调度-项目清单</div>
         <div id="search" style="margin-top: 15px; width:400px;">
           <el-input type="search" v-model="search" placeholder="项目编号/商机编号/项目名称/项目经理" >
             <el-button slot="append" icon="el-icon-search"></el-button>
             <el-button type="primary" icon="el-icon-search">搜索</el-button>
           </el-input>
           <el-button type="primary" icon="el-icon-plus" class="btn" @click="addPage"></el-button>
         </div>

             <div class="tag">
                <el-tag
                        v-for="tag in tags"
                        :key="tag.name"
                        closable
                        :type="tag.type">
                        {{tag.name}}
                 </el-tag>
             </div>
        </div>
   <el-tabs v-model="activeName">
      <el-tab-pane label="基本信息" name="first">
         <div class="table">
            <el-table 
                border
                :data="tables"
                style="width: 100%"
                max-height=250>
            <!-- 地址 -->
                <el-table-column label="项目名称（别名）"   header-align="center" >
                   
                    <template slot-scope="scope" >    
                        <span class="col-cont" v-html="showDate(scope.row.projectName)" ></span>
                    </template>
                </el-table-column>
                <!-- 用户名 -->
                <el-table-column label="项目名称" header-align="center" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectNameIn)" ></span>
                    </template>
                </el-table-column>
                <!-- 地址 -->
                <el-table-column label="合同签订时间" header-align="center" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.startTime)" ></span>
                    </template>
                </el-table-column>
                <el-table-column label="采购方式" header-align="center" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.purchaseType)" ></span>
                    </template>
                </el-table-column>   
                <el-table-column label="工期要求" header-align="center" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.onlineTime)" ></span>
                    </template>
                </el-table-column>  
                 <el-table-column label="项目金额" header-align="center" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectPrice)" ></span>
                    </template>
                </el-table-column>   
                 <el-table-column label="产品节点" header-align="center" >
                    <template slot-scope="scope">
                        <el-button
                              type="text"
                              size="small">
                              编辑
                            </el-button>
                             <el-button
                              type="text"
                              size="small">
                              历史
                            </el-button>
                             <el-button
                              type="text"
                              size="small">
                              评分
                            </el-button>
                    </template>
                </el-table-column>     
            </el-table>
        </div>

      </el-tab-pane>
      <el-tab-pane label="客户端" name="second">

      </el-tab-pane>
      <el-tab-pane label="苏研侧" name="third"></el-tab-pane>
      <el-tab-pane label="状态" name="fourth"></el-tab-pane>
      <el-tab-pane label="进展" name="five"></el-tab-pane>
       <el-tab-pane label="工时投入" name=""></el-tab-pane>
        <el-tab-pane label="里程与回款" name="seven"></el-tab-pane>
        <el-tab-pane label="评分" name="eight">评分</el-tab-pane>
    </el-tabs>


  </div>
</template>
<script>
import axios from 'axios';
import mockdata from "@/mock/mock";
export default {
   name: 'Body',
        data() {
            return {
                search: '',
                activeName: 'first',
             tags: [
                { name: '项目类别：市场类', type: 'info' },
                { name: '涉及小组：白金组', type: 'info' },
                { name: '涉及小组：方案1组', type: 'info' },
                { name: '涉及小组：方案2组', type: 'info' },
                { name: '合同签订时间：2017-04-30至2018年-05-10', type: 'info' }
              ],
                tableData: []
            }
        },
        components: {},
        computed: {
        // 实时监听表格
            tables: function() {
                const search = this.search
                if (search) {
                    return this.tableData.filter(dataNews => {
                        return Object.keys(dataNews).some(key => {
                            return String(dataNews[key]).toLowerCase().indexOf(search) > -1
                        })
                    })
                }
                return this.tableData
            }
        },
        mounted: function(){

        axios.get('msg').then(res=>{

             this.tableData = res.data.articles;

            console.log(res.data.articles);

        })

    },
        methods: {
            // 筛选变色
            showDate(val) {
                val = val + '';
                if (val.indexOf(this.search) !== -1 && this.search !== '') {
                    return val.replace(this.search, '<font color="#409EFF">' + this.search + '</font>')
                } else {
                    return val
                }
            },
			addPage: function () {
				this.$router.push({ path: '/addpage'})
			}
        }
    }


</script>
<style scoped>
.info{
  position: relative
}
#search{
   position: absolute;
   height:auto;
   right:82px;
   top:0;



}
.title{
            width: 173px;
            /* height: 23px; */
            position: relative;
            top: 21px;
            left: 28px;
            font-size: 20px;
            font-family: "Microsoft YaHei";

}
.tag{
     position: absolute;
     left:40px;
}
 .el-tag + .el-tag {

    margin-left: 62px;
    margin-top:38px;
  }
 .search{
         position: relative;

 }
 .btn{
         position: absolute;
        top: -1px;
        left: 398px;
 }
 .col-cont{
    text-align:left !important;

 }
</style>
