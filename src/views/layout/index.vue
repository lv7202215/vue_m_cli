<template>
    <div class="main">
        <!-- 使用动态的 transition name -->
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
        <!--loading控件-->
        <!--<Spin size="large" fix v-if="this.$store.state.loading.isLoading"></Spin>-->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                transitionName: ''
            }
        },
        mounted() {

        },
        methods: {},
        // watch $route 决定使用哪种过渡
        watch: {
            '$route'(to, from) {
                if (to.meta.index > from.meta.index) {
                    //设置动画名称
                    this.transitionName = 'slide-left';
                } else if (to.meta.index === from.meta.index){
                    this.transitionName = '';
                } else {
                    this.transitionName = 'slide-right';
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .slide-left-leave-active, .slide-left-enter-active, .slide-right-leave-active, .slide-right-enter-active {
        position: absolute !important;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        transition: all 0.2s ease;
    }
    .slide-left-enter, .slide-right-leave-to {
        transform: translateX(100%);
    }
    .slide-left-enter-to, .slide-left-leave, .slide-right-enter-to, .slide-right-leave {
        transform: translateX(0);
    }
    .slide-left-leave-to, .slide-right-enter {
        transform: translateX(-100%);
    }
</style>