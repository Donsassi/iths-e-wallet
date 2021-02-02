<template>
  <main id="add-card">
    <top></top>
    <cardForm></cardForm>
  </main>
</template>


<script>
import top from "./AddCard/top";

import cardForm from "./AddCard/cardForm";

export default {
  components: {
    top,
    cardForm,
  },
};
</script>