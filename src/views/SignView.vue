<template>
  <div class="sign">
    <FileUploadSign />
    <InputSignKey />
    <ButtonSign />
  </div>
</template>

<script>
import FileUploadSign from '@/components/FileUploadSign.vue'
import InputSignKey from '@/components/InputSignKey.vue'
import ButtonSign from '@/components/ButtonSign.vue'

export default {
  name: 'SignView',
  components: {
    FileUploadSign,
    InputSignKey,
    ButtonSign,
}
}

</script>
