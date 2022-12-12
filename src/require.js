/**
 * 查看文件名，文件扩展名，文件路径
 * ```json
 * { 
 * "fileName":"",    
 * "extensionName":"",    
 * "direcotry":""    
 * }
 * ```
 * @return  {JSON}  返回文件信息
 */
function fileInfo(fileName=''){
    var info ={fileName:"",extensionName:"",direcotry:"",fileType:""}
    for(let x in fileName){
        if(fileName[x]=="/"){
            var d = Number(x);
        }
        if(fileName[x]=="."){
            var k = Number(x);
        }
    }
    info.direcotry = fileName.slice(0,d+1);
    info.fileName = fileName.slice(d+2,k)
    info.extensionName=fileName.slice(k,fileName.length);
    info.fileType=fileName.slice(k+1,fileName.length)
    return info;
}
/**
 * 在网页中引入JS文件
 *```js
 * //你可以引入单一的文件
 * require("https://www.example.com/test.js")
 * //你同样可以添加多个文件
 * require(["https://www.example.com/test_v1.js","https://www.example.com/test_V2.js"])
 * //你还可以添加CSS文件
 * require("https://www.example.com/test.css")
 * //仅仅支持这两种文件类型
 *```
 * @param   {string|Array<string>}  url  你所要添加的网页链接
 *
 * @return  {boolean}      成功返回`true`失败返回`false` 如果引入重复会直接返回`false`
 */
function require(url = '') {
    function isArray(val) {
        return toString.call(val) === '[object Array]';
    }
    var AddTag,headUrlList,cacheList=[],b;
    var head = document.head
    if(url!=''&&fileInfo(url)["fileType"]=="js"){
        AddTag = document.createElement("script");
        AddTag.src=url;
        AddTag.async=true;
        headUrlList = document.querySelectorAll("head>script");
        headUrlList.forEach((ele)=>{
            cacheList.push(ele.src);
        });
    }else if(url!=''&&fileInfo(url)['fileType']=="css"){
        AddTag = document.createElement("link");
        AddTag.rel="stylesheet";
        AddTag.href=url
        headUrlList = document.querySelectorAll("head>link");
        headUrlList.forEach((ele)=>{
            cacheList.push(ele.href);
        });
    }else if(isArray(url)){
        url.forEach((ele)=>{
            require(ele);
        });
        return true;
    }else{
        return false;
    }
    if (cacheList.includes(url)) {
            return false;
    } else {
            head.appendChild(AddTag);
            return true;
    }
}