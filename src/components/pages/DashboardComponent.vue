<template>
  <section class="pb-16">
    <AccountSection></AccountSection>
    <SubscriptionSection></SubscriptionSection>
  </section>
</template>
<script>

import AccountSection from '../sections/AccountSection'
import SubscriptionSection from '../sections/SubscriptionSection'

export default {
  name: 'DashboardComponent',
  // *----------------------- P r o p s ----------------------------------------------------------
  props: {},
  // *----------------------- D a t a -----------------------------------------------------------
  components:{
    AccountSection,
    SubscriptionSection
  },
  data() {
    return {}
  },
  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {},
  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  created() {
    this.$store.dispatch('base/getInit')
  },
  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {},
  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {}
}
</script>
