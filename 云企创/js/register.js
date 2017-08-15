/**
 * Created by user on 2017/4/20.
 */

// 下一步跳转和提交
var register1=document.getElementById("register1");
var register2=document.getElementById("register2");
var buttons=document.getElementsByTagName("button");
buttons[0].onclick=function () {
    register1.style.display="none";
    register2.style.display="block";
};
var submit=document.getElementById("submit");
var complete=document.getElementById("complete")
submit.onclick=function () {
    register2.style.display="none";
    complete.style.display="block"
};

// 下一步按钮变色
var next=document.getElementById("next");
setTimeout(function(){
    next.setAttribute('class','blue_g')
},5000);

