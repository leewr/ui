<link rel="stylesheet" href="/theme/css/common/common.css">
<style type="text/css">
	.btnItem{
		margin-bottom: 20px
	}
</style>

# 按钮
### 使用

#### 1、基础类名
使用<code>.ui-btn</code>， 不同状态类名: 默认蓝色<code>.ui-btn-primary</code>

<div class="btnItem">
	<span class="ui-btn">默认按钮</span>
	<span class="ui-btn ui-btn-primary">主要按钮</span>
	<span class="ui-btn ui-btn-orange">橙色按钮</span>
</div>
<div class="btnItem">
	<span class="ui-btn is-round">圆角按钮</span>
	<span class="ui-btn ui-btn-primary is-round">主要按钮</span>
	<span class="ui-btn ui-btn-orange is-round">橙色按钮</span>
</div>

#### 2、按钮禁用
注意<code>.disabled</code>属于全局的一个公共类名
<div class="btnItem">
	<span class="ui-btn disabled">禁用</span>
	<span class="ui-btn ui-btn-primary disabled">主要按钮</span>
	<span class="ui-btn ui-btn-orange disabled">橙色按钮</span>
</div>

##### 代码示意
```
<span class="ui-btn disabled">禁用</span>
<span class="ui-btn ui-btn-primary disabled">主要按钮</span>
<span class="ui-btn ui-btn-orange disabled">橙色按钮</span>
```

#### 加载按钮
使用<code>.loading</code>
<div class="btnItem">
	<span class="ui-btn loading">禁用</span>
	<span class="ui-btn ui-btn-primary loading">主要按钮</span>
	<span class="ui-btn ui-btn-orange loading">橙色按钮</span>
</div>


