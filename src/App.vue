<template>
  <div class="wrapper">

    <div class="wrapper-content">
      <section>
        <div class="container">
          <!--first modal-->
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Shoe first button</button>
          <modals
            title="First modal"
            v-show="modalFirst"
            @close="modalFirst = false">
            <div slot="body">
              <p>Text Text Text Text</p>
              <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Well Done!</button>
            </div>

          </modals>

          <!--second modal-->
          <button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">Show modal with form</button>
          <modals
                  title="Modal with form"
                  v-show="modalSecond.show"
                  @close="closeSecondForm">
            <div slot="body">
                <form @submit.prevent="submitSecondForm">
                  <label>Name:</label>
                  <input type="text" v-model="modalSecond.name" required>
                  <label>Email:</label>
                  <input type="email" v-model="modalSecond.email">
                  <button class="btn btnPrimary">Submit!</button>
                </form>
            </div>

          </modals>
        </div>
      </section>
    </div>

  </div>
</template>

<script>

import modals from '@/components/Modal.vue'

export default {
  name: 'app',
  components: {
    modals
  },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      }
    }
  },
  methods: {
    submitSecondForm () {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    },
    closeSecondForm () {
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    }
  }
}
</script>

<style lang="scss">


</style>
