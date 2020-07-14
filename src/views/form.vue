<template>
  <zm-form label-position="left" :rules="rules" :model="form">
    <zm-form-item label="姓名" prop="name">
      <zm-input v-model="form.name"></zm-input>
    </zm-form-item>
  </zm-form>
</template>
<script>
import { ZmForm, ZmFormItem } from '@/components/form';
import ZmInput from '@/components/Input/index.vue';

const rules = {
  name: [
    {
      required: true,
      message: '请输入',
      trigger: 'blur',
    },
    {
      reg: /^123$/,
      trigger: 'blur',
      message: '请输入123',
    },
    {
      trigger: 'blur',
      message: '函数式',
      validator: (val) => {
        if (val !== '456') {
          return false;
        }
        return true;
      },
    },
  ],
};
export default {
  components: {
    ZmForm,
    ZmFormItem,
    ZmInput,
  },
  setup() {
    const form = {
      name: 123,
    };
    return {
      rules,
      form,
    };
  },
};
</script>
