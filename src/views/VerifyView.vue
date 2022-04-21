<template>
  <div class="verify">
    <FileUploadVerify />
    <InputVerify />
    <ButtonVerify />
  </div>
</template>

<script>
import FileUploadVerify from '@/components/FileUploadVerify.vue'
import InputVerify from '@/components/InputVerify.vue'
import ButtonVerify from '@/components/ButtonVerify.vue'

export default {
  name: 'VerifyView',
  components: {
    FileUploadVerify,
    InputVerify,
    ButtonVerify
}
}

</script>
