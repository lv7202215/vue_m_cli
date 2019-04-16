<template>
    <div>
        <md-field>
            <md-field-item solid title="姓名" :content="this.formData.name"/>
            <md-field-item solid title="地址" :content="this.formData.address" />
            <md-field-item solid title="邮箱" :content="this.formData.email" />
        </md-field>
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