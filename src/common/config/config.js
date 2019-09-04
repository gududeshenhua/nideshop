// default config
import fs from 'fs';
//import https from 'https';
//const options = {
//	key : fs.readFileSync('./src/common/config/ssl/2_www.gwtest.xyz.key'),   //读出 sytly 文件？
//	cert : fs.readFileSync('./src/common/config/ssl/1_www.gwtest.xyz_bundle.crt'),  
//};      
///const app = (callback, port, host, think) => { 
//	console.log(port); 
//	let server = https.createServer(options, callback);  
///	server.listen(port, host);
//	return server;
//} 
module.exports = {
	default_module: 'api', 
	//createServer: app,     
	weixin: {
		appid: 'wxc4936e881e2f4ac4', // 小程序 appid
		secret: '59119e8d09d4f009ec1374ae11ca49cf', // 小程序密钥
		mch_id: '', // 商户帐号ID  
		partner_key: '', // 微信支付密钥
		notify_url: '' // 微信异步通知，例：https://www.nideshop.com/api/pay/notify
	},
	express: {
		// 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/
		appid: '', // 对应快递鸟用户后台 用户ID
		appkey: '', // 对应快递鸟用户后台 API key
		request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
	}
};
