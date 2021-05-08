'use strict'

import express from 'express'
import bodyParser from 'body-parser'

import date from './date'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send({ message: date() })
})

export default app
