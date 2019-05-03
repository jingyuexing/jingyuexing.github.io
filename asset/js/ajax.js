/*
* @Author: Jingyuexing
* @Date:   2019-05-03 22:41:44
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2019-05-04 07:38:32
*/
const ajax=(function(){
    if(window.ActiveXObject){
        XHR = new ActiveXObject("Microsoft.XMLHTTP");
    }else if(window.XMLHttpRequest){
        XHR = new XMLHttpRequest();
    }
    function ajax(options){
        /**
         * 对options进行结构赋值
         * @type {String}
         */
        let {type='',url='',error=null,success=null,userName=null,pwd=null,async=true,timeout=500,data=null} = options;
        type = type.toUpperCase();
        let arry = [];
        if(data!=null&&url!=''){
            if((typeof data)=="object"){
                for(let i in data){
                    arry.push(i)
                }
            }
        }
        try {
            if(type=="GET"){
                if(success!=null){
                	XHR.setRequestHeader("Access-Control-Allow-Origin","*");
                    XHR.open(type,url, async,userName,pwd);
                    XHR.onload=success({
                        status:XHR.status,
                        state:XHR.readyState,
                        Text:XHR.statusText
                    });
                    XHR.send(null);
                }
            }else if(type=="POST"){
                XHR.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                XHR.open(type, url, async);
                XHR.onreadystatechange=function(){
                    if(XHR.readyState==XHR.DONE&&XHR.status==200){
                        if(success!=null){
                            success({
                                status:XHR.status,
                                state:XHR.readyState,
                                Text:XHR.statusText
                            });
                        }
                    }
                }
                let reURL = '';
                XHR.send(reURL)
            }
        } catch(e) {
            XHR.onerror=XHR.ontimeout=XHR.timeout=XHR.onabort=error({
                status:XHR.status,
                state:XHR.readyState,
                Text:XHR.statusText,
            });
        }
    }
    return ajax;
})(window);