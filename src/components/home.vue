<template>
  <main id="home">
    <top></top>
    <card></card>
    <cardStack></cardStack>
  </main>
</template>



<script>
import top from "./home/top";
import cardStack from "./home/cardStack";
import card from "./home/card";

export default {
  components: {
    top,
    cardStack,
    card,
  },
};
</script>


<style>
</style>