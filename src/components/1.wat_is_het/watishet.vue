<template>
  <!--  <div id="wat-is-het" data-spy="scroll" data-target=".navbar" data-offset="50">-->
  <div id="wat-is-het">

    <!--    VERBIND WHATSAPP-->
    <div id="gradient">
      <div id="verbind_whatsapp" class="pt-xl-5 pt-lg-5 pt-md-5 pt-sm-0 pt-5 pb-0">
        <div class="container-xl pt-xl-5 pt-lg-5 pt-md-5 pt-sm-0 pt-3">
          <div class="row" id="verbind">
            <div
                class="offset-xl-0 offset-lg-0 offset-md-1 offset-sm-1 offset-1 col-xl-7 col-lg-6 pl-xl-4 col-md-10 col-sm-10 col-10 justify-content-xl-start justify-content-lg-start justify-content-md-center justify-content-sm-center text-left      order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2   pl-lg-5"
                data-aos="fade-right" data-aos-duration="1200" data-aos-offset="350">
              <h2 class="mb-xl-3 mb-lg-3 mb-md-4 mb-sm-4 mb-4">{{ WatIsHet.verbindWhatsapp.title }}</h2>
              <div v-for="(item, index) in WatIsHet.verbindWhatsapp.description" :key="index">
                <p>{{ item }}</p>
              </div>
            </div>

            <div
                class="offset-xl-0 offset-lg-0 offset-md-2 offset-sm-1 offset-1 col-xl-5 col-lg-6 col-md-10 col-sm-10 col-10  mb-xl-0 mb-lg-0 mb-md-5 mb-sm-4 mb-4    order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1"
                data-aos="fade-left" data-aos-duration="1200" data-aos-offset="400">
              <img :src="imagePath + WatIsHet.verbindWhatsapp.image" :alt="WatIsHet.verbindWhatsapp.image"/>
            </div>
          </div>
        </div>
      </div>
      <div id="bg_wave"></div>

      <!--      BREAK 1-->
      <div id="break_one">
        <div class="container-xl">
          <div class="row my-0 pt-5 pb-0">
            <div class="col-12 text-center font-italic font-weight-bold text-white mt-5 pt-5 my-0" data-aos="fade-up"
                 data-aos-duration="1200" data-aos-offset="425">
              <p>"{{ WatIsHet.break1 }}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-xl py-5" id="whatsapp_integratie">
      <div class="row py-xl-5 py-lg-5 py-md-4">
        <div
            class="offset-xl-0 offset-lg-0 offset-md-2 offset-sm-2 offset-2 col-xl-6 col-lg-5 col-md-10 col-sm-10 col-10  mb-xl-0 mb-lg-0 mb-md-5 mb-sm-4 mb-4    order-xl-1 order-lg-1 order-md-1 order-sm-1 order-1"
            data-aos="fade-right" data-aos-duration="1200" data-aos-offset="450">
          <img :src="imagePath+WatIsHet.whatsappIntegratie.image" :alt="WatIsHet.whatsappIntegratie.image">
        </div>

        <div
            class="offset-xl-0 offset-lg-0 offset-md-1 offset-sm-1 offset-0 col-xl-6 col-lg-7 pl-xl-0 col-md-10 col-sm-10 justify-content-xl-start justify-content-lg-start justify-content-md-center justify-content-sm-center text-left      order-xl-2 order-lg-2 order-md-2 order-sm-2 order-2   pl-lg-5"
            data-aos="fade-up" data-aos-duration="1200" data-aos-offset="450">
          <h2 class="mb-xl-3 mb-lg-3 mb-md-4 mb-sm-4 mb-4">{{ WatIsHet.whatsappIntegratie.title }}</h2>
          <p>{{ WatIsHet.whatsappIntegratie.description }}</p>
          <div id="summary_integration" class="ml-xl-0 ml-lg-0 ml-md-0 ml-sm-3 ml-3"
               v-for="item in WatIsHet.whatsappIntegratie.checks" :key="item">
            <div class="d-flex">
              <i class="bi bi-check-lg mr-2"></i>
              <p class="mt-2 pt-1">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    MOGELIJKHEDEN-->
    <div class="container-xl py-5 mb-4" id="posibilities">
      <div class="row">
        <div class="col text-center" data-aos="fade-up" data-aos-duration="1200" data-aos-offset="250">
          <h2 class="mb-xl-4 mt-xl-0 mt-lg-0 mb-lg-3 mt-md-4 my-sm-4 my-4 mb-md-5 pb-md-5 text-center d-xl-block d-lg-none d-md-none d-sm-block d-block">
            {{ WatIsHet.title_posibs }}</h2>
          <h2 class="d-xl-none d-lg-block d-md-block d-sm-none d-none my-xl-4 my-lg-3 my-md-4 my-sm-4 my-4 mb-md-0 pb-md-5 text-center"
              v-html="WatIsHet.title_posibs992.replace(/(\n)/g, '<br />')"></h2>
        </div>
      </div>
      <div class="row">
        <div
            class="offset-xl-0 col-xl-5 offset-lg-0 col-lg-5 offset-md-2 col-md-10 offset-sm-2 col-sm-8 offset-0 col-6 my-xl-5 mt-lg-5 pt-lg-5"
            data-aos="fade-right" data-aos-duration="1200" data-aos-offset="250">
          <img :src="imagePath + WatIsHet.imgPosib" :alt="WatIsHet.imgPosib">
          <!--ATTRIBUTES-->
          <!--MOBILE-->
          <!--<a href="https://www.freepik.com/free-psd/nature-mobile-phone-screen-mockup_3993618.htm#query=phone%20mockuo&position=10&from_view=search&track=ais">Image by rawpixel.com</a> on Freepik-->

          <!--WHATSAPP SCREEN-->
          <!--Image by <a href="https://www.freepik.com/free-vector/whatsapp-screen-template_3049301.htm#query=WhatsApp%20screen&position=0&from_view=search&track=ais">Freepik</a>-->
        </div>
        <div
            class="offset-xl-0 col-xl-7 offset-lg-0 col-lg-7 offset-md-1 col-md-10 offset-sm-0 col-sm-12 offset-0 col-12  text-center">
          <div class="row my-3">
            <div
                class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-6 offset-sm-1 col-sm-10 offset-1 col-10 mt-xl-0 mt-3 p-0"
                data-aos="fade-up" data-aos-duration="1200" data-aos-offset="250"
                v-for="(item, index) in WatIsHet.mogelijkheden" :key="index.id">
              <div class="social_icon">
                <i :class="item.icon" id="icon_posib"></i>
                <!--                <i class="bi bi-check-lg" id="icon_posib"></i>-->
                <svg width="100" height="100" class="social_icon_svg">
                  <circle cx="50" cy="50" r="45" fill="#DC3545"></circle>
                </svg>
              </div>
              <h3 class="my-xl-3 my-lg-3 my-md-3 my-sm-3 my-3">{{ item.title }}</h3>
              <p style="line-height: 1.5; font-weight: 300">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    VOORDELEN-->
    <div id="advantages">
      <div class="container-xl py-xl-5 py-lg-5 py-md-5 py-sm-3 py-3">
        <div class="row py-5">
          <div class="col">
            <h2 class="mb-xl-5 mb-lg-5 mb-md-4 mb-sm-4 mb-4" data-aos="fade-up" data-aos-duration="1200"
                data-aos-offset="100">{{ WatIsHet.part_1_voordelen_title }}
              <span>{{ WatIsHet.span }}</span> {{ WatIsHet.part_2_voordelen_title }}</h2>

            <!--                        <div class="d-flex advantage_svg" v-for="(item, index) in WatIsHet.voordelen" :key="index">-->
            <div data-aos="fade-up" data-aos-duration="1200" data-aos-offset="250">
              <div class="d-flex advantage_svg" v-for="(item, index) in WatIsHet.voordelen" :key="index">
                <i class="bi bi-check-lg"></i>
                <svg width="100" height="100" class="mr-xl-2 mr-lg-2 mr-md-5 mr-sm-5">
                  <circle cx="45" cy="45" r="35" fill="#dc3545" stroke="#ffffff" stroke-width="7"></circle>
                </svg>
                <p class="mt-4 pt-2">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    BREAK 2-->
    <div class="container-fluid py-xl-5 py-lg-5 py-md-5 py-sm-4 py-4" id="break_two">
      <div class="row">
        <div class="col" data-aos="fade-right" data-aos-duration="1200" data-offset="600">
          <p class="text-center text-white font-italic font-weight-bold">{{ WatIsHet.break2 }}</p>
        </div>
      </div>
    </div>
  </div>
  <!--  </div>-->
  <!--  </div>-->
</template>

<script>
import infoOverWhatsapp from "../../assets/JSON/WatIsHet.json";

export default {
  name: "WatIsHet",
  data() {
    return {
      WatIsHet: infoOverWhatsapp,
      imagePath: '/src/assets/WatIsHet/',
    }
  },
}
</script>

<style scoped lang="scss">
@import "/src/scss/base";

//Variabelen
//----------

//BACKGROUND
//$greyBackground: #F3F6FA;
//$gradientLightRed: #F66767;

//USED COLORS
//$colorSecondary: #dc3545;
//$colorTertiary: #ffffff;

//FONT-SIZE
//$fontSizeParagraph: 1rem;
//$fontSizeBreak: 2.18rem;

//$transitionOnHover: all .2s ease-in-out;
//$effectOnHoverImg: translateY(-10px);

//-----------------------------------------------
//RESPONSIVE

//FONT-SIZE
//$FontSizeBreakTablet: 1.8rem;
//$FontSizeH2_BreakMobile: 1.5rem;
//$FontSizeParagraphMobile: 1rem;

//----------------------------------------------------------------------------------------------------------------------

#wat-is-het {
  overflow: hidden;

  #verbind_whatsapp {
    background: $greyBackground;
    overflow: hidden;

    #verbind {
      img {
        transition: $transitionOnHover;

        &:hover {
          transform: $effectOnHoverImg;
        }
      }
    }
  }

  #gradient {
    background: linear-gradient(to right, $gradientLightRed, $colorSecondary);

    #break_one {
      position: relative;
      width: 100%;
      bottom: 100px;
      background: linear-gradient(to right, $gradientLightRed, $colorSecondary);

      p {
        margin-top: 2%;
        font-size: $fontSizeBreak;
        color: $colorTertiary;
        margin-bottom: 0;
      }
    }
  }

  #bg_wave {
    background: url("/src/assets/WatIsHet/wave_under_header_v3.webp") no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
    height: 200px;
    z-index: 98;
    position: relative;
    background-position-x: 25%;
  }

  #whatsapp_integratie {
    img {
      width: 100%;

      transition: $transitionOnHover;

      &:hover {
        transform: $effectOnHoverImg;
      }
    }

    #summary_integration {
      p {
        font-size: $fontSizeParagraph;
      }

      .bi {
        color: $colorSecondary;
        font-size: 2.5rem;
      }
    }
  }

  //#compare {
  //  background: $greyBackground;
  //  //height: 100vh;
  //  border-radius: 350px 350px 350px 0;
  //}
  //
  //.possibilities {
  //  padding: 6.5% 1.5% 1.5% 1.5%;
  //  border-radius: 40px;
  //
  //  transition: $transitionOnHover;
  //  background: transparent;
  //
  //
  //  &:hover {
  //    transform: $effectOnHoverImg;
  //    box-shadow: $boxShadowHover;
  //    background: $colorSecondary;
  //    color: $colorTertiary;
  //  }
  //
  //
  //  h3 {
  //    font-size: $fontSizeH3;
  //    font-weight: bold;
  //  }
  //}


  /*CIRCLE WITH NUMBER*/
  #posibilities {
    h2 {
      font-size: 2rem;
    }

    img {
      transition: $transitionOnHover;

      &:hover {
        transform: $effectOnHoverImg;
      }
    }

    .social_icon {
      transition: $transitionOnHover;
      position: relative;

      &:hover {
        transform: scale(1.1);
      }

      .bi {
        font-size: 3rem;
        position: absolute;
        top: 13%;
        left: 43%;
        color: $colorTertiary;
      }
    }
  }

  #advantages {
    background: $greyBackground;
    border-radius: 0 250px 0 0;

    span {
      color: $colorSecondary;
    }

    h2 {
      font-size: 2rem;
    }

    .advantage_svg {
      position: relative;

      transition: $transitionOnHover;

      &:hover {
        transform: scale(1.05);

        p {
          //font-weight: bold;
        }
      }

      p {
        font-size: 19px;
        transition: $transitionOnHover;
      }

      .bi {
        position: absolute;
        top: 10%;
        left: 1.85%;
        font-size: 3rem;
        color: $colorTertiary;
      }
    }
  }

  #break_two {
    width: 100%;
    background: linear-gradient(to right, $gradientLightRed, $colorSecondary);

    p {
      font-size: $fontSizeBreak;
      //font-family: 'Raleway', sans-serif;

    }
  }
}

//----------------------------------------------------------------------------------------------------------------------
//RESPONSIVE

@media screen and (max-width: 1200px) {
}

@media screen and (min-width: 993px) and (max-width: 1199px) {
}

@media screen and (min-width: 769px) and (max-width: 992px) {
  #wat-is-het {
    overflow: hidden;

    #posibilities {
      img {
        margin-top: 15%;
      }
    }

    #gradient {
      //background-color: transparent;

      #break_one p {
        //background-color: transparent;
        font-size: 2rem;
      }
    }

    #advantages {
      border-radius: 0 150px 0 0;
    }

    #break_two p {
      font-size: 2rem;
    }
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  #wat-is-het {
    #gradient {
      #break_one p {
        font-size: $FontSizeBreakTablet;
      }
    }

    #whatsapp_integratie {
      img {
        width: 100%;
      }
    }

    #advantages {
      border-radius: 0 150px 0 0;

      .advantage_svg {
        svg {
          display: none;
        }

        .bi {
          display: none;
        }
      }
    }

    //.social_icon_svg svg {
    //  margin-right: 5%;
    //  background-color: yellow;
    //}

    #break_two p {
      font-size: $FontSizeBreakTablet;
    }

  }
}

@media screen and (min-width: 415px) and (max-width: 576px) {
  #wat-is-het {
    #verbind {
      img {
        width: 100%;
      }

      h2 {
        font-size: $FontSizeH2_BreakMobile;
      }
    }

    #whatsapp_integratie {
      img {
        width: 100%;
      }

      h2 {
        font-size: $FontSizeH2_BreakMobile;
      }
    }

    #break_two p {
      font-size: $FontSizeH2_BreakMobile;
    }

    #posibilities {
      h2 {
        font-size: $FontSizeH2_BreakMobile;
      }

      h3 {
        font-size: $FontSizeH2_BreakMobile;
      }

      p {
        font-size: $FontSizeParagraphMobile;
      }

      .social_icon {
        //margin: 0 auto;
        //position: absolute;
        //top: -60%;
        //left: 38%;

        .bi {
          top: 4.5%;
          left: 44.5%;
        }
      }
    }

    #advantages {
      border-radius: 0 150px 0 0;

      .advantage_svg {
        svg {
          display: none;
        }

        .bi {
          display: none;
        }
      }
    }

  }
}

@media screen and (max-width: 415px) {
  #wat-is-het {
    #verbind {
      img {
        width: 100%;
      }

      h2 {
        font-size: $FontSizeH2_BreakMobile;
      }
    }

    #whatsapp_integratie {
      img {
        width: 100%;
      }

      h2 {
        font-size: $FontSizeH2_BreakMobile;
      }
    }

    #gradient {
      #break_one p {
        font-size: $FontSizeH2_BreakMobile;
      }
    }

    #posibilities {
      h2 {
        font-size: $FontSizeH2_BreakMobile;
      }

      h3 {
        font-size: $FontSizeH2_BreakMobile;
      }

      p {
        font-size: $FontSizeParagraphMobile;
      }

      .social_icon {
        //margin: 0 auto;
        //position: absolute;
        //top: -60%;
        //left: 38%;

        .bi {
          top: 4.5%;
          left: 43%;
        }
      }
    }

    #break_two p {
      font-size: $FontSizeH2_BreakMobile;
    }

    #advantages {
      border-radius: 0 150px 0 0;

      .advantage_svg {
        svg {
          display: none;
        }

        .bi {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 320px) {
  #wat-is-het {
    #verbind {

      img {
        width: 100%;
      }

      h2 {
        font-size: $FontSizeH2_BreakMobile;
      }

      p {
        font-size: $FontSizeParagraphMobile;
      }
    }

    #posibilities {
      h2 {
        font-size: $FontSizeH2_BreakMobile;
      }

      h3 {
        font-size: $FontSizeH2_BreakMobile;
      }

      p {
        font-size: $FontSizeParagraphMobile;
      }

      .social_icon {
        //margin: 0 auto;
        //position: absolute;
        //top: -60%;
        //left: 38%;

        .bi {
          top: 3%;
          left: 41%;
        }
      }
    }
  }
}

</style>