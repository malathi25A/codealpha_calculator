let display = document.getElementById("display");

function append(value){
  display.value += value;
}

function clearDisplay(){
  display.value = "";
}

function del(){
  display.value = display.value.slice(0,-1);
}

function calculate(){
  try{
    display.value = eval(display.value);
  }catch{
    display.value = "Error";
  }
}

/* =========================
   Keyboard Support
========================= */
document.addEventListener("keydown", function(e){
  let key = e.key;

  if(!isNaN(key)){              // numbers 0-9
      append(key);
  }
  else if(["+","-","*","/","%","."].includes(key)){
      append(key);
  }
  else if(key === "(" || key === ")"){
      append(key);
  }
  else if(key === "Backspace"){
      del();
  }
  else if(key === "Enter" || key === "="){
      calculate();
  }
  else if(key === "Escape"){
      clearDisplay();
  }
});