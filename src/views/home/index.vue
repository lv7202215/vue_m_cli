<template>
    <div class="home">
        <h1>test</h1>
        <RSA></RSA>
    </div>
</template>

<script>
    import RSA from '@cp/RSAkey/index'
    export default {
        name: "yanglao",
        components: {RSA},
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    .home{
        @include ab()
    }
</style>