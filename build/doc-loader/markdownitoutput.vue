
  <template><div class="demo"><h2>Button 按钮1</h2>
<p>常用的操作按钮。</p>
<demo-block><span class="demo-des"><p>使用<code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。</p>
</span>
    <pre><code class="test-html">  <div>
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


</code></pre>
    <template v-slot:code><pre>  &lt;div&gt;
    &lt;zm-form
      label-position=&quot;left&quot;
      :rules=&quot;rules&quot;
      :model=&quot;form&quot;
    &gt;
      &lt;zm-form-item
        label=&quot;姓名&quot;
        prop=&quot;name&quot;
      &gt;
        &lt;zm-input
          v-model=&quot;form.name&quot;
          show-word-limit
          max-length='20'
        &gt;
        &lt;/zm-input&gt;
      &lt;/zm-form-item&gt;

      &lt;zm-form-item label=&quot;switch&quot;&gt;
        &lt;zm-switch
          v-model=&quot;form.switchVal&quot;
          check-value=&quot;123&quot;
          uncheck-value=&quot;456&quot;
          :disabled=&quot;true&quot;
          @change=&quot;switchHandle&quot;
        &gt;&lt;/zm-switch&gt;
      &lt;/zm-form-item&gt;
    &lt;/zm-form&gt;

    &lt;zm-pagination
      :total=&quot;100&quot;
      :page-size=&quot;30&quot;
      v-model:currentPage=&quot;currentPage&quot;
    &gt;&lt;/zm-pagination&gt;
    &lt;i class=&quot;zm-icon-headphones&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
&lt;script&gt;
import { ref } from 'vue';

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
      validator: () =&gt; true,
    },
  ],
};

export default {
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
&lt;/script&gt;

</pre></template>
    </demo-block></div></template>

<script>
import { ref } from 'vue';

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