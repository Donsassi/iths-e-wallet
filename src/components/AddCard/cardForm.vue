<template>
    <div>
        <card :number="form.number" :username="form.username" :date_M="form.date1" :date_Y="form.date2" :card_type="form.card_type"></card>
      <section class="card-form">
        <label for="number" class="col-2">Card Number</label>
        <input
          type="text"
          name="number"
          maxlength="16"
          placeholder="XXXX XXXX XXXX XXXX"
          class="col-2"
          v-model="form.number"
        />
        <label for="cardholder" class="col-2">Cardholder Name</label>
        <input
          type="text"
          name="cardholder"
          placeholder="Firstname Lastname"
          class="col-2"
           v-model="form.username"
        />
        <label for="month" class="col-1">Month</label>
        <label for="year" class="col-1">Year</label>
        <select name="month" class="col-1" v-model="form.date1">
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select name="month" class="col-1" v-model="form.date2">
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
        </select>
        <label for="vendor" class="col-2">Vendor</label>
        <select name="vendor" class="col-2" v-model="form.card_type">
          <option value="bitcoin inc">Bitcoin Inc</option>
          <option value="blockchain inc">Blockchain Inc</option>
          <option value="evil corp">Evil Corp</option>
          <option value="ninja bank">Ninja Bank</option>
        </select>
      </section>
      <a  class="cta" @click="addCard">Add Card</a>
    </div>
</template>



<script>
import card from '../AddCard/card'

export default {
    components:{
       card,
    },
  methods:{
    addCard(){
        this.$store.state.cards.push(this.form)
        this.$root.$router.push({path:'/home'})
    }
  },
  data(){
    return{
        form:{
          number:'',
          username:'',
          date1:'',
          date2:'',
          card_type:'blank',
        }
    }
  }
}
</script>