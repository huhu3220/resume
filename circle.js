window.onload = function () {
ps();
ai();
lr();
sai();
}
function ps(){
var red = 80, total = 100 //红色区域代表的金额和总金额
var percent = red / total
var right = document.getElementsByClassName('circle-right')[0]
var left = document.getElementsByClassName('circle-left')[0]
if (percent <= 0.5) {  //红色区域不超过一半
right.style.transform = `rotate(${percent * 360}deg)`
} else {    //红色区域超过一半的情况，重点部分
right.style.transform = `rotate(180deg)`
right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
right.style.opacity = 0
left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
left.style.transform = `rotate(${percent * 360 - 180}deg)`
}
}


function ai(){
var red = 90, total = 100 //红色区域代表的金额和总金额
var percent = red / total
var right = document.getElementsByClassName('circle-right ai')[0]
var left = document.getElementsByClassName('circle-left ai')[0]
if (percent <= 0.5) {  //红色区域不超过一半
right.style.transform = `rotate(${percent * 360}deg)`
} else {    //红色区域超过一半的情况，重点部分
right.style.transform = `rotate(180deg)`
right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
right.style.opacity = 0
left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
left.style.transform = `rotate(${percent * 360 - 180}deg)`
}
}

function lr(){
var red = 75, total = 100 //红色区域代表的金额和总金额
var percent = red / total
var right = document.getElementsByClassName('circle-right lr')[0]
var left = document.getElementsByClassName('circle-left lr')[0]
if (percent <= 0.5) {  //红色区域不超过一半
right.style.transform = `rotate(${percent * 360}deg)`
} else {    //红色区域超过一半的情况，重点部分
right.style.transform = `rotate(180deg)`
right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
right.style.opacity = 0
left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
left.style.transform = `rotate(${percent * 360 - 180}deg)`
}
}
function sai(){
var red = 95, total = 100 //红色区域代表的金额和总金额
var percent = red / total
var right = document.getElementsByClassName('circle-right sai')[0]
var left = document.getElementsByClassName('circle-left sai')[0]
if (percent <= 0.5) {  //红色区域不超过一半
right.style.transform = `rotate(${percent * 360}deg)`
} else {    //红色区域超过一半的情况，重点部分
right.style.transform = `rotate(180deg)`
right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
right.style.opacity = 0
left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
left.style.transform = `rotate(${percent * 360 - 180}deg)`
}
}


