import express from 'express'
import morgan from 'morgan'

const app = express()
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.static('public'))

export default app
