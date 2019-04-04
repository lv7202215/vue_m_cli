<template>
    <div class="com-upload-img">
        <div class="img_group">
            <div class="img_box" v-show="allowAddImg">
                <input ref="input" type="file" accept="image/*" multiple="multiple" @change="changeImg($event,module)">
                <div class="filter"></div>
                <span>请上传{{limit}}张不超过500KB的图片，</span>
                <span style="color: red">(图片分辨率大小务必在900*500以上)</span>
            </div>
            <div class="box">
                <div class="img_box" v-for="(item,index) in imgArr" :key="index">
                    <div class="img_show_box">
                        <b>图片{{index+1}}</b>
                        <img :src="item" alt="">
                        <div class="img_delete" @click="deleteImg(index)">删除</div>
                        <!-- <i class="img_delete" @click="imgArr.splice(index,1)"></i> -->
                    </div>
                </div>
            </div>
        </div>
        <Divider dashed/>
        <div class="history_box">
            <div v-for="(item,index) in imgList" :key="index" v-show="history">
                <b>图片{{index+1}}</b>
                <img :src="item">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ComUpLoad',
        props: {
            module: String,
            limit: Number,
            imgList: Array
        },
        data() {
            return {
                imgData: '',
                imgArr: [],
                imgSrc: '',
                allowAddImg: true,
                history: true
            }
        },
        methods: {
            changeImg: function (e, module) {
                let _this = this;
                let imgLimit = 500;
                let files = e.target.files;
                let image = new Image();
                // let minWidth = 900;
                // let minHeight = 500;
                if (files.length > 0) {
                    let dd = 0;
                    let timer = setInterval(function () {
                        if (files.item(dd).type != 'image/png' && files.item(dd).type != 'image/jpeg' && files.item(dd).type != 'image/jpg') {
                            return false;
                        }

                        if (files.item(dd).size > imgLimit * 1024) {
                            _this.$Message.error('图片超过500k，请重新上传')
                            _this.$refs.input.value = ''
                        } else {
                            image.src = window.URL.createObjectURL(files.item(dd));
                            image.onload = function () {
                                // 默认按比例压缩
                                let w = image.width,
                                    h = image.height,
                                    scale = w / h;
                                // if(w<minWidth || h<minHeight){
                                //     _this.$Message.error('图片分辨率低于900*500，请重新上传')
                                //     _this.$refs.input.value = ''
                                // }
                                w = 450;
                                h = w / scale;
                                // 默认图片质量为0.7，quality值越小，所绘制出的图像越模糊
                                let quality = 1;
                                //生成canvas
                                let canvas = document.createElement('canvas');
                                let ctx = canvas.getContext('2d');
                                // 创建属性节点
                                let anw = document.createAttribute("width");
                                anw.nodeValue = w;
                                let anh = document.createAttribute("height");
                                anh.nodeValue = h;
                                canvas.setAttributeNode(anw);
                                canvas.setAttributeNode(anh);
                                ctx.drawImage(image, 0, 0, w, h);
                                let ext = image.src.substring(image.src.lastIndexOf(".") + 1).toLowerCase();//图片格式
                                let base64 = canvas.toDataURL("image/" + ext, quality);
                                // 回调函数返回base64的值
                                if (_this.imgArr.length < _this.limit) {
                                    _this.imgArr.push(base64);//替换数组数据的方法，此处不能使用：this.imgArr[index] = url;
                                    if (_this.imgArr.length >= _this.limit) {
                                        _this.allowAddImg = false;
                                        _this.UploadFun(_this.module)
                                    }
                                }
                                if (_this.imgArr.length === 0) {
                                    console.log(files)
                                }
                            }
                        }

                        if (dd < files.length - 1) {
                            dd++;
                        } else {
                            clearInterval(timer);
                        }
                    }, 400)
                }
            },

            deleteImg: function (index) {
                this.imgArr.splice(index, 1);
                if (this.imgArr.length < this.limit) {
                    this.allowAddImg = true;
                }
                if (this.imgArr.length === 0) {
                    this.$refs.input.value = ''
                }
            },
            // 上传
            UploadFun(module) {
                let params = {
                    images: this.imgArr
                }
                this.$store.dispatch('getUploadImg', {params, module})
                    .then(() => {
                        this.$Message.success('上传成功')
                        this.history = false
                    })
                    .catch()
            }
        },
    }
</script>
<style>
    .com-upload-img {
        margin-bottom: 45px;
    }

    .box {
        display: flex;
    }

    .img_show_box {
        width: 250px;
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        /*border: 1px solid #ccc;*/
        border-radius: 5px;
        margin-right: 20px;
        padding: 10px;
        box-sizing: border-box;
    }

    .img_show_box img {
        max-width: 100%;
        overflow-y: hidden;
    }

    .img_delete {
        display: inline-block;
        border-radius: 3px;
        background: indianred;
        font-size: 11px;
        width: 45px;
        line-height: 20px;
        color: #fff !important;
        text-align: center;
        margin-left: 20px;
        margin-top: 15px;
    }

    .history_box {
        display: flex;
    }

    .history_box div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 20px;
    }

    .history_box img {
        width: 250px;
        max-height: 250px;
    }
</style>