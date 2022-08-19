const express = require('express');
const projectsRouter = require('./projects/router.js');
const resourcesRouter = require('./resources/router.js');
const tasksRouter = require('./tasks/router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = server;
