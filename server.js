const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


// Package imports
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const statusMonitor = require('express-status-monitor')();

// Import Routers

// Logger 
const logger = require('./Server/Logger')('server');

// Config
const CONFIG = require('./Server/config');

const CLIMESSAGE = () => {
  logger.normal("######################");
  logger.normal("OnDemand Server      ");
  logger.normal("######################");
};

// Main code
app.prepare()
.then(() => {
  const server = express();
  
  CLIMESSAGE()

 // Morgan Logger
  CONFIG.DEBUG ? server.use(morgan('dev')) : null;
  
  server.use(statusMonitor)

  // Set up imported middleware
  server.use(cookieParser());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(session({
    secret: CONFIG.SECRET,
    resave: false,
    saveUninitialized: true,
  }));
  server.use(express.static('./static'))

  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(CONFIG.PORT || 3000 , (err) => {
    if (err) throw err
    logger.green(`Server started on https://localhost:${CONFIG.PORT || 3000 }`);
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
});


/*
socket = io.connect( 'http://127.0.0.1:3000', {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax : 5000,
    reconnectionAttempts: 99999
} );
*/