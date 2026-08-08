

const cards = document.querySelectorAll(".card");
const collage = document.getElementById("Collage");
collage.style.opacity = "0";
collage.style.transform = "translateX(240px)";
collage.style.transition = "1s";
document.body.display = "0";

const observer = new IntersectionObserver(entries => {

          entries.forEach(entry => {

                    if (entry.isIntersecting) {

                              entry.target.style.opacity = "1";

                              entry.target.style.transform = "translateY(0px)";

                    }

          });

});
setTimeout(() => {
          collage.style.opacity = "1";
          collage.style.transform = "translateX(0px)";

 },300

)
const observer2 = new IntersectionObserver(entries => {

          entries.forEach(entry => {

                    if (entry.isIntersecting) {

                              entry.target.style.opacity = "1";

                              entry.target.style.transform = "translateX(0px)";

                    }

          });

});

cards.forEach(card => {

          card.style.opacity = "0";

          card.style.transform = "translateY(40px)";

          card.style.transition = "0.6s";

          observer.observe(card);

});


const button = document.querySelector(".search-box button");

button.addEventListener("click", () => {

          const room = document.querySelector(".search-box input").value;

          if (room === "") {

                    alert("Please enter a classroom number.");

          }

          else {

                    alert("Searching for Classroom: " + room);

          }

});

