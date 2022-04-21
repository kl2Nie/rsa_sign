<template>
  <div class="sign">
    <FileUploadSign />
    <InputSign />
    <ButtonSign />
  </div>
</template>

<script>
import FileUploadSign from '@/components/FileUploadSign.vue'
import InputSign from '@/components/InputSign.vue'
import ButtonSign from '@/components/ButtonSign.vue'

export default {
  name: 'SignView',
  components: {
    FileUploadSign,
    InputSign,
    ButtonSign
}
}

</script>
