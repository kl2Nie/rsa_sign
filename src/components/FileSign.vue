<template>
  <!-- 上传文件 -->
  <div>
    <el-upload drag :limit="1" :on-change="onSignChange" :show-file-list="false" :auto-upload="false" action="0">
      <el-icon class="el-icon--upload">
        <upload-filled />
      </el-icon>
      <div class="el-upload__text">
        将待签名的文件拖到此处，或<em>点击选择</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          仅在浏览器内对文件进行签名，无需消耗流量
        </div>
        <div class="el-upload__tip">
          算法在源代码中已经提供，所有运算都发生在本地
        </div>
      </template>
    </el-upload>
  </div>
  <!-- 输入私钥 -->
  <div>
    <el-input class="inputkey" v-model="privateKey" :rows="8" type="textarea"
      placeholder="请输入私钥，以-----BEGIN PRIVATE KEY-----开头，以-----END PRIVATE KEY-----结尾" clearable />
  </div>
  <!-- 提交 -->
  <div class="button">
    <el-button type="primary" @click="signFile">
      文件签名
    </el-button>
  </div>
  <!-- 签名 -->
  <div>
    <el-input class="inputkey" v-model="signv" :rows="2" type="textarea" placeholder="此处将填入签名值" clearable />
  </div>

</template>

<script setup>
import SparkMD5 from 'spark-md5'
import JSEncrypt from 'jsencrypt'
import CryptoJS from 'crypto-js'
import { saveAs } from 'file-saver'
import { UploadFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

const privateKey = ref('')
const fileMD5 = ref('')
const filename = ref('')
const signv = ref('')

function onSignChange(file) {
  //获取文件名，可将签名作为文件导出
  filename.value = file.name;
  let fileReader = new FileReader();
  //获取文件二进制值
  let dataFile = file.raw;
  let spark = new SparkMD5.ArrayBuffer();
  fileReader.readAsArrayBuffer(dataFile)
  fileReader.onload = function (e) {
    spark.append(e.target.result);
    let md5 = spark.end()
    fileMD5.value = md5;
    //调试
    // console.log(filename)//在控制台打印文件名
    // console.log(fileMD5)//在控制台打印文件MD5值
  }
}
function signFile() {
  //导入数据
  let md5v = fileMD5.value;//文件MD5值
  console.log(md5v)
  let privkey = privateKey.value;//导入私钥
  //调试
  //console.log(privkey)
  //开始验证
  let sign = new JSEncrypt();
  sign.setPrivateKey(privkey);
  let signature = sign.sign(md5v, CryptoJS.MD5, "md5");
  //将签名值保存到sign.txt文件
  signv.value = signature;

  let name = filename.value
  let data = signature;
  let str = new Blob([data], { type: 'text/plain;charset=utf-8' });
  saveAs(str, String(name) + '.txt');
  //调试
  //console.log(signature);
  //console.log(privkey);
}

</script>


<style scoped>
.inputkey {
  width: 450px;
  margin-top: 10px;
}

.button {
  box-align: center;
  margin-top: 10px;
}
</style>
