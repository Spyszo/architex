

const header = document.getElementsByTagName('HEADER')[0]
let smallHeader = false


document.addEventListener('scroll', function(e) {

    if(window.scrollY > 70 && window.innerWidth > 680) smallHeader = true
    else smallHeader = false


    if(smallHeader) header.className = "smallHeader"
    else header.className = ""
  

});

document.getElementsByClassName('mobile_switch')[0].addEventListener("click", (e)=> {
    document.getElementsByClassName('mobile_switch')[0].classList.toggle("active")
    document.getElementsByClassName('mobile_nav')[0].classList.toggle("active")
})


setTimeout(()=>{
    document.getElementById('christmasModal').style.visibility = "visible"
    document.getElementById('christmasModal').style.opacity = "1"
}, 500)

const closeModal = () => {
    document.getElementById('christmasModal').style.visibility = "hidden"
    document.getElementById('christmasModal').style.opacity = "0"
}

document.getElementById('christmasModal').addEventListener('click', ()=> {
    document.getElementById('christmasModal').style.visibility = "hidden"
    document.getElementById('christmasModal').style.opacity = "0"
})