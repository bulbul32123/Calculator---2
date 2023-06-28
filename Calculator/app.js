function deleteAll(){
 document.getElementById('Display').value =  ''
 
}



function calculator(NewValue){
    document.getElementById('Display').value += NewValue
}
function reasult(){
 let value = document.getElementById('Display').value
 let v = eval(value)
 value = document.getElementById('Display').value = v

}




