console.log = function () {};

const app = require('koa')();
const router = require('koa-router')();

router.get('/lempb', function *(next){
    var query = this.query || {};
    var t = query && query.t || '';
    try{
    	var pb = query && decodeURIComponent(query.pb) || '';
	var d = query && query.d || '';
    	if(pb){
		var data = t + ':' + pb;
		if(d && d != undefined && d != '' && d != null){
		    data = data + '&&&' + decodeURIComponent(d);
		}
       	 	console.info(data);
    	}

   	this.body = 'ok';
    }catch (e){}
});

app.use(router.routes());

app.listen(10086);

