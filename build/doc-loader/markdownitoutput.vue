<template>
  <div class="demo">
    <h2>Button 按钮</h2>
    <p>常用的操作按钮。</p>
    <demo-block>
      <span class="demo-des">
        <p>使用<code>type</code>、
          <code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。</p>
      </span>
      <pre><code class="test-html"><el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>

</code></pre>
      <template v-slot:code>
        <pre>&lt;el-row&gt;
  &lt;el-button&gt;默认按钮&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot;&gt;主要按钮&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot;&gt;成功按钮&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot;&gt;信息按钮&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot;&gt;警告按钮&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot;&gt;危险按钮&lt;/el-button&gt;
&lt;/el-row&gt;

</pre></template>
    </demo-block>
  </div>
</template>

<script>
console.log(123);
</script>
