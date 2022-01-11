import emojilogs from 'emoji-logs'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import app from './app'
import passport from './configs/passport'

emojilogs.config({})
dotenv.config()
passport()

async function main() {
  if (!process.env.REFRESH_TOKEN_SECRET) {
    console.warn(
      'REFRESH_TOKEN_SECRET is undefined, so default will be used (not recommended)'
    )
    process.env.REFRESH_TOKEN_SECRET = 'REFRESH_TOKEN_SECRET'
  }
  if (!process.env.TOKEN_SECRET) {
    console.warn(
      'TOKEN_SECRET is undefined so defaul will be used (not recommended)'
    )
    process.env.TOKEN_SECRET = 'TOKEN_SECRET'
  }
  if (!process.env.AVATAR_URL) {
    console.warn('AVATAR_URL is undefined')
    process.env.AVATAR_URL = 'https://i.imgur.com/IFtORGZ.png'
  }
  if (!process.env.PORT) {
    console.warn('PORT is undefined so 3000 (default) will be used')
    process.env.PORT = '3000'
  }
  try {
    if (!process.env.MONGO_URI) return console.error('MONGO_URI is undefined!')
    await mongoose.connect(process.env.MONGO_URI)
    console.info('Mongoose is connected')
  } catch (err) {
    return console.error(err)
  }

  try {
    await app.listen(process.env.PORT)
    console.info(`Listening on ${process.env.PORT}`)
  } catch (err) {
    return console.error(err)
  }
}

main()
