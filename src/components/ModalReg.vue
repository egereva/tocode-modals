<template>
    <modal title="Registration" @close="closeModal">
        <div slot="body">
            <form @submit.prevent="onSubmit">
                <!-- email -->
                <div class="form-item" :class="{errorInput: $v.email.$error}">
                    <label>Email:</label>
                    <p class="errorText" v-if="!$v.email.required">Field is required</p>
                    <p class="errorText" v-if="!$v.email.email">Email is not correct!</p>
                    <input
                            v-model="email"
                            :class="{error: $v.email.$error}"
                            @blur="$v.email.$touch()">
                </div>
                <!-- password -->
                <div class="form-item" :class="{errorInput: $v.password.$error}">
                    <label>Password:</label>
                    <p class="errorText" v-if="!$v.password.required">Field is required</p>
                    <p class="errorText" v-if="!$v.password.minLength">Name must have at least {{ $v.password.$params.minLength.min }}!</p>
                    <input
                            v-model="password"
                            :class="{error: $v.password.$error}"
                            @blur="$v.password.$touch()">
                </div>
                <!-- repeat password -->
                <div class="form-item" :class="{errorInput: $v.repeatPassword.$error}">
                    <label>Repeat password:</label>
                    <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical!</p>
                    <input
                            v-model="repeatPassword"
                            :class="{error: $v.repeatPassword.$error}"
                            @blur="$v.repeatPassword.$touch()">
                </div>

                <!-- button -->
                <button class="btn btnPrimary">Registration</button>

                <!-- no registration -->
                <div class="align-center">
                    <span class="form-link" @click="goToLogin">I have an account</span>
                </div>
            </form>
        </div>

    </modal>
</template>

<script>
    import {required, minLength, email, sameAs} from 'vuelidate/lib/validators'
    import modal from '@/components/UI/Modal.vue'

    export default {
        components: {
            modal
        },
        data() {
            return {
                email: '',
                password: '',
                repeatPassword: ''
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(5)
            },
            repeatPassword: {
                sameAsPassword: sameAs('password')
            }
        },
        methods: {
            onSubmit () {
                this.$v.$touch()
                if(!this.$v.$invalid){
                    const user = {
                        email: this.email,
                        password: this.password
                    }
                    console.log(user)

                    //done
                    this.closeModal()
                }
            },
            closeModal () {
                //close
                this.$emit('close')

                //reset
                this.resetData()
            },
            goToLogin () {
                this.$emit('goToLogin')

                //reset
                this.resetData()
            },
            resetData () {
                this.email = ''
                this.password = ''
                this.repeatPassword = ''
                this.$v.$reset()
            }
        }
    }
</script>

<style lang="scss" scoped>
    label {
        text-align: left;
    }

    .form-link {
        display: inline-block;
        margin: 20px 0;
        text-decoration: underline;
        cursor: pointer;

        &:hover {
            text-decoration: none;
        }
    }

</style>
