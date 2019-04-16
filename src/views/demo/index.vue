<template>
    <ul>
        <li class="item" v-for="(item,index) in listData" :key="index">
            <span>{{item.name}}</span>
            <span>{{item.url}}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "demo",
        data() {
            return {
                listData: []
            }
        },
        mounted() {
            this.$http.get('/list').then(res => {
                this.listData = res.data.projects
            })
        },
        methods: {},
    }
</script>

<style scoped lang="scss">
    .item{
        line-height: 3;
        margin: rem(20) 0;
        padding:0 rem(10);
        background: #fff;
        border-radius: rem(5);
    }
</style>