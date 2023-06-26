<template>
    <HeaderComponent/>
    <WatIsHet/>
    <WatDoetHet/>
    <HoeWerktHet/>
    <Voorwaarden/>
  <TestHetZelf/>
<!--    <UseCases />-->
  <contact/>

</template>

<script>
import HeaderComponent from "./0.header/HeaderComponent.vue";
import WatIsHet from "./1.wat_is_het/watishet.vue";
import WatDoetHet from "./2.wat_doet_het/watdoethet.vue";
import HoeWerktHet from "./3.hoe_werkt_het/hoewerkthet.vue";
import Voorwaarden from "./4.voorwaarden/voorwaarden.vue";
import TestHetZelf from "./5.test_het_zelf/TestHetZelf.vue";
// import UseCases from "./UseCases.vue";
import Contact from "./7.Contact/contact.vue";

export default {
  name: "HomePageView",
  components: {
    HeaderComponent,
    WatIsHet,
    WatDoetHet,
    HoeWerktHet,
    Voorwaarden,
    TestHetZelf,
    // UseCases,
    Contact,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.scrollIndicator);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('scroll', this.scrollIndicator);
  },

  methods: {

    handleScroll(event) {
      // Any code to be executed when the window is scrolled

      window.onscroll = function () {
        scrollFunction()
      };

      function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.getElementsByClassName("navbar")[0].style.padding = "1% 5%";
          document.getElementsByClassName("navbar")[0].style.backgroundColor = "#ffffff";
          document.getElementsByClassName("navbar")[0].style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.16)"
          document.getElementsByClassName("progress-container ")[0].style.height = "4px";
          document.getElementsByClassName("progress-container ")[0].style.backgroundColor = "";
          document.getElementsByClassName("progress-bar ")[0].style.height = "4px";

          let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          let scrolled = (winScroll / height) * 100;
          document.getElementById("indicatorBar").style.width = scrolled + "%";

        } else {
          document.getElementsByClassName("navbar")[0].style.padding = "1.5% 8%";
          document.getElementsByClassName("navbar")[0].style.backgroundColor = "";
          document.getElementsByClassName("navbar")[0].style.boxShadow = ""
          document.getElementsByClassName("progress-container ")[0].style.height = "0";
          document.getElementsByClassName("progress-container ")[0].style.backgroundColor = "";
          document.getElementsByClassName("progress-bar ")[0].style.height = "0";

          let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          let scrolled = (winScroll / height) * 100;
        }
      }
    },
  }
}
</script>

<style lang="scss">

</style>