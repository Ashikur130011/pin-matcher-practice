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
    const inputNumber = document.getElementById('input-number')
    inputNumber.value = num
})
