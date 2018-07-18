import Mock from 'mockjs'



const Random = Mock.Random;

export default Mock.mock('msg',getData);

function getData(){

  let articles = [];

    for (let i = 0; i < 10; i++) {

        let newArticleObject = {

            // mbnatitle: Random.csentence(5, 30), //  Random.csentence( min, max 

            // author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名

            // date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            projectName: "苏小研"+Random.string('number', 3)+"号项目", 
            projectNameIn:"mock"+Random.string('number', 3)+"号项目",
            startTime: Random.date() ,
            purchaseType:"单一采购",
            onlineTime:Random.date(),
            projectPrice:"$"+Random.string('number', 5)   
        }

        articles.push(newArticleObject)

    }

    return {

        articles: articles

    }

}