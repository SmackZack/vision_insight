function toggleClass() {
  const menu = document.querySelector(".mainmenu");
  menu.classList.toggle("toggleCls");
  let menu1 = document.querySelector(".hamburger");
  menu1.classList.toggle("toggleCls1");
  let menu2 = document.querySelector(".content");
  menu2.classList.toggle("toggleCls2");
  let menu3 = document.querySelector(".label");
  menu3.classList.toggle("toggleCls3");
  let menu4 = document.querySelector(".sm1");
  menu4.classList.toggle("d-none");
  let menu5 = document.querySelector(".sm2");
  menu5.classList.toggle("d-block");
}
function opensecnav() {
  document.getElementById("sec-sidenav").style.width = "300px";
  document.getElementById("box2").style.marginLeft = "300px";
  document.getElementById("secnavbtn").style.display = "none";
  document.getElementById("secshow").style.display = "inline";
}
function closesecnav() {
  document.getElementById("sec-sidenav").style.width = "25px";
  document.getElementById("box2").style.marginLeft = "25px";
  document.getElementById("secnavbtn").style.display = "inline";
  document.getElementById("secshow").style.display = "none";
}
function btm_form1() {
  document.getElementById("btm-form").style.height = "400px";
}
function btm_form1close() {
  document.getElementById("btm-form").style.height = "0px";
}
function btm_form1exp() {
  document.getElementById("btm-form").style.bottom = "0px";
  document.getElementById("btm-form").style.height = "100%";
  document.getElementById("btm-form1-explg").style.display = "none";
  document.getElementById("btm-form1-contlg").style.display = "inline";
}
function btm_form1cont() {
  document.getElementById("btm-form").style.bottom = "0px";
  document.getElementById("btm-form").style.height = "400px";
  document.getElementById("btm-form1-contlg").style.display = "none";
  document.getElementById("btm-form1-explg").style.display = "inline";
}
function openthirdnav() {
  document.getElementById("third-sidenav").style.width = "214px";
  document.getElementById("box3").style.marginLeft = "214px";
  document.getElementById("thirdnavbtn").style.display = "none";
  document.getElementById("thirdnavbtn").style.padding = "9px";
  document.getElementById("thirdshow").style.display = "inline";
}
function closethirdnav() {
  document.getElementById("third-sidenav").style.width = "25px";
  document.getElementById("box3").style.marginLeft = "25px";
  document.getElementById("thirdnavbtn").style.display = "inline";
  document.getElementById("thirdshow").style.display = "none";
}

function sectoggleclass() {
  const x1 = document.querySelector(".sec-mainmenu");
  x1.classList.toggle("toggleCls4");
  let menu5 = document.querySelector(".box2");
  menu5.classList.toggle("box2-exp");
  let x2 = document.querySelector(".lab2");
  x2.classList.toggle("d-inline");
  let x3 = document.querySelector(".lab3");
  x3.classList.toggle("d-inline");
  let x4 = document.querySelector(".lab4");
  x4 = classList.toggle("d-inline");
}
function toggleclass3() {
  const x1 = document.querySelector(".third-mainmenu");
  x1.classList.toggle("toggleCls5");
  let menu5 = document.querySelector(".box3");
  menu5.classList.toggle("box3-exp");
}
function togglehelp() {
  const help = document.querySelector(".help-mainmenu");
  help.classList.toggle("lmenu-exp");
}
function togglefeedback() {
  const help = document.querySelector(".feedback-mainmenu");
  help.classList.toggle("lmenu-exp");
  const x2 = document.querySelector(".updates-mainmenu");
  x2.classList.toggle("lmenu-cont");
  const x3 = document.querySelector(".datafact-mainmenu");
  x3.classList.toggle("lmenu-cont");
  const x4 = document.querySelector(".notifications-mainmenu");
  x4.classList.toggle("lmenu-cont");
}
function togglenotification() {
  const x4 = document.querySelector(".notifications-mainmenu");
  x4.classList.toggle("lmenu-exp");
  const help = document.querySelector(".feedback-mainmenu");
  help.classList.toggle("lmenu-cont");
  const x2 = document.querySelector(".updates-mainmenu");
  x2.classList.toggle("lmenu-cont");
  const x3 = document.querySelector(".datafact-mainmenu");
  x3.classList.toggle("lmenu-cont");
}
function toggleedit() {
  const help = document.querySelector(".feedback-mainmenu");
  help.classList.toggle("lmenu-cont");
  const x2 = document.querySelector(".updates-mainmenu");
  x2.classList.toggle("lmenu-cont");
  const x3 = document.querySelector(".datafact-mainmenu");
  x3.classList.toggle("lmenu-exp");
  const x4 = document.querySelector(".notifications-mainmenu");
  x4.classList.toggle("lmenu-cont");
}
function toggleupdate() {
  const x2 = document.querySelector(".updates-mainmenu");
  x2.classList.toggle("lmenu-exp");
  const help = document.querySelector(".feedback-mainmenu");
  help.classList.toggle("lmenu-cont");
  const x3 = document.querySelector(".datafact-mainmenu");
  x3.classList.toggle("lmenu-cont");
  const x4 = document.querySelector(".notifications-mainmenu");
  x4.classList.toggle("lmenu-cont");
}


function datastore() {
  let datastoreContainer = document.querySelector('#datastore-container');
  datastoreContainer.classList.toggle('d-none');
}