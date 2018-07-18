<template>
<div class="addpage">
  <div class="title" style="color: #000; line-height: 50px; font-size: 15px">添加新项目</div>
  <div class="info" style="color: #66b1ff; line-height: 50px; font-size: 20px; margin-left: 5%">项目基本信息</div>
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-row type="flex">
    <el-col :span="10">
  <el-form-item label="项目编号/商品编号：" prop="proID">
    <el-input v-model="ruleForm.proID"></el-input>
  </el-form-item>
  <el-form-item label="合同签订时间：">
        <el-date-picker align="left" type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
  </el-form-item>
  <el-form-item label="工期要求：">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
  </el-form-item>
  <el-form-item label="项目通称(别名)：" prop="comname">
    <el-input v-model="ruleForm.comname"></el-input>
  </el-form-item>
  <el-form-item label="项目启动会时间：">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
  </el-form-item>
  <el-form-item label="项目分类：" prop="classify">
    <el-input v-model="ruleForm.classify"></el-input>
  </el-form-item>
  <el-form-item label="项目金额：" prop="money">
    <el-input v-model="ruleForm.money"></el-input>
  </el-form-item>
    </el-col>
 <el-col :span="10">
  <el-form-item label="合同编号：" prop="conID">
    <el-input v-model="ruleForm.conID"></el-input>
  </el-form-item>
  <el-form-item label="采购方式：" prop="common">
    <el-select v-model="ruleForm.purchase" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="项目名称：" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="项目类型：" prop="common">
    <el-select v-model="ruleForm.class" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="项目级别：" prop="common">
    <el-select v-model="ruleForm.level" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
</el-col>
</el-row>
<div>
    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
</div>
</el-form>
</div>
</template>

<script>
  export default {
      name:'addpage',
    data() {
      return {
        ruleForm: {
          proID: '',
          comname: '',
          classify: '',
          money: '',
          conID: '',
          common: '',
          name: '',
          date1: '',
          date2: ''
        },
        rules: {
          proID: [
            { message: '', trigger: 'blur'}
          ],
          comname: [
            { required: true, message: '某某项目', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          classify: [
            { message: '未知', trigger: 'blur' }
          ],
          money: [
              { message: '', trigger: 'blur'}
          ],
           proID: [
            { message: '', trigger: 'blur'}
          ],
          name: [
            { message: '某某公司', trigger: 'blur'}
          ],
          commom: [
            { message: '未知', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
  console.log("sfdsa");
</script>

<style>
 .addpage {
   position: relative;
 }
 
 .el-row {
    margin-bottom: 10px;
  
  }
  .el-col {
    border-radius: 4px;
  }
  .el-col-10 {
    margin-left: 5%;
  }
  .el-form-item__label {
    width: 150px !important;
  }
  .el-form-item__content {
    margin-left: 150px !important;
  }

</style>
