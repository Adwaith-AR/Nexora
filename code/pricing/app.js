const slideBtn = document.getElementById("MYswitchBtn");
const slideBtnBall = document.getElementById("MYswitchBtn_ball");
const MBasic = document.getElementById("MBasic");
const MStandard = document.getElementById("MStandard");
const MPremium = document.getElementById("MPremium");


let sliderBtnState = false
YBasic.classList.add("hide")
YStandard.style.display = "none";
YPremium.classList.add("hide")


slideBtn.onclick = function () {
          if (sliderBtnState == false) {

                    slideBtnBall.classList.add("toY");
                    sliderBtnState = true;
                    MBasic.classList.add("hide");
                    MStandard.style.display = "none";
                    MPremium.classList.add("hide");
                    YBasic.classList.remove("hide")
                    YStandard.style.display = "flex";
                    YPremium.classList.remove("hide")

          }
          else {
                    slideBtnBall.classList.remove("toY");
                    sliderBtnState = false; 
                    MBasic.classList.remove("hide");
                    MStandard.style.display = "flex";
                    MPremium.classList.remove("hide");
                    YBasic.classList.add("hide")
                    YStandard.style.display = "none";
                    YPremium.classList.add("hide")

          }
}