import express from 'express'
import cors from 'cors'
import { faker } from '@faker-js/faker'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/health', (req, res) => {
  res.send('ok')
})

const createFakeUser = () => ({
  id: faker.string.uuid(),
  email: faker.internet.email(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
})


app.get('/users', (req, res) => {
  const { size = 10 } = req.query
  const fakeUsers = faker.helpers.multiple(createFakeUser, { count: Number(size) })

  console.log(`Incoming request on port ${port}`)

  res.send(fakeUsers)
})

const server = app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('App server has been closed.')
  })
})
