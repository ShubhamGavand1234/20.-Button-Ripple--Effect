const buttonRipple = document.querySelectorAll(".ripple");

buttonRipple.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    console.log(buttonLeft, buttonTop);

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    console.log(xInside, yInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
