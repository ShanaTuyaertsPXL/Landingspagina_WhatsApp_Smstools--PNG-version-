<template>
  <div id="pricecalc" class="pt-4">
    <div class="container-fluid p-0 w-100">
      <div class="container-xl pt-5">
        <!--      <flagstrap :selected="selectedCountry" @changed="handleCountryChange"></flagstrap>-->

        <div class="row" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="1200">
          <div class="offset-xl-0 col-xl-12 offset-lg-0 col-lg-7 offset-md-0 col-md-12 p-0" id="title">
            <h2>{{ this.title1 }}<br>{{this.title2}}</h2>
          </div>
        </div>
        <div class="row">
          <div
              class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-12 offset-sm-0 col-sm-12 offset-0 col-12 p-0"
              data-aos="fade-right" data-aos-duration="1200" data-aos-offset="1200">
            <p v-for="(text, index) in infoPricecalc" :key="index" id="info">{{ text }}</p>
            <!--            <p v-for="(text, index) in infoPricecalc" :key="index" id="info" v-html="infoPricecalc.replace(/(\n)/g, '<br />')">{{ text }}</p>-->
          </div>
          <div class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-12 col-sm-12 col-12"
               id="pricecalc_section" data-aos="fade-left" data-aos-duration="1200" data-aos-offset="1200">
            <div id="calc">
              <div class="row p-0">
                <div
                    class="offset-xl-0 col-xl-12 offset-lg-1 col-lg-11 col-md-12 col-sm-12 col-12 mb-sm-4 mb-2 pb-3 ml-xl-0 ml-lg-0 ml-md-5 pl-xl-0 pl-lg-0 pl-md-5 pb-sm-0 pb-0">
                  <label for="country">Sms-berichten versturen</label>
                </div>
              </div>
              <div class="row p-0">
                <div
                    class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-1 col-md-5 offset-sm-0 col-sm-7 offset-2 col-8">
                  <label for="aantal">Aantal sms'en versturen:</label>
                </div>
                <div
                    class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-6 offset-sm-0 col-sm-5 offset-2 col-8 mb-4">
                  <input id="aantal" type="text" v-model="aantal" min="1" @click="clearInput" @input="enkelNummers"
                         :maxlength="maximaleLengteInput">
                </div>
              </div>
              <div class="row p-0">
                <div
                    class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-1 col-md-5 offset-sm-0 col-sm-7 offset-2 col-8">
                  <label for="select" class="mr-4">Land van ontvangst:</label>
                </div>
                <div
                    class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-6 offset-sm-0 col-sm-5 offset-2 col-8 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2 mb-2">
                  <select id="select" v-model="selectedCountry"
                          class="btn btn-dark float-start dropdown-toggle dropdown">
                    <option>Verstuur en ontvang berichten in</option>
                    <option v-for="land in prijzen" :key="land.id" :value="land.id">
                      <!--                    <i class="flag flag-united-states"></i>-->
                      {{ land.country }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="row p-0" id="calculated">
                <hr>
                <div class="col p-0 m-0">
                  <p>Kostprijs</p>
                  <p>€ {{ PricePerSms }}</p>
                  <p>per bericht</p>
                </div>
                <div class="pl-4 col-6">
                  <p>TOTAAL</p>
                  <p> Vanaf € {{ totalPrice }}</p>

                </div>

              </div>


            </div>
            <svg width="1000" height="1000">
              <!--            <circle cx="381" cy="381" r="380" fill="#dc3545"/>-->
              <circle cx="405" cy="405" r="405" fill="#dc3545"/>
            </svg>
          </div>
        </div>
      </div>
      <div id="wave"></div>
    </div>
  </div>
</template>

<script>
import landen from "../../assets/JSON/prijzentabel.json";
// import 'vue-flagstrap/dist/vue-flagstrap.css';
// import Flagstrap from 'vue-flagstrap';

export default {
  data() {
    return {
      // selectedCountry: 'be',
      prijzen: landen,
      selectedCountry: "be",
      aantal: "",
      maximaleLengteInput: 7,

      title1: "Verstuur online sms'en",
      title2: "via onze SMS-software en/of API",
      infoPricecalc: [
        "Bent u klaar voor het avontuur met Smstools?",
        "Bereken hier de totale kosten voor het versturen van sms-berichten via de SMS-dienst van Smstools en het Smstools-paneel. Bij ons betaalt u alleen voor wat u verbruikt, zonder setup- of maandelijkse kosten.",
        "Hoe meer sms-berichten u verzendt, hoe voordeliger het tarief per bericht wordt. We bieden een 100% garantie op de beste prijs/kwaliteitverhouding. Neem snel contact met ons op voor een offerte op maat of voor postpaid-opties!"
      ]
    };
  },
  // components: {
  //   Flagstrap
  // },
  computed: {
    totalPrice() {
      if (this.selectedCountry !== null) {
        const product = this.prijzen.find(p => p.id === this.selectedCountry);
        // let productFloat = product.price.parseFloat(product.price)
        // return productFloat * this.quantity;
        let totalPrice = product.price_sms * this.aantal;

        return totalPrice.toFixed(2);
      }
      return 0;
    },
    PricePerSms() {
      if (this.selectedCountry !== null) {
        const product = this.prijzen.find(p => p.id === this.selectedCountry);
        // let productFloat = product.price.parseFloat(product.price)
        // return productFloat;
        return product.price_sms;
      }
      return 0;
    }
  },
  methods: {
    clearInput() {
      this.aantal = "";
    },
    enkelNummers(event) {
      this.aantal = event.target.value.replace(/[^0-9]/g, "");
    }
    // handleCountryChange(countryCode) {
    //   console.log('Geselecteerd land:', countryCode);
    // }
  }
};
</script>

<style lang="scss">
//@import "/src/scss/base";

//Variabelen
//----------
//USED COLORS
$colorPrimary: #52555a;
$colorSecondary: #dc3545;
$colorTertiary: #ffffff;

//FONT-SIZE
$fontSizeH2: 1.75rem;

//-----------------------------------------------
//RESPONSIVE

//FONT-SIZE
$FontSizeH2_BreakMobile: 1.5rem;
$FontSizeH3Mobile: 1rem;
$FontSizeParagraphMobile: 1rem;

//----------------------------------------------------------------------------------------------------------------------

#pricecalc {
  #info {
    margin: 2.5% 0;
  }

  #wave {
    background: url("/src/assets/TestHetZelf/TestHetZelf_wave.webp") no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
    height: 120px;
    width: 100%;
    z-index: 98;
    position: relative;
    top: -900px;
  }

  overflow: hidden;
  height: 84vh;
  background-color: $colorTertiary;

  svg {
    //display: none;
    position: relative;
    right: -10%;
    top: -32%;
    z-index: -1;
  }

  #pricecalc_section {
    hr {
      height: 5px;
      background: $colorTertiary;
      border-radius: 40px;
      width: 90%;
    }

    #calc {
      margin-top: -10%;
      margin-left: 45%;
      width: 80%;
    }

    position: relative;
    z-index: 1;

    label[for=country] {
      font-size: 30px;
      color: $colorTertiary;
      font-weight: bold;
      margin-left: 5%;
    }

    label[for=aantal], label[for=select] {
      font-size: 20px;
      font-weight: bold;
      color: $colorTertiary;
    }

    input {
      margin-top: 4%;
      border: none;
      padding: 5% 0;
      border-radius: 10px;
      width: 80%;
      text-indent: 10px;
    }

    select.btn {
      margin-top: 4%;
      width: 80%;
      padding: 5% 0 5% 5%;
      border-radius: 10px;
      font-weight: 700;
    }

    option {
      background: $colorTertiary;
      color: $colorPrimary;
      text-align: left;
    }

    #calculated p {
      color: $colorTertiary;
      margin: 0;
      padding: 0;

      &:nth-child(1) {
        font-size: 22px;
        font-weight: 600;
      }

      &:nth-child(2) {
        font-size: 20px;
        font-weight: 900;
      }

      &:nth-child(3) {
        font-size: 18px;
      }
    }

    ::-webkit-scrollbar-thumb {
      background: $colorSecondary;
      border-radius: 10px;
    }
  }
}

//----------------------------------------------------------------------------------------------------------------------
//RESPONSIVE

@media screen and (max-width: 1200px) {
  #pricecalc {
    overflow: hidden;

    h2 {
      font-size: $fontSizeH2;
    }
  }
}

@media screen and (min-width: 993px) and (max-width: 1199px) {
}

@media screen and (min-width: 769px) and (max-width: 992px) {
  #pricecalc {
    height: 90vh;

    h2 {
      font-size: 20px;
    }

    svg {
      //display: none;
      position: relative;
      right: 3.5%;
      top: -35%;
      z-index: -1;
    }

    #pricecalc_section {

      #calc {
        margin-top: -25%;
        margin-left: 25%;
      }

      label[for=country] {
        font-size: 25px;
        margin-left: 12%;
      }

      label[for=aantal], label[for=select] {
        font-size: 16px;
      }

      input {
        margin-top: 2%;
        border: none;
        padding: 5% 0;
        border-radius: 10px;
        width: 80%;
        text-indent: 10px;
      }

      select.btn {
        margin-top: 2%;
        width: 80%;
        padding: 5% 0 5% 5%;
        border-radius: 10px;
      }
    }
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  #pricecalc {
    height: 149vh;

    svg {
      position: relative;
      right: 0;
      top: -28%;
      z-index: -1;
    }

    #pricecalc_section {
      #calc {
        margin-top: 5%;
        margin-left: 15%;
      }

      label[for=country] {
        font-size: 25px;
        color: $colorTertiary;
        margin-left: 9%;
      }

      label[for=aantal], label[for=select] {
        font-size: 18px;
        margin-top: 9%;
      }
    }
  }
}

@media screen and (min-width: 415px) and (max-width: 576px) {
  #pricecalc {
    height: 153vh;

    svg {
      position: relative;
      right: 21%;
      top: -27%;
    }

    #pricecalc_section {
      padding: 5% 0;

      #calc {
        margin-top: 2%;
        margin-left: 15%;
      }

      label[for=country] {
        font-size: 25px;
        color: $colorTertiary;
        margin-left: 10%;
      }

      label[for=aantal], label[for=select] {
        font-size: 18px;
        margin-left: -5%;
        margin-top: 5%;
      }
    }
  }

  #hoe-werkt-het {
    #how-it-works {
      h3 {
        font-size: $FontSizeH3Mobile;
      }

      p {
        font-size: .75rem;
      }
    }
  }
}

@media screen and (max-width: 415px) {
  #pricecalc {
    height: 165vh;

    svg {
      position: relative;
      right: 46%;
      top: -30%;
    }

    #title h2 {
      color: $FontSizeH2_BreakMobile;
    }

    p {
      font-size: $FontSizeParagraphMobile;
    }

    #pricecalc_section {
      padding: 5% 0;

      #calc {
        margin-top: 0;
        margin-left: 15%;
      }

      label[for=country] {
        font-size: 20px;
        color: $colorTertiary;
        margin-left: 8%;
        margin-bottom: 0;
      }

      label[for=aantal], label[for=select] {
        font-size: 15px;
      }
    }

    #calculated p {
      margin: 0;
      padding: 0;

      &:nth-child(1) {
        font-size: 20px;
        font-weight: 600;
      }

      &:nth-child(2) {
        font-size: 18px;
        font-weight: 900;
      }

      &:nth-child(3) {
        font-size: 16px;
      }
    }
  }

  #hoe-werkt-het {
    #how-it-works {
      h3 {
        font-size: .9rem;
      }

      p {
        font-size: .75rem;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  #pricecalc {
    height: 160vh;

    svg {
      position: relative;
      right: 75%;
      top: -33%;
    }

    #title h2 {
      color: $FontSizeH2_BreakMobile;
    }

    p {
      font-size: $FontSizeParagraphMobile;
    }

    #pricecalc_section {
      padding: 5% 0;

      #calc {
        margin-top: 0;
        margin-left: 15%;
      }

      label[for=country] {
        font-size: 20px;
        color: $colorTertiary;
        margin-left: 8%;
        margin-bottom: 0;
      }

      label[for=aantal], label[for=select] {
        font-size: 15px;
      }
    }

    #calculated p {
      margin: 0;
      padding: 0;

      &:nth-child(1) {
        font-size: 20px;
        font-weight: 600;
      }

      &:nth-child(2) {
        font-size: 18px;
        font-weight: 900;
      }

      &:nth-child(3) {
        font-size: 16px;
      }
    }
  }

  #hoe-werkt-het {
    #how-it-works {
      h3 {
        font-size: .9rem;
      }

      p {
        font-size: .75rem;
      }
    }
  }
}
</style>