<template>
    <div class="wrapper-content">
        <section>
            <div class="container">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>

                <!--nav-->
                <div class="nav">
                    <router-link class="btn btnPrimary router-link" to="/modals">Modals</router-link>
                    <router-link class="btn btnPrimary router-link" to="/login">Authorization / Registration</router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Home page',
                description: 'A home page is generally the main page a visitor navigating to a website from a web search engine will see, and it may also serve as a landing page to attract visitors. The home page is used to facilitate navigation to other pages on the site by providing links to prioritized and recent articles and pages, and possibly a search box.'
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        font-size: 32px;
        margin-bottom: 25px;
        text-transform: uppercase;
    }

    .nav {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .router-link {
        margin-bottom: 20px;
    }

</style>
