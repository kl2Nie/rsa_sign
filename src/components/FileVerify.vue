<template>
  <div>
    <el-upload drag :limit="1" :on-change="onVerifyChange" :show-file-list="false" :auto-upload="false" action="0">
      <el-icon class="el-icon--upload">
        <upload-filled />
      </el-icon>
      <div class="el-upload__text">
        将待验证的文件拖到此处，或<em>点击选择</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          仅在浏览器内对文件进行验证，无需消耗流量
        </div>
        <div class="el-upload__tip">
          算法在源代码中已经提供，所有运算都发生在本地
        </div>
      </template>
    </el-upload>
  </div>

  <div>
    <el-input class="inputkey" v-model="publicKey" :rows="10" type="textarea"
      placeholder="请输入公钥，以-----BEGIN PUBLIC KEY-----开头，以-----END PUBLIC KEY-----结尾" />
  </div>

  <div>
    <el-input class="inputsign" v-model="fileSign" :rows="2" type="textarea" placeholder="请输入签名" />
  </div>

  <div class="button">
    <el-button type="primary" @click="verifyFile">
      验证签名
    </el-button>
  </div>

</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'
const publicKey = ref('')
const fileSign = ref('')
</script>

<script >
import SparkMD5 from 'spark-md5'
import JSEncrypt from 'jsencrypt'
import CryptoJS from 'crypto-js'

export default {
  data() {
    return {
      fileMD5: '',
      publicKey: '',
      fileSign: '',
    };
  },

  methods: {
    //计算文件MD5值，未分片大文件较慢
    onVerifyChange(file) {
      let _this = this;
      let fileReader = new FileReader();
      let dataFile = file.raw;
      let spark = new SparkMD5.ArrayBuffer();
      fileReader.readAsArrayBuffer(dataFile)
      fileReader.onload = function (e) {
        spark.append(e.target.result);
        let fileMD5 = spark.end()
        _this.fileMD5 = fileMD5;
      }

    },

    verifyFile() {
      //导入数据
      let md5v = this.fileMD5;//待验证文件MD5
      let pubkey = this.publicKey;//公钥
      let signature = this.fileSign;//验证的值
      //开始验证
      let verify = new JSEncrypt();
      verify.setPublicKey(pubkey);
      let verified = verify.verify(md5v, signature, CryptoJS.SHA256);
      //调试
      console.log(md5v);
      console.log(pubkey);
      console.log(verified);
      console.log(signature);

      if (verified) {
        alert('验证成功');
      }
      else {
        alert('验证失败');
      }
    }

  }
}
</script>

<style scoped>
.inputkey {
  width: 450px;
  margin-top: 10px;
}

.inputsign {
  width: 450px;
  margin-top: 10px;
}

.button {
  box-align: center;
  margin-top: 10px;
}
</style>