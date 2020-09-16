

function openSidebar() {
  document.getElementById("sidebar").style.width = "228px";
  document.getElementById("innercontent").style.marginLeft = "228px";
  document.getElementById("sidebar1").style.display = "inline";
  document.getElementById("sidebar2").style.display = "inline";
  document.getElementById("sidebar3").style.display = "none";
  document.getElementById("sidebar4").style.display = "block";
  document.getElementById("secsidebar").style.left = "228px";
}

function closeSidebar() {
  document.getElementById("innercontent").style.marginLeft = "48px";
  document.getElementById("sidebar").style.width = "48px";
  document.getElementById("sidebar1").style.display = "none";
  document.getElementById("sidebar2").style.display = "none";
  document.getElementById("sidebar3").style.display = "block";
  document.getElementById("sidebar4").style.display = "none";
  document.getElementById("secsidebar").style.left = "48px";
}

function openSecsidebar() {
  document.getElementById("secsidebar").style.width = "300px";
  // document.getElementById("pipelineMenu").style.marginLeft = "300px";
  document.getElementById("maincontent").style.marginLeft = "300px";
  document.getElementById("secsidebar2").style.display = "block";
  document.getElementById("secsidebar1").style.display = "none";
  document.getElementById("btmmenu").style.marginLeft = "300px";
  document.getElementById("secsidebar").style.overflow = "scroll";
}

function closeSecsidebar() {
  document.getElementById("secsidebar").style.width = "28px";
  // document.getElementById("pipelineMenu").style.marginLeft = "28px";
  document.getElementById("maincontent").style.marginLeft = "28px";
  document.getElementById("secsidebar2").style.display = "none";
  document.getElementById("secsidebar1").style.display = "block";
  document.getElementById("btmmenu").style.marginLeft = "300px";
  document.getElementById("secsidebar").style.overflowY = "hidden";
}

function openThirdsidebar() {
  document.getElementById("thirdsidebar").style.width = "215px";
  document.getElementById("innercontent2").style.marginLeft = "215px";
  document.getElementById("thirdsidebar1").style.display = "none";
  document.getElementById("thirdsidebar2").style.display = "block";
  document.getElementById("btmmenu").style.marginLeft = "263px";
}
function closeThirdsidebar() {
  document.getElementById("thirdsidebar").style.width = "28px";
  document.getElementById("innercontent2").style.marginLeft = "28px";
  document.getElementById("thirdsidebar1").style.display = "block";
  document.getElementById("thirdsidebar2").style.display = "none";
  document.getElementById("btmmenu").style.marginLeft = "76px";
}

function opendataset() {
  document.getElementById("datasetbar").style.width = "632px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openprop() {
  document.getElementById("properties").style.width = "314px";
  document.getElementById("prop1").style.display = "none";
  document.getElementById("prop2").style.display = "block";
}

function closeprop() {
  document.getElementById("properties").style.width = "0px";
  document.getElementById("prop2").style.display = "none";
  document.getElementById("prop1").style.display = "block";
}

function openbtmmenu() {
  document.getElementById("btmmenu").style.height = "400px";
}

function openbtmmenu() {
  document.getElementById("btmmenu").style.height = "0px";
}

function opennewdataset() {
  document.getElementById("selectdataset").style.display = "block";
  document.getElementById("maincontent").style.opacity = "0.3";
  document.getElementById("sidebar").style.opacity = "0.3";
  document.getElementById("secsidebar").style.opacity = "0.3";

  document.getElementById("innercontent").style.opacity = "0.3";
}

function opendatatype() {
  document.getElementById("selectdatatype").style.display = "block";
  document.getElementById("selectdataset").style.display = "none";
  document.getElementById("maincontent").style.opacity = "0.3";
  document.getElementById("sidebar").style.opacity = "0.3";
  document.getElementById("secsidebar").style.opacity = "0.3";
  document.getElementById("innercontent").style.opacity = "0.3";
}

function opendataform() {
  document.getElementById("selectdatatype").style.display = "none";
  document.getElementById("selectdataset").style.display = "none";
  document.getElementById("datasetform").style.display = "block";
  document.getElementById("maincontent").style.opacity = "0.3";
  document.getElementById("sidebar").style.opacity = "0.3";
  document.getElementById("secsidebar").style.opacity = "0.3";
  document.getElementById("innercontent").style.opacity = "0.3";
}
function opendatalinkedservice() {
  document.getElementById("selectdatatype").style.display = "none";
  document.getElementById("selectdataset").style.display = "none";
  document.getElementById("datasetform").style.display = "none";
  document.getElementById("Newlinkedservice").style.display = "block";
  document.getElementById("maincontent").style.opacity = "0.3";
  document.getElementById("sidebar").style.opacity = "0.3";
  document.getElementById("secsidebar").style.opacity = "0.3";
  document.getElementById("innercontent").style.opacity = "0.3";
}

function canceldataset() {
  document.getElementById("selectdatatype").style.display = "none";
  document.getElementById("selectdataset").style.display = "none";
  document.getElementById("datasetform").style.display = "none";
  document.getElementById("Newlinkedservice").style.display = "none";
  document.getElementById("maincontent").style.opacity = "1";
  document.getElementById("sidebar").style.opacity = "1";
  document.getElementById("secsidebar").style.opacity = "1";
  document.getElementById("innercontent").style.opacity = "1";
}

function rp() {
  document.getElementById("copydata1").style.position = "fixed";
}

function rp1() {
  document.getElementById("copydata1").style.position = "static";
}

var settings = {
  url: "http://apiserver.centralindia.azurecontainer.io:5000/dataset/get/",
  method: "GET",
  timeout: 0,
  headers: {
    "x-access-token":
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFqYXlzbyIsImV4cCI6MTYwMDI2MzU0M30.MSp8FSL-V8fMTMxOsxGYKSNNREX_Ms6Av8HrLlX7jvI",
  },
};

$.ajax(settings).done(function (response) {
  var x = response;
  console.log(x)
  // var text = "";
  // console.log(localStorage.getItem("token"));
  // var y = JSON.parse(response).responsedata.Response;
  // var x = JSON.parse(y);
  // console.log(x);
  // for (i in x) {
  //   text +=
  //     '<li class="nav-item py-1"><a class="nav-link text-dark f-13"><i class="fal fa-database text-primary fa-rotate-90 mr-2"></i>' +
  //     x[i].datasourcename +
  //     "</a></li>";
  // }
  // document.getElementById("test").innerHTML = text;
  // console.log(text);
});

const generateObj = (obj, arr, val) => {
  if (arr.length === 1) {
    obj[arr[0]] = val;
    return;
  }

  if (!obj[arr[0]]) {
    obj[arr[0]] = {};
  }

  const restArr = arr.splice(1);
  generateObj(obj[arr[0]], restArr, val);
};
const getData = (id) => {
  const form = document.getElementById(id);
  const inputCollection = form.getElementsByTagName("input");
  const inputArray = [...inputCollection];
  const data = {};
  inputArray.map((input) => {
    const { name, value } = input;
    const splitName = name.split(".");
    generateObj(data, splitName, value);
  });
  return data;
};
//above code generate json from the input form
const getDataBtn = document.getElementById("submit1");
getDataBtn.addEventListener("click", () => {
  const data = getData("json");
  console.log(JSON.stringify(data));
  var settings = {
    url: "http://apiserver.centralindia.azurecontainer.io:5000/dataset/add/",
    method: "POST",
    timeout: 0,
    headers: {
      "x-access-token": localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});

document.getElementById("username").innerHTML = localStorage.getItem("username");
