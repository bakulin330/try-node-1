import config from './config'
import express from 'express'
import init = require('./init')

async function startServer() {
  const app = express()
  await init.default({ expressApp: app })
  app
    .listen(config.port, () => {
      console.log(`Server listening on port: ${config.port}`)
    })
    .on('error', err => {
      // Logger.error(err)
      console.log('err', err)
      process.exit(1)
    });
}

startServer()
