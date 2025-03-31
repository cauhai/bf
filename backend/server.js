const Koa = require('koa');
const cors = require('@koa/cors');
const _ = require('koa-route');
const logger = require('koa-logger');

const app = new Koa();
app.use(cors());
app.use(logger());

app.listen(3000, () => {
  console.log('Server running on port 3000');
});



const db = {
  "1": "Anne Murray",
  "2": "Teresa Teng",
  "3": "魏 伽 妮)",
  "4": "Михаи́л Шуфути́нский",
};
const artists = {
  list: (ctx) => {
    ctx.body = db;
  },
  show: (ctx, id) => {
    const artist = db[id];
    if (artist)
      return ctx.body = artist;
    ctx.throw(404);
  },
}
app.use(_.get('/', ctx => ctx.body = 'Server OK'));
app.use(_.get('/api/artists', artists.list));
app.use(_.get('/api/artists/:id', artists.show));


