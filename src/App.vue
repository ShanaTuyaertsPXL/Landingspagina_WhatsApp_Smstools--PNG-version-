<template>
  <Navbar/>
  <HomePageView/>
  <Footer/>
</template>

<script>
import Navbar from "./components/0.header/NavbarComponent.vue";
import HomePageView from "./components/HomePageView.vue";
import Footer from "./components/8.Footer/FooterComponent.vue";

export default {
  // provide() {
  //   return {
  //     style: "src/scss/base";
  //   }
  // },
  components: {
    Navbar,
    HomePageView,
    Footer
  },
  mounted() {
    AOS.init();
  }
}
</script>

<style lang="scss">
//Variabelen
//----------

//BACKGROUND
$greyBackground: #F3F6FA;
$gradientLightRed: #F66767;

//USED COLORS
$colorPrimary: #52555a;
$colorSecondary: #dc3545;
$colorPrimary-hover: #f62626;
$colorTertiary: #ffffff;
$colorInactive: #CCCCCC;

//COLOR TEXT
$colorTitle: #393e46;
$colorParagraph: #6a727f;

//FONT-SIZE
$fontSizeParagraph: 1rem;
$fontSizeH2: 1.75rem;
$fontSizeH3: 1.25rem;
$fontSizeBreak: 2.18rem;

//BOX-SHADOW
$boxShadow: 0 0 20px rgba(0, 0, 0, .16);
$boxShadowHover: 0 10px 20px rgba(0, 0, 0, .16);
$boxShadowTerms: 0 0 10px rgba(0, 0, 0, 0.16);

$transitionOnHover: all .2s ease-in-out;
$effectOnHoverImg: translateY(-10px);

//FOOTER
$footerBackground: #282F3A;
$footerBackgroundBottom: #252B36;
$colorLinksFooter: #a0a8b5;

//-----------------------------------------------
//RESPONSIVE

//FONT-SIZE
$FontSizeBreakTablet: 1.8rem;
$FontSizeH2_BreakMobile: 1.5rem;
$FontSizeH3Mobile: 1rem;
$FontSizeParagraphMobile: 1rem;

//-----------------------------------------------
//EXTENDS
%effectHoverWithShadow {
  transform: translateY(-10px);
  $boxShadowHover: 0 10px 20px rgba(0, 0, 0, .16);
}

//----------------------------------------------------------------------------------------------------------------------

//@import "src/scss/base";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: 'Open Sans', sans-serif;
}

body {
  position: relative;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Raleway', sans-serif;
}

h1, h2 {
  //color: #494C5A;
  color: $colorTitle;
  font-weight: 700;
  font-size: $fontSizeH2;
}

h3 {
  font-size: $fontSizeH3;
  font-weight: bold;
}

p {
  font-size: $fontSizeParagraph;
  color: $colorParagraph;
}


//SCROLL INDICATOR
//! * The progress container
.progress-container {
  width: 100%;
  height: 4px;
  background: $colorTertiary;
  position: absolute;
  top: 100%;
}

//!* The progress bar (scroll indicator)  *!
.progress-bar {
  height: 4px;
  border-radius: 0 40px 40px 0;
  background: $colorSecondary;
  width: 0;
  transition: none;
}


//SCROLLBAR

//!* width *!
::-webkit-scrollbar {
  width: 8px;
}

//!* Track *!
::-webkit-scrollbar-track {
  background: $colorTertiary;
}

//!* Handle *!
::-webkit-scrollbar-thumb {
  background: $colorSecondary;
  border-radius: 10px;
}

//!* Handle on hover *!
::-webkit-scrollbar-thumb:hover {
  background: $colorSecondary;
}


//-----------------------------------

</style>
