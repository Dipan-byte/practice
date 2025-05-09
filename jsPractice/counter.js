let counter = 0 ;
document.getElementById(`increseBtn`).onclick = function(){
  counter ++ ;
  document.getElementById(`counter`).textContent= counter ;
}
document.getElementById(`decreseBtn`).onclick = function(){
    counter -- ;
    document.getElementById(`counter`).textContent= counter ;
  }
  document.getElementById(`resetBtn`).onclick = function(){
    counter =0 ;
    document.getElementById(`counter`).textContent= counter ;
  }