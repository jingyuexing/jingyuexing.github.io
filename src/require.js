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
 * 引入JS文件
 *
 * @param   {String}  url  文件链接
 *
 * @return  {Boolean}       如果有重复则不引入并返回`false`否则返回`true`
 */
function require(url=''){
    function isArray(val) {
        return toString.call(val) === '[object Array]';
    }
    if(url!=''&&fileInfo(url)["fileType"]=="js"){
        var head = document.head;
        var scriptTag = document.createElement("script");
        scriptTag.async=true;
        scriptTag.src=url;
        var scriptList = document.querySelectorAll("head>script");
        var srcList=[];
        for(let m =0;m<scriptList.length;m++){
            srcList.push(scriptList[m].src);
        }
        if(srcList.includes(scriptTag.src)){
            return false;
        }else{
            head.appendChild(scriptTag);
            return true;
        }
    }else if(isArray(url)){
        for(var x=0;x<url.length;x++){
            require(url[x]);
        }
    }
    return false;
}