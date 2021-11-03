//自定义函数用于简化写法
//获取ID
function getId(id)
{
    return document.getElementById(id)
    //console.log('success')
}
//获取标签名
function getTagName(TagName)
{
    
    return document.getElementsByTagName(TagName)
}

//*获取系统日期
function getTime()
{
    var date=new Date()
    var year =date.getFullYear()
    var month=date.getMonth()+1
    var dates=date.getDate()
    var arr=['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
    var day=date.getDay()
    console.log('今天是：'+year+'年'+month+'月'+dates+'日'+arr[day])
    return '今天是：'+year+'年'+month+'月'+dates+'日'+arr[day]
}

//*伪数组转换为数组
function listToArray(likeArray){
    var ary=[]
    try{
        ary=Array.prototype.slice.call(likeArray)
    }catch(e){
        for(var i=0;i<likeArray.length;i++){
            ary[ary.length]=likeArray[i]
        }
    }
}