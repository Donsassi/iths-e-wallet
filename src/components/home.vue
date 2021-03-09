<template>
  <main id="home">
    <top></top>
    <div @click="DeleteCard">
    <card
        
        :number="$store.state.selectedCard.number"
        :username="$store.state.selectedCard.username"
        :date1="$store.state.selectedCard.date1"
        :date2="$store.state.selectedCard.date2"
        :card_type="$store.state.selectedCard.card_type"
    ></card>
    </div>

    <cardStack></cardStack>
  </main>
</template>



<script>
import top from "./home/top";
import cardStack from "./home/cardStack";
import card from "./home/card";

export default {
  methods:{
    DeleteCard(){
      if(this.$store.state.selectedCard.index != -1){
      if(confirm('Are You Sure You Want Delete This Card ?')){
       this.$store.state.cards.splice(this.$store.state.selectedCard.index,1)
       this.$store.state.selectedCard.index = -1
      this.$store.state.selectedCard.number = '6666 6666 6666 6666'
      this.$store.state.selectedCard.username ='Christoffer Wallenberg'
      this.$store.state.selectedCard.date1 =  '03'
      this.$store.state.selectedCard.date2 =  '21'
      this.$store.state.selectedCard.card_type = 'evil'
      }
      }
     
    }
  },
  components: {
    top,
    cardStack,
    card,
  },
};
</script>


<style>
</style>