const clickedTimes = document.querySelector(".clicked-times");
const img = document.querySelector(".card-img-container");

let numberofClicked = 0;

img.addEventListener("click",(e) => {
    let crdY = e.offsetX;
    let crdX = e.offsetY;

    let icon = document.createElement("i");
    icon.className = "fas fa-heart";
    icon.style.top = crdX + "px";
    icon.style.left = crdY + "px";
    console.log(crdX , crdY);

    setTimeout(() => {
        icon.remove();
    }, 500);

    changeNumberOfClicked();

    img.appendChild(icon);
})

function changeNumberOfClicked(){
    numberofClicked ++;
    clickedTimes.innerHTML = `You liked it ${numberofClicked} times`;
}
