
<link rel="stylesheet" href="/theme/css/common/ui/input.css">

# 基本使用

## input 使用类 <code>.ui-input</code>

### 1、基本使用
#### 最基本的input标签：<input class="ui-input" placeholder="站位符"></input>

```
<input class="ui-input" placeholder="站位符" />
```
#### 内联使用 <span><input class="ui-input" placeholder="站位符"></input></span>
```
<span><input class="ui-input" placeholder="站位符" /></span>
```

#### input块状宽度100%:
<div class="ui-input">
	<input  placeholder="站位符" />
</div>

#### 代码示例
```
<div class="ui-input"><input  placeholder="站位符" /></div>
```

## 只读和禁用

#### 只读文本框 <input class="ui-input" readonly />
#### 禁用文本框 <input class="ui-input" disabled />

```
<input class="ui-input" readonly />
<input class="ui-input" disabled />
```

### 2、带后缀的Input

<div class="ui-input-suffix">
	<input id="inputFocus" maxlength="20"></input>
	<div class="ui-input"></div>
	<label for="inputFocus" class="ui-input_suffix">
		<span>元</span>
	</label>
</div>

### 3、带前缀的Input

#### 带前缀的文字 / 可添加图标
<div class="ui-input-prefix">
	<input id="inputFocus1" maxlength="20"></input>
	<div class="ui-input"></div>
	<label for="inputFocus1" class="ui-input_prefix">
		<span>元</span>
	</label>
</div>

#### 带前缀的搜索
##### 搜索在输入框前
<div class="ui-input-prefix">
	<span class="ui-input_prefix">
		<span class="ui-icon-search"></span>
	</span>
	<input id="inputFocus2" maxlength="20"></input>
	<div class="ui-input"></div>
</div>

##### 搜索在输入框后
<div class="ui-input-suffix">
	<input id="inputFocus2" maxlength="20"></input>
	<div class="ui-input"></div>
	<span class="ui-input_suffix">
		<span class="ui-icon-search"></span>
	</span>
</div>