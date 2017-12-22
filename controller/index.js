/*以函数的方式处理请求，将处理结果返回
  req.query: get请求数据
  req.method: 请求方法
  req.body: post请求；需要body-parser中间件
*/

function tin(req){
	return {
		'data': 'test',
	}
}
function index(req){
	var upload=req.app.locals.middleware.multer.single('test');
	upload(req, {}, function(err){
		console.log(err);
		console.log(req.file);	//文件信息
	});
	return {
		'data': req.body
	}
}

module.exports = {
	index: index,
	tin: tin
};