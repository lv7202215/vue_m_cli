<template>
    <div class="RSA">
        <div>
            <button @click="getKey">生成公钥、私钥</button>
        </div>
        <div>
            <p>公钥：</p>
            <div>{{this.$store.getters.pubK}}</div>
        </div>
        <div>
            <md-input-item
                    ref="keyboard"
                    title="密码"
                    placeholder="请输入密码"
                    type="password"
                    v-model="password"
                    @focus="isKeyBoardShow = true"
                    @blur="isKeyBoardShow = false"
            ></md-input-item>
            <button @click="setKeyFun">生成密文</button>
        </div>
        <div>
            <p>密文：</p>
            <div>{{key}}</div>
        </div>
        <div>
            <button @click="getKeyFun">解析密码</button>
        </div>
        <div>
            <p>密码：</p>
            <div>{{inputKey}}</div>
        </div>
        <md-number-keyboard
                v-model="isKeyBoardShow"
                type="simple"
                @enter="onNumberEnter"
                @delete="onNumberDelete"
        ></md-number-keyboard>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                // 密码
                password: '',
                // 加密数据
                key: '',
                // 解密数据
                inputKey:'',
                isKeyBoardShow: false,

            }
        },
        methods: {
            // 获取公钥
            getKey() {
                let params={
                    bits:1024
                }
                this.$store.dispatch('getRsa',params)
            },
            // 通过公钥生成密文
            setKeyFun(){
                this.key = this.$setRSA(this.password, this.$store.getters.pubK)
                // sessionStorage.setItem('key',this.key)
                // console.log(this.key)
            },
            // 将密文发送给后端生成解密数据
            getKeyFun() {
                let params={
                    ciphertext: this.key
                }
                this.$store.dispatch('getPassword',params)
                // this.inputKey = this.$getRSA(sessionStorage.getItem('key'), this.$store.getters.priK)
                // console.log(this.inputKey)
            },
            onNumberEnter(val) {
                if(this.password.length < 5) {
                    this.password += val
                }else {
                    this.$refs['keyboard'].blur();
                    this.isKeyBoardShow = false
                }
            },
            onNumberDelete() {
                if (this.password === '') {
                    return
                }
                this.password = this.password.substr(0, this.password.length - 1)
            },
        }
    }
</script>

<style scoped>
    .RSA {
        word-break: break-all;
        word-wrap: break-word;
    }
</style>