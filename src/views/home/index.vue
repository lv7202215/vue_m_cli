<template>
    <div class="home">
        <div class="top">
            <div class="nocard">
                <img src="@as/no_card.png" alt="">
                <div class="user_info">
                    <p>你好，游客</p>
                    <p>点击绑卡</p>
                </div>
            </div>
        </div>
        <div class="box">
            <h2>我的订单</h2>
            <ul>
                <li v-for="(item,index) in list" :key="index"><img src="@as/ico.png" alt=""><span>{{item}}</span></li>
            </ul>
        </div>
        <div class="box">
            <h2>必备工具</h2>
            <ul>
                <li v-for="(item,index) in list2" :key="index"><img src="@as/ico.png" alt=""><span>{{item}}</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                list: ['订单1', '订单2', '订单3'],
                list2: ['我的分享', '我的金融', '收货地址']
            }
        },
        mounted() {

        },
        methods: {},
    }
</script>

<style scoped lang="scss">
    .home {
        h1 {
            font-size: rem(28);
        }
        .top{
            color: #fff;
            font-size: rem(16);
            background: url("../../assets/bg.png");
            @include bg();
            .nocard{
                @include flex(row,space-around);
                height: rem(175);
                img{
                    width: rem(60);
                    height: rem(60);
                }
            }
        }
        .box{
            box-sizing: border-box;
            background: #fff;
            border-radius: rem(5);
            margin:0 rem(10) rem(15) rem(10);
            padding: rem(10);
            ul{
                display: flex;
                li{
                    @include flex(column);
                    margin: rem(15);
                }
                img{
                    width: rem(35);
                    height: rem(35);
                }
            }
        }
    }
</style>