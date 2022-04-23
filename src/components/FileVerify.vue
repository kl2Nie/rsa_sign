<template>
  <div>
    <el-upload drag :limit="1" :on-change="onVerifyChange" :show-file-list="false" :auto-upload="false">
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
    <el-input class="inputkey" v-model="textarea" :rows="10" type="textarea"
      placeholder="请输入公钥，以-----BEGIN PUBLIC KEY-----开头，以-----END PUBLIC KEY-----结尾" />
  </div>

  <div>
    <el-input class="inputsign" v-model="textarea" :rows="2" type="textarea"
      placeholder="请输入签名" />
  </div>

  <div class="button">
    <el-button type="primary">
      验证签名
    </el-button>
  </div>

</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'
const textarea = ref('')
</script>

<script >
import SparkMD5 from 'spark-md5'

export default {
  data() {
    return {
      verifymd5: "****",
    };
  },

  methods: {
    onVerifyChange: function (file) {
      var _this = this;
      let fileReader = new FileReader();
      var dataFile = file.raw;
      var spark = new SparkMD5.ArrayBuffer();
      fileReader.readAsArrayBuffer(dataFile)
      fileReader.onload = function (e) {
        spark.append(e.target.result);
        var verifymd5 = spark.end()
        _this.verifymd5 = verifymd5;
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