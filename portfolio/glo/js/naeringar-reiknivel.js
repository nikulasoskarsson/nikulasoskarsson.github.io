// Javascript code for the calculator

// Some dom variables that will never be changed but need to be used to make the calculator run
const counterUI = document.querySelector(".counter-container");
const menuHolder = document.querySelector(".menu-content-holder");
const userMenuHolder = document.querySelector(".user-menu");
const userItems = document.querySelector(".user-item-app");
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const deleteMoal = document.querySelector(".delete-modal");

// Buttons for the delete modal
const btnDelete = document.querySelector(".btn-delete");
const btnCancel = document.querySelector(".btn-cancel");

let backButton = "";
let menuCategoriesLinks;

// Default variables for counter;
let counterCalories = 0;
let counterFat = 0;
let counterCarbs = 0;
let counterProtein = 0;
let xButton = 0;
let counterPosition = 0;

// Array of objects with different menu categories
const menuCategories = [
  {
    menuCategoryTitle: "Skálar",
    menuCategoryImgUrl: "./img/category1.jpg",
    menuCategory: "skalar"
  },
  {
    menuCategoryTitle: "Kjúklingaréttir",
    menuCategoryImgUrl: "./img/category2.jpg",
    menuCategory: "kjuklingarettir"
  },
  {
    menuCategoryTitle: "Borgarar",
    menuCategoryImgUrl: "./img/category3.jpg",
    menuCategory: "borgarar"
  },
  {
    menuCategoryTitle: "Vefjur",
    menuCategoryImgUrl: "./img/category4.jpg",
    menuCategory: "vefjur"
  },
  {
    menuCategoryTitle: "Súpur",
    menuCategoryImgUrl: "./img/category5.jpg",
    menuCategory: "supur"
  },
  {
    menuCategoryTitle: "Annað",
    menuCategoryImgUrl: "./img/category6.jpg",
    menuCategory: "annad"
  },
  {
    menuCategoryTitle: "Djúsar",
    menuCategoryImgUrl: "./img/category7.jpg",
    menuCategory: "djusar"
  },
  {
    menuCategoryTitle: "Drykkir",
    menuCategoryImgUrl: "./img/category8.jpg",
    menuCategory: "drykkir"
  }
];
// Menu items
const menuItems = [
  {
    menuItemImageUrl: "./img/category1.jpg",
    menuItemTitle: "Indversk Dahl Skál",
    menuItemDescription:
      "Salatblanda, hýðishrísgrjón, dahl, sætar kartöflur, tzatziki dressing, mangó chutney, ristaðar kókosflögur.",
    menuItemPrice: "1.690",
    menuCategory: "skalar",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 0 // Unique index for every object in the array which is added to the html as accesskey
  },
  {
    menuItemImageUrl: "./img/skal2.jpg",
    menuItemTitle: "Sportskál",
    menuItemDescription:
      "Salatblanda, heilhveitipasta, oumph eða kjuklingur sætkartöflusalat, vatnsmelónur, pestó, ristaðar kókosflögur.",
    menuItemPrice: "1.890",
    menuCategory: "skalar",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 1
  },
  {
    menuItemImageUrl: "./img/skal3.jpg",
    menuItemTitle: "Kjúklingaskál",
    menuItemDescription:
      "Salatblanda, heilhveiti pasta, kjúklingur eða oumph, rauðrófur, brokkolí, kirsuberjatómatar, spicy mæjó, kókosflögur.",
    menuItemPrice: "1.890",
    menuCategory: "skalar",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 2
  },
  {
    menuItemImageUrl: "./img/skal4.jpg",
    menuItemTitle: "Mexíkósk skál",
    menuItemDescription:
      "Salatblanda, kínóa/hirsi, kjúklingur eða oumph, svartar baunir, maískorn, spicy tómatsalsa, spicy mæjó, guacamole, maísflögur.",
    menuItemPrice: "1.890",
    menuCategory: "skalar",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 3
  },
  {
    menuItemImageUrl: "./img/skal5.jpg",
    menuItemTitle: "Miðjarðarhafsskál",
    menuItemDescription:
      "Salatblanda, grænmetisspaghetti, falafel, grasker, edamame, hummus, tzatziki dressing, dukkah.",
    menuItemPrice: "1.690",
    menuCategory: "skalar",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 4
  },
  {
    menuItemImageUrl: "./img/skal6.jpg",
    menuItemTitle: "Thai skál",
    menuItemDescription:
      "Kálgrunnur, grænmetisspaghetti, thaisalat, avocado, edamame baunir, kjúklingur eða oumph, ananas, goma sósa og saltaðar jarðhnetur.",
    menuItemPrice: "1.890",
    menuCategory: "skalar",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 5
  },
  {
    menuItemImageUrl: "./img/category1.jpg",
    menuItemTitle: "Indversk Dahl Skál",
    menuItemDescription:
      "Salatblanda, hýðishrísgrjón, dahl, sætar kartöflur, tzatziki dressing, mangó chutney, ristaðar kókosflögur.",
    menuItemPrice: "1.690",
    menuCategory: "skalar",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 6
  },
  {
    menuItemImageUrl: "./img/skal2.jpg",
    menuItemTitle: "Kjúklingaskál",
    menuItemDescription:
      "Salatblanda, hýðishrísgrjón, dahl, sætar kartöflur, tzatziki dressing, mangó chutney, ristaðar kókosflögur.",
    menuItemPrice: "1.890",
    menuCategory: "skalar",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 7
  },
  {
    menuItemImageUrl: "./img/category2.jpg",
    menuItemTitle: "Pestókjúklingur",
    menuItemDescription:
      "Borinn fram með hýðishrísgrjónum, brokkolísalati, sætkartöflusalati og rauðrófum.",
    menuItemPrice: "2.390",
    menuCategory: "kjuklingarettir",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 8
  },
  {
    menuItemImageUrl: "./img/kjuklingarettur2.jpg",
    menuItemTitle: "Miðjarðarhafskjúklingur",
    menuItemDescription:
      "Borinn fram með hýðishrísgrjónum, brokkolísalati, sætkartöflusalati og rauðrófum.",
    menuItemPrice: "2.390",
    menuCategory: "kjuklingarettir",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 9
  },
  {
    menuItemImageUrl: "./img/kjuklingarettur3.jpg",
    menuItemTitle: "Indverskur Dahl kjúklingur",
    menuItemDescription:
      "Borinn fram með hýðishrísgrjónum, brokkolísalati, sætkartöflusalati og rauðrófum.",
    menuItemPrice: "2.390",
    menuCategory: "kjuklingarettir",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 10
  },
  {
    menuItemImageUrl: "./img/category3.jpg",
    menuItemTitle: "Nautaborgari",
    menuItemDescription:
      "Nautaborgari borinn fram á glútenlausu fræbrauði með klettasalati, tómatsalsa, súrum gúrkum, rauðlauk, heimagerðum frönskum og spæsí mæjó.",
    menuItemPrice: "2.390",
    menuCategory: "borgarar",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 11
  },
  {
    menuItemImageUrl: "./img/category3.jpg",
    menuItemTitle: "Grænmetisborgari",
    menuItemDescription:
      "Svartbaunaborgari borinn fram á glútenlausu fræbrauði með klettasalati, tómatsalsa, súrum gúrkum, rauðlauk, heimagerðum frönskum og spæsí mæjó.",
    menuItemPrice: "2.390",
    menuCategory: "borgarar",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 12
  },
  {
    menuItemImageUrl: "./img/category4.jpg",
    menuItemTitle: "Mexíkó vefja",
    menuItemDescription:
      "Salatblanda, hýðishrísgrjón, svartar baunir, oumph eða kjúklingur, maís, salsa, guacamole, spicy mæjó.",
    menuItemPrice: "1.490",
    menuCategory: "vefjur",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 13
  },
  {
    menuItemImageUrl: "./img/category4.jpg",
    menuItemTitle: "Miðjarðarhafsvefja",
    menuItemDescription:
      "Salatblanda, grænmetisspaghetti, falafel, grasker, edamame, hummus, tzatziki dressing, dukkah.",
    menuItemPrice: "1.490",
    menuCategory: "vefjur",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 14
  },
  {
    menuItemImageUrl: "./img/category5.jpg",
    menuItemTitle: "Kókoskarrý súpa",
    menuItemDescription: "Borin fram með súrdeigsbrauði og hummus/smjöri.",
    menuItemPrice: "1.390",
    menuCategory: "supur",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 15
  },
  {
    menuItemImageUrl: "./img/category6.jpg",
    menuItemTitle: "Spínatlasagna",
    menuItemDescription:
      "Borið fram með sætkartöflusalati, brokkolísalati og rauðrófum. Toppað með hnetupestó.",
    menuItemPrice: "2.190",
    menuCategory: "annad",
    menuItemCalories: 1,
    menuItemFat: 1,
    menuItemCarbs: 1,
    menuItemProtein: 1,
    menuItemIndex: 16
  }
];

// Function that loads in the calculator and takes the info like protein and fat as a parameter
const loadCalc = function(totalCalories, totalFat, totalCarbs, totalProtein) {
  this.totalCalories = totalCalories;
  this.totalFat = totalFat;
  this.totalCarbs = totalCarbs;
  this.totalProtein = totalProtein;
  counterUI.innerHTML = `
		<div class="counter-content">
				<h1 class="counter-heading">Næringar Reiknivél</h1>
				<div class="counter">
					<div class="counter-holder">
						<p class="number">${totalCalories}</p>
						<p class="measurement">Kaloríur</p>
					</div>
					<div class="counter-holder">
						<p class="number">${totalFat}<span class="g">g</span></p>
						<p class="measurement">Fita</p>
					</div>
					<div class="counter-holder">
						<p class="number">${totalCarbs}<span class="g">g</span></p>
						<p class="measurement">Kolvetni</p>
					</div>
					<div class="counter-holder">
						<p class="number">${totalProtein}<span class="g">g</span></p>
						<p class="measurement">Protein</p>
					</div>
				</div>
			</div>
	`;
  counterPosition = document.querySelector(".counter").offsetTop;
  counter = document.querySelector(".counter");
};
const loadMenuCategories = function() {
  menuHolder.innerHTML = ""; //Rest container
  for (let i = 0; i < menuCategories.length; i++) {
    menuHolder.innerHTML += `
				<div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 mx-auto u-center-text u-margin-bottom-small">
						<div accessKey="${menuCategories[i].menuCategory}" class="menu-category">
							<a>
								<h1 class="menu-category-heading">${menuCategories[i].menuCategoryTitle}</h1>
								<img src="${
                  menuCategories[i].menuCategoryImgUrl
                }" alt="" class="menu-category-img">
							</a>	
						</div>
					</div>
		`;
  }
  menuCategoriesLinks = Array.from(
    document.getElementsByClassName("menu-category")
  );
  loadMenuItems();
};

const loadMenuItems = function() {
  for (let i = 0; i < menuCategoriesLinks.length; i++) {
    menuCategoriesLinks[i].onclick = function() {
      var chosenItem = this.accessKey;
      menuHolder.innerHTML = `
				<img src="img/back-button.svg" class="back-button">
			`;
      backButton = document.querySelector(".back-button");
      backButton.addEventListener("click", loadMenuCategories);

      for (let x = 0; x < menuItems.length; x++) {
        if (menuItems[x].menuCategory == chosenItem) {
          menuHolder.innerHTML += `
						<div class="col-lg-3 col-md-12 col-sm-12-col-xs-12 u-center-text u-margin-bottom-small">
						<div class="menu-item" accessKey="${menuItems[x].menuItemIndex}">
							<a>
								<img src="${menuItems[x].menuItemImageUrl}" alt="" class="menu-item-img">
								<h3 class="menu-item-heading">${menuItems[x].menuItemTitle}</h3>
								<p class="menu-item-description">${menuItems[x].menuItemDescription}</p>
								<h3 class="menu-item-price">${menuItems[x].menuItemPrice} kr</h3>
							</a>
						</div>
					</div>
					`;
        }
      }
      backButton = document.querySelector(".back-button");
      backButton.addEventListener("click", loadMenuCategories);
      menuItemsLinks = Array.from(document.getElementsByClassName("menu-item"));
      addMenuItem();
    };
  }
};
const addMenuItem = function() {
  for (i = 0; i < menuItemsLinks.length; i++) {
    menuItemsLinks[i].onclick = function() {
      userMenuHolder.style.animation = "moveInTop .5s ease-in"; // animation addedd
      userMenuHolder.classList.remove("u-hidden");
      let currentIndex = this.accessKey; // accesskey html element used to sniff out what element is being targeted
      userItems.innerHTML += `
				<div class="user-menu-item" accessKey="${currentIndex}">
					<img src="${
            menuItems[currentIndex].menuItemImageUrl
          }" alt="" class="user-menu-item-img">
					<h3 class="user-menu-item-title">${menuItems[currentIndex].menuItemTitle}</h3>
					<img src="img/x-button.svg" alt="" class="x-button">
				</div>
			`;
      loadMenuCategories();
      counterCalories += menuItems[currentIndex].menuItemCalories;
      counterFat += menuItems[currentIndex].menuItemFat;
      counterCarbs += menuItems[currentIndex].menuItemCarbs;
      counterProtein += menuItems[currentIndex].menuItemProtein;
      xButton = Array.from(document.getElementsByClassName("x-button"));
      loadCalc(counterCalories, counterFat, counterCarbs, counterProtein); // Cll the loadCalc function with the updated values as parameters
      itemRemoval();
    };
  }
};

itemRemoval = function() {
  for (i = 0; i < xButton.length; i++) {
    // For every button
    xButton[i].onclick = function() {
      // A click function

      body.classList.add("overflow-hidden");
      modal.classList.add("modal-active");
      modal.style.height = body.offsetHeight + "px";
      deleteMoal.classList.remove("u-hidden");
      let x = this.parentElement; // Get the parent element which in this case is the user-menu-item
      let currentIndex = x.accessKey; // accesskey html element used to sniff out what element is being targeted

      btnDelete.onclick = function() {
        body.classList.remove("overflow-hidden");
        modal.classList.remove("modal-active");
        deleteMoal.classList.add("u-hidden");
        modal.style.height = 0;

        x.remove(); // delete user menu item
        userMenuItems = Array.from(
          document.getElementsByClassName("user-menu-item")
        );

        counterCalories -= menuItems[currentIndex].menuItemCalories;
        counterFat -= menuItems[currentIndex].menuItemFat;
        counterCarbs -= menuItems[currentIndex].menuItemCarbs;
        counterProtein -= menuItems[currentIndex].menuItemProtein;
        loadCalc(counterCalories, counterFat, counterCarbs, counterProtein);

        if (userMenuItems.length == 0) {
          userMenuHolder.classList.add("u-hidden");
        }
      };
    };
    btnCancel.onclick = function() {
      body.classList.remove("overflow-hidden");
      modal.classList.remove("modal-active");
      deleteMoal.classList.add("u-hidden");
      modal.style.height = 0;
    };
  }
};
// Init the app by calling the required function, should be added to a unique function later
loadMenuCategories();
loadCalc(0, 0, 0, 0);

// // Code that makes the counter fixed or not fixed depending on scroll height
// window.onscroll = function(){
// 	if(window.pageYOffset > counterPosition){
// 		counter.classList.add('fixed-on-scroll');
// 		counterUI.style.height = 0;
// 	}
// 	else{
// 		counter.classList.remove('fixed-on-scroll');
// 		counterUI.style.height = '500px';
// 	}
// }
