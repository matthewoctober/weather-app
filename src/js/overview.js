export const overviewWrapper = document.querySelector(".overview-wrapper");
export const tempButtons = [...document.querySelectorAll(".temp-button")];
export const defaultTemp = document.querySelector(".default-temp");
export const currentTempF = document.querySelector(".temp-f");
export const currentTempC = document.querySelector(".temp-c");
export const currentTemps = [...document.querySelectorAll(".current-value")];
export const highTemps = [...document.querySelectorAll(".high-value")];
export const highF = document.querySelector(".high-value-f");
export const highC = document.querySelector(".high-value-c");
export const lowTemps = [...document.querySelectorAll(".low-value")];
export const lowF = document.querySelector(".low-value-f");
export const lowC = document.querySelector(".low-value-c");
export const city = document.querySelector(".city");
export const menuContainer = document.querySelector(".menu-container");
export const menu = document.querySelector(".menu");
export const highlighter = document.querySelector(".highlighter");
export const weatherIcon = [...document.querySelectorAll(".weather-icon")];

// Dynamic styles for farenheit/celsius indicator
highlighter.style.width = `${defaultTemp.getBoundingClientRect().width}px`;
highlighter.style.left = `${defaultTemp.getBoundingClientRect().left}px`;
highlighter.style.height = `${defaultTemp.getBoundingClientRect().height}px`;
highlighter.style.top = `${defaultTemp.getBoundingClientRect().top +
  window.scrollY}px`;

// Toggle temperatures between celsius and farenheit
export function toggleTemp() {
  const changeUnit = () =>
    tempButtons.map(b => {
      b.className.includes("active")
        ? b.classList.remove("active")
        : b.classList.add("active");
    });

  const changeTempValues = () => {
    highTemps.map(temp => {
      temp.className.includes("active")
        ? temp.classList.remove("active")
        : temp.classList.add("active");
    });

    lowTemps.map(temp => {
      temp.className.includes("active")
        ? temp.classList.remove("active")
        : temp.classList.add("active");
    });

    currentTemps.map(temp => {
      temp.className.includes("active")
        ? temp.classList.remove("active")
        : temp.classList.add("active");
    });
  };

  const toggleHighlight = () => {
    highlighter.style.left = `${this.getBoundingClientRect().left +
      window.scrollY}px`;
  };

  !this.className.includes("active") ? changeTempValues() : "";
  !this.className.includes("active") ? toggleHighlight() : "";
  !this.className.includes("active") ? changeUnit() : "";
}

// Automatic resizing of farenheit/celsius indicator
export function responsiveHighlight() {
  const activeButton = tempButtons.filter(button =>
    button.className.includes("active")
  );
  highlighter.style.width = `${defaultTemp.getBoundingClientRect().width}px`;
  highlighter.style.left = `${activeButton[0].getBoundingClientRect().left}px`;
}
