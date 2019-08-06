const express = require('express')
const react = require('react')

const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV !== 'production'
const app = react({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/detail/:placeId', (req, res) => {
    return app.render(req, res, '/dynamic/detail', { placeId: req.params.placeId })
  })

  server.get('/article/:articleId', (req, res) => {
    return app.render(req, res, '/dynamic/article', { articleId: req.params.articleId })
  })
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})