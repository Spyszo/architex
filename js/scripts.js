

const header = document.getElementsByTagName('HEADER')[0]
let smallHeader = false


document.addEventListener('scroll', function(e) {

    if(window.scrollY > 70) smallHeader = true
    else smallHeader = false


    if(smallHeader) header.className = "smallHeader"
    else header.className = ""
  

});


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