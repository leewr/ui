/**
 *
 *	Plugin: Jquery.webox
 *	Developer: Blank
 *	Version: 1.0 Beta
 *	Update: 2012.07.08
 *
**/
$.extend({
	webox:function(option){
		var _x,_y,m,allscreen=false;
		if(!option){
			//alert('options can\'t be empty');
			return;
		};
		if(!option['html']&&!option['iframe']){
			//alert('html attribute and iframe attribute can\'t be both empty');
			return;
		};
		option['parent']='webox';
		option['locked']='locked';
		$(document).ready(function(e){
			$('.webox').remove();
			$('.background').remove();
			var width=option['width']?option['width']:400;
			var height=option['height']?option['height']:240;
			var conBox = $('<div class="background" style="display:none;"></div><div class="webox" style="z-index:999;height:'+height+'px;width:'+width+'px;display:none;"><div id="inside"><h1 id="locked" onselectstart="return false;">'+(option['title']?option['title']:'webox')+'<a class="span iconfont f12" style="line-height: 30px;" href="javascript:void(0);">&#xe628;</a></h1>'+(option['iframe']?'<iframe class="w_iframe" src="'+option['iframe']+'" frameborder="0" width="100%" scrolling="yes" style="border:none;overflow-x:hidden;height:'+parseInt(height-30)+'px;"></iframe>':option['html']?'<div id="inside_txt">'+option['html']+'</div>':'')+'</div></div>');
			$('body').append(conBox);
			if(navigator.userAgent.indexOf('MSIE 7')>0||navigator.userAgent.indexOf('MSIE 8')>0){
				//$('.webox').css({'filter':'progid:DXImageTransform.Microsoft.gradient(startColorstr=#55000000,endColorstr=#55000000)'});
			}if(option['bgvisibel']){
				$('.background').fadeTo('normal',0.6);
			};
			$('.webox').css({display:'block'});
			conBox.find('#'+option['locked']+' .span').click(function(){
				$('.webox').css({display:'none'});
				$('.background').css({display:'none'});
				$(".coverLayer").hide();//隐藏遮罩层

			});
			//弹框居中处理 start
			var _weboxH = $('.webox').height();
			height = (height>_weboxH) ? _weboxH : height;
			//弹框居中处理 end
			var marginLeft=parseInt(width/2);
			var marginTop=parseInt(height/2);
			var winWidth=parseInt($(window).width()/2);
			var winHeight=parseInt($(window).height()/2.2);
			var left = winWidth-marginLeft;
			var top = winHeight-marginTop;	
			/**
			 * 修订内容区高度过高导致溢出问题  + 弹框居中处理
			 * 判断内容区高度，若超过最高高度则以下拉框形式展示 start
			 * @author wumingyuan 
			 * @date 2015.12.30 16:23
			 * @wujingdong 2016.01.18注释掉
			 */
				//			var _maxH = 460; //限高			
				//			left = left<0 ? 0 : left,  top = top<0 ? 0 : top;
				//			var _contObj = document.getElementById('inside_txt').children[0] || document.getElementById('inside_txt');
				//			_contH = _contObj.scrollHeight;
				//			if(_contH>_maxH){
				//				_contObj.style.height = _maxH + 'px';
				//				_contObj.style.overflowY   = 'scroll';
				//			}			
			//判断内容区高度，若超过最高高度则以下拉框形式展示 end
			$('.webox').css({left:left,top:top});
			conBox.find('#'+option['locked']).mousedown(function(e){
				if(e.which){
					m=true;
					_x=e.pageX-parseInt($('.webox').css('left'));
					_y=e.pageY-parseInt($('.webox').css('top'));
				}
			}).dblclick(function(){
					if(allscreen){
						$('.webox').css({height:height,width:width});
						$('#inside').height(height);
						$('.w_iframe').height(height-30);
						$('.webox').css({left:left,top:top});
						allscreen = false;
					}else{
						allscreen=true;
						var screenHeight = $(window).height();
						var screenWidth = $(window).width();$
						('.webox').css({'width':screenWidth-18,'height':screenHeight-18,'top':'0px','left':'0px'});
						$('#inside').height(screenHeight-20);
						$('.w_iframe').height(screenHeight-50);
					}
				});
			typeof option['callback'] == 'function' && option['callback'](conBox.find('#inside'));
			}).mousemove(function(e){
				if(m && !allscreen){
					var x=e.pageX-_x;
					var y=e.pageY-_y;
					$('.webox').css({left:x});
					$('.webox').css({top:y});
				}
			}).mouseup(function(){
				m=false;
			});
			
			if (/android|iphone/i.test(navigator.userAgent)){
			    $('.webox').css({'width':$(window).width()-18,'top':'0px','left':'0px'});
			}

			$(window).resize(function(){
				var screenHeight = $(window).height();
				var screenWidth = $(window).width();
				var width=option['width']?option['width']:400;
				var height=option['height']?option['height']:240;
				if($(window).width()<width){
					$('.webox').css({'width':screenWidth-18,'top':'0px','left':'0px'});
				}else{
					//弹框居中处理 start
					var _weboxH = $('.webox').height();
					height = (height>_weboxH) ? _weboxH : height;
					//弹框居中处理 end
					var left = screenWidth-width;
					var top = screenHeight-height;	
					$('.webox').css({'top':top/2,'left':left/2})
					//$('#inside').height(screenHeight-20);
					//$('.w_iframe').height(screenHeight-50);
				}
			});
	},
	smallbox : function(cont){//倒计时信息提示弹框，5s后自动消失
		$('.tipAlertBox').remove();
		$(document).ready(function(e){
			$('.tipAlertBox').remove();
			var conBox = '<div class="tipAlertBox">'+cont+'</div>';
			$('body').append(conBox);
			var timeout = 3; //倒计时5秒自动消失
			var si = setInterval(function(){
				if(timeout == 0){
					clearInterval(si);
					$('.tipAlertBox').fadeOut().remove();
				}
				if(timeout > 0){
					timeout--;
				}
			}, 1000);
		});
	},
	/**
	 * [Message 消息提示]
	 * @param  {[type]} {type: 提示类型可选 success| error | info | warn 对应不同颜色状态,url: 跳转链接, html: 内容, time: 显示时间, bgvisibel: 是否显示背景层,  Callback: 回调函数}
	 * @return {[type]}        [description]
	 */
	msgTipBox : function(option){ //提示框
		var typeArr = ['success', 'error', 'info', 'warn']
		
		var _html = option.html || '',
		_url = option.url || '',
		_callback = option.Callback || 'function',
		bgvisibel = option.bgvisibel || false,
		timeout = Number(option.time) | 2; //倒计时2秒自动消失
		var isType = false
		if (option.type) {
			for (var i = 0; i < typeArr.length; i++) {
				if (option.type === typeArr[i]) {
					isType = true
				}
			}
		}
		var type = isType && option.type || typeArr[0]
		if(_html){
			$('.ui-message').remove()
			var conBox = $('<div class="ui-message ui-message-'+ type+'">'+_html+'</div>')
			$('body').append(conBox)
			$('.ui-message').css({marginLeft: - $('.ui-message').width() / 2})
			var markBox = $('<div class="coverLayer" style="z-index:1000"></div>')
			if (bgvisibel) {
				$(document.body).append(markBox)
			}
			var _close = function(){
				clearInterval(si);
				conBox.fadeOut();
				markBox.remove();
				setTimeout(function(){
					conBox.remove();
					if(_url){
						window.location = _url;
					}
				}, 'slow');			
				typeof _callback == 'function' && _callback({});
			}
			var si = setInterval(function(){
				if(timeout == 2){
					_close();
				}
				timeout--;
			}, 1000);
		}
	},
	newBox:function(title,htmlId,callback){
		/*
		 * 如果弹窗的基础上继续弹窗，则先关闭弹窗，再新增加弹窗
		 */
		if($("#tc-html").length > 0 ){
			$('#tc-h1 a').trigger('click');
		} 
		
		/*
		 * 	title: 标题
		 * 	html: 定位父节点(会将此节点下的子节点全部转移到弹窗上，但父节点任留在原地方便子节点返回)
		 * 	callback: 回调
		 */
		var _title = title,
			_html = $(htmlId),
			_callback = callback;
		
		//给弹窗加最大高度
		var maxBoxH = $(window).height() - 60 - 32 -20; // -60 内边距 | -32 标题高度  |-20 空出防止上下靠顶部和底部不好看
			
		//弹窗的外壳代码（用于包裹要显示的内容，去除js定位，css定位，未做ie7兼容）
		var conBox = $('<div id="tc-boxTable"><div id="tc-boxBg"></div><div id="tc-boxTd"><div id="tc-box" class="tcBoxstyle"><div id="tc-h1">'+(_title || '标题')+'<a href="javascript:void(0);">×</a></div><div id="tc-html" style="max-height:'+ maxBoxH +'px"></div></div></div></div>');
		
		//显示弹窗方法：用于启用弹窗（主要逻辑）
		function _show(){
			$("#tc-html").append(_html.children());
			$('#tc-boxTable').show();
		}
		//隐藏弹窗方法：用于关闭弹窗（主要逻辑）
		function _hide(){
			conBox.find("input,textarea").val("");	//清空input的值
			_html.append($("#tc-html").children());
			$('#tc-boxTable').remove();
		}
		 
		/*
		 * 业务逻辑
		 */
		if(!_html){return;};
		
		//如果存在弹窗，则不新增
		if(!$("#tc-boxTable").length){
			$('body').append(conBox);
		}
		
		//显示弹窗
		_show();
		
		//绑定× 关闭事件
		conBox.find('#tc-h1 a').click(function(){
			_hide();
		});
		
		typeof _callback == 'function' && _callback(conBox.find("#tc-html")); //这个 true && 执行回调
	}
});
/**
 * 弹出新窗口
 * w:宽度，h:高度；t:标题；cont：内容；bgvisbibel：背景是否透明，callback：回调
 */
$.alertWindow = function(w,h,t,cont,bgvisibel,callback){
	if($(".coverLayer").length<=0){
		$(document.body).append('<div class="coverLayer" style="z-index:999"></div>');//添加遮罩层
	}	
	$(".coverLayer").show();
	$.webox({
		bgvisibel:bgvisibel,
		width:w,
		height:h,
		title:t,
		html:cont,
		callback:callback
	});
}
/**
 * 关闭弹框，隐藏遮罩层
 */
$.closeAlertWindow = function(){
	$(".coverLayer").hide();//隐藏遮罩层
	$('.webox').css({display:'none'});
	$('.background').css({display:'none'});
	$('#tc-h1 a').trigger('click');
}
$.closeNewOpen = function(){
	$('#tc-h1 a').trigger('click');
}
//esc关闭弹窗
$("body").keyup(function(e){
	if(e.keyCode == 27){
		$('#tc-h1 a').trigger('click');
	}
})
