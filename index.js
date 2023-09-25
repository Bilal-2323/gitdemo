// document.getElementById("count-el").innerText = 9

// console.log(count)
// let myAge = 20 + 2
// console.log(myAge)
let newELE = document.getElementById("count-el")
let count = 0
function increament(){
    count = count + 1
    newELE.innerText = count

}

function saveDoc(){
    let saveELE =document.getElementById("saved")
    let countStr = count+" - "
    saveELE.textContent = saveELE.textContent + countStr

}