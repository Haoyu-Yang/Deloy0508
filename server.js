const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router
    .get('/', ctx => {
	            ctx.body = '首頁';
	        })
    .get('/about', ctx => {
	            ctx.body = '關於頁面';
	        });
app.use(router.routes());

app.listen(3000);
