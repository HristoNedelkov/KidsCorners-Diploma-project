function show(...componentsToBeShown) {
  for (const key in paths) {
    if (componentsToBeShown.includes(key)) {
      paths[key].style.display = "block";
    } else {
      paths[key].style.display = "none";
    }
  }
}

let paths = {
  header: document.querySelector(".site-header"),
  offerts: document.querySelector(".offerts"),
  welcomeComponent: document.querySelector(".welcome"),
  campsComponents: document.querySelector(".camps"),
  aboutSectionComponents: document.querySelector(".about-section"),
  commentsComponent: document.querySelector(".commentsComponent"),
};
const navigation = Array.from(document.querySelector("#navigation").children);
const keys = Object.keys(paths);

navigation.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    const text = element.textContent;

    if (text == "ABOUT US") {
      show("aboutSectionComponents");
      window.history.pushState("about-us");
    } else if (text == "CAMPS") {
      show("campsComponents");
    } else if (text == "OFFERINGS") {
      show("offerts");
    } else if (text == "BLOG") {
      show("welcomeComponent", "commentsComponent");
    } else if (text == "HOME") {
      show("header", "welcomeComponent");
    }
  });
});
