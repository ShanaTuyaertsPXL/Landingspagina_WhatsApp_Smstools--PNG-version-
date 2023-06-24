<template>
  <div class="container-fluid pt-5" id="footer">
    <div class="container-xl pb-5">
      <div class="row">
        <div class="col">
          <img :src="imagePath + footer.brand" alt="Logo Smstools grey footer">
        </div>
      </div>

      <div
          class="row mt-xl-5 mt-lg-5 mt-md-5 mt-sm-4 pb-xl-5 pb-lg-5 pl-lg-3 pb-md-5 pb-sm-0 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3"
          id="navigate">
        <div
            class="offset-xl-0 col-xl-2 offset-lg-1 col-lg-1 px-lg-0 offset-md-0 col-md-4 offset-sm-3 col-sm-4 offset-2 col  my-xl-0 my-lg-0 my-md-0 pl-md-5 mt-sm-3 py-sm-0 mt-3 pl-4">
          <a href="https://mysms.software/" target="_blank">
            <p class="pl-xl-0 ml-xl-4 pl-lg-0 ml-lg-0 pl-md-0 pl-sm-3 pl-3 ml-sm-5 ml-5" id="tacho">Controlepaneel</p>
          </a>
        </div>

        <div
            class="offset-xl-0 col-xl-2 offset-lg-1 col-lg-2 offset-md-0 col-md-4 offset-sm-4 col-sm-4 offset-3 col-3 pl-4 mx-xl-0 my-xl-0 pl-xl-3 my-lg-0 my-md-0 pl-md-5 pr-md-0 mb-sm-3 my-3  text-xl-left text-lg-left text-md-left text-sm-center text-center">
          <div class="dropdown" :class="{ 'open': dropdownOpen }">
            <button class="dropdown-toggle" @click="toggleDropdown">
              Over WhatsApp
            </button>
            <ul class="dropdown-menu">
              <li v-for="item in footer.dropdown" :key="item"><a :href="item.link">{{ item.tab }}</a></li>
            </ul>
          </div>
        </div>
        <div
            class="offset-xl-0 col-xl-2 offset-lg-1 col-lg-2 offset-md-1 col-md-3  offset-sm-1 col-sm-10  text-xl-left text-lg-left text-md text-left text-sm-center text-center pl-md-0 pr-md-5"
            v-for="tab in footer.navigate" :key="tab"><a :href="tab.link"><p>{{ tab.tab }}</p></a></div>
      </div>

      <h3 class="text-white mb-4 text-xl-left text-lg-left text-md-left text-sm-center text-center">
        {{ footer.title_contacteer }}</h3>
      <div class="row  justify-content-center" id="contact_footer">
        <div :class="item.class" v-for="(item, index) in footer.contacteer_voor_vragen" :key="item">
          <p class="pl-xl-0 pl-lg-0 pl-md-0 pl-sm-0 pl-sm-3 ml-sm-3 pl-0 ml-4">{{ item.text }}</p>
          <a :href="item.link"><p :class="item.classOpmaak">{{ item.contact }}</p></a>
        </div>
      </div>
    </div>

    <!--    <div class="row px-xl-5 py-xl-2 py-lg-2 py-md-2 py-sm-0 py-0 p-0 m-0" id="bt-footer" style="background-color: green">-->
    <div class="row m-0" id="bt-footer">
      <!--      <div class="offset-xl-1 col-xl-4 offset-lg-0 col-lg-5 offset-md-0 col-md-6 offset-sm-2 col-sm-8  text-xl-left text-lg-left text-sm-center text-center  pt-xl-3 my-xl-0 ml-xl-5 pl-xl-5 mr-xl-5 pr-xl-5 pl-lg-4 mx-md-0 pr-md-0 px-md-0 p-md-0 py-sm-0 py-0  pt-lg-3"-->
      <div class="offset-xl-0 col-xl-5 pl-xl-5 ml-xl-4  offset-lg-0 col-lg-5 pl-lg-5 pt-lg-3  offset-lg-0 col-lg-5  offset-md-0 col-md-5 pl-md-4 offset-sm-2 col-sm-9 pl-sm-5 offset-0 col-12 pt-sm-3 pt-3 text-center" id="copyright">
        <a :href="footer.link_copyright"><p>{{ footer.text_copyright }}</p></a>
      </div>
      <!--      <div class="offset-xl-0 col-xl-5 offset-lg-1 col-lg-6 offset-md-0 col-md-6 offset-sm-1 col-sm-10  text-xl-left text-lg-left text-sm-center text-center  ml-xl-5 pl-xl-5 mt-xl-3 mt-lg-3 pt-lg-1 pl-lg-5 ml-lg-5 mx-md-0 px-md-0  text-white" style="background-color: blue">-->
<!--      <div class="offset-xl-0 col-xl-5 pl-xl-5 ml-xl-5  offset-lg-0 col-lg-7 pl-lg-5 ml-lg-0 text-white" style="background-color: blue">-->
      <div class="offset-xl-1 col-xl-5 pl-xl-5  offset-lg-0 col-lg-7 pl-lg-5  offset-md-0 col-md-7 pl-md-4  offset-sm-2 col-sm-9 offset-0 col-12 text-white" id="footer_links">
        <ul class="pl-xl-2 pl-lg-5 pt-lg-3">
          <li v-for="(item, index) in footer.bottom_footer" :key="item"><a :href="item.link">{{ item.text }}</a><span :class="item.classBullet">{{ item.bullet }}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import footer from "../../assets/JSON/footer.json"

export default {
  name: "FooterComponent",
  data() {
    return {
      footer: footer,
      imagePath: "/src/assets/Footer/",
      dropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }
}
</script>

<style lang="scss">
@import "/src/scss/base";

//Variabelen
//----------
//USED COLORS
//$colorTertiary: #ffffff;

//FONT-SIZE
//$fontSizeParagraph: 1rem;
//$fontSizeH3: 1.25rem;

//FOOTER
//$footerBackground: #282F3A;
//$footerBackgroundBottom: #252B36;
//$colorLinksFooter: #a0a8b5;

//----------------------------------------------------------------------------------------------------------------------

#footer {
  background: $footerBackgroundBottom;
  background: $footerBackground;
  padding: 0;

  #tacho {
    position: relative;
    color: $colorTertiary;
    font-weight: 400;
    margin-left: 12%;

    &::before {
      position: absolute;
      left: -28px;
      top: -5px;
      font-family: FontAwesome;
      color: #ffffff;
      font-size: 20px;
      content: "\f3fd";
    }
  }


  #navigate {

    p {
      font-size: $fontSizeParagraph;
      color: $colorTertiary;
    }

    .dropdown-toggle {
      cursor: pointer;
      background: none;
      border: none;
      outline: none;
      color: $colorTertiary;
      font-size: $fontSizeParagraph;
    }

    .dropdown-menu {
      display: none;
      list-style: none;
      padding: 5% 0;
      height: auto;
      background-color: transparent;

      li {
        a {
          font-size: $fontSizeParagraph;
          color: $colorTertiary;
          font-weight: 600;
          margin: 5%;
        }
      }
    }

    .open .dropdown-menu {
      display: block;
    }

    ul {
      height: 200px;
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        a {
          color: $colorTertiary;
          font-size: 16px;

          &:hover {
            text-decoration: none;
          }

        }
      }
    }
  }

  img {
    width: 18%;
  }


  #contact_footer {
    p {
      color: #ffffff;
      font-weight: 700;
      font-size: 14px;
    }

    h3 {
      font-size: 18px;
    }

    a {

      p:nth-child(1) {
        position: relative;
        color: $colorLinksFooter;
        font-weight: 400;
        margin-left: 12%;

        &::before {
          position: absolute;
          left: -28px;
          top: -5px;
          font-family: FontAwesome;
          color: #a0a8b5;
          font-size: 20px;
        }
      }

      p.tel::before {
        content: "\f879";
      }

      p.send::before {
        content: "\f1d8";
      }
    }
  }

  #bt-footer {
    background: $footerBackgroundBottom;
    width: 100%;
    #copyright p {
      color: $colorTertiary;
    }
    a {
      color: $colorTertiary;
      font-size: $fontSizeParagraph;

      &:hover {
        text-decoration: none;
      }
    }

    ul {
      display: flex;
      list-style-type: none;
      margin-top: .25%;
      font-size: 12px;


      li {
        margin: 0 1%;

        a {
          font-size: 12px;
        }
      }
    }
  }
}

//----------------------------------------------------------------------------------------------------------------------
//RESPONSIVE

@media screen and (max-width: 1200px) {
  #footer {
    overflow: hidden;

    #bt-footer {
      ul {

        li {
          margin: 0 1% 0 .65%;
        }
      }
    }
  }
}

@media screen and (min-width: 993px) and (max-width: 1199px) {
  #footer {
    overflow: hidden;
  }
}

@media screen and (min-width: 769px) and (max-width: 992px) {
  #footer {
    overflow: hidden;
    #bt-footer {
      #copyright {
        //padding-top: 1.5%;
      }
    }
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  #footer {
    overflow: hidden;

    img {
      width: 18%;
    }

    #bt-footer {
      #copyright {
        padding-top: 2.5%;
        p {
          font-size: .80rem;
        }
      }
      ul {
        margin-top: 4.5%;
      }
    }
  }
}

@media screen and (min-width: 415px) and (max-width: 576px) {
  #footer {
    img {
      width: 35%;
    }

    #bt-footer {
      #footer_links {
        ul {
          display: flex;
          flex-direction: column;
          text-align: center;

          li {
            margin: 1% 0;
          }
        }
        span {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 415px) {
  #footer {
    img {
      width: 50%;
    }
  }
  #bt-footer {
    #footer_links {
      ul {
        display: flex;
        flex-direction: column;
        text-align: center;

        li {
          margin: 1% 0;
        }
      }
      span {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  #footer {
    h3 {
      font-size: $fontSizeH3;
    }

    #contact_footer {
      p {
        font-size: .75rem;
      }
    }

    #copyright {
      p {
        margin: 3% 0 3% 0;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      padding: 2.5% 0;

      li {
        padding: .5% 0;
      }
    }
  }
}
</style>