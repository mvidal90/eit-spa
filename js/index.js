
const mainElem = document.querySelector("main")

document.addEventListener("DOMContentLoaded", () => onLoadTemplate("home"))

window.addEventListener("popstate", () => {
    const { hash } = location;
    const parsedHash = hash.slice(1)
    // #home
    onLoadTemplate( parsedHash || "home")
    // console.log(history)
})

const onLoadTemplate = template => {
    if (template !== "home") {
        location.hash = template
    } else {
        location.hash = ""
    }
    const xhr = new XMLHttpRequest();
    xhr.open("get", `../pages/${template}.html`)
    xhr.addEventListener("load", 
        () => {
            mainElem.innerHTML = xhr.response
        }
    )
    xhr.send()
}

const goBack = () => history.back()

const goForward = () => history.forward()