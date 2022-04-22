<template>
<div>
  <el-input
    class="input"
    v-model="textarea"
    :rows="2"
    type="textarea"
    placeholder="请输入文件的签名"
  />
</div>
</template>

<script setup>
import { ref } from 'vue'
const textarea = ref('')
</script>

<style scoped>
.input{
    width: 450px;
    margin-top:10px;
}
</style>
