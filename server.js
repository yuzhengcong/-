const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new Router();

let todos = [];

router.get('/todos', (ctx, next) => {
  ctx.body = todos;
});

router.post('/todos', (ctx, next) => {
  const todo = ctx.request.body;
  todos.push(todo);
  ctx.body = todo;
});

router.delete('/todos/:id', (ctx, next) => {
  const id = ctx.params.id;
  todos = todos.filter(todo => todo.id !== id);
  ctx.body = { message: 'Todo deleted' };
});

app.use(bodyParser());
app.use(router.routes());
app.listen(3000);
