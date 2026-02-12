console.log("NEOFA LOADING")
loading = true
document.addEventListener("DOMContentLoaded", function() {
    console.log("NEOFA LOADED")
    loading = false
})
button = document.getElementById("button")
button.addEventListener("click", function() {
    if (loading) {
        console.log("NEOFA IS STILL LOADING")
    } else {
        console.log("NEOFA IS READY")
    }
})
if (window.location.href.includes("index.html")) {
    console.log("NEOFA IS ON THE HOME PAGE")
} else {
    console.log("NEOFA IS NOT ON THE HOME PAGE")
}
