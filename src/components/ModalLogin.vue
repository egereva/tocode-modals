<template>
    <modal title="Login" @close="closeModal">
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

                <!-- button -->
                <button class="btn btnPrimary">Login</button>

                <!-- no registration -->
                <div class="align-center">
                    <span class="form-link" @click="goToReg">I need to registration</span>
                </div>
            </form>
        </div>

    </modal>
</template>

<script>
    import { required, minLength, email} from 'vuelidate/lib/validators'
    import modal from '@/components/UI/Modal.vue'

    export default {
        components: {
            modal
        },
        data() {
            return {
                email: '',
                password: '',
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
            goToReg () {
                this.$emit('goToReg')

                //reset
                this.resetData()
            },
            resetData () {
                this.email = ''
                this.password = ''
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
