function switchTheme() {
  document.body.classList.toggle("isLight")
  document.body.classList.toggle("isDark")
}

function clearVisor() {
  document.getElementById("input_number").value = ""
  document.getElementById("result").value = ""
}

function showKeyOnVisor(number) {
  if(allowedKeys.some((n) => n == number.key) && document.getElementById("input_number").focus() == false){
    document.getElementById("input_number").value += number.key
  }
  if(number.key === 'Enter'){
    finish()
  }
}

function showOnVisor(number){
  if(allowedKeys.some((n) => n == number)){
    document.getElementById("input_number").value += number
  }
}

function finish() {
  let result = eval(document.getElementById("input_number").value)
  document.getElementById("result").value = result
}

function copyNumber() {
  const result = document.getElementById("result").value
  navigator.clipboard.writeText(result)
}

let allowedKeys = [0, 1, 2 , 3 , 4, 5, 6, 7, 8, 9, '(', ')', '/', '*', '+', '-', '=', '.', '%'] 

document.addEventListener("keydown", showKeyOnVisor)
