import Mock from 'mockjs'
const Random = Mock.Random;
let now = new Date(); 
export default Mock.mock('/baidu',getData);

function getData(){

  let articles = [];

    for (let i = 0; i < 200; i++) {

        articles.push(Mock.mock({
            'id': Mock.Random.guid(),
            "areaProjectManager":Mock.Random.cname(),
            "assistDepartment":"",
            "commerceStatus|1":["已立项","未结项","已结项","已运行"],
            "confirmedProgress":"100",
            "contractNo|1":["苏小研[2015]","移SY合同[2016]销-003号-订单002"],
            "countermeasures":"无",
            "currentProgress":"ok",
            "customerDepartmentName":"信息技术中心",
            "customerName|1":["中国移动","中国联通","天翼","中国银行"],
            "customerPrimaryContact":Mock.Random.cname(),
            "customerStaffName":Mock.Random.cname(),
            "developManager":Mock.Random.cname(),
            "developStatus|1":["已立项","未开始","已交付","已运行"],
            "implementBases":"POC",
            "implementManager":Mock.Random.cname(),
            "implementStatus|1":["已立项","未开始","已交付","已运行"],
            "involvedRegion|1":["已立项","未开始","已交付","已运行"],
            "isDelete":"2",
            "isOverdue":"",
            "lastMonthWorkTime":" ",
            "leadDepartMent":"大数据产品部",
            "lever2Manager":Mock.Random.cname(),
            "lever3Manager":Mock.Random.cname(),
            "mailstoneName":"",
            "moneyScore":10,
            "nodeCount":"0",
            "onlineStatus|1":["已立项","未开始","已交付","已运行"],
            "onlineTime":Mock.Random.date(),
            "operateStatus":"自运维",
            "planFinishedTime":Mock.Random.date(),
            "pressure|1":["高","中","低"],
            "process":"100",
            "progress":"100",
            "projectAlias":now.getFullYear().toString()+(now.getMonth()+1).toString()+now.getDate().toString()+i,
            "projectClassify|1":["平台类","应用类","运营类","资询类","分析类"],
            "projectId":"R"+now.getFullYear().toString()+(now.getMonth()+1).toString()+now.getDate().toString()+i,
            "projectLevel|1":["重大","重点","一般"],
            "projectManagerId":Mock.Random.cname(),
            "projectName":"江苏移动2015年Spark技术支持项目",
            "projectNameIn":"江苏移动2015年Spark技术支持项目",
            "projectPeople":"刘月,潘宇轩,王宇",
            "projectPrice":"2459600.36",
            "projectType":"市场类（内部）",
            "purchaseType|1":["单一来源","公开招标","比选","框架协议"],
            "recentPlan":"",
            "regionalSolManager":Mock.Random.cname(),
            "relatedId":"533",
            "responseMeasures":"",
            "risk|1":["高","中","极高","危险"],
            "saleManager":Mock.Random.cname(),
            "serviceManager":Mock.Random.cname(),
            "signContractTime":Mock.Random.date(),
            "startTime":Mock.Random.date(),
            "teams":Mock.Random.cname(),
            "testManager":Mock.Random.cname(),
            "totalScore|1":[70,80,90],
            "totalWorkTime":"",
            "updateTime":now.getFullYear().toString()+(now.getMonth()+1).toString()+now.getDate().toString()+i,
            "isA":true,
            "value2|1":["关注","取关"],
            "totalproduct":"总产品数:<span style='color:red'>99</span>",
            "totalspot":"总节点数:<span style='color:red'>99</span>",
            "lastgongshi":"上月工时投入:<span style='color:red'>99</span>",
            "totalgongshi":"总工时投入:<span style='color:red'>99</span>"
            

          }))

    }

    return {

        articles: articles

    }

}