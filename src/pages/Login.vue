<template>
    <div class="wrapper-content">
        <section>
            <div class="container">
                <!-- Login -->
                <button class="btn btnPrimary" @click="modalLogin = !modalLogin">Show Login modal</button>
                <modalLogin v-show="modalLogin" @close="modalLogin = false" @goToReg="goToReg"/>

                <!-- Registration -->
                <button class="btn btnPrimary" @click="modalReg = !modalReg">Show Registration modal</button>
                <modalReg v-show="modalReg" @close="modalReg = false" @goToLogin="goToLogin"/>
            </div>
        </section>
    </div>
</template>

<script>
    import modalLogin from '@/components/ModalLogin.vue'
    import modalReg from '@/components/ModalReg.vue'

    export default {
        components: {
            modalLogin,
            modalReg
        },
        data() {
            return {
                modalLogin: false,
                modalReg: false
            }
        },
        methods: {
            goToReg () {
                this.modalLogin = false
                this.modalReg = true
            },
            goToLogin () {
                this.modalLogin = true
                this.modalReg = false
            }
        }

    }
</script>

<style lang="scss">

</style>
