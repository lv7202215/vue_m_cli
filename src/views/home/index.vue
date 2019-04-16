<template>
    <div class="home">
        <div class="top">
            <div class="nocard">
                <img src="@as/img/no_card.png" alt="">
                <div class="user_info">
                    <p>你好，游客</p>
                    <p>点击登陆</p>
                </div>
            </div>
        </div>
        <div class="box">
            <h2>我的订单</h2>
            <ul>
                <li @click="goList()" v-for="(item,index) in list" :key="index"><img src="@as/img/ico.png" alt=""><span>{{item}}</span></li>
            </ul>
        </div>
        <div class="box">
            <h2>我的优惠券</h2>
            <ul>
                <li v-for="(item,index) in list2" :key="index"><img src="@as/img/ico.png" alt=""><span>{{item}}</span></li>
            </ul>
        </div>
        <div class="box">
            <h2>设置</h2>
            <ul>
                <li v-for="(item,index) in list3" :key="index"><img src="@as/img/ico.png" alt=""><span>{{item}}</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                list: ['全部订单', '已支付', '未支付'],
                list2: ['全部优惠券', '已过期', '未过期'],
                list3: ['收获地址']
            }
        },
        mounted() {

        },
        methods: {
            goList(){
                this.$router.push('/demo')
            }
        },
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
            background: url("../../assets/img/bg.png");
            @include bg();
            .nocard{
                @include flex(row,space-around);
                height: rem(150);
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