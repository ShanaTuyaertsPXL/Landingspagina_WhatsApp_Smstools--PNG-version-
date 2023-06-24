<template>
  <!--  <div id="testHetZelf_wave"></div>-->
  <div id="test-het-zelf" class="pt-4">

    <div id="sms_wave"></div>

    <div class="container-fluid" id="test-sms">
    <div class="container-xl pb-xl-5 pb-lg-5 pt-md-0 pb-md-5 pb-sm-5 pb-5">
      <div class="row">
        <div
            class="offset-xl-0 col-xl-10 offset-lg-0 col-lg-10 offset-md-0 col-md-9 offset-sm-0 col-sm-12 offset-0 col-12"
            data-aos="fade-up" data-aos-duration="1200" data-aos-offset="1200">
          <h2>{{this.titleTestSms}} <span>{{this.testSms}}</span></h2>
        </div>
        <div
            class="col-xl-2 col-lg-2 offset-md-0 col-md-3 offset-sm-0 col-sm-3  d-xl-block d-lg-block d-md-block d-sm-none d-none"
            data-aos="zoom-in" data-aos-duration="1200" data-aos-offset="1200">
          <!--          <a href="https://optin.social/graduaatsproef" target="_blank">-->
          <img :src="imagePath+qr" id="qr" :alt="qr">
          <!--          </a>-->
        </div>
        <div
            class="col-xl-2 col-lg-2 offset-md-0 col-md-3 offset-sm-0 offset-sm-1 col-sm-10 offset-1 col-10  d-xl-none d-lg-none d-md-none d-sm-block d-block mt-3 mb-0">
          <a href="https://optin.social/graduaatsproef" target="_blank">
            <button type="button" class="py-sm-2 px-sm-2 px-3 py-2 mb-4 font-weight-bold w-100" id="test_button">{{ this.button }}</button>
          </a>
        </div>
      </div>
      <div class="row my-xl-4 my-lg-4 my-md-4 my-sm-0 my-0" id="steps">
        <div
            class="offset-xl-0 col-xl-7 offset-lg-0 col-lg-6 offset-md-0 col-md-10 offset-sm-0 col-sm-12 offset-0 col-12  order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2"
            data-aos="fade-right" data-aos-duration="1200" data-aos-offset="1200">
          <div class="container">
            <div v-for="(step, index) in steps" :key="index" :class="{ step: true, active: index === activeStep }"
                 @click="changeStep(index); selectStep(index)">
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-content">
                <!--                                <div class="step-text">{{ step.title }}</div>-->
                <div class="step-description">{{ step.description }}</div>
              </div>
            </div>
          </div>
        </div>
        <div
            class="offset-xl-0 col-xl-5 offset-lg-0 col-lg-6 offset-md-2 col-md-8 offset-sm-1 col-sm-10   mt-xl-0 pr-xl-5 pt-xl-0 mt-lg-0 my-md-4 ml-sm-0 my-sm-5 mt-4 mb-5  order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1"
            data-aos="fade-up" data-aos-duration="1200" data-aos-offset="1200">
          <img :src="imagePath + currentImage" alt="Step Image">
<!--          ATTRIBUTE LAPTOP-->
<!--          <a href="https://www.freepik.com/free-psd/digital-device-mockup_4264999.htm#query=laptop%20mockup&position=1&from_view=search&track=ais">Image by rawpixel.com</a> on Freepik-->
<!--          ATTRIBUTE MOBILE-->
<!--          <a href="https://www.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_3891016.htm#query=phone%20mockup&position=2&from_view=search&track=ais#position=2&query=phone%20mockup">Image by rawpixel.com</a> on Freepik-->
        </div>
      </div>
    </div>
    </div>

    <PriceCalc/>
  </div>
</template>

<script>
import PriceCalc from "../5.test_het_zelf/priceCalc.vue";

export default {
  data() {
    return {
      currentStep: 0,
      titleTestSms:"Ervaar het verzenden van een",
      testSms:"test-SMS",
      imagePath:"/src/assets/TestHetZelf/",
      qr: "qrcode_testSms.webp",
      button: "Test het zelf",
      images: [
        '1.Scan_QR_Of_Knop.gif',
        '2.Open_WhatsApp.gif',
        '3.Wijzig_Prefix_Of_Niet.gif',
        '4.Verstuur_Bericht.gif',
        '5.Ontvang_Gewenste_respons.gif'
      ],
      activeStep: 0,
      steps: [
        // {title: 'Stap 1', description: 'Scan QR-code (desktop) of druk op de knop (mobile)', image: 'qrcode_test.png'},
        {title: 'Stap 1', description: 'Scan QR-code (desktop) of druk op de knop (mobile)'},
        // {title: 'Stap 2', description: 'Open WhatsApp desktop of mobile', image: 'Icon_awesome-image.png'},
        {title: 'Stap 2', description: 'Open WhatsApp desktop of mobile'},
        // {title: 'Stap 3', description: 'Wijzig optioneel de tekst na de "|" of verstuur de voor gedefinieerde tekst (incl. de prefix)', image: 'qrcode_test.png'},
        {
          title: 'Stap 3',
          description: 'U kunt ervoor kiezen om de tekst na de | aan te passen of om de vooraf gedefinieerde tekst (inclusief de prefix) te verzenden'
        },
        // {title: 'Stap 4', description: 'Verstuur het bericht', image: 'Icon_awesome-image.png'},
        {title: 'Stap 4', description: 'Verstuur het bericht'},
        // {title: 'Stap 5', description: 'Ontvang de gewenste response', image: 'Icon_awesome-image.png'}
        {title: 'Stap 5', description: 'Ontvang de gewenste respons'}
      ],
    };
  },
  components: {
    PriceCalc
  },
  computed: {
    currentImage() {
      return this.images[this.currentStep];
      // return this.steps.image[this.currentStep];
    }
  },
  methods: {
    changeStep(index) {
      this.activeStep = index;
      this.changeImage(this.steps[index].image);
    },
    selectStep(index) {
      this.currentStep = index;
    },
    changeImage() {
      // +1 omdat het index 0 is
      this.currentStep = (this.currentStep + 1) % this.images.length;
    }
  }
};
</script>

<style lang="scss">
@import "/src/scss/base";

//Variabelen
//----------
//BACKGROUND
//$greyBackground: #F3F6FA;

//USED COLORS
//$colorPrimary: #52555a;
//$colorSecondary: #dc3545;
//$colorTertiary: #ffffff;
//$colorInactive: #CCCCCC;

//BOX-SHADOW
//$boxShadow: 0 0 20px rgba(0, 0, 0, .16);

//$transitionOnHover: all .2s ease-in-out;

//-----------------------------------------------
//RESPONSIVE

//FONT-SIZE
//$FontSizeH2_BreakMobile: 1.5rem;
//$FontSizeParagraphMobile: 1rem;

//----------------------------------------------------------------------------------------------------------------------

#sms_wave {
  background: url("/src/assets/TestHetZelf/TestHetZelf_wave.webp") no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  height: 75px;
  //height: 120px;
  z-index: 98;
  position: relative;
}

#testHetZelf_wave {
  background: url("/src/assets/TestHetZelf/TestHetZelf_wave.webp") no-repeat;
  //background-size: cover;
  margin: 0;
  padding: 0;
  //height: 210px;
  height: 120px;
  z-index: 98;
  position: relative;
  //background-position-x: 25%;
}

#test-het-zelf {
  overflow: hidden;

  #test-sms {
    background: $greyBackground;
  }

  h2 {
    font-size: 2.5rem;

    span {
      color: $colorSecondary;
    }
  }

  #test_button {
    color: #ffffff;
    background-color: #dc3545;
    border: none;
    border-radius: 10px;
    //padding: 10%;
  }


  #qr {
    width: 75%;
    padding: 1%;
    border: 5px solid transparent;
    border-radius: 10px;
    background: #ffffff;

    transition: $transitionOnHover;

    &:hover {
      transform: scale(1.05);
      box-shadow: $boxShadow;

      cursor: default;
    }
  }

  #steps {
    /* Stijl voor het containerblok */
    //.container {
      //max-width: 800px;
      //margin: 20px auto;
      //background-color: #F3F6FA;
      //border: 1px solid #ccc;
      //border-radius: 5px;
      //padding: 20px;
    //}

    img {
      width: 140%;
    }

    /* Stijl voor de stappen */
    .step {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }

    /* Stijl voor het stapnummer */
    .step .step-number {
      padding: 18px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: $colorInactive;
      color: #fff;
      font-weight: bold;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 5px solid $colorTertiary;

      transition: transform .2s ease-in-out;

      &:hover {
        transform: scale(1.15);
      }
    }

    /* Stijl voor de stapinhoud */
    .step .step-content {
      margin-left: 20px;
      font-size: 1.15rem;

      //.active {
      //  margin-left: 20px;
      //}
    }

    /* Stijl voor de staptekst */
    .step .step-text {
      font-weight: bold;
      font-size: 18px;
    }

    /* Stijl voor de stapbeschrijving */
    .step .step-description {
      color: $colorPrimary;

      &:hover {
        cursor: pointer;
      }
    }

    /* Stijl voor de actieve stap */
    .step.active .step-number {
      background-color: $colorSecondary;
      padding: 23px;
      border: 5px solid $colorTertiary;
      color: $colorTertiary;
      font-size: 1.5rem;
    }
  }
}

//----------------------------------------------------------------------------------------------------------------------
//RESPONSIVE

@media screen and (max-width: 1200px) {
  #test-het-zelf {
    overflow: hidden;
  }
}

@media screen and (min-width: 993px) and (max-width: 1199px) {
}

@media screen and (min-width: 769px) and (max-width: 992px) {
  #test-het-zelf {
    #steps {
      img {
        width: 100%;
      }
    }
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  #test-het-zelf {
    #steps {
      img {
        width: 150%;
      }
    }
  }
}

@media screen and (min-width: 415px) and (max-width: 576px) {
  #test-het-zelf {
    h2 {
      font-size: $FontSizeH2_BreakMobile;
    }

    #steps {
      img {
        width: 120%;
      }
    }
  }
}

@media screen and (max-width: 415px) {
  #test-het-zelf {
    h2 {
      font-size: $FontSizeH2_BreakMobile;
    }

    #steps {
      img {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  #test-het-zelf {
    #steps {

      .step-content {
        .step-description {
          font-size: $FontSizeParagraphMobile;
        }
      }
    }
  }
}
</style>