let a = "kunal"
console.log(` ----${a}`)


function get_digit(event){
    document.getElementById("counter").value = document.getElementById("counter").value + event.path[0].innerText 
    console.log(event.path[0].innerText)
}

function clear_counter(event){
    document.getElementById("counter").value =''
    
}