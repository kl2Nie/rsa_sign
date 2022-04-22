<template>
  <div class="verify">
    <FileUploadVerify />
    <InputVerifyKey />
    <InputVerifySignDate />
    <ButtonVerify />
  </div>
</template>

<script>
import FileUploadVerify from '@/components/FileUploadVerify.vue'
import InputVerifyKey from '@/components/InputVerifyKey.vue'
import ButtonVerify from '@/components/ButtonVerify.vue'
import InputVerifySignDate from '@/components/InputVerifySignDate.vue'

export default {
  name: 'VerifyView',
  components: {
    FileUploadVerify,
    InputVerifyKey,
    ButtonVerify,
    InputVerifySignDate
}
}

</script>
