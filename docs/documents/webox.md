<link rel="stylesheet" href="/theme/css/common/common.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
<script src="/theme/js/common/ui/webox.js"></script>
<style type="text/css">
	.wrap{
		padding: 50px 80px;
	}
</style>
<div class="wrap">
	<div class="mb20"><span class="ui-btn" id="normal">弹窗</span></div>
	<!-- 抽取出成功、失败、提示信息 -->
	<!-- <span class="ui-btn" id="smallbox">倒计时</span> -->
	<h3 class="mb10">提示消息</h3>
	<span class="ui-btn" id="countDown">提示成功消息</span>
	<span class="ui-btn" id="error">提示错误消息</span>
	<span class="ui-btn" id="warn">提示警告消息, 并回调</span>
</div>

<script type="text/javascript">
	$('#normal').click(function () {
		$.alertWindow(400, 200, '提示','<p>正文</p>', false, function () {
			console.log('success')
		})
	})
	$('#smallbox').click(function () {
		$.smallbox('操作失败！')
	})
	$('#countDown').click(function () {
		$.msgTipBox({type: 'success', html: '操作成功！'})
	})
	$('#error').click(function () {
		$.msgTipBox({type: 'error', html: '操作失败！'})
	})
	$('#warn').click(function () {
		$.msgTipBox({type: 'warn', html: '操作警告！', Callback: function () { alert(1)}})
	})
</script>
