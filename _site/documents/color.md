<link rel="stylesheet" href="/theme/css/common/ui/color.css">

# 组件颜色

## 一、颜色（文字、按钮）
ui组件使用的颜色预览、想要修改组件颜色，可以通过修改全局颜色配置variable.sass中的值修改。

## 二、可以单独引入css

```
<link rel="stylesheet" href="/theme/css/color.css">
```
## 三、基本颜色

### 主色
<style type="text/css">
	.colorWrap{
		overflow: hidden;
	}
	.colorItem{
		width: 200px;
		float: left;
		border-radius: 3px;
	}
	.colorItem span{
		color: #fff;
	}
	.colorBox{
		width: 140px;
		height: 60px;
		display: table-cell;
    	vertical-align: bottom;
	}
</style>
<div class="colorWrap">
	<div class="colorItem">
		<div class="colorBox blue bg">
			<span class="pl10">#1c81ff</span>
		</div>
		<div class="desript gray f14">
			按钮<br>
			文字触动
		</div>
	</div>
	<div class="colorItem">
		<div class="colorBox darkblue bg">
			<span class="pl10">#0c2d5f</span>
		</div>
		<div class="desript desript gray f14">
			图标颜色<br>导航文字触动色<br>标题文字触动色
		</div>
	</div>
	<div class="colorItem">
		<div class="colorBox orange bg">
			<span class="pl10">#ff823e</span>
		</div>
		<div class="desript desript gray f14">
			利率 、数字<br>特别强调文字<br>标签色、提示
		</div>
	</div>
</div>

### 辅助色
<div class="colorWrap">
	<div class="colorItem">
		<div class="colorBox blue bg">
			<span class="pl10">#6993ff</span>
		</div>
		<div class="desript gray f14">
			首页合规系列icon 标签
		</div>
	</div>
	<div class="colorItem">
		<div class="colorBox darkblue bg">
			<span class="pl10">#ffb72b</span>
		</div>
		<div class="desript desript gray f14">
			标签色 账户中心投资分类
		</div>
	</div>
	<div class="colorItem">
		<div class="colorBox orange bg">
			<span class="pl10">#ff823e</span>
		</div>
		<div class="desript desript gray f14">
			利率 、数字 特别强调文字 标签色、提示
		</div>
	</div>
</div>

### 中性色
<div class="colorWrap">
	<div class="colorItem">
		<div class="colorBox dark bg">
			<span class="pl10">#6993ff</span>
		</div>
		<div class="desript gray f14">
			首页合规系列icon 标签
		</div>
	</div>
	<div class="colorItem">
		<div class="colorBox gray bg">
			<span class="pl10">#ffb72b</span>
		</div>
		<div class="desript desript gray f14">
			标签色 账户中心投资分类
		</div>
	</div>
	<div class="colorItem">
		<div class="colorBox light bg">
			<span class="pl10">#ff823e</span>
		</div>
		<div class="desript desript gray f14">
			利率 、数字 特别强调文字 标签色、提示
		</div>
	</div>
	<div class="colorItem">
		<div class="colorBox light bg">
			<span class="pl10">#ff823e</span>
		</div>
		<div class="desript desript gray f14">
			站位文字
		</div>
	</div>
	<div class="colorItem">
		<div class="colorBox light bg">
			<span class="pl10">#ff823e</span>
		</div>
		<div class="desript desript gray f14">
			分割线
		</div>
	</div>
	<div class="colorItem">
		<div class="colorBox light bg">
			<span class="pl10">#ff823e</span>
		</div>
		<div class="desript desript gray f14">
			web背景色
		</div>
	</div>
</div>

