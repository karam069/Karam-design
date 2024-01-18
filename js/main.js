let btn = document.getElementById("up-btn");

window.onscroll = function(){
  if(window.scrollY > 2200){
    btn.style.display="block";
  } else{
    btn.style.display ="none";
  }
}

  btn.onclick = function(){
    window.scrollTo({
      top: 0,
      left: 0,
    });
};