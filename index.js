function input(buttons){
if(buttons=='Delet'){
    document.getElementById("screen").value='';
}
else if(buttons=='Backspace'){
document.getElementById("screen").value=document.getElementById("screen").value.substring(0,document.getElementById("screen").value.length-1)
}
else if(buttons=='Space'){
    document.getElementById("screen").value=document.getElementById("screen").value + " ";


}
   else{
         document.getElementById("screen").value=document.getElementById("screen").value+buttons
    
   }


}



