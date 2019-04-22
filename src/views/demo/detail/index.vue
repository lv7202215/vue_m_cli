<template>
    <div>
        <nut-cell title = "姓名"  :desc = "this.formData.name"></nut-cell>
        <nut-cell title = "地址"  :desc = "this.formData.address" :showIcon = "true"></nut-cell>
        <nut-cell title = "邮箱"  :desc = "this.formData.email"></nut-cell>
    </div>
</template>

<script>
    export default {
        name: "demo",
        data() {
            return {
                formData:{}
            }
        },
        mounted() {
            this.$http.get(`/detail/${this.$store.getters.demoId}`).then(res => {
                this.formData = res.data
            })
        },
        methods: {},
    }
</script>

<style scoped>

</style>