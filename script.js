const setCenterEvents = () => {
    const center = document.querySelector(".img-center")

    center.addEventListener("mouseover", scaleUp)
    center.addEventListener("mouseout", scaleDown)
    center.addEventListener("click", nextImage)
}

const scaleUp = (e) => {
    const item = e.target
    item.style.height = "120%";
}

const scaleDown = (e) => {
    const item = e.target
    item.style.height = "100%";
}

const nextImage = (e) => {
    const center = e.target
    const left = document.querySelector("#img-left")
    const right = document.querySelector("#img-right")

    const currentID = parseInt(center.getAttribute("tr"))

    left.setAttribute("tr", currentID)
    center.setAttribute("tr", currentID % 5 + 1)
    right.setAttribute("tr", currentID % 5 + 2)

    setNewImage(left)
    setNewImage(center)
    setNewImage(right)
}

const setNewImage = (item) => {item.setAttribute("src", `images/parr${item.getAttribute('tr')}.jpg`)}

setCenterEvents()