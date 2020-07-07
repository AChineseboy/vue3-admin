<template>
  <zm-form label-position="top">
    <zm-form-item label="姓名">
      <input type="text" />
    </zm-form-item>

    <zm-form-item label="电话">
      <input type="text" />
    </zm-form-item>

    <zm-form-item label="是">
      <input type="text" />
    </zm-form-item>
    <zm-form-item label="家庭地址">
      <input type="text" />
    </zm-form-item>
  </zm-form>
</template>
<script>
import { ZmForm, ZmFormItem } from '@/components/form';

export default {
  components: {
    ZmForm,
    ZmFormItem,
  },
};
</script>
