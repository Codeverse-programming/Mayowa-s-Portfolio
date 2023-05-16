// header background reveal
const headerBg = () => {
    const header = document.querySelector(".js-header");

    window.addEventListener("scroll", function () {
        if (this.scrollY > 0) {
            header.classList.add("bg-reveal");
        } else {
            header.classList.remove("bg-reveal");
        }
    })
}
headerBg();

const reveal = () => {
    // const button = document.querySelector("#movetop");

    window.addEventListener("scroll", function () {
        if (this.scrollY > 200) {
            document.querySelector("#movetop").style.display = "block"
        } else {
            document.querySelector("#movetop").style.display = "none"
        }
    })
}
reveal();