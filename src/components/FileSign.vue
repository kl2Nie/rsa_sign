<template>
  <div>
    <el-upload drag :limit="1" :on-change="onSignChange" :show-file-list="false" :auto-upload="false">
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

  <div>
    <el-input class="inputkey" v-model="priKey" :rows="10" type="textarea"
      placeholder="请输入私钥，以-----BEGIN PRIVATE KEY-----开头，以-----END PRIVATE KEY-----结尾" clearable />
  </div>

  <div class="button">
    <el-button type="primary">
      文件签名
    </el-button>
  </div>

</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'
const priKey = ref('')
</script>

<script >
import SparkMD5 from 'spark-md5'

export default {

  data() {
    return {
      signmd5: "****",
    };
  },
//未支持分片
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
