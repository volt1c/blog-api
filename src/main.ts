import emojilogs from 'emoji-logs'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import app from './app'
import passport from './config/passport'

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
  if (!process.env.AVATAR_URL) console.warn('AVATAR_URL is undefined')
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
