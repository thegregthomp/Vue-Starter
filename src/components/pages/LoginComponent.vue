<template>
  <section class="container extra-small base py-16">
    <div class="level-header in-section">
      <h2>Login</h2>
    </div>
    <div class="form-container mb-16">
      <form action="">
        <div class="form-row mb-16">
          <label for="email">Email</label>
          <input type="text" name="email">
        </div>
        <div class="form-row mb-10">
          <label for="password">Password</label>
          <div class="password-wrapper">
            <input name="password" :type="isInputHidden ? 'password' : 'text'">
            <svg class="cursor-pointer" v-on:click="togglePassword" width="20px" height="12px" viewBox="0 0 20 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="wink-web-paywall-login" transform="translate(-875.000000, -468.000000)">
                        <g id="Group" transform="translate(875.000000, 469.000000)">
                            <circle id="Oval" fill="#D8D8D8" cx="10" cy="5" r="3"></circle>
                            <path d="M0,5.06575733 C5.9577253,-1.68858578 13.6266272,-1.68858578 20,5.06575733" id="Path-3" stroke="#979797"></path>
                            <path d="M0,10.0657573 C5.9577253,3.31141422 13.6266272,3.31141422 20,10.0657573" id="Path-3" stroke="#979797" transform="translate(10.000000, 7.532879) scale(1, -1) translate(-10.000000, -7.532879) "></path>
                        </g>
                    </g>
                </g>
            </svg>
          </div>
        </div>
        <div class="button-form-row mb-8">
          <button class="button-input" type="submit">Sign In</button>
        </div>
        <div class="form-links">
          <div class="form-links__link"><a href="#">Forgot password?</a></div>
          <div class="form-links__link"><a href="#">Create a new account</a></div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>

export default {
  name: 'BaseComponent',
  // *----------------------- P r o p s ----------------------------------------------------------
  props: {},
  // *----------------------- D a t a -----------------------------------------------------------
  components:{

  },
  data() {
    return {
      isInputHidden:true
    }
  },
  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {},
  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  created() {
    this.$store.dispatch('base/getInit')
  },
  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {
    togglePassword(){
      this.isInputHidden = !this.isInputHidden
    }
  },
  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {}
}
</script>
