let radius ;
let circumference ;
const PI = 3.14 ;
document.getElementById(`submitBtn`).onclick = function(){
    radius = document.getElementById(`textbox`).value ;
    circumference = 2 * PI * radius ;
    document.getElementById(`answer`).textContent= `THE ANSWER IS ${circumference}` ;    

}
document.getElementById(`reset`).onclick= function(){
    document.getElementById(`answer`).textContent= ``;
    document.getElementById(`textbox`).value= ``;    

   
}