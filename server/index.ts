import * as compression from 'compression'
import * as express from 'express'
import * as minify from 'express-minify'
import * as mobxReact from 'mobx-react'
import * as next from 'next'
import { join } from 'path'
// const minify = require('express-minify')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

mobxReact.useStaticRendering(true)

app.prepare().then(async () => {
  const server = express()
  if (!dev) {
    server.use(compression())
    server.use(minify())
  }

  server.get('/service-worker.js', (req, res) => {
    const filePath = join(__dirname, '..', '.next', '/service-worker.js')
    app.serveStatic(req, res, filePath)
  })

  // server.get('/posts/:id', (req, res) => {
  //   return app.render(req, res, '/posts', { id: req.params.id })
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
