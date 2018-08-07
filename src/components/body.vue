/* eslint-disable */
<template>
  <div class="h-content">
    <div class="h-content-header">
      <div class="h-content-header-left">项目管理-项目列表</div>
      <div class="h-content-header-right">
       <el-input type="search" v-model="search" placeholder="搜索 关键词" >
             <el-button slot="append" icon="el-icon-search"></el-button>  
           </el-input>
      </div>
    </div>
<tab v-on:changeButton="cButton" @changeBool="changeBool"></tab>
<filteredBox :tagArr='tags'  @deleteTag="deleteTagFilter"></filteredBox>
  <div class="h-content-tab">

      <template>
          <el-table 
          
                border
                class="theight"
                stripe
                @filter-change="handleFilterChange"
                @sort-change="handleSortchange"
                ref="mytable"
                :data="tables.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                style="width: 100%"
                :default-sort = "{prop: 'projectAlias', order: 'descending'}"
                max-height=450>
            <!-- 地址 -->
                <el-table-column label="项目通称"  prop="projectAlias"  header-align="center"  fixed  width="200" :render-header="timeTelement1" >
                   
                    <template slot-scope="scope" >    
                        <span class="col-cont" v-html="showDate(scope.row.projectAlias)" ></span>
                    </template>
                </el-table-column>
                <!-- 用户名 -->
                <el-table-column label="商机编号/项目编号" prop="projectId" header-align="center" width="150" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectId)" ></span>
                    </template>
                </el-table-column>
                <!-- 地址 -->
                <el-table-column label="合同编号"  prop="contractNo" header-align="center" width="300">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.contractNo)" ></span>
                    </template>
                </el-table-column>
                 <el-table-column label="合同签订时间"  prop="signContractTime" header-align="center" width="250" :render-header="timeTelement" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.signContractTime)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="采购方式" prop="purchaseType" header-align="center" width="120"
                :filters="[{ text: '公开招标', value: '公开招标' }, { text: '单一来源', value: '单一来源' }, { text: '比选', value: '比选' }, { text: '框架协议', value: '框架协议' }]"
                :filter-method="filterHandler"
                column-key="abc"
                
               
                >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.purchaseType)" ></span>
                    </template>
                </el-table-column>   
                <el-table-column label="工期要求" prop="onlineTime"  header-align="center"  width="200">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.onlineTime)" ></span>
                    </template>
                </el-table-column>  

                <el-table-column label="项目名称"    prop="projectName" header-align="center"  width="300">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectName)" ></span>
                    </template>
                </el-table-column>  
                <el-table-column label="项目类型" prop="projectType" header-align="center"  width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectType)" ></span>
                    </template>
                </el-table-column>  

                 <el-table-column label="项目启动时间"   prop="startTime" header-align="center" width="200" 
                    :render-header="timeTelement"
                    :filter-method="filterHandler"
                 
                 >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.startTime)" ></span>
                    </template>
                </el-table-column>  
                <el-table-column label="项目金额"  prop="projectPrice" header-align="center" width="120" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectPrice)" ></span>
                    </template>
                </el-table-column>  

                 <el-table-column label="项目级别" prop="projectLevel"  header-align="center" width="120"
                 :filters="[{ text: '重大', value: '重大' }, { text: '重点', value: '重点' }, { text: '一般', value: '一般' }]"
                :filter-method="filterHandler" 

                 >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectLevel)" ></span>
                    </template>
                </el-table-column> 
                
                <el-table-column label="项目分类" prop="projectClassify" header-align="center" width="120"
                :filters="[{'text':'平台类',value:'平台类'},{'text':'应用类',value:'应用类'},{'text':'运营类',value:'运营类'},{'text':'资询类',value:'资询类'},{'text':'分析类',value:'分析类'}]"
                column-key="projectClassify"
                 :filter-method="filterHandler"

                >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectClassify)" ></span>
                    </template>
                </el-table-column>  

                 <el-table-column label="公司名称（客户）" prop="customerName" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.customerName)" ></span>
                    </template>
                </el-table-column> 

                 <el-table-column label="部门名称（客户）" prop="customerDepartmentName" header-align="center" width="160" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.customerDepartmentName)" ></span>
                    </template>
                </el-table-column>  

                 <el-table-column label="二级经理（客户）" prop="lever2Manager" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.lever2Manager)" ></span>
                    </template>
                </el-table-column>  

                <el-table-column label="三级经理（客户）"  prop="lever3Manager" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.lever3Manager)" ></span>
                    </template>
                </el-table-column>  

                <el-table-column label="员工（客户）"  prop="customerStaffName" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.customerStaffName)" ></span>
                    </template>
                </el-table-column>  

                <el-table-column label="主要联系人"  prop="customerPrimaryContact" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.customerPrimaryContact)" ></span>
                    </template>
                </el-table-column>  

                <el-table-column label="涉及小组"  prop="teams" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.teams)" ></span>
                    </template>
                </el-table-column> 

                <el-table-column label="涉及区域" prop="involvedRegion" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.involvedRegion)" ></span>
                    </template>
                </el-table-column> 
                
                <el-table-column label="销售经理"  prop="saleManager" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.saleManager)" ></span>
                    </template>
                </el-table-column> 

                 <el-table-column label="区域大项目经理" prop="areaProjectManager" header-align="center" width="160" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.areaProjectManager)" ></span>
                    </template>
                </el-table-column> 
                <el-table-column label="区域解决方案经理" prop="regionalSolManager" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.regionalSolManager)" ></span>
                    </template>
                </el-table-column> 
                <el-table-column label="产品部项目经理" prop="projectManagerId" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectManagerId)" ></span>
                    </template>
                </el-table-column> 

                 <el-table-column label="实施经理" prop="implementManager" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.implementManager)" ></span>
                    </template>
                </el-table-column> 

                <el-table-column label="研发经理" prop="developManager" header-align="center" width="120" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.developManager)" ></span>
                    </template>
                </el-table-column> 

                 <el-table-column label="测试经理"  prop="testManager" header-align="center" width="120" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.testManager)" ></span>
                    </template>
                </el-table-column> 

                 <el-table-column label="服务经理"  prop="serviceManager" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.serviceManager)" ></span>
                    </template>
                </el-table-column> 

                <el-table-column label="商务状态" prop="commerceStatus" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.commerceStatus)" ></span>
                    </template>
                </el-table-column> 

                 <el-table-column label="实施依据" prop="implementBases" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.implementBases)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="实施状态" prop="implementStatus" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.implementStatus)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="研发状态"   prop="developStatus" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.developStatus)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="上线状态"   prop="onlineStatus" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.onlineStatus)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="交维状态" prop="operateStatus" header-align="center" width="120" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.operateStatus)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="当前进展"  prop="currentProgress" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.currentProgress)" ></span>
                    </template>
                </el-table-column>
                <el-table-column label="近期计划" prop="recentPlan" header-align="center"  width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.recentPlan)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="进度(%) 0~100" prop="process" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.progress)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="当前风险度"  prop="risk" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.pressure)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="当前风险及应对措施"  prop="responseMeasures" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.countermeasures)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="上月工时投入" prop="lastMonthWorkTime" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.lastMonthWorkTime)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="总工时投入" prop="totalWorkTime" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.totalWorkTime)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="下一里程碑" prop="mailstoneName" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectPrice)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="计划完成时间"  prop="planFinishedTime" header-align="center" width="120" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.planFinishedTime)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="里程碑是否逾期" prop="isOverdue" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.isOverdue)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="已回款比例" prop="confirmedProgress" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.confirmedProgress)" ></span>
                    </template>
                </el-table-column>
                 <el-table-column label="金融得分"  prop="moneyScore" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.moneyScore)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="战略意义得分"  prop=""  header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectPrice)" ></span>
                    </template>
                </el-table-column>
                
                <el-table-column label="产品匹配度得分"  prop=""  header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectPrice)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="总分" prop="totalScore" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.totalScore)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="产品节点"  header-align="center" width="280" align="center">
                    <template slot-scope="scope">
                         <span class="col-cont" v-html="showDate(scope.row.totalproduct)+'&nbsp'"></span>
                         <span class="col-cont" v-html="showDate(scope.row.totalspot)+'&nbsp'"></span>
                        <el-button
                              type="text"
                              size="small"  style="font-size:14px">
                              查看详情
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column label="工时投入" header-align="center" width="320" align="center">
                    <template slot-scope="scope">
                         <span class="col-cont" v-html="showDate(scope.row.lastgongshi)+'&nbsp'"></span>
                         <span class="col-cont" v-html="showDate(scope.row.totalgongshi)+'&nbsp'"></span>
                        <el-button
                              type="text"
                              size="small"  style="font-size:14px">
                              查看详情
                        </el-button>
                    </template>
                </el-table-column>
                     
                 <el-table-column label="操作" header-align="center"  fixed="right" width="150">
                    <template slot-scope="scope">
                    <el-button
                              type="text"
                              size="small"  @click=info(scope.row)>
                              详情
                    </el-button>
                    <el-button
                              type="text"
                              size="small"  @click="scoring(scope.$index, scope.row)">
                             评分
                    </el-button>
                    <el-button
                        type="text"
                        size="small" @click="showToggle(scope.$index,scope.row)">
                        {{scope.row.value2}}
                   </el-button>
                    </template>
                </el-table-column>  
   
  
</el-table>
<el-dialog
  title="PMO管理详细信息"
  :visible.sync="centerDialogVisible"
  width="70%"
  center>
   <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="项目通称" >
    <el-input v-model="form.projectAlias" disabled=true></el-input>
  </el-form-item>
   <el-form-item label="商机编号/项目编号" >
    <el-input v-model="form.projectId" disabled=true></el-input>
  </el-form-item>
   <el-form-item label="合同编号" >
    <el-input v-model="form.contractNo" disabled=true></el-input>
  </el-form-item>
   <el-form-item label="合同签订时间" >
    <el-input v-model="form.signContractTime" disabled=true></el-input>
  </el-form-item>
   <el-form-item label="采购方式" >
    <el-input v-model="form.purchaseType" disabled=true></el-input>
  </el-form-item>
   <el-form-item label="工期要求" >
    <el-input v-model="form.onlineTime" disabled=true></el-input>
  </el-form-item>
   
</el-form> 
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title=" 评分（大数据Hcontrol运维平台）"
  :visible.sync="dialogVisible"
  width="50%"
  :model="sizeForm" 
  :before-close="handleClose">
   <el-form ref="form" :model="form" label-width="80px">
 
  <el-form-item label="战略意义">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="好" value="shanghai"></el-option>
      <el-option label="中" value="beijing"></el-option>
      <el-option label="差" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="产品匹配度">
    <el-select v-model="form.region" placeholder="请选择活动区域">
       <el-option label="好" value="shanghai"></el-option>
      <el-option label="中" value="beijing"></el-option>
      <el-option label="差" value="beijing"></el-option>
    </el-select>
  </el-form-item>
</el-form>
<span slot="footer" class="dialog-footer">
    <div style="float:left">总分<span style="color:red">99</span></div>
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
      </template>
<score v-if="scoreVisible" @closeScore="closeScore" :moneyScore="moneyScore" :id="id"></score>
<UserDefined v-if="userDefinedVisible" @changeUserStatus="changeStatus" @changeUser="changeUser" :defaultKeys="['projectAlias','contractNo','signContractTime','purchaseType']"></UserDefined>
<pagination class="pagination" ref="myPagination" v-on:child-say="listenToMyBoy" v-on:child-say2="listenToMyBoy2" :totalNum="tables.length"></pagination>
    </div>
  </div>
   
</template>
<script>
import { getListInfo, getTestInfo, searchList, setAttation } from "@/api/api";
import util from "@/utils/util.js";
import filteredBox from "@/components/filteredBox.vue";
import tab from "@/components/tab.vue";
import pagination from "@/components/pagination.vue";
import UserDefined from "@/components/userDefined.vue";
import score from "@/components/scoring.vue";
import moment from "moment";
import axios from "axios";
import mockdata from "@/mock/mock";
const cityOptions = ["全部", "未结项", "已结项", "我关注的"];
export default {
  data() {
    return {
      tempData: [],
      tagVisible: true,
      search: "",
      tabPosition: "all",
      activeName: "first",
      checkboxGroup2: ["全部"],
      cities: cityOptions,
      tags: [],
      tableData: [],
      scoreVisible: false, //评分弹窗
      value1: "",
      total: 0, //默认数据总数
      pagesize: 10, //每页的数据条数
      currentPage: 1, //默认开始页面
      btnText: "关注",
      isA: false,
      radio: "",
      dialogVisible: false,
      value2: "关注",
      filters: "",
      columnkey: "",
      result: {},
      centerDialogVisible: false,
      orginData: [],
      moneyScore: "", //评分
      userDefinedVisible: false,
      form: {
        projectAlias: "",
        projectId: "",
        contractNo: "",
        signContractTime: "",
        purchaseType: "",
        onlineTime: ""
      },
      sizeForm: {
        region: ""
      }, //存放数据，不能动
      pickerOptions2: {
        onPick: ({ maxDate, minDate }) => {
          let _maxDate = moment(maxDate).format("YYYY-MM-DD");
          let _minDate = moment(minDate).format("YYYY-MM-DD");
          var result = [];
          if (maxDate && minDate) {
            this.tableData.forEach(col => {
              if (
                col[this.column["property"]] >=
                  moment(minDate).format("YYYY-MM-DD") &&
                col[this.column["property"]] <=
                  moment(maxDate).format("YYYY-MM-DD")
              ) {
                result.push(col);
              }
            });
            this.$refs.mytable.columns.forEach(column => {
              if (column["property"] == this.column["property"]) {
                column.filteredValue = ["10001", _minDate, _maxDate];
                // console.log(column);
              }
            });
            this.handleFilterChange();
          }
        }
      }
    };
  },
  components: {
    filteredBox,
    tab,
    pagination,
    UserDefined,
    score
  },
  computed: {
    // 实时监听表格
    tables: function() {
      this.tempData = this.tableData;
      const search = this.search;
      if (search) {
        return this.tempData.filter(dataNews => {
          return Object.keys(dataNews).some(key => {
            return (
              String(dataNews[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.tableData;
    }
  },
  mounted: function() {
    axios.get("/baidu").then(res => {
      this.tableData = res.data.articles;
      this.listData = res.data.articles;
      this.orginData = res.data.articles;
    });
  },

  methods: {
    handleSortchange({ column, prop, order }) {
      // console.log(order);
      // console.log(this.$refs.mytable.store.states.columns);
      // this.listLoading=true;
      // setTimeout(() => {
      this.$refs.mytable.store.states.columns.forEach(col => {
        col.order = "";
        if (col.property == prop) {
          col.order = order;
        }
      });
      let result = [].concat(JSON.parse(JSON.stringify(this.tableData)));
      if (order == "ascending") {
        let tmp = "";
        for (var i = 0; i < result.length - 1; i++) {
          for (var j = result.length - 1; j > i; j--) {
            if (result[j][prop] < result[j - 1][prop]) {
              tmp = result[j];
              result[j] = result[j - 1];
              result[j - 1] = tmp;
            }
          }
        }
        this.tableData = [].concat(JSON.parse(JSON.stringify(result)));
      } else if (order == "descending") {
        let tmp = "";
        for (var i = 0; i < result.length - 1; i++) {
          for (var j = result.length - 1; j > i; j--) {
            if (result[j][prop] > result[j - 1][prop]) {
              tmp = result[j];
              result[j] = result[j - 1];
              result[j - 1] = tmp;
            }
          }
        }
        this.tableData = [].concat(JSON.parse(JSON.stringify(result)));
      }
      //  this.listLoading=false;
      this.currentPage = 1;
      // }, 1000);
    },
    scoring(index, row) {
      this.scoreVisible = true;
      this.moneyScore = row.moneyScore;
      this.id = row.id;
    },
    changeStatus() {
      this.userDefinedVisible = false;
    },
    changeUser(arr) {
      console.log(arr);
    },
    handleFilterChange(filters) {
      this.tags = [];
      this.$refs.mytable.columns.forEach(column => {
        if (column.filteredValue && column.filteredValue.length) {
          if (column.filteredValue[0] == "10001") {
            this.tags.push({
              name:
                column.label +
                "：" +
                column.filteredValue[1] +
                "至" +
                column.filteredValue[2],
              prop: column.property,
              value: "10001",
              minDate: column.filteredValue[1],
              maxDate: column.filteredValue[2]
            });
          } else {
            column.filteredValue.forEach(ret => {
              this.tags.push({
                name: column.label + "：" + ret,
                prop: column.property,
                value: ret
              });
            });
          }
        }
      });
      this.filterSelect();
    },
    filterSelect() {
      let data = [].concat(JSON.parse(JSON.stringify(this.listData)));
      let result = [];
      if (this.tags.length > 0) {
        let key = this.tags[0]["prop"];
        for (var i = 0; i < this.tags.length; i++) {
          if (this.tags[i]["prop"] != key) {
            key = this.tags[i]["prop"];
            data = [].concat(JSON.parse(JSON.stringify(result)));
            result = [];
          }
          if (this.tags[i]["value"] == "10001") {
            data.forEach(row => {
              if (
                row[this.tags[i]["prop"]] >= this.tags[i]["minDate"] &&
                row[this.tags[i]["prop"]] <= this.tags[i]["maxDate"]
              ) {
                result.push(row);
              }
            });
          } else {
            data.forEach(row => {
              if (row[this.tags[i]["prop"]] == this.tags[i]["value"]) {
                result.push(row);
              }
            });
          }
        }
        this.tableData = [].concat(JSON.parse(JSON.stringify(result)));
      } else {
        this.tableData = [].concat(JSON.parse(JSON.stringify(this.listData)));
      }
      this.$refs.mytable.store.states.columns.forEach(col => {
        col.order = "";
      });
    },
    filterHandler(value, row, column) {
      return true;
    },

    // 筛选变色
    showDate(val) {
      val = val + "";
      if (val.indexOf(this.search) !== -1 && this.search !== "") {
        return val.replace(
          this.search,
          '<font color="#409EFF">' + this.search + "</font>"
        );
      } else {
        return val;
      }
    },
    changeBool(val) {
      // console.log(val);
      this.userDefinedVisible = val;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    addPage: function() {
      this.$router.push({ path: "/addpage" });
    },

    closeScore() {
      this.scoreVisible = false;
    },
    deleteTagFilter(newTagsArr) {
      this.AutofilterHandler();
    },
    listenToMyBoy(currentSect) {
      let self = this;
      self.currentPage = currentSect; //页码
    },
    listenToMyBoy2(currentSect) {
      let self = this;
      self.pagesize = currentSect; //一页显示多少条
    },
    dotable(tags) {
      let self = this;
      //   console.log(tags);
    },
    timefilter(column) {
      this.column = column;
    },
    timeTelement(h, { column, $index }) {
      return (
        <div style="height：0 " class="time">
          <p style="float:left">{column.label}</p>
          <div class="time_icon">
            <span class="caret-wrapper">
              <i
                class="sort-caret ascending"
                on-click={() =>
                  this.handleSortchange({
                    column: column,
                    prop: column.property,
                    order: "ascending"
                  })
                }
              />
              <i
                class="sort-caret descending"
                on-click={() =>
                  this.handleSortchange({
                    column: column,
                    prop: column.property,
                    order: "descending"
                  })
                }
              />
            </span>
            <span
              class="el-table__column-filter-trigger"
              on-click={() => this.timefilter(column)}
            >
              <el-date-picker
                type="daterange"
                unlink-panels={true}
                picker-options={this.pickerOptions2}
                style="width:1px;border:none;"
              />
            </span>
          </div>
        </div>
      );
    },
    timeTelement1(h, { column, $index }) {
      return (
        <div style="height：0 " class="time">
          <p style="float:left">{column.label}</p>
          <div class="time_icon">
            <span class="caret-wrapper">
              <i
                class="sort-caret ascending"
                on-click={() =>
                  this.handleSortchange({
                    column: column,
                    prop: column.property,
                    order: "ascending"
                  })
                }
              />
              <i
                class="sort-caret descending"
                on-click={() =>
                  this.handleSortchange({
                    column: column,
                    prop: column.property,
                    order: "descending"
                  })
                }
              />
            </span>
            <span
              class="el-table__column-filter-trigger"
              on-click={() => this.timefilter(column)}
            />
          </div>
        </div>
      );
    },
    AutofilterHandler() {
      let result = [];
      // this.$refs.mytable.clearFilter();
      // console.log(this.$refs.mytable.columns);

      this.$refs.mytable.columns.forEach(column => {
        column.filteredValue = [];
        this.tags.forEach(tag => {
          if (column.property == tag.prop) {
            if (tag.value == "10001") {
              column.filteredValue.push("10001");
              column.filteredValue.push(tag.minDate);
              column.filteredValue.push(tag.maxDate);
            } else {
              column.filteredValue.push(tag.value);
            }
          }
        });
      });
      this.filterSelect();
    },
    showToggle: function(index, val) {
      //   console.log(val.value2);
      val.isA = !val.isA;
      val.value2 = val.isA ? "关注" : "取关";
      this.value2 = val.value2;
      if (this.value2 == "关注") {
        this.tableData.splice(index, 1);
      }
    },
    info(val) {
      this.centerDialogVisible = true;
      this.form.projectAlias = val.projectAlias;
      this.form.projectId = val.projectId;
      this.form.contractNo = val.contractNo;
      this.form.signContractTime = val.signContractTime;
      this.form.purchaseType = val.purchaseType;
      this.form.onlineTime = val.onlineTime;
    },
    getinfo() {
      this.listLoading = true;
      this.calculate.pageNumber = 0; //页码
      getListInfo().then(res => {
        this.tableData = res.data.data;
        this.listData = res.data.data;
        this.orginData = res.data.data;

        if (this.orginData.length > 0) {
          for (let key in this.orginData[0]) {
            util.tableHearShow[key] = true;
            this.tableSelect.push(key);
          }
          this.ifShow = Object.assign({}, util.tableHearShow);
        }
        // console.log(this.tableData);
        // this.pageBegin();
        // console.log(res);
        this.listLoading = false;
      });
    },
    score(val) {
      this.dialogVisible = true;
    },
    cButton(val) {
      this.tabPosition = val;
      // console.log(val);
    },
    addPage: function() {
      this.$router.push({ path: "/addpage" });
    },
    handle(filters) {
      //   console.log(filters);
    }
  },
  watch: {
    tabPosition: function() {
      if (this.tabPosition == "unfinished") {
        // this.listLoading=true;
        // setTimeout(() => {
        let result = [];
        this.orginData.forEach(row => {
          if (row["commerceStatus"] != "已结项") {
            result.push(row);
          }
        });
        this.tableData = [].concat(JSON.parse(JSON.stringify(result)));
        this.listData = [].concat(JSON.parse(JSON.stringify(result)));
        this.tags = [];
        this.$refs.mytable.columns.forEach(column => {
          column.filteredValue = [];
          column.order = "";
        });
      } else if (this.tabPosition == "finished") {
        let result = [];
        this.orginData.forEach(row => {
          if (row["commerceStatus"] == "已结项") {
            result.push(row);
          }
        });
        this.tableData = [].concat(JSON.parse(JSON.stringify(result)));
        this.listData = [].concat(JSON.parse(JSON.stringify(result)));
        this.tags = [];
        this.$refs.mytable.columns.forEach(column => {
          column.filteredValue = [];
          column.order = "";
        });
      } else if (this.tabPosition == "attention") {
        let result = [];
        this.tableData.forEach(row => {
          if (row["value2"] == "取关") {
            result.push(row);
          }
        });

        this.tableData = [].concat(JSON.parse(JSON.stringify(result)));
        console.log(this.tableData);
        this.listData = [].concat(JSON.parse(JSON.stringify(result)));
        this.currentPage = 1;
        //  this.$refs.myPagination.currentPage=1;
        this.tags = [];
        this.$refs.mytable.columns.forEach(column => {
          column.filteredValue = [];
          column.order = "";
        });
      } else {
        this.tableData = [].concat(JSON.parse(JSON.stringify(this.orginData)));
        this.listData = [].concat(JSON.parse(JSON.stringify(this.orginData)));
        this.tags = [];
        this.$refs.mytable.columns.forEach(column => {
          column.filteredValue = [];
          column.order = "";
        });

        //   this.listLoading=false;
        // }, 1000);
      }
    }
  }
};
</script>
<style lang="scss">
.el-dialog__header {
  border-bottom: 1px solid #e5e5e5;
}
.h-content {
  padding: 0px 50px 50px 50px;
  margin-top: 20px;
  min-width: 1366px;
}
.h-content-header {
  width: 100%;
  height: 40px;
  background-color: rgb(248, 248, 248);
}
.h-content-header-left {
  float: left;
  height: 40px;
  font-size: 20px;
  font-family: "Microsoft YaHei";
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}

.h-content-header-right {
  float: right;
}
.h-input {
  width: auto;
  /*border-radius: 0px*/
}
.iap-header {
  width: 1466px;
}
.iap-footer {
  width: 1466px;
}
.checkbox {
  position: relative;
}
.zidingyi {
  position: absolute;
  top: -5px;
  right: 54px;
  width: 40px;
  height: auto;
}
div.zidingyi .el-button {
  color: rgb(153, 153, 153) !important;
}
.el-table .caret-wrapper {
  display: none;
}
</style>
<style>
.time .time_icon {
  margin-top: 12px !important;
}
.time {
  padding-top: 11px;
}
.cell > .caret-wrapper {
  visibility: hidden !important;
}
.theight th {
  padding: 0px !important;
  font-size: 15px;
}
.el-pager li {
  font-size: 18px;
  color: "red";
}
</style>


