<template>
  <!--  <div id="voorwaarden" data-spy="scroll" data-target=".navbar" data-offset="50">-->

  <div id="voorwaarden" class="py-5">
    <div class="container-xl pt-5">
      <div class="row">
        <div class="offset-xl-0 col-xl-6 offset-lg-1 col-lg-10 offset-md-1 col-md-10 offset-sm-1 col-sm-10 offset-1 col-10">
          <div class="row" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="1200">
<!--            <h2 class="mb-3">Belangrijke voorwaarden en richtlijnen<br>voor WhatsApp bij smstools</h2>-->
            <h2 class="mb-3">{{this.titleTerms}}</h2>
            <p>{{this.introTerms}}</p>
          </div>
        </div>
        <div class="offset-xl-0 m-xl-0 offset-lg-1 offset-md-1 col-xl-6 col-lg-10 col-md-10 offset-sm-0 col-sm-11 ml-sm-2 offset-0 col-12 mt-xl-0 mt-lg-4 mt-md-4 pl-sm-4">
          <div class="accordion mt-3" data-aos="fade-left" data-aos-duration="1200" data-aos-offset="1200">
            <div v-for="(item, index) in visibleItems" :key="item.id" class="terms-item">
              <button @click="toggleAccordion(item.id)" :class="{ active: item.toggle }">
                <span>{{ item.term }}</span>
                <!--                  <transition name="accordion-transition" mode="out-in">-->
                <i :class="item.toggle ? 'fas fa-minus' : 'fas fa-plus'"></i>
                <!--                  </transition>-->
              </button>
              <transition name="accordion-transition" mode="out-in">
                <div v-if="item.toggle" :key="'content-' + item.id" class="terms-content">
                  <p>{{ item.termInfo }}</p>
                </div>
              </transition>
            </div>
            <div v-if="!showAllItems && visibleItems.length < accordionItems.length" class="show-more">
              <button @click="showMore" :style="styleButtonInactive">Lees meer</button>
            </div>
            <div v-if="showAllItems && visibleItems.length > 2" class="show-more">
              <button @click="showLess" :style="styleButtonActive ">Lees minder</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Voorwaarden",
  data() {
    return {
      open: false,
      titleTerms: "Belangrijke voorwaarden en richtlijnen\n" +
          "voor WhatsApp bij smstools",
      introTerms: "Ontdek de belangrijke voorwaarden en richtlijnen voor het gebruik van WhatsApp bij Smstools. Leer meer over de vereisten en regels die van toepassing zijn om WhatsApp veilig en verantwoordelijk te gebruiken via Smstools.",
      accordionItems: [
        {
          id: 1,
          term: 'Naleving van de geldende wetten en regelgeving',
          // termInfo: 'Gebruikers moeten ervoor zorgen dat ze zich houden aan de wetten en voorschriften met betrekking tot privacy, auteursrechten en intellectueel eigendom bij het verzenden van berichten via WhatsApp.',
          termInfo: 'U moet ervoor zorgen dat u zich houdt aan de wetten en voorschriften met betrekking tot privacy, auteursrechten en intellectueel eigendom bij het verzenden van berichten via WhatsApp.',
          toggle: false,
        },
        {
          id: 2,
          term: 'Algemene gebruiksvoorwaarden van WhatsApp',
          // termInfo: 'Gebruikers dienen de algemene gebruiksvoorwaarden van WhatsApp zelf te accepteren en te volgen, aangezien deze belangrijke informatie bevatten over het gebruik van de app en de verantwoordelijkheden van de gebruikers.',
          termInfo: 'U dient de algemene gebruiksvoorwaarden van WhatsApp zelf te accepteren en te volgen, aangezien deze belangrijke informatie bevatten over het gebruik van de app en uw verantwoordelijkheden.',
          toggle: false,
        },
        {
          id: 3,
          term: 'Privacybeleid',
          // termInfo: 'Het is essentieel om het privacybeleid van WhatsApp en het betreffende sms-toolbedrijf zorgvuldig door te nemen om te begrijpen hoe uw gegevens worden verzameld, gebruikt en gedeeld.',
          termInfo: 'Het is essentieel om het privacybeleid van WhatsApp en het betreffende sms-toolbedrijf zorgvuldig door te nemen om te begrijpen hoe uw gegevens worden verzameld, gebruikt en gedeeld.',
          toggle: false,
        },
        {
          id: 4,
          term: 'Verantwoordelijkheid voor verzonden inhoud',
          // termInfo: 'Gebruikers zijn verantwoordelijk voor de inhoud die ze verzenden via WhatsApp. Het is belangrijk om geen ongepaste, illegale of schadelijke inhoud te delen en ervoor te zorgen dat de rechten van anderen worden gerespecteerd.',
          termInfo: 'U bent verantwoordelijk voor de inhoud die u verzendt via WhatsApp. Het is belangrijk om geen ongepaste, illegale of schadelijke inhoud te delen en ervoor te zorgen dat de rechten van anderen worden gerespecteerd.',
          toggle: false,
        },
        {
          id: 5,
          term: 'Beveiliging van het WhatsApp-account',
          // termInfo: 'Gebruikers moeten passende maatregelen nemen om de beveiliging van hun WhatsApp-account te waarborgen, zoals het gebruik van sterke wachtwoorden, het inschakelen van tweestapsverificatie en het vermijden van het delen van accountgegevens met anderen.',
          termInfo: 'U moet passende maatregelen nemen om de beveiliging van uw WhatsApp-account te waarborgen, zoals het gebruik van sterke wachtwoorden, het inschakelen van tweestapsverificatie en het vermijden van het delen van accountgegevens met anderen.',
          toggle: false,
        },

      ],
      showAllItems: false,
      visibleItems: [],
      styleButtonActive: {
        color: '#000000',
        backgroundColor: '#cccccc',
        fontWeight: 'bold'
      },
      styleButtonInactive: {
        color: '#ffffff',
        backgroundColor: '#dc3545',
        fontWeight: 'bold'
      }
    };
  },
  created() {
    this.updateVisibleItems();
  },

  computed: {
    visibleItems() {
      return this.showAllItems ? this.accordionItems : this.accordionItems.slice(0, 3);
    },
  },
  methods: {
    toggleAccordion(itemId) {
      this.accordionItems.forEach((item) => {
        if (item.id === itemId) {
          item.toggle = !item.toggle;
        } else {
          item.toggle = false;
        }
      });
    },
    showMore() {
      this.showAllItems = true;
      this.updateVisibleItems();
    },
    showLess() {
      this.showAllItems = false;
      this.updateVisibleItems();
    },
    updateVisibleItems() {
      this.visibleItems = this.showAllItems ? this.accordionItems : this.accordionItems.slice(0, 3);
    },
  },
};
</script>

<style lang="scss">
@import "/src/scss/base";
//Variabelen
//----------
//USED COLORS
//$colorSecondary: #dc3545;
//$colorTertiary: #ffffff;

//FONT-SIZE
//$fontSizeParagraph: 1rem;

//BOX-SHADOW
//$boxShadowTerms: 0 0 10px rgba(0, 0, 0, 0.16);

//$transitionOnHover: all .2s ease-in-out;

//-----------------------------------------------
//RESPONSIVE

//FONT-SIZE
//$FontSizeH2_BreakMobile: 1.5rem;
//$FontSizeParagraphMobile: 1rem;

//----------------------------------------------------------------------------------------------------------------------

#voorwaarden {
  background: $colorTertiary;
  overflow: hidden;

  /*------------------------------------*/
  .accordion {
    margin-bottom: 20px;

    i {
      margin-right: 2.5%;
    }

    .terms-item {
      //.accordion-item {
      margin-bottom: 20px;
    }

    .terms-content {
      border-radius: 0 0 10px 10px;
      background-color: $colorTertiary;
      box-shadow: $boxShadowTerms;
      padding: 10px;
      overflow: hidden;
      line-height: 1.8;

      p {
        margin: 0;
        font-size: $fontSizeParagraph;
      }
    }

    button {
      background-color: $colorTertiary;
      box-shadow: $boxShadowTerms;
      border: none;
      border-radius: 10px;
      padding: 10px;
      cursor: pointer;
      width: 100%;
      text-align: left;
      transition: $transitionOnHover;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: $fontSizeParagraph;


      &:hover {
        background-color: $colorSecondary;
        color: $colorTertiary;
      }

      &.active {
        background-color: $colorSecondary;
        color: $colorTertiary;
        border-radius: 10px 10px 0 0;
      }
    }
  }

  /*---------------------------------------------------*/
  .show-more {
    text-align: center;
    margin-top: 10px;
    border-radius: 10px;
    //background: $colorSecondary;


    //background: -moz-linear-gradient(0deg, rgba(220,53,69,1) 0%, rgba(220,53,69,0) 100%);
    //background: -webkit-linear-gradient(0deg, rgba(220,53,69,1) 0%, rgba(220,53,69,0) 100%);
    //background: linear-gradient(0deg, rgba(220,53,69,1) 0%, rgba(220,53,69,0) 100%);
    //filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#dc3545",endColorstr="#dc3545",GradientType=1);
  }

  .show-more button {
    color: $colorTertiary;
    cursor: pointer;
    font-size: 14px;
    justify-content: center;
  }
}

//----------------------------------------------------------------------------------------------------------------------
//RESPONSIVE

@media screen and (max-width: 1200px) {
}

@media screen and (min-width: 993px) and (max-width: 1199px) {
}

@media screen and (min-width: 769px) and (max-width: 992px) {
}

@media screen and (min-width: 577px) and (max-width: 768px) {
}

@media screen and (min-width: 415px) and (max-width: 576px) {
  #voorwaarden {
    h2 {
      font-size: $FontSizeH2_BreakMobile;
    }
    p {
      font-size: $FontSizeParagraphMobile;
    }
  }
}

@media screen and (max-width: 415px) {
  #voorwaarden {
    h2 {
      font-size: $FontSizeH2_BreakMobile;
    }
    p {
      font-size: $FontSizeParagraphMobile;
    }
  }
}

@media screen and (max-width: 320px) {
  #voorwaarden {
    p {
      font-size: .9rem;
    }
    span {
      font-size: .9rem;
    }
    i {
      margin-left: 2.5%;
    }
  }
}
</style>