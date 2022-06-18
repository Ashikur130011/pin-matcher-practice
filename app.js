function pinGenerate() {
  const pin = getPin();
  document.getElementById("input-form").value = pin;
}
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    console.log("3 digits pin generated");
    return getPin();
  }
}
document.getElementById('key-pad').addEventListener('click', function(event){
    const num =  event.target.innerText
    const inputNumber = document.getElementById("input-number");
    if(isNaN(num)){
      if(num == 'C'){
        inputNumber.value = ''
      }
    }
    else{
      const previousNum = inputNumber.value;
      const newNum = previousNum + num;
      inputNumber.value = newNum;
    }
})
document.getElementById('submit-btn').addEventListener('click', function(){
  
  const generatePin = document.getElementById('input-form').value
  const inputNumber = document.getElementById('input-number').value
  if(generatePin ==  inputNumber){
    document.getElementById('successful-msg').style.display= 'block'
    document.getElementById('warning-msg').style.display= 'none'
  }
  else{
    document.getElementById("successful-msg").style.display = "none";
    document.getElementById("warning-msg").style.display = "block";
  }
})
