import { Request, Response } from 'express'
import { Post } from '../../models/post'

export default async (req: Request, res: Response) => {
  const posts = await Post.find({}).exec()

  return res.status(200).json(
    posts.map(post => ({
      id: post._id,
      title: post.title,
      sender: post.sender,
    }))
  )
}
