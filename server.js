import http from 'http'
import app from './app.js'

const httpServer = http.createServer(app)

const PORT = process.env.PORT || 3000
httpServer.listen(PORT, () => {
  console.log(`HTTP server listening on port ${PORT}`)
})
