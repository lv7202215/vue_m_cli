<template>
    <ul>
        <li class="item" v-for="(item,index) in listData" :key="index" @click="toDetail(item.id)">
            <b>{{item.name}}</b>
            <p>{{item.url}}</p>
            <p>{{item.email}}</p>
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
        methods: {
            toDetail(id){
                this.$router.push({path: '/detail'})
                // 此处是vuex的用法示例
                this.$store.commit('set_demo_id',id);
            }
        },
    }
</script>

<style scoped lang="scss">
    .item{
        font-size: rem(16);
        line-height: 1.2;
        border-bottom: rem(1) solid #F1F1F1;
        padding:0 rem(10);
        background: #fff;
        border-radius: rem(5);
    }
</style>