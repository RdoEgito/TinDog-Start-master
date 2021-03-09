let topBtn = document.getElementById("topBtn")
window.onscroll = function() { scrollFunction() }
console.log(topBtn)

function scrollFunction() {
    console.log(document.body.scrollTop, document.documentElement.scrollTop)
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block"
    } else {
        topBtn.style.display = "none"
    }
}

function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}