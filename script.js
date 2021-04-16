function validate(){
  var loginMess =document.body.querySelector(".loginmess");
  
  var screen1 =document.body.querySelector(".screen1");
  
  var screen2 =document.body.querySelector(".screen2");
  
  var username =document.body.querySelector(".username").value;
  
  var password =document.body.querySelector(".password").value;
    
  if(username==="cool"&&password=="password"){
    loginMess.innerHTML="";
    screen1.innerHTML="";
    writeStuff(pages[0].content);
    for (i=0; i<pages.length; i++){
     new pageMaker(pages[i]);
    }
  }else if(username!=="cool"){
    loginMess.innerHTML="Username Incorrect";
  }else if(password!=="password"){
    loginMess.innerHTML="Password Incorrect";
  }
  
}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})

var pages = [
  {
    title:"Grade View"
  },
  {
    title:"Add Grade",
  }
]

var screen2 =document.body.querySelector(".screen2");

var display =document.body.querySelector(".display");

var nav =document.body.querySelector(".nav");

var makenote =document.body.querySelector(".makenote");

var list =document.body.querySelector(".list");

var listEle = document.body.querySelector(".list");


function pageMaker(pg){
  this.button = document.createElement("button")
  this.button.addEventListener("click", function(){
    writeStuff(pg.content, pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}

function writeStuff(stuff, pg){
  if(pg!=="Add Grade"){
    display.innerHTML="";
    renderList();
  }else{
    listEle.innerHTML="";
    addNote()
  }
}

var checkNumber = /^[0-9]+$/;


function addNote(){
  display.innerHTML="";
  var makebtn = document.createElement("button");
  makebtn.innerHTML="Add Note";
  makebtn.addEventListener("click", function(){
    submit();
  })
  display.appendChild(makebtn);
  var makenote = document.createElement("input");
  makenote.placeholder="add student name..."
  var makeimp = document.createElement("input");
  makeimp.placeholder="add grade..."
  function submit(){
    var text =(makenote).value;
    var imp =(makeimp).value;
    if(text.length<0){
      document.body.querySelector(".list2").innerHTML="";
      document.body.querySelector(".list2").innerHTML="Error: Not enough characters in Student Name."
     }else if (imp.length<0){
     document.body.querySelector(".list2").innerHTML="";
     document.body.querySelector(".list2").innerHTML="Error: Not enough characters in Grade."
     }else if(checkNumber.test(imp)&&text.length>0){
      document.body.querySelector(".list2").innerHTML=""
      list.push(text);
      list2.push(imp);
      display.innerHTML="";
      renderList();
     }else if (checkNumber.test(imp)==false){
      document.body.querySelector(".list2").innerHTML="";      
      document.body.querySelector(".list2").innerHTML="Error: Grade is not an integer."
     }else{
      document.body.querySelector(".list2").innerHTML="";      
      document.body.querySelector(".list2").innerHTML="Error: Not enough characters in Student Name."      
     }
  }
  display.appendChild(makenote);
  display.appendChild(makeimp);
}

var list = [" "];

var list2 = [" "];

function renderList(){
  var listEle = document.body.querySelector(".list");
  listEle.innerHTML="";
  
  for(var i=0; i<list.length; i++){
    var element = document.createElement("div");
    element.innerHTML=list[i] + " " + list2[i];
    listEle.appendChild(element);
  }
}