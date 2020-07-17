<template>
  <div>
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
          :disabled="true"
          @change="switchHandle"
        ></zm-switch>
      </zm-form-item>
    </zm-form>

    <zm-pagination
      :total="100"
      :page-size="30"
      v-model:currentPage="currentPage"
    ></zm-pagination>
    <i class="zm-icon-headphones"></i>
  </div>
</template>
<script>
import { ref } from 'vue';
import { ZmForm, ZmFormItem } from '@/components/form';
import ZmInput from '@/components/Input/index.vue';
import ZmSwitch from '@/components/Switch/index.vue';
import ZmPagination from '@/components/Pagination/index.vue';

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
    ZmPagination,
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
    const currentPage = ref(1);
    return {
      rules,
      form,
      switchHandle,
      currentPage,
    };
  },
};
</script>
