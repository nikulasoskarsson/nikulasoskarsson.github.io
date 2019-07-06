/* Function sem tekur 3 parametra, txtElement sem er fyrir span taggið 
sem ég nota til að setja inn texta, words sem er arrayið í data-words í html 
og wait sem ræður hversu löng biðin er */
const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = ""; // Tóm breyta sem tekur inn gildi fyrir þann stað í textanu sem þú ert t.d gæti það verið bara "Dev" úr "Developer"
  this.wordIndex = 0; // Array breyta sem heldur utam um hvaða orði þú ert á í arrayinu..
  this.wait = parseInt(wait, 10); // this.wait sama og wait parameterinn með parseInt til að tryggja að þetta sé intbreyt
  this.type();
  this.isDeleting = false; // boolean gildi sem athugar hvort að það sé verið að eyða texta
};
TypeWriter.prototype.type = function() {
  //Það index sem þú ert á í words arrayinu
  const current = this.wordIndex % this.words.length;
  let typeSpeed = 300;
  // Ná í allt orðið með öllum textanum
  const fullTxt = this.words[current];
  if (this.isDeleting) {
    // Ef isDeleting er true
    //Eyða char
    this.txt = fullTxt.substring(0, this.txt.length - 1); // txt breytan er tóm í byrjun og ef það er ekki verið að bæta við char er alltaf - 1
    typeSpeed /= 2; // typespeed 150
  } else {
    //Bæta við char
    this.txt = fullTxt.substring(0, this.txt.length + 1); // txt breytan er tóm í byrjun og ef það er ekki verið að eyða char er alltaf bætt einum við
  }
  if (!this.isDeleting && this.txt === fullTxt) {
    // ef það er ekki verið að eyða og txt er sama og fullTxt t.d "Developer" === "Developer"
    // Ef orðið er búið
    typeSpeed = this.wait; // Pása
    this.isDeleting = true; // Delete sett = true svo að if settningin keyrir og byrjar að eyða
  } else if (this.isDeleting && this.txt === "") {
    // Þegar isDeleting er sama og true og það er búið að eyða öllu orðinu
    this.isDeleting = false;
    this.wordIndex++; // Ferð á næsta orð í arrayinu
    // pása áður en ég byrja að typa aftur
    typespeed = 500;
  }

  //Insert í txtElement sem er tóm breyta fyrir spannið
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`; // innerHTML notað til að setja txt sem er alltaf að breytast í htmlið..
  //Type speed sem breytist ti.d þegar það er veið að eyða char eða eftir að það er búið að skrifa orð og ég vil að það sé pása

  setTimeout(() => this.type(), typeSpeed); // Kallar aftur í type functionið eftir háfla sek..
};

// Init á function þegar dom loadar
document.addEventListener("DOMContentLoaded", init); // Event listenet þegar domið loadar sem callar í initialize function
function init() {
  const txtElement = document.querySelector(".txt-type"); // Náð í tóma spannið sem mun halda utan um textann sem er skirfaður
  const words = JSON.parse(txtElement.getAttribute("data-words")); // Orðin inní data-words sem er custom attribute í htmlinu sett inn í array með JSON.parse
  const wait = txtElement.getAttribute("data-wait"); // Data wait sem er = 3000 í htmlinu
  //Init typeWriter
  new TypeWriter(txtElement, words, wait); // Nýtt instant af const typewriterinum sem er function..
}

// Loka navinu þegar ýtt er á link
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(link => {
  link.addEventListener("click", () => closeNav());
});
closeNav = () => {
  const nav = document.getElementById("navi-toggle");

  if (nav.checked) {
    nav.checked = false;
  }
};
