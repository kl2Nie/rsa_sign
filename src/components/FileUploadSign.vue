<template>
  <el-upload class="upload-sign" drag action="" :on-change="onSignChange" :show-file-list="false" :auto-upload="false"
    :limit="1">
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
      <div>md5值:{{ signmd5 }}</div>
    </template>
  </el-upload>
</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
</script>

<script >
import SparkMD5 from 'spark-md5'

export default {

  data() {
    return {
      signmd5: "****",
    };
  },

  methods: {
    onSignChange: function (file) {
      var _this = this;
      let fileReader = new FileReader();
      var dataFile = file.raw;
      var spark = new SparkMD5.ArrayBuffer();
      fileReader.readAsArrayBuffer(dataFile)
      fileReader.onload = function (e) {
        spark.append(e.target.result);
        var signmd5 = spark.end()
        _this.signmd5 = signmd5;
      }
    }
  }

};
</script>
