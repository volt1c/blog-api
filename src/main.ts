import emojilogs from 'emoji-logs'
import mongoose from 'mongoose'
import app from './app'
import config from './config'

emojilogs.config({})

config()

if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is undefined!')
  process.exit()
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.info('Mongoose is connected'))
  .catch(err => console.error(err))

app.listen(process.env.PORT)
console.info(`Listening on ${process.env.PORT}`)
