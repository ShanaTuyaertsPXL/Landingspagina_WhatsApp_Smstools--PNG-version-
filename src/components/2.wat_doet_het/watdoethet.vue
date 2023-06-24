<template>
  <!--    <div id="wat-doet-het" data-spy="scroll" data-target=".navbar" data-offset="50">-->
  <div id="wat-doet-het">
    <!--  <div id="wat-doet-het">-->
    <!--VERSCHILLENDE MANIEREN VOOR KLANTENVERBINDING-->
    <div class="container-xl py-5 mb-5" id="verschillende_manieren">
      <div class="row">
        <div class="col">
          <h2 class="mb-0 py-xl-5 py-lg-5 py-md-5 py-sm-5 py-0" data-aos="fade-up" data-aos-duration="1200"
              data-aos-offset="200">{{ WatDoetHet.title_verschillendeManieren }}</h2>
        </div>
      </div>
      <div class="row justify-content-center" data-aos="fade-up" data-aos-duration="1200" data-aos-offset="200">
        <!--        <div class="offset-xl-0 offset-lg-0 offset-md-0 offset-sm-0 offset-0 col-xl-5 col-lg-5 col-md-5 col-sm-10 col-10 mb-5 mt-sm-5 mx-xl-4 text-center two_ways_cards" v-for="item in WatDoetHet.verschillendeManieren" :key="item">-->
        <div
            class="offset-xl-0 offset-lg-0 offset-md-0 offset-sm-0 offset-0 col-xl-5 col-lg-5 col-md-8 col-sm-10 col-10 mb-4 mt-sm-5 mt-5 text-center two_ways_cards"
            :class="item.class"
            v-for="item in WatDoetHet.verschillendeManieren" :key="item">
          <div class="number">
            <p style="font-size: 60px; color: #DC3545; font-weight: 650">{{ item.number }}</p>
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="45" fill="#ffffff" stroke-width="10" stroke="#F3F6FA"></circle>
            </svg>
          </div>
          <h3 class="mb-3">{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!----------------------------------------------------------------------------------------------------------------->
    <!--COMMUNICATIE VERBETEREN-->
    <div id="communicatie_verbeteren" class="pt-5">
      <div class="container-xl py-xl-5 py-lg-0 py-md-0 py-sm-4 py-4">
        <div class="row">
          <div class="col" data-aos="fade-up" data-aos-duration="1200" data-aos-offset="200">
            <h2 class="mt-0 mb-5 mt-xl-0 mt-lg-0 mt-md-4 mt-sm-0 mt-0 text-center d-xl-block d-lg-none d-md-none d-sm-none d-block">
              {{ WatDoetHet.title_communicatieVerbeteren }}</h2>
            <h2 class="mt-0 mb-5 mt-xl-0 mt-lg-0 mt-md-4 mt-sm-0 mt-0 text-center d-xl-none d-lg-block d-md-block d-sm-block d-none"
                v-html="WatDoetHet.title_communicatieVerbeterenMobile.replace(/(\n)/g, '<br />')"></h2>
          </div>
        </div>
        <div class="row my-0">
          <div
              class="col-xl-5 col-lg-5 col-md-5 offset-sm-1 offset-1 ml-xl-0 ml-lg-0 ml-md-0 ml-sm-5 pl-sm-5 col-sm-10 col-10 py-xl-3 py-lg-3 py-md-3 py-sm-0 py-0 my-sm-4 mt-4 order-xl-1 order-lg-1 order-md-1 order-sm-1 order-1" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="200">
            <img :src="imagePath + WatDoetHet.communicatieVerbeteren[1].image"
                 :alt="WatDoetHet.communicatieVerbeteren[1].image" class="info">
          </div>

          <!--ATTRIBUTES-->
            <!--MOBILE-->
            <!--<a href="https://www.freepik.com/free-psd/mobile-phone-screen-mockup-design_3574836.htm#query=person%20smiling%20with%20phone%20in%20hand%20trucker&position=7&from_view=search&track=ais">Image by rawpixel.com</a> on Freepik-->

            <!--BUILDING-->
<!--          <a href="https://www.freepik.com/free-photo/industrial-park-factory-building-warehouse_1297020.htm#query=hangar&position=0&from_view=search&track=sph">Image by 4045</a> on Freepik-->

            <!--WHATSAPP SCREEN-->
            <!--Image by <a href="https://www.freepik.com/free-vector/whatsapp-screen-template_3049301.htm#query=WhatsApp%20screen&position=0&from_view=search&track=ais">Freepik</a>-->
          <div
              class="col-xl-7 col-lg-7 col-md-7 pt-xl-5 pl-xl-5 pt-lg-5 mt-xl-5 mt-lg-5 mt-md-4 my-sm-0 my-0 order-xl-2 order-lg-2 order-md-2 order-sm-2 order-2" data-aos="fade-left" data-aos-duration="1200" data-aos-offset="200">
            <div class="d-flex">
              <i :class="WatDoetHet.communicatieVerbeteren[1].icon"
                 class="mr-xl-3 ml-xl-0 mr-lg-3 ml-lg-0 mr-md-3 ml-md-0 ml-sm-3 mr-sm-3 mr-0 ml-3"></i>
              <h3>{{ WatDoetHet.communicatieVerbeteren[1].communicatieManier }}</h3>
            </div>
            <p class="text-xl-left text-lg-left text-md-left text-sm-center text-center">
              {{ WatDoetHet.communicatieVerbeteren[1].description }}</p>
          </div>
        </div>

        <div class="row my-0" data-aos="flip-down" data-aos-duration="600" data-aos-offset="200">
          <div
              class="offset-xl-4 offset-lg-4 offset-md-5 offset-sm-4 offset-4 pr-5 col-xl-7 col-lg-7 col-md-7 col-sm-10 col-10 py-lg-0 py-md-0 py-sm-3">
            <img src="/src/assets/WatDoetHet/arrow_to_right.webp" alt="Arrow right" class="arrow_communication">
          </div>
        </div>

        <div class="row my-0">
          <div
              class="col-xl-7 col-lg-7 col-md-7 pt-xl-5 mt-xl-5 pl-xl-4 pl-lg-4 pt-lg-5 mt-lg-5 mt-md-4 pl-md-4 my-sm-0 my-0 order-xl-1 order-lg-1 order-md-1 order-sm-2 order-2" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="200">
            <div class="d-flex">
              <i :class="WatDoetHet.communicatieVerbeteren[2].icon"
                 class="mr-xl-3 ml-xl-0 mr-lg-3 ml-lg-0 mr-md-3 ml-md-0 ml-sm-3 mr-sm-3 mr-0 ml-3"></i>
              <h3>{{ WatDoetHet.communicatieVerbeteren[2].communicatieManier }}</h3>
            </div>
            <p class="text-xl-left text-lg-left text-md-left text-sm-center text-center">
              {{ WatDoetHet.communicatieVerbeteren[2].description }}</p>
          </div>
          <div
              class="col-xl-5 col-lg-5 col-md-5 offset-sm-1 offset-1 ml-xl-0 ml-lg-0 ml-md-0 ml-sm-5 pl-sm-5 col-sm-10 col-10 py-xl-3 py-lg-3 py-md-3 py-sm-0 py-0 my-sm-4 mt-4 order-xl-1 order-lg-1 order-md-1 order-sm-1 order-1" data-aos="fade-left" data-aos-duration="1200" data-aos-offset="450">
            <img :src="imagePath + WatDoetHet.communicatieVerbeteren[2].image"
                 :alt="WatDoetHet.communicatieVerbeteren[2].image" class="info">
            <!--ATTRIBUTES-->
              <!--TABLET-->
              <!--<a href="https://www.freepik.com/free-psd/woman-using-digital-tablet-car_2566712.htm#query=location&position=11&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik&lt;!&ndash;-->

              <!--EUROPE-->
              <!--Image by <a href="https://www.freepik.com/free-vector/map-europe-with-colors-flat-style_2090771.htm#query=belgium&position=4&from_view=search&track=sph">Freepik</a>-->
          </div>
        </div>

        <div class="row my-0" data-aos="flip-down" data-aos-duration="1200" data-aos-offset="600">
          <div
              class="offset-xl-5 offset-lg-5 offset-md-5 offset-sm-6 offset-5 pl-xl-5 pl-lg-5 pl-md-7 col-xl-7 col-lg-7 col-md-7 col-sm-10 col-10 py-lg-0 py-md-0 py-sm-3">
            <img src="/src/assets/WatDoetHet/arrow_to_left.webp" alt="Arrow left" class="arrow_communication">
          </div>
        </div>

        <div class="row my-0">

          <div
              class="col-xl-5 col-lg-5 col-md-5 offset-sm-1 offset-1 ml-xl-0 ml-lg-0 ml-md-0 ml-sm-5 pl-sm-5 col-sm-10 col-10 py-xl-3 py-lg-3 py-md-3 py-sm-0 py-0 my-sm-4 mt-4 order-xl-1 order-lg-1 order-md-1 order-sm-1 order-1"  data-aos="fade-right" data-aos-duration="1200" data-aos-offset="600">
            <img :src="imagePath + WatDoetHet.communicatieVerbeteren[3].image"
                 :alt="WatDoetHet.communicatieVerbeteren[3].image" class="info">
          </div>
          <div
              class="col-xl-7 col-lg-7 col-md-7 pt-xl-5 pl-xl-5 pt-lg-5 mt-xl-5 mt-lg-5 mt-md-5 my-sm-0 my-0 order-xl-2 order-lg-2 order-md-2 order-sm-2 order-2" data-aos="fade-left" data-aos-duration="1200" data-aos-offset="600">
            <div class="d-flex">
              <i :class="WatDoetHet.communicatieVerbeteren[3].icon"
                 class="mr-xl-3 ml-xl-0 mr-lg-3 ml-lg-0 mr-md-3 ml-md-0 ml-sm-3 mr-sm-3 mr-0 ml-3"></i>
              <h3>{{ WatDoetHet.communicatieVerbeteren[3].communicatieManier }}</h3>
            </div>
            <p class="text-xl-left text-lg-left text-md-left text-sm-center text-center">
              {{ WatDoetHet.communicatieVerbeteren[3].description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!--    VERSTUUR EN ONTVANG CHAT BERICHTEN VAN KLANTEN VIA ONZE SOFTWARE-->
    <div class="container-fluid pb-5" id="software">
      <div class="container-xl">
        <div class="row" data-aos="fade-up" data-aos-duration="1200" data-aos-ffset="600">
          <div class="offset-xl-2 offset-lg-2 offset-md-1 col-xl-8 col-lg-8 col-md-10 offset-0 col-12">
            <h2 class="text-center mb-xl-4 mb-lg-4 mb-md-0 mb-sm-0 mb-0 py-xl-5 py-lg-5 pt-md-5 pb-md-3 py-sm-3 py-3">
              {{ WatDoetHet.title_software }}</h2>
          </div>
        </div>


        <!--        <div class="container">-->
        <div class="row mb-5 " v-for="(item,index) in WatDoetHet.software" :key="item.id">

          <div
              class="offset-xl-0 offset-lg-0 offset-md-3 offset-sm-2 offset-1 col-xl-5 col-lg-5 col-md-8 col-sm-7 col-8 py-xl-0 pt-lg-5 pb-lg-0 py-md-5 py-sm-5 py-5"
              :class="{'left': index % 2 === 1, 'right': index % 2 === 0 }" :data-aos="item.aosImg" :data-aos-duration="item.duration" data-aos-offset="600">
            <img :src="imagePath + item.image" :alt="item.image">
          </div>
          <div
              class="offset-xl-0 offset-lg-0 offset-md-1 offset-sm-1 offset-1 col-xl-7 col-lg-7 col-md-10 col-sm-10 col-10 image_info_whatsapp"
              :class="{'right': index % 2 === 1, 'left': index % 2 === 0 }" :data-aos="item.aosTxt" :data-aos-duration="item.duration" data-aos-offset="600">
            <i :class="item.icon"></i>
            <h3 class="mb-3">{{ item.title }}</h3>
            <p v-html="item.description.replace(/(\n)/g, '<br />')"></p>


            <!--            </div>-->
          </div>
        </div>


      </div>
    </div>
  </div>


</template>

<script>
import WatDoetHet from "../../assets/JSON/WatDoetHet.json";

export default {
  name: "WatDoetHet",
  data() {
    return {
      WatDoetHet: WatDoetHet,
      imagePath: "/src/assets/WatDoetHet/"
    }
  }
}
</script>

<style scoped lang="scss">
@import "/src/scss/base";
//Variabelen
//----------
//BACKGROUND
//$greyBackground: #F3F6FA;

//USED COLORS
//$colorPrimary: #52555a;
//$colorSecondary: #dc3545;
//$colorTertiary: #ffffff;

//FONT-SIZE
//$fontSizeParagraph: 1rem;
//$fontSizeH2: 1.75rem;
//$fontSizeH3: 1.25rem;

//BOX-SHADOW
//$boxShadow: 0 0 20px rgba(0, 0, 0, .16);
//$boxShadowHover: 0 10px 20px rgba(0, 0, 0, .16);

//$transitionOnHover: all .2s ease-in-out;
//$effectOnHoverImg: translateY(-10px);

//-----------------------------------------------
//RESPONSIVE

//FONT-SIZE
//$FontSizeH2_BreakMobile: 1.5rem;
//$FontSizeH3Mobile: 1rem;
//$FontSizeParagraphMobile: 1rem;

//----------------------------------------------------------------------------------------------------------------------
//EXTENDS
//%effectHoverWithShadow {
//  transform: translateY(-10px);
//  $boxShadowHover: 0 10px 20px rgba(0, 0, 0, .16);
//}

//----------------------------------------------------------------------------------------------------------------------

.left {
  order: 2;
}

.right {
  order: -1;
}

#wat-doet-het {
  overflow: hidden;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.5;
  }

  /*p {*/
  /*font-size: 17px;*/
  /*}*/

  .two_ways_cards {
    background: $colorTertiary;
    padding: 6.5% 1.5% 1.5% 1.5%;
    border-radius: 40px;
    box-shadow: $boxShadow;
    transition: $transitionOnHover;

    &:hover {
      transform: $effectOnHoverImg;
      box-shadow: $boxShadowHover;
    }

    h3 {
      font-size: $fontSizeH3;
    }

    p {
      //font-size: 14px;
      font-size: $fontSizeParagraph;
      line-height: 1.5
    }
  }


  /*CIRCLE WITH NUMBER*/
  .number {
    margin: 0 auto;
    position: absolute;
    transition: $transitionOnHover;
    top: -15%;
    left: 40%;

    p {
      position: absolute;
      top: 3%;
      left: 33%;
      z-index: 98;
      font-size: 24px;
      color: $colorTertiary;

      &:hover {
        cursor: pointer;
        background-color: transparent;
        text-decoration: none;
      }
    }

    &:hover {
      cursor: pointer;
      background-color: transparent;
      text-decoration: none;

      transform: scale(1.1);
    }
  }


  //-------------------------------
  //COMMUNCIATIE VERBETEREN
  #communicatie_verbeteren {
    background: $greyBackground;
    border-radius: 350px 350px 0 0;
    //width: 100%;

    .arrow_communication {
      width: 20%;
    }

    h3 {
      margin-top: 3%;
      font-size: $fontSizeH2;
    }

    i {
      font-size: 4rem;
      color: $colorSecondary;

      transition: $transitionOnHover;

      &:hover {
        color: $colorPrimary;
        transform: scale(1.1);
      }
    }

    img.info {
      width: 100%;
      box-shadow: $boxShadow;
      transition: $transitionOnHover;
      border-radius: 1000px;

      &:hover {
        transform: scale(1.05);
        box-shadow: $boxShadowHover;
      }
    }
  }


  //--------------------------------
  //INFO IMAGE WHATSAPP - 3 rows
  .image_info_whatsapp {
    background: $colorTertiary;
    border-radius: 40px;
    padding: 2.5%;
    box-shadow: $boxShadow;

    transition: $transitionOnHover;

    &:hover {
      transform: $effectOnHoverImg;
      box-shadow: $boxShadowHover;
    }
  }


  #software {
    background: $greyBackground;
    position: relative;

    h3 {
      font-size: $fontSizeH2;
      //color: red;
    }

    img {
      border-radius: 315px 315px 1000px 1000px;
      box-shadow: $boxShadow;
      transition: $transitionOnHover;
      width: 70%;
      margin-left: 10%;

      &:hover {
        @extend %effectHoverWithShadow;
      }
    }

    //img#notis {
    //  clip-path: circle(42% at 51% 58%);
    //  position: absolute;
    //  top: 0;
    //  left: 0;
    //}

    .bi {
      font-size: 4.5rem;
      color: $colorSecondary;
      transition: $transitionOnHover;

      &:hover {
        color: $colorPrimary;
      }
    }

    p {
      font-size: $fontSizeParagraph;
    }

    #card {
      padding: 2.5% 8%;
      background: $colorTertiary;
      border-radius: 40px;
      box-shadow: $boxShadow;
      transition: $transitionOnHover;

      &:hover {
        @extend %effectHoverWithShadow;
      }
    }

    p {
      font-size: $fontSizeParagraph;
    }
  }
}

//----------------------------------------------------------------------------------------------------------------------
//RESPONSIVE

@media screen and (max-width: 1200px) {
  #wat-doet-het {
    overflow: hidden;
  }
}

@media screen and (min-width: 993px) and (max-width: 1199px) {
}

@media screen and (min-width: 769px) and (max-width: 992px) {
  #wat-doet-het {
    #software {
      img {
        width: 80%;
        margin-left: 10%;
      }
    }
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  #wat-doet-het {

    .two_ways_cards {
      padding: 8% 2.5% 1.5% 2.5%;

      p {
        font-size: $FontSizeParagraphMobile;
        line-height: 1.5
      }
    }


    /*CIRCLE WITH NUMBER*/
    .number {
      margin: 0 auto;
      position: absolute;
      transition: $transitionOnHover;
      top: -18%;
      left: 41%;

      p {
        position: absolute;
        top: 3%;
        left: 33%;
        z-index: 98;
        font-size: 24px;
        color: $colorTertiary;

        &:hover {
          cursor: pointer;
          background-color: transparent;
          text-decoration: none;
        }
      }

      &:hover {
        cursor: pointer;
        background-color: transparent;
        text-decoration: none;

        transform: scale(1.1);
      }
    }

    #communicatie_verbeteren {
      border-radius: 150px 150px 0 0;

      h3 {
        margin-top: 7%;
      }
    }

    #software {
      img {
        width: 60%;
        margin-left: 10%;
        order: 1;
      }

      .image_info_whatsapp {
        order: 2;
      }
    }
  }
}

@media screen and (min-width: 415px) and (max-width: 576px) {
  #wat-doet-het {
    h2 {
      font-size: $FontSizeH2_BreakMobile;
    }

    //p {
    //  font-size: 17px;
    //}

    .two_ways_cards {
      padding: 10% 1.5% 1.5% 1.5%;
      border-radius: 40px;

      h3 {
        font-size: $fontSizeH3;
      }

      p {
        //font-size: 14px;
        font-size: .75rem;
        line-height: 1.5
      }
    }


    /*CIRCLE WITH NUMBER*/
    .number {
      margin: 0 auto;
      position: absolute;
      top: -26%;
      left: 40%;

      p {
        position: absolute;
        top: 3%;
        left: 33%;
        z-index: 98;
        font-size: 24px;
        color: $colorTertiary;

        &:hover {
          cursor: pointer;
          background-color: transparent;
          text-decoration: none;
        }
      }

      &:hover {
        cursor: pointer;
        background-color: transparent;
        text-decoration: none;

        transform: scale(1.1);
      }
    }

    #communicatie_verbeteren {
      border-radius: 150px 150px 0 0;

      h3 {
        margin-top: 7%;
      }
    }

    #software {
      img {
        width: 100%;
        order: 1;
      }

      .image_info_whatsapp {
        order: 2;
      }

      .bi {
        font-size: 3.5rem;
      }
    }
  }
}

@media screen and (max-width: 415px) {
  #wat-doet-het {
    h2 {
      font-size: $FontSizeH2_BreakMobile;
    }

    //p {
    //  font-size: 17px;
    //}

    .two_ways_cards {
      background: $colorTertiary;
      padding: 12% 2.5% 1.5% 2.5%;
      border-radius: 40px;

      h3 {
        font-size: $fontSizeH3;
      }

      p {
        //font-size: 14px;
        font-size: .75rem;
        line-height: 1.5
      }
    }


    /*CIRCLE WITH NUMBER*/
    .number {
      margin: 0 auto;
      position: absolute;
      top: -22%;
      left: 36%;

      p {
        position: absolute;
        top: 3%;
        left: 33%;
        z-index: 98;
        font-size: 24px;
        color: $colorTertiary;

      }
    }

    #communicatie_verbeteren {
      h3 {
        margin-top: 7%;
        font-size: 1.25rem;
      }
    }

    #software {
      h2 {
        font-size: $FontSizeH2_BreakMobile;
      }

      img {
        width: 110%;
        order: 1;
      }

      .image_info_whatsapp {
        order: 2;
        padding: 6%;
      }

      .bi {
        font-size: 3rem;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  #wat-doet-het {
    #verschillende_manieren {

      img {
        width: 100%;
      }


      .two_ways_cards {
        background: $colorTertiary;
        padding: 18% 2.5% 2.5% 2.5%;
        border-radius: 40px;

        h3 {
          font-size: $fontSizeH3;
        }

        p {
          //font-size: .9rem;
          line-height: 1.5;
          //font-size: .75rem;
          font-size: .9rem;
        }
      }


      /*CIRCLE WITH NUMBER*/
      .number {
        margin: 0 auto;
        position: absolute;
        top: -15%;
        left: 31%;
      }
    }

    #communicatie_verbeteren {
      h3 {
        margin-top: 7%;
        font-size: 1rem;
      }

      i {
        font-size: 3.5rem;
      }

      p {
        font-size: .9rem;
        //font-size: .75rem;
      }
    }

    #software {

      .image_info_whatsapp {
        h3 {
          margin-top: 7%;
          font-size: $FontSizeH3Mobile;
        }

        i {
          font-size: 3rem;
        }

        p {
          //font-size: .75rem;
          font-size: .9rem;
          line-height: 1.8;
        }
      }
    }
  }
}
</style>