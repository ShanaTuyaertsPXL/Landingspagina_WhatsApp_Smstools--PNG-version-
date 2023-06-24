<template>
  <div>
    <div class="card-deck">
      <div v-for="card in cards" :key="card.id" class="card" ref="swipeCard">
        <img :src="card.image" class="card-img-top" alt="Card image">
        <div class="card-body">
          <h5 class="card-title">{{ card.title }}</h5>
          <p class="card-text">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTouch from 'vue-touch';

export default {
  directives: {
    touch: VueTouch.directive
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          image: "path/to/image1.jpg",
          title: "Card 1",
          description: "This is card 1"
        },
        {
          id: 2,
          image: "path/to/image2.jpg",
          title: "Card 2",
          description: "This is card 2"
        },
        {
          id: 3,
          image: "path/to/image3.jpg",
          title: "Card 3",
          description: "This is card 3"
        }
      ]
    };
  },
  mounted() {
    this.$refs.swipeCard.forEach(card => {
      this.$touch.on(card, 'swiperight', () => {
        this.handleSwipe(card);
      });
    });
  },
  methods: {
    handleSwipe(card) {
      // Implementeer hier je logica voor het verwerken van de swipe-actie op een kaart
      console.log("Swiped card:", card);
    }
  }
};
</script>

<style>
/* Voeg hier eventuele aangepaste stijlen toe */
</style>



<!--<template>-->
<!--&lt;!&ndash;  <div id="use-cases" data-spy="scroll" data-target=".navbar" data-offset="50">&ndash;&gt;-->
<!--  <div id="use-cases">-->
<!--    <h2>Use Cases</h2>-->
<!--    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate dicta, dolore facere incidunt ipsam-->
<!--      modi mollitia nobis, nulla numquam quibusdam sequi sint ullam, vero vitae! Accusamus ad animi assumenda,-->
<!--      consequuntur cum deserunt dignissimos dolorem ducimus, eaque eius eveniet ex impedit ipsa labore modi nam-->
<!--      obcaecati odit quae, quaerat qui repudiandae sapiente sed tempore ut vero voluptate voluptatibus? Accusamus amet-->
<!--      aut autem doloremque dolores est minima nam possimus quasi, quis quos reprehenderit, tempore voluptatum! Accusamus-->
<!--      ad animi aperiam, blanditiis cumque distinctio dolores dolorum ducimus eos, facilis fuga id illum ipsum itaque-->
<!--      iure laboriosam minus natus nesciunt nihil non nostrum officiis provident quia quo repellendus sapiente sint sit-->
<!--      soluta tempora veniam. Accusamus aliquid amet, aperiam at aut consectetur deleniti distinctio doloribus dolorum ea-->
<!--      eius eligendi enim error et facilis illo ipsa ipsam ipsum iure labore laborum mollitia odit optio pariatur quae-->
<!--      quaerat quidem quo quos ratione repellendus suscipit ullam ut veniam veritatis vitae voluptatem voluptates.-->
<!--      Blanditiis eaque eius fugit harum omnis quisquam quod recusandae! Delectus, est facilis fugit illo in iste-->
<!--      laudantium nulla reprehenderit sequi. Ad aspernatur commodi cum debitis delectus eos esse exercitationem incidunt-->
<!--      ipsa iure minima quae quas, quo ratione rem suscipit vel vitae voluptatum. Fugiat incidunt maiores minus omnis,-->
<!--      praesentium quos rerum sit? Ab debitis distinctio eos, esse expedita perspiciatis quibusdam sequi voluptates.-->
<!--      Commodi consequatur distinctio eius eligendi illum quis quod repellendus sit veniam vero! Aliquam asperiores-->
<!--      assumenda consequuntur cum dolores dolorum ea esse et explicabo illo minus molestiae necessitatibus nulla odio-->
<!--      odit, placeat quos repellendus soluta voluptatem.</p>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "UseCases.vue"-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--#use-cases {-->
<!--  height: 100vh;-->
<!--}-->
<!--</style>-->