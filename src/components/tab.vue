<template>
  <div class="checkbox">
    <div style="margin-top: 20px">
      <el-radio-group v-model="tabPosition" @change="changeButton">
         <el-radio-button label="all">全部</el-radio-button>
          <el-radio-button label="unfinished">未结项</el-radio-button>
          <el-radio-button label="finished">已结项</el-radio-button>
          <el-radio-button label="attention">我关注的</el-radio-button>
      </el-radio-group>
    </div>
  
          <div class="zidingyi" >
            <el-button type="text" icon="el-icon-setting" @click="customize" >自定义显示</el-button>
        </div>
  </div>
</template>
<script>
  export default {
    name: 'tab',
    data() {
      return {
           tabPosition: 'all',
           userDefinedVisible: false
      }
    },
    methods: {
         changeButton(val){
          this.tabPosition=val;
          this.$emit("changeButton",this.tabPosition)

         },
         customize(){
          this.userDefinedVisible = true;
          this.$emit("changeBool",this.userDefinedVisible)
      },
    }
  }
</script>
