// select the a tag of logo
let heading = document.querySelector("[aria-label='Twitter']");

// Twitter Blue Svg
const oldSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335 276" fill="#3ba9ee">
<path d="m302 70a195 195 0 0 1 -299 175 142 142 0 0 0 97 -30 70 70 0 0 1 -58 -47 70 70 0 0 0 31 -2 70 70 0 0 1 -57 -66 70 70 0 0 0 28 5 70 70 0 0 1 -18 -90 195 195 0 0 0 141 72 67 67 0 0 1 116 -62 117 117 0 0 0 43 -17 65 65 0 0 1 -31 38 117 117 0 0 0 39 -11 65 65 0 0 1 -32 35"/>
</svg>`;

const data = setInterval(() => {
  if (heading !== null) {
    nextStep();
    clearInterval(data);
  }
  heading = document.querySelector("[aria-label='Twitter']");
}, 1000);

const nextStep = () => {
  // getting into the children to select the svg path and replace it with the twitter blue logo
  heading.children[0].children[0].innerHTML = oldSvg;
  // console.log("Done");
};
