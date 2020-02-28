// const mockData = require("./mockData");

class Carousel {
  constructor(mockData) {
    this.nav = new Nav(mockData.navData);
    this.button = new Button(mockData.buttonData);
    this.slide = new Slide(mockData.slideData);
  }
  makeHTML() {
    const navTag = this.nav.makeHTML();
    const buttonTag = this.button.makeHTML();
    const slideTag = this.slide.makeHTML();

    const html = navTag + buttonTag + slideTag;

    return (document.querySelector(".wrap").innerHTML = html);
  }
}

class Nav {
  constructor(navData) {
    this.navData = navData;
  }
  makeHTML() {
    const nav = this.navData.reduce(
      (render, navList) => (render += `<li>${navList}</li>`),
      ""
    );
    return `<ul class = "slide_nav">${nav}</ul>`;
  }
}

class Button {
  constructor(buttonData) {
    this.buttonData = buttonData;
  }

  makeHTML() {
    const button = this.buttonData.reduce(
      (render, buttonList) =>
        (render += `<button class=${buttonList.className}><i class="${buttonList.buttonContent}"></i>

        </button>`),
      ""
    );
    return button;
  }
}

class Slide {
  constructor(slideData) {
    this.slideData = slideData;
  }

  makeHTML() {
    const slide = this.slideData.reduce(
      (render, slideList) =>
        (render += `<li class="slide_item">
      <img src=${slideList.img} alt="">
      <div class="slide_item_text">
          <h2>${slideList.title}</h2>
          <p>${slideList.content}</p></div></li>`),
      ""
    );
    return `<div class="slide_item_viewer"><ul class = "slide_item_wrap">${slide}</ul></div>`;
  }
}

export default Carousel;