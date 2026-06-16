const allBtn = document.getElementById("allProjectBtn")
const webDesignBtn = document.getElementById("webDesignBtn")
const webDevelopmentBtn = document.getElementById("webDevelopmentBtn")
const EcommerceBtn = document.getElementById("E-commerceBtn")
const BrandingBtn = document.getElementById("BrandingBtn")
const DesignBtn = document.getElementById("DesignBtn")
const webDesign_1 = document.getElementById("webDesign_1")
const Webdevelopment_1 = document.getElementById("Webdevelopment_1")
const webDesign_2 = document.getElementById("webDesign_2")
const ECommerce = document.getElementById("E-Commerce")
const MobileApp = document.getElementById("MobileApp")
const Branding = document.getElementById("Branding")




allBtn.classList.add("BtnON")


allBtn.onclick = function () {
          allBtn.classList.add("BtnON")
          DesignBtn.classList.remove("BtnON")
          BrandingBtn.classList.remove("BtnON")
          EcommerceBtn.classList.remove("BtnON")
          webDesignBtn.classList.remove("BtnON")
          webDevelopmentBtn.classList.remove("BtnON")
          webDesign_1.classList.remove("hide")
          Webdevelopment_1.classList.remove("hide")
          webDesign_2.classList.remove("hide")
          ECommerce.classList.remove("hide")
          MobileApp.classList.remove("hide")
          Branding.classList.remove("hide")
}

DesignBtn.onclick = function(){
          allBtn.classList.remove("BtnON");
          DesignBtn.classList.add("BtnON");
          BrandingBtn.classList.remove("BtnON");
          EcommerceBtn.classList.remove("BtnON");
          webDesignBtn.classList.remove("BtnON");
          webDevelopmentBtn.classList.remove("BtnON");
          webDesign_1.classList.add("hide");
          Webdevelopment_1.classList.add("hide");
          webDesign_2.classList.add("hide");
          ECommerce.classList.add("hide");
          MobileApp.classList.remove("hide")
          Branding.classList.add("hide")
}
BrandingBtn.onclick = function(){
          allBtn.classList.remove("BtnON");
          DesignBtn.classList.remove("BtnON");
          BrandingBtn.classList.add("BtnON");
          EcommerceBtn.classList.remove("BtnON");
          webDesignBtn.classList.remove("BtnON");
          webDevelopmentBtn.classList.remove("BtnON");
          webDesign_1.classList.add("hide");
          Webdevelopment_1.classList.add("hide");
          webDesign_2.classList.add("hide");
          ECommerce.classList.add("hide");
          MobileApp.classList.add("hide");
          Branding.classList.remove("hide")
}
EcommerceBtn.onclick = function () {
          allBtn.classList.remove("BtnON");
          DesignBtn.classList.remove("BtnON");
          BrandingBtn.classList.remove("BtnON");
          EcommerceBtn.classList.add("BtnON");
          webDesignBtn.classList.remove("BtnON");
          webDevelopmentBtn.classList.remove("BtnON");
          webDesign_1.classList.add("hide");
          Webdevelopment_1.classList.add("hide");
          webDesign_2.classList.add("hide");
          ECommerce.classList.remove("hide");
          MobileApp.classList.add("hide");
          Branding.classList.add("hide")
}
webDesignBtn.onclick = function () {
          allBtn.classList.remove("BtnON");
          DesignBtn.classList.remove("BtnON");
          BrandingBtn.classList.remove("BtnON");
          EcommerceBtn.classList.remove("BtnON");
          webDesignBtn.classList.add("BtnON");
          webDevelopmentBtn.classList.remove("BtnON");
          webDesign_1.classList.remove("hide");
          Webdevelopment_1.classList.add("hide");
          webDesign_2.classList.remove("hide");
          ECommerce.classList.add("hide");
          MobileApp.classList.add("hide");
          Branding.classList.add("hide")
}
webDevelopmentBtn.onclick = function () {
          allBtn.classList.remove("BtnON");
          DesignBtn.classList.remove("BtnON");
          BrandingBtn.classList.remove("BtnON");
          EcommerceBtn.classList.remove("BtnON");
          webDesignBtn.classList.remove("BtnON");
          webDevelopmentBtn.classList.add("BtnON");
          webDesign_1.classList.add("hide");
          Webdevelopment_1.classList.remove("hide");
          webDesign_2.classList.add("hide");
          ECommerce.classList.add("hide");
          MobileApp.classList.add("hide");
          Branding.classList.add("hide")
}