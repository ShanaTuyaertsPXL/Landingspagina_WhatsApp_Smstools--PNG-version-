<template>
  <!--  <div id="contact" data-spy="scroll" data-target=".navbar" data-offset="50">-->
  <!--              <div v-if="showSuccessMessage" id="succes">-->
  <div v-if="showAlert" id="succes">
    <div id="alert">
      <div class="progress-bar" :style="{ width: progressBarWidth }"></div>
      <div><i class="bi bi-check-circle"></i>
        <p>Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.</p>
      </div>
    </div>
  </div>
  <!--    <button @click="startTimer">Toon alert</button>-->

  <div id="background_contact">
    <div id="wave_contact"></div>
    <div id="contact">
      <div class="container-xl pb-5">
        <div class="row">
          <div class="col-12 mb-xl-5 mb-lg-4 mb-md-3 mb-sm-3 mb-3 mt-4 text-center" data-aos="fade-up"
               data-aos-duration="1200" data-aos-offset="1200">
            <h2>Contacteer ons</h2>
          </div>
        </div>
        <div class="row">
          <div
              class="offset-xl-0 col-xl-7 offset-lg-2 col-lg-8 offset-md-2 col-md-8  order-xl-1 order-lg-2 order-md-2 order-sm-2 order-2"
              data-aos="fade-right" data-aos-duration="1200" data-aos-offset="1200">
            <form @submit="submitForm" method="POST" action="mailto: shana.tuyaerts@student.pxl.be"
                  enctype="text/plain">
              <div class="row  text-xl-left text-lg-left text-md-left text-sm-left text-center">
                <div class="col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-6 offset-sm-0 col-sm-6 offset-1 col-10">
                  <!--                <div class="form-control">-->
                  <div :class="{ invalid: nameValid === 'invalid' }">
                    <label>Naam *</label><br>
                    <input id="name" name="name" type="text" @blur="validateName" v-model.trim="name">
                    <p v-if="nameValid === 'invalid'">Gelieve uw naam in te geven</p>
                  </div>
                </div>
                <div
                    class="col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-6 offset-sm-0 col-sm-6 offset-1 col-10 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
                  <!--                <div class="form-control">-->
                  <div>
                    <label>Naam bedrijf *</label><br>
                    <input id="company" name="company" type="text" @blur="validateCompany" v-model.trim="company">
                    <p v-if="companyValid === 'invalid'">Gelieve uw bedrijfsnaam in te geven</p>
                  </div>
                </div>
              </div>
              <div class="row mt-xl-4 mt-lg-4  text-xl-left text-lg-left text-md-left text-sm-left text-center">
                <div
                    class="col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-6 offset-sm-0 col-sm-6 offset-1 col-10 mt-xl-0 mt-lg-0 mt-md-4 mt-sm-4 mt-4">
                  <!--                <div class="form-control">-->
                  <label>E-mailadres *</label><br>
                  <input id="email" name="email" type="email" @blur="validateEmail" v-model.trim="email">
                  <p v-if="emailValid === 'invalid'">Gelieve een geldig e-mailadres in te geven</p>
                  <!--                </div>-->
                </div>
                <div
                    class="col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-6 offset-sm-0 col-sm-6 offset-1 col-10 mt-xl-0 mt-lg-0 mt-md-4 mt-sm-4 mt-4">
                  <!--                <div class="form-control">-->
                  <label>Telefoon *</label><br>
                  <!--                  <vue-tel-input v-model="phone"></vue-tel-input>-->

                  <!--                  <vue-tel-input v-model="telefoonnummer" :showFlags="true"></vue-tel-input>-->
                  <!--                  <vue-tel-input v-model="telefoonnummer" :showFlags="true" :showDialCode="true"></vue-tel-input>-->
                  <input id="telephone" name="telephone" type="tel" @blur="validateTel" v-model.trim="telephone">
                  <p v-if="telValid === 'invalid'">Gelieve een geldig telefoonnummer in te geven</p>
                  <!--                </div>-->
                </div>
              </div>
              <div
                  class="row mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4  text-xl-left text-lg-left text-md-left text-sm-left text-center">
                <div
                    class="offset-xl-0 col-xl-12 offset-lg-0 col-lg-12 offset-md-0 col-md-12 offset-sm-0 col-sm-12 offset-1 col-10">
                  <label>Uw bericht *</label><br>
                  <textarea id="message" name="message" @blur="validateMsg" v-model.trim="message" rows="4"
                            cols="50"></textarea>
                  <p v-if="msgValid === 'invalid'" id="textarea">Gelieve uw bericht in te geven</p>
                </div>
              </div>
              <div class="row text-xl-left text-lg-center text-md-center text-sm-center text-center">
                <!--              <div class="offset-xl-0 col-xl-12 offset-lg-4 col-lg-4 offset-md-4 col-md-4 offset-sm-4 col-sm-3 mt-4">-->
                <div class="offset-0 col-12 mt-4">
                  <button class="px-5 py-2 border-0 g-recaptcha" type="submit" @click="startTimer">Verzenden
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
              class="offset-xl-0 col-xl-5 offset-lg-3 col-lg-6 offset-md-3 col-md-6 offset-sm-2 col-sm-8 offset-2 col-8  order-xl-2 order-lg-1 order-md-1 order-sm-1 order-1 pl-xl-5 pl-lg-0 pl-md-0 pl-sm-0 pl-0"
              data-aos="fade-left" data-aos-duration="1200" data-aos-offset="1200">
            <img src="/src/assets/Contact/Sevinç_contact.webp" class="mb-xl-0 mb-lg-4 mb-md-4 mb-sm-4 mb-4"
                 id="contact_img" alt="contact image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import inttelinput from '/src/components/intltelinput.js'
// import VueTelInput from 'vue-tel-input';
// import {ref} from 'vue';
// import {VueTelInput} from 'vue-tel-input';
// import 'vue-tel-input/dist/vue-tel-input.css';


export default {
  name: "contact",
  data() {
    return {
      // inttelinput: inttelinput,
      name: '',
      nameValid: 'pending',
      company: '',
      companyValid: 'pending',
      email: '',
      emailValid: 'pending',
      telephone: null,
      telValid: 'pending',
      message: '',
      msgValid: 'pending',
      showSuccessMessage: false,


      showAlert: false,
      progressBarWidth: "0%",
      timerDuration: 3500, // Timerduur in milliseconden
      timerInterval: null,
      numSteps: 50, // Aantal stapjes voor de transitie
      stepDuration: 50, // Tijdsduur van elke stap in milliseconden


      inputEl: document.getElementById("telephone"),
      goodKey: "0123456789+ ",
      phoneNumber: ''
    }
  },
  // components: {
  //   VueTelInput
  // },
  // setup() {
  //   const phone = ref(null);
  //
  //   return {
  //     value,
  //   };
  // },
  methods: {
    // checkInputTel(event) {
    //   let key = typeof event.which == "number" ? event.which : event.keyCode;
    //   let start = this.selectionStart,
    //       end = this.selectionEnd;
    //
    //   let filtered = this.value.split("").filter(filterInput);
    //   this.value = filtered.join("");
    //
    //   /* Prevents moving the pointer for a bad character */
    //   let move =
    //       this.filterInput(String.fromCharCode(key)) || key == 0 || key == 8 ? 0 : 1;
    //   this.setSelectionRange(start - move, end - move);
    // },
    // filterInput(event) {
    //   return this.goodKey.indexOf(event) > -1;
    // },

    //   script() {
    //     inputEl.addEventListener("input", this.checkInputTel);
    //   },
    //
    //   getIp(callback) {
    //     fetch("https://ipinfo.io/json?token=25170116de0e36", {
    //       headers: {Accept: "application/json"},
    //     })
    //         .then((resp) => resp.json())
    //         .catch(() => {
    //           return {
    //             country: "be",
    //           };
    //         })
    //         .then((resp) => callback(resp.country));
    //   }
    // },
    //
    // script2() {
    //   const phoneInputField = document.querySelector("#telefoon");
    //   const phoneInput = window.intlTelInput(phoneInputField, {
    //         initialCountry: "auto",
    //         geoIpLookup: getIp,
    //         utilsScript:
    //             "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    //       }
    // },


    startTimer() {
      this.showAlert = true;
      this.progressBarWidth = "0%";

      const stepWidth = 100 / this.numSteps;
      let currentStep = 0;

      this.timerInterval = setInterval(() => {
        currentStep++;

        if (currentStep <= this.numSteps) {
          this.progressBarWidth = stepWidth * currentStep + "%";
        } else {
          clearInterval(this.timerInterval);
          this.showAlert = false;
        }
      }, this.timerDuration / this.numSteps);
    },

    sendMailToUser() {
      const tempThisUser = this

      axios.post('https://mailqueue-d3bed9d20554.victhorious.com/api/mail/send', {
        from_email: 'noreply@smstools.be',
        from_name: 'Smstools WhatsApp',
        to_email: this.email,
        cc: [],
        bcc: [],
        body: `
            <img src="https://www.smstools.be/assets/images/logo_dark2.webp" alt="logo Smstools">
            <p><font size="3">Beste <b>${this.name}</b></p>
            <p>Wij hebben uw bericht succesvol ontvangen. Wij kijken ernaar uit u van dienst te zijn!</p>

            <br><h4>U contacteerde ons om de volgende reden:</h4>
            <p>${this.message}</p>
            <hr>
            <p>Onze customer support zal u zo snel mogelijk verder helpen.</p>

            <br><p>Met vriendelijke groeten</p>
            <p>Customer support Smstools</p>
            `,
        subject: 'SMStools Ondersteuning WhatsApp',
        tags: ['Graduaatsproef'],
        format: 'html',
        date: formattedDate
      }, {
        headers: {
          'X-Authorization': '7BZk3b7Krd956RSIwiP18NUVojXgEYpMFUu5IBqB9MRBSnBfy9I3GiXB9C84tGCZ',
        }
      })
          .then(function (response) {
            console.log(response)
            // console.log(tempThis)
            tempThisUser.showSuccessMessage = true;
            tempThisUser.name = '';
            tempThisUser.company = '';
            tempThisUser.email = '';
            tempThisUser.telephone = '';
            tempThisUser.message = '';


            //Functie voor axios oproepen
            //Functie voor mail versturen
          })
          .catch(function (error) {
            console.log(error);
          });
    },


    submitForm(event) {
      event.preventDefault();

      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().replace('T', ' ').substring(0, 19);
      const tempThis = this //scope probleem this

      axios.post('https://mailqueue-d3bed9d20554.victhorious.com/api/mail/send', {
        from_email: 'noreply@smstools.be',
        from_name: 'Smstools WhatsApp',
        to_email: this.email,
        cc: [],
        bcc: [],
        body: `
        <h3>Nieuw inkomend bericht</h3>
        <p>Volledige naam:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.name}</p>
        <p>Bedrijf:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.company}</p>
        <p>E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.email}</p>
        <p>Telefoon:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.telephone}</p>
        <p>Bericht:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.message}</p>
        `,
        subject: 'SMStools Ondersteuning WhatsApp',
        tags: ['Graduaatsproef'],
        format: 'html',
        date: formattedDate
      }, {
        headers: {
          'X-Authorization': '7BZk3b7Krd956RSIwiP18NUVojXgEYpMFUu5IBqB9MRBSnBfy9I3GiXB9C84tGCZ',
        }
      })
          .then(function (response) {
            // console.log(response)
            // console.log(tempThis)
            tempThis.showSuccessMessage = true;
            tempThis.name = '';
            tempThis.company = '';
            tempThis.email = '';
            tempThis.telephone = '';
            tempThis.message = '';

            this.sendMailToUser()

            //Functie voor axios oproepen
            //Functie voor mail versturen
          })
          .catch(function (error) {
            console.log(error);
          });
    },


    // submitForm() {
    //   console.log(this.name);
    //   this.name = '';
    //
    //   console.log(this.company);
    //   this.company = '';
    //
    //   console.log(this.email);
    //   this.email = '';
    //
    //   console.log(this.telephone);
    //   this.telephone = null;
    //
    //   console.log(this.message);
    //   this.message = '';
    // },

    validateName() {
      if (this.name.trim() === '') {
        this.nameValid = 'invalid'

      } else {
        this.nameValid = 'valid'

      }
    },
    validateCompany() {
      if (this.company.trim() === '') {
        this.companyValid = 'invalid'

      } else {
        this.companyValid = 'valid'

      }
    },
    validateEmail() {
      if (this.email.trim() === '') {
        this.emailValid = 'invalid'

      } else {
        this.emailValid = 'valid'

      }
    },
    validateTel() {
      if (this.telephone.trim() === '') {
        this.telValid = 'invalid'

      } else {
        this.telValid = 'valid'

      }
    },
    validateMsg() {
      if (this.message.trim() === '') {
        this.msgValid = 'invalid'

      } else {
        this.msgValid = 'valid'

      }
    },
    // watch: {
    //   telephone(newValue) {
    //     // Voer eventuele validatie of transformatie uit op de ingevoerde telefoonnummerwaarde
    //     console.log(newValue);
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
//Variabelen
//----------
//BACKGROUND
//$greyBackground: #F3F6FA;

//USED COLORS
//$colorPrimary: #52555a;
//$colorSecondary: #dc3545;
//$colorTertiary: #ffffff;

//BOX-SHADOW
//$boxShadow: 0 0 20px rgba(0, 0, 0, .16);
//$boxShadowHover: 0 10px 20px rgba(0, 0, 0, .16);

//$transitionOnHover: all .2s ease-in-out;

//-----------------------------------------------
//RESPONSIVE

//FONT-SIZE
//$FontSizeBreakTablet: 1.8rem;
//$FontSizeH2_BreakMobile: 1.5rem;
//$FontSizeH3Mobile: 1rem;
//$FontSizeParagraphMobile: 1rem;

//----------------------------------------------------------------------------------------------------------------------

@import "../../scss/base";
//@import '../../../node_modules/flag-icon-css/css/flag-icons.css';

//#alert {
//position: absolute;
//width: 100%;
//background-size: cover;
//height: 100%;
//background-color: rgba(0, 0, 0, 0.16);

#succes {
  height: 20%;
  width: 23%;
  position: fixed;
  z-index: 100;
  top: 1.5%;
  right: 1.5%;
  background-color: $colorTertiary;;
  //background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  text-align: center;
  padding: 0;

  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 6%;
    border-radius: 0 0 0 10px;
    background-color: $colorSecondary;
    transition: width 0.1s ease-in-out;
    //transition: width 0.1s;
  }

  p {
    padding: 0;
  }

  .bi-check-circle {
    font-size: 3rem;
    color: $colorSecondary;
    margin: 0;
    padding: 0;
  }
}

//}


p {
  color: $colorPrimary;
  padding: 5% 2.5%;
  border-radius: 10px;
  top: 0;
  right: 0;
  z-index: 100;
}

//}

#background_contact {
  background: $greyBackground;
  position: relative;

  #contact {
    background: $colorSecondary;
    top: -100px;
    overflow: hidden;

    #contact_img {
      width: 100%;
      transition: $transitionOnHover;
      border-radius: 1000px;
      box-shadow: $boxShadow;

      &:hover {
        transform: scale(1.05);
        box-shadow: $boxShadowHover;
      }
    }

    h2 {
      font-size: 2.5rem;
      color: $colorTertiary;
      font-weight: 700;
    }

    form {
      //padding: 5%;

      //.form-control {
      //margin: 0 5% 15% 0;
      //background: transparent;
      //border: none;
      //position: relative;

      p {
        color: $colorTertiary;
        //background: $colorTertiary;
        //border-radius: 10px;
        //margin: 0 5% 0 0;
        padding: 3.5% 0 2.5% 1%;
        margin-bottom: 0;
        //position: absolute;
        //bottom: -175%;

        //bottom: -225%;
        //width: 92%;
        font-size: .85rem;
        font-weight: bold;
      }

      p#textarea {
        padding: 1% 0;
      }

      label {
        color: $colorTertiary;
        font-size: 1.05rem;
        font-weight: normal;
        background: transparent;
        border: none;
      }

      input, textarea {
        border: none;
        border-radius: 10px;
        padding: 3%;
        text-indent: 5px;
        box-shadow: $boxShadow;
        width: 100%;

        moz-user-select: text;
        -webkit-user-select: text;
        -ms-user-select: text;
      }

      textarea {
        height: 10rem;
        padding: 3% 1.5%;
        max-width: 100%;
      }

      button {
        background: #ffffff;
        //padding: 2.5%;
        border-radius: 10px;
        color: #000000;
        font-size: 1rem;
        //margin-top: 33%;
        //margin-top: 20%;
        font-weight: 700;

        transition: $transitionOnHover;

        &:hover {
          transform: scale(1.05);
          box-shadow: $boxShadow;
        }
      }
    }
  }

  #wave_contact {
    background: url("/src/assets/Contact/Wave_contact.webp") no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
    height: 35px;
    z-index: 98;
    position: relative;
    background-position-x: 25%;
  }
}

//----------------------------------------------------------------------------------------------------------------------
//RESPONSIVE

@media screen and (max-width: 1200px) {
  #contact {
    overflow: hidden;
  }
}

@media screen and (min-width: 993px) and (max-width: 1199px) {
}

@media screen and (min-width: 769px) and (max-width: 992px) {
}

@media screen and (min-width: 577px) and (max-width: 768px) {
}

@media screen and (min-width: 415px) and (max-width: 576px) {
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