<link rel="stylesheet" href="/theme/css/common/common.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
<script src="/theme/js/common/ui/webox.js"></script>

### 弹出框

### 基本使用
<span class="ui-btn">弹窗</span>
```
$.webox(options)
```
可选参数
| options  |      类型      |  默认值 | 解释 |
|----------|:--------------:|-------:| ---：|
| title    |  String      | '' | 弹框的标题|
|html|||


<script type="text/javascript">
	$('.ui-btn').click(function () {
		$.alertWindow(400, 200, '<p>正文</p>', false, $.noop)
	})
</script>
