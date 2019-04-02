export default (callback)=>{
	function randomString(len) {
	　　len = len || 16;
	　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
	　　var maxPos = $chars.length;
	　　var pwd = '';
	　　for (var i = 0; i < len; i++) {
	　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	　　}
	　　return pwd;
	}

	var wxTimestamp = String((new Date).getTime()).slice(0,-3);
	var wxNonceStr = randomString();
	var wxData = {
		'noncestr' : wxNonceStr,
		'timestamp' : wxTimestamp,
		'url' : location.href.split('#')[0]
	};
	
	$.post('http://h5.bukeyi.net/lightapp/weixinapi/api.php?act=getsign',wxData,function(sign){
		onwxSignReady(sign)
	});

	function onwxSignReady(sign){
		wx.config({
		    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		    appId: 'wxe6e4c99f630aa0c2', // 必填，公众号的唯一标识
		    timestamp: wxTimestamp, // 必填，生成签名的时间戳
		    nonceStr: wxNonceStr, // 必填，生成签名的随机串
		    signature: sign,// 必填，签名，见附录1
		    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','scanQRCode', 'sendAppMessage'] //必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
	}
	
	var wxShare = {
		img_url : 'http://img.cs26.com/h5/via/loanh/thumb.jpg',
		link : location.href,
		title : '华融湘江银行“给力贷”小微金融重点推荐产品手册',
		desc : '一键了解产品详情、申请贷款，让小微企业更给力！'
	}

	wx.ready(function(){
		vm.$play()
		setValue()
	});

	function setValue() {
		wx.onMenuShareTimeline({
			title: wxShare.title, // 分享标题
			link: wxShare.link, // 分享链接
			imgUrl: wxShare.img_url, // 分享图标
		});

		wx.onMenuShareAppMessage({
			title: wxShare.title, // 分享标题
			desc: wxShare.desc, // 分享描述
			link: wxShare.link, // 分享链接
			imgUrl: wxShare.img_url, // 分享图标
			type: '', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		});
	}
}

