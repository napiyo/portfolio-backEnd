const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require('./database.js');
const cors = require('cors');
// dotenv.config({path:'./config.env'});
connectDatabase();
app.use(cors({}))
app.use(cors({origin:'*'}))
const PORT = process.env.PORT || 4101;
app.listen(PORT);
