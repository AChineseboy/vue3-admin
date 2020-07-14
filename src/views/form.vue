<template>
  <zm-form
    label-position="left"
    :rules="rules"
    :model="form"
  >
    <zm-form-item
      label="姓名"
      prop="name"
    >
      <zm-input
        v-model="form.name"
        show-word-limit
        max-length='20'
      >
      </zm-input>
    </zm-form-item>

    <zm-form-item label="switch">
      <zm-switch
        v-model="form.switchVal"
        check-value="123"
        uncheck-value="456"
        @change="switchHandle"
      ></zm-switch>
    </zm-form-item>
  </zm-form>
</template>
<script>
import { ZmForm, ZmFormItem } from '@/components/form';
import ZmInput from '@/components/Input/index.vue';
import ZmSwitch from '@/components/Switch/index.vue';

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
      validator: () => true,
    },
  ],
};
export default {
  components: {
    ZmForm,
    ZmFormItem,
    ZmInput,
    ZmSwitch,
  },
  setup() {
    const form = {
      name: 123,
      switchVal: '123',
    };
    function switchHandle(val) {
      // eslint-disable-next-line no-console
      console.log(val);
    }
    return {
      rules,
      form,
      switchHandle,
    };
  },
};
</script>
