var myinput = document.getElementById("myInput");
var show = document.querySelector("#show");
var btnclear = document.querySelector(".btnclear");
function newElement(t) {
  var myinput = document.getElementById("myInput").value;
  var obj = { myinput };
  var getdata = JSON.parse(localStorage.getItem("user"));

  if (myinput.trim() == 0) {
    alert("your input is empty");
  } else if (getdata) {
    getdata.push(obj);
    localStorage.setItem("user", JSON.stringify(getdata));
  } else {
    localStorage.setItem("user", JSON.stringify([obj]));
  }
  var myinput = (document.getElementById("myInput").value = "");

  to_print();
}
const to_print = () => {
  const getdata = JSON.parse(localStorage.getItem("user"));

  show.innerHTML = "";
  getdata.map((e, i) => {
    show.innerHTML += `<h2 class="lis">${e.myinput}
        <button class="btn_output" onclick="del(${i})" >del</button>
        <button class="btn_output" onclick="edit(${i})">edit</button>
        <button class="btn_output" onclick="update(${i})">update</button>
        <button class="btn_output" onclick="shiftUp(${i})">shift up</button>
        <button class="btn_output" onclick="shiftDown(${i})">shift down</button>

        </h2>`;
  });
};
const shiftUp = (i) => {
  console.log(i);
  const getdata = JSON.parse(localStorage.getItem("user"));
  console.log(getdata, "getdata");
  if (i == 0) {
    alert("you are already at top index");
  } else {
    var temp = getdata[i];
    getdata[i] = getdata[i - 1];
    getdata[i - 1] = temp;
    localStorage.setItem("user", JSON.stringify(getdata));
    location.reload();
  }
};
function shiftDown(i) {
  const getdata = JSON.parse(localStorage.getItem("user"));
  if (i == getdata.length - 1) {
    alert("you are already at bottom index");
  } else {
    var temp = getdata[i];
    getdata[i] = getdata[i + 1];
    getdata[i + 1] = temp;
    localStorage.setItem("user", JSON.stringify(getdata));
    location.reload();
  }
}

const del = (i) => {
  const getdata = JSON.parse(localStorage.getItem("user"));
  getdata.splice(i, 1);
  localStorage.setItem("user", JSON.stringify(getdata));
  to_print();
};
const edit = (i) => {
  const getdata = JSON.parse(localStorage.getItem("user"));
  myinput.value = getdata[i].myinput;
  new_index = i;
};
const update = (i) => {
  if (new_index == i) {
    const getdata = JSON.parse(localStorage.getItem("user"));
    getdata[new_index].myinput = myinput.value;
    localStorage.setItem("user", JSON.stringify(getdata));
    myinput.value = "";
  }

  to_print();
};
btnclear.addEventListener("click", () => {
  const getdata = JSON.parse(localStorage.getItem("user"));
  if (getdata) {
    localStorage.clear();
  } else {
    alert("local storage is already empty");
  }
  to_print();
});
to_print();






// ------------------joshuwa method and i reverse it to make it easyily understand-----------

// var myinput = document.getElementById("myInput").value;

// if(myinput.trim() != 0)
// {
//   let webtask  = localStorage.getItem('user')
//   if(webtask == null)
//   {
//     taskobj = []

//   }
//   else
//   {
//     taskobj = JSON.parse(webtask)
//   }
//   taskobj.push({"task":myinput})

//   localStorage.setItem('user',JSON.stringify(taskobj))
// }
