


const images = [
  
  
  "../img/herhsey.jpg",
   "../img/momandme.jpg",
    "../img/bombon.jpg",
     "../img/Queen.jpg",
      "../img/MarthaHeadshot.jpg"];
const altTexts = {
  "../img/herhsey.jpg": "big dog",
  "../img/momandme.jpg": "mom and i",
  "./img/bombon.jpg": "little dog",
  "../img/Queen.jpg": "queen",
  "../img/MarthaHeadshot.jpg": "me"
};

const thumbBar = document.querySelector(".thumb-bar");


for (let i = 0; i < images.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", "../img/" + images[i]);
  newImage.setAttribute("alt", altTexts[images[i]]);
  thumbBar.appendChild(newImage);

  
  newImage.addEventListener("click", function() {
    const displayedImg = document.querySelector("#displayed-img");
    displayedImg.setAttribute("src", this.getAttribute("src"));
    displayedImg.setAttribute("alt", this.getAttribute("alt"));
  });
}


const btn = document.querySelector("#toggle-darken");
const overlay = document.querySelector("#overlay");
btn.addEventListener("click", function() {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.classList.add("active");
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.classList.remove("active");
  }
});