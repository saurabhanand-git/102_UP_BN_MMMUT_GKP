function expand(){
    var x= document.getElementById("dropdown");
    if(x.className==="menubar"){
        x.className += " responsive";
    }
    else{
        x.className="menubar";
    }
}

function myFunction(x) {
    x.classList.toggle("change");
  }