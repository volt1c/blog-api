import dotenv from 'dotenv'

export default () => {
  dotenv.config()

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
}
