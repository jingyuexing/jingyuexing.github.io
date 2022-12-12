/*
* @Author: Admin
* @Date:   2019-09-29 19:36:22
* @Last Modified by:   jingyuexing
* @Last Modified time: 2020-08-07 01:15:04
*/
console.log("开始了");

/**
 * 获取屏幕的高度
 * @return {number} 屏幕的高度
 */
function getH() {
  return window.screen.availHeight;
}
/**
 * JSON-map 对对象进行深度遍历操作
 * @param {object}   object   需要遍历的对象
 */
function Jmap(object) {
  if (typeof object != "object") return object;
  let item = [];
  Object.keys(object).map(i => {
    let val = Jmap(object[i]);
    if (typeof val == "object") val.map(ele => {
      item.push({
        key: i + "." + ele.key,
        value: ele.value
      });
    });
    else item.push({
      key: i,
      value: val
    });
  });
  return item;
}
/**
 * 给元素添加属性
 * @param {Element|NodeList} ele    元素或者节点列表
 * @param {Object} config JSON数据
 */
function addAttr(ele, config) {
  Jmap(config, function (index, el) {
    ele.setAttribute(`${index}`, el);
  });
}


function hasAttr(obj, attr) {
  var bool = `${attr}` in obj;
  return bool;
}


/**
 * 对字符进行大写转换
 * @param {String} args 需要转换的字符
 */
function UpperCase(args) {
  if ((typeof args) == "string") {
    return args.toUpperCase();
  } else {
    throw Error("arguments is not String,So have this Error");
  }
}
/**
 * 添加Css样式
 * @param {Element|NodeList} el     目标元素或者元素列表
 * @param {Object} config Css样式的Json数据
 */
function addCss(el, config) {
  var key = Object.keys;
  var cssList = key(config);
  if (hasAttr(el, length)) {
    for (let n = 0; n < el.length; n++) {
      addCss(el[n], config);
    }
  } else {
    for (let i = 0; i < cssList.length; i++) {
      var index = cssList[i].indexOf("-");
      if (index != -1) {
        cssList[i].replace(cssList[i][index] + cssList[i][index + 1], "" + UpperCase(cssList[i][index + 1]));
      }
      el.style[cssList[i]] = config[cssList[i]];
    }
  }
}

window.onload = function () {
  // var EleContent = document.getElementById("contentv");
  let canvas = document.getElementsByTagName("canvas");
  console.log((getH() - 40) + "px");
  var screenHeight = getH() - 40;
};
