let portfolioData = {};

$(window).load(async function () {  

  // FETCH portfolio data file
  // try {
  //   portfolioData = localStorage.getItem('portfolioData') 
  //     ? JSON.parse(localStorage.getItem('portfolioData')) 
  //     : await getData();
  // } catch (error) {
  //   console.log(error);
  // }
    
  var msDuration = $('html').css('--splash-screen-duration').slice(0, 5);
  
  $(".splash-screen").delay(msDuration).queue(function () {
    $(this).remove();
  });

  // INTRO
  // document.getElementById("intro-description").innerHTML = portfolioData.introText;

  // ABOUT ME
  // let aboutMeContent = document.getElementById("about-me-content");

  // portfolioData.aboutMeText.forEach(text => {
  //   let aboutMeParagraph = aboutMeContent.firstElementChild;
  //   aboutMeParagraph.innerHTML = text;
  //   aboutMeParagraph = aboutMeParagraph.cloneNode(true);
  //   aboutMeContent.append(aboutMeParagraph);
  // });


  
})

// const getData = async () => {
//   let data = await fetch('portfolio-data.json');
//   if (data.ok) {
//     let jsonValue = await data.json();

//     localStorage.setItem("portfolioData", JSON.stringify(jsonValue));

//     return Promise.resolve(jsonValue);
//   }

//   return Promise.reject("*** json file not found");
// }

