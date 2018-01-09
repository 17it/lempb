console.log = function () {};

const app = require('koa')();
const router = require('koa-router')();

router.get('/lempb', function *(next){
    var t = this.query && this.query.t || '';
    try{
        var pb = this.query && decodeURIComponent(this.query.pb) || '';
        if(pb){
                var data = t + ':' + pb;
                console.info(data);
        }

        this.body = 'ok';
    }catch (e){}
});

app.use(router.routes());

app.listen(10086);
