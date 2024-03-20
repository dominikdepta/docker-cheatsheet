import express from 'express'
import { faker } from '@faker-js/faker'

const app = express()
const port = process.env.PORT || 3000

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
  const fakeUsers = faker.helpers.multiple(createFakeUser, { count: 25 })

  res.send(fakeUsers)
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
