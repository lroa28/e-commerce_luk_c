import express, { urlencoded, json } from 'express';
import handlebars from 'express-handlebars';
import '../middleware/auth.js';

import mainRoutes from '../routes/index.js';
const app = express();

app.engine(
    "hbs", 
    handlebars({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
    })
);

app.set("view engine", "hbs");
app.set("views", "./views");

app.use(('public'));
app.use(urlencoded({extended:true}));
app.use(json());
app.use('/api', mainRoutes);
//app.use('/', mainRoutes);

export default app;