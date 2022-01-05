import emojilogs from 'emoji-logs'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import app from './app'

emojilogs.config({})
dotenv.config()

async function main() {
  try {
    if (!process.env.MONGO_URI) return console.error('MONGO_URI is undefined!')
    await mongoose.connect(process.env.MONGO_URI)
    console.info('Mongoose is connected')
  } catch (err) {
    return console.error(err)
  }

  try {
    if (!process.env.PORT)
      console.warn('PORT is undefined so 3000 (default) will be used')

    await app.listen(process.env.PORT || 3000)
    console.info(`Listening on ${process.env.PORT || '3000 (default)'}`)
  } catch (err) {
    return console.error(err)
  }
}

main()
