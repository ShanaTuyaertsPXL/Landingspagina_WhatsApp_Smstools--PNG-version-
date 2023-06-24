<template>
  <!--  <div class="container-fluid" id="header" v-for="item in header" :key="header">-->
  <div class="container-fluid" id="header">
    <div class="row">
      <div
          class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-10 offset-sm-0 col-sm-12 offset-0 col-12 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-0 pt-xl-0 pt-lg-5 pt-md-4 pt-sm-5 pt-4">
        <h1>{{ header.title }} <span><a href="https://www.smstools.be/" target="_blank">{{ header.span }}</a></span>
        </h1>
        <p>{{ header.description }}</p>
        <a href="#wat-is-het">
          <!--          <button type="button" class="btn btn-primary">Lees meer<i class="fa-solid fa-chevron-down ml-2"></i></button>-->
          <button type="button" class="btn" style="vertical-align:middle"><span>{{ header.button }}</span></button>
        </a>

      </div>
      <div
          class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-0  pl-xl-0 pl-lg-0  d-xl-block d-lg-block d-md-none d-sm-none d-none">
        <img :src="imagePath + header.logo" :alt="header.logo" id="whatsapp-logo">
        <img :src="imagePath + header.shadow" :alt="header.shadow" id="shadow">
      </div>
    </div>
  </div>

</template>

<script>
import headerInfo from "../../assets/JSON/header.json"

export default {
  name: "HeaderComponent.vue",
  // inject:
  //     ['style'],
  data() {
    return {
      header: headerInfo,
      // data: [],
      imagePath: "/src/assets/"
    }
  },
}
</script>

<style lang="scss">
//@import "src/scss/base";
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

#header {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url("/src/assets/Header/wavy_form.webp") no-repeat bottom;
  background-size: cover;

  h1 {
    font-size: 60px;
    //transform: translateY(100%);
    margin: 25% 0 0 10%;

    span a {
      font-family: "Raleway", sans-serif;
    }
  }

  p {
    margin: 2.5% 0 0 10%;
    font-size: 18px;
  }

  button {
    display: inline-block;
    text-align: center;
    margin: 5% 0 0 10%;
    background: $colorTertiary;
    border: 4px solid $colorSecondary;
    border-radius: 50px;
    color: $colorSecondary;
    font-weight: 700;
    font-size: 24px;
    cursor: pointer;
  }

  button:hover {
    background: $colorSecondary;
    color: $colorTertiary;
    border: 4px solid $colorSecondary;
  }


  button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: $transitionOnHover;
  }

  button span:after {
    font-family: "Font Awesome 5 Free";
    //font-weight: 600;
    content: "\f078";
    font-size: 30px;


    position: absolute;
    opacity: 0;
    top: -3px;
    right: -20px;
    transition: all .005s ease-in-out;
  }

  button:hover span {
    padding-right: 40px;
  }

  button:hover span:after {
    opacity: 1;
    right: 0;
  }


  span a {
    color: $colorSecondary;
    text-decoration: none;
  }

  #whatsapp-logo {
    animation: upDown 4s ease-in-out infinite;

    &:hover {
      //animation: rotate 4s ease-in-out infinite;
      //animation: shake .5s infinite;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
      margin-top: -10%;
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
      margin-top: -10%;
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
      margin-top: -10%;
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
      margin-top: -10%;
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
      margin-top: -10%;
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
      margin-top: -10%;
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
      margin-top: -10%;
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
      margin-top: -10%;
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
      margin-top: -10%;
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
      margin-top: -10%;
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
      margin-top: -10%;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(10deg) translate(-13%, 0);
      margin-top: -10%;
    }
    50% {
      transform: rotate(-10deg) translate(10%, 0);
      margin-top: -13%;
    }
    100% {
      transform: rotate(10deg) translate(-13%, 0);
      margin-top: -10%;
    }
  }

  @keyframes scaleOnRotate {
    0% {
      transform: rotate(10deg) translate(-13%, 0);
      bottom: 10px;
    }
    50% {
      transform: rotate(-10deg) translate(10%, 0);
      bottom: 10px;
    }
    100% {
      transform: rotate(10deg) translate(-13%, 0);
      bottom: 10px;
    }

  }

  @keyframes upDown {
    0% {
      margin-top: -10%;
    }
    50% {
      margin-top: -13%;
    }
    100% {
      margin-top: -10%;
    }
  }

  @keyframes scale {
    0% {
      transform: scaleX(1.0);
      -webkit-transform: scaleX(1.0);
    }
    50% {
      transform: scaleX(0.5);
      -webkit-transform: scaleX(0.75);
    }
    100% {
      transform: scaleX(1.0);
      -webkit-transform: scaleX(1.0);
    }
  }

}

#shadow {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  bottom: 10px;

  animation: scale 5s ease-in-out infinite;

  //&:hover {
  //  animation: scaleOnRotate 4s ease-in-out infinite
  //}
}

//#header>#shadow {
//  &:hover {
//    animation: scaleOnRotate 4s ease-in-out infinite;
//  }
//}

//----------------------------------------------------------------------------------------------------------------------
//RESPONSIVE

@media screen and (max-width: 1200px) {
  #header {
    overflow: hidden;

    #whatsapp-logo {
      position: absolute;
      right: -18%;
    }
  }
}

@media screen and (min-width: 993px) and (max-width: 1199px) {

}

@media screen and (min-width: 769px) and (max-width: 992px) {
  #header {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      font-size: 1.5rem;
    }

    #whatsapp-logo {

      position: absolute;
      right: -25%;
    }
  }

}

@media screen and (min-width: 577px) and (max-width: 768px) {
  #header {
    h1 {
      font-size: 50px;
    }
  }
}

@media screen and (min-width: 415px) and (max-width: 576px) {
  #header {
    h1 {
      font-size: 50px;
    }

    p {
      font-size: 1rem;
    }
  }
}

@media screen and (max-width: 415px) {
  #header {
    h1 {
      font-size: 50px;
    }

    p {
      font-size: 1rem;
    }
  }
}

@media screen and (max-width: 320px) {
  #header {
    h1 {
      margin-top: 30%;
      font-size: 40px;
    }

    p {
      font-size: 1rem;
    }

    button {
      font-size: 1.25rem;
    }
  }

}
</style>