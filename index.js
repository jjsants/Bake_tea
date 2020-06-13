



// using fullpage.js to structure the scrolling style of the page
new fullpage('#fullpage', {
  autoScrolling: false,
  navigation: true,
  navigationTooltips: ["home", "about us", "contact"],
  showActiveTooltip: true,
  // controlArrows:true,
  // slidesNavigation:true

  onLeave: function (origin, destination, direction) {
    var leavingSection = this;
    var tl = gsap.timeline({
      delay: 0.7
    });
    //after leaving section 2
    if (origin.index == 0 && direction == 'down') {
      //Used greeshock 3 to do the animations.
      tl.fromTo(".presentation", {
        height: 0,
        width: 0
      }, {
        duration: 1,
        width: "50%",
        height: "70%",
        ease: "power4",
        right: "25%"
      })
        .from(".intro-text", {
          opacity: 0,
          duration: 2,
          ease: "power4"
        })
        .from(".hidden-intro", {
          opacity: 0,
          visibility: "visible",
          duration: 1,
          x: 200,
          ease: "power4"
        }, "-=2")
        .to(".hidden-intro", {
          opacity: 100,
          visibility: "visible",
          x: 0
        })
    } else if (origin.index == 1 && direction == 'down') {
      // alert("Going to section 2!");

    } else if (origin.index == 2 && direction == 'down') {
      // alert("Going to section 3!");

    }
    // up
    else if (origin.index == 3 && direction == 'up') {
      // alert("Going to section 2!");

    } else if (origin.index == 2 && direction == 'up') {
      //alert("Going to section 1!");

    } else if (origin.index == 1 && direction == 'up') {
      //alert("Going to section 0!");
      tl.fromTo(".presentation", {
        height: 0,
        width: 0
      }, {
        duration: 1,
        width: "50%",
        height: "70%",
        ease: "power4",
        right: "25%"
      })
        .from(".intro-text", {
          opacity: 0,
          duration: 2,
          ease: "power4"
        })
        .from(".hidden-intro", {
          opacity: 0,
          visibility: "visible",
          duration: 1,
          x: 200,
          ease: "power4"
        }, "-=2")
        .to(".hidden-intro", {
          opacity: 100,
          visibility: "visible",
          x: 0
        })
    }
  }
});

//collection fullPage
//function used to create the first carousel
function changeSlide(direction) {
  var currentImg = $(".active1");
  var nextImg = currentImg.next();
  var previousImg = currentImg.prev();

  if (direction == "next") {
    if (nextImg.length) {
      nextImg.addClass("active1");
    } else {
      $(".collection-slider .img-bakery-collection").first().addClass("active1");
    }

  } else {
    if (previousImg.length) {
      previousImg.addClass("active1");
    } else {
      $(".collection-slider .img-bakery-collection").last().addClass("active1");
    }
  }
  currentImg.removeClass("active1");
}

//collection fullPage
//function used to create the second carousel
function changeSlide2(direction) {
  var currentImg = $(".active2");
  var nextImg = currentImg.next();
  var previousImg = currentImg.prev();

  if (direction == "next") {
    if (nextImg.length) {
      nextImg.addClass("active2");
    } else {
      $(".collection-slider2 .img-bake-collection").first().addClass("active2");
    }

  } else {
    if (previousImg.length) {
      previousImg.addClass("active2");
    } else {
      $(".collection-slider2 .img-bake-collection").last().addClass("active2");
    }
  }
  currentImg.removeClass("active2");
}

// -----------------------------------------------------------

// map api

function initMap() {
  var dublin = {
    lat: 53.395455999999996,
    lng: -6.127616

  };

  var map = new google.maps.Map(document.getElementById('map1'), {
    scaleControl: true,
    center: dublin,
    zoom: 14
  });

  var infowindow = new google.maps.InfoWindow;
  infowindow.setContent('<b>BakedToATea</b>');

  var marker = new google.maps.Marker({
    map: map,
    position: dublin
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);

  });
}


// -----------------------------------------------------------
// recipe API

// add an event listener to the button that runs the function sendApiRequest when it is clicked.
// const content = document.getElementById("content");
// let searchNoInput = document.createElement("div")
// let searchInput = document.querySelector(".searchInputRecipe")
// let searchButton = document.querySelector("#search")

// content.appendChild(searchNoInput)

// searchButton.addEventListener("click", () => {
//   console.log("button pressed")

//   // debugger;
//   if (searchInput.value == "") {
//     setTimeout(function () {
//       searchNoInput.innerHTML = "<h2> Please enter a name.</h2>" // only working once at the moment.
//       $(searchNoInput).fadeOut(5000);
//     }, 500);
//     return;
//   } else {
//     sendApiRequest(searchInput.value)
//   }
// })

// //an asysncrhonous function to fetch data from the API.
// async function sendApiRequest(text) {
//   let search = text;

//   let APP_ID = "8890b18e"
//   let API_KEY = "83f29000c0d94a9e37e048533135f2c4"
//   let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${search}`);
//   console.log(response)
//   let data = await response.json()
//   console.log(data)
//   useApiData(data)
// }

// function useApiData(data) {

//   const content = document.getElementById("content");

//   let display_Result = "";

//   for (let i = 0; i < data.hits.length; i++) {

//     display_Result = display_Result + `

//       <div class="row wrapper">
//       <div class="col-12 col-sm-6 col-md-4">
//       <div class="card" style="width: 18rem;">
//         <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${data.hits[i].recipe.label}</h5>
//           <p class="card-text"><strong>Health Info:</strong> ${data.hits[i].recipe.healthLabels}</p>
//           <p class="card-text"><strong>Prep Time:</strong> ${data.hits[i].recipe.totalTime} min</p>
//           <p class="card-text"><strong>Calories:</strong> ${data.hits[i].recipe.calories} cal</p>
//           <a href="${data.hits[i].recipe.url}" class="btn btn-primary" target="_blank">Full Recipe</a>
//         </div>
//       </div>
//       </div>
//       </div>
//       `
//   }
//   document.querySelector("#content").innerHTML = display_Result;
// }
// -----------------------------------------------------------

// recipe API 2

// add an event listener to the button that runs the function sendApiRequest when it is clicked.
const content = document.getElementById("content");
let searchNoInput = document.createElement("div")
let searchInput = document.querySelector(".searchInputRecipe")
let searchButton = document.querySelector("#search")

content.appendChild(searchNoInput)

searchButton.addEventListener("click", () => {
  console.log("button pressed")

  // debugger;
  if (searchInput.value == "") {
    setTimeout(function () {
      searchNoInput.innerHTML = "<h2> Please enter a name.</h2>" // only working once at the moment.
      $(searchNoInput).fadeOut(5000);
    }, 500);
    return;
  } else {
    sendApiRequest(searchInput.value)
  }
})

//an asysncrhonous function to fetch data from the API.
async function sendApiRequest(text) {
  let search = text;

  let APP_ID = "8890b18e"
  let API_KEY = "83f29000c0d94a9e37e048533135f2c4"
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${search}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

function useApiData(data) {

  const content = document.getElementById("content");

  let display_Result = "";

  let counter = 0;

  for (let i = 0; i < data.hits.length; i++) {

    if (counter == 0) {
      `
      <div class="row wrapper active">
          <div class="col-12 col-sm-6 col-md-4">
          <div class="card" style="width: 18rem;">
            <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body carousel-item">
              <h5 class="card-title">${data.hits[i].recipe.label}</h5>
              <p class="card-text"><strong>Health Info:</strong> ${data.hits[i].recipe.healthLabels}</p>
              <p class="card-text"><strong>Prep Time:</strong> ${data.hits[i].recipe.totalTime} min</p>
              <p class="card-text"><strong>Calories:</strong> ${data.hits[i].recipe.calories} cal</p>
              <a href="${data.hits[i].recipe.url}" class="btn btn-primary" target="_blank">Full Recipe</a>
            </div>
          </div>
          </div>
          </div>
     
      `
      // document.querySelector("#content").innerHTML = display_Result;
      counter++;
    } else {
      display_Result = display_Result + `
    
      <div class="row wrapper">
          <div class="col-12 col-sm-6 col-md-4">
          <div class="card" style="width: 18rem;">
            <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body carousel-item">
              <h5 class="card-title">${data.hits[i].recipe.label}</h5>
              <p class="card-text"><strong>Health Info:</strong> ${data.hits[i].recipe.healthLabels}</p>
              <p class="card-text"><strong>Prep Time:</strong> ${data.hits[i].recipe.totalTime} min</p>
              <p class="card-text"><strong>Calories:</strong> ${data.hits[i].recipe.calories} cal</p>
              <a href="${data.hits[i].recipe.url}" class="btn btn-primary" target="_blank">Full Recipe</a>
            </div>
          </div>
          </div>
          </div>

      `
      // document.querySelector("#content").innerHTML = display_Result;
    }
    document.querySelector("#content").innerHTML = display_Result;
  }
}




