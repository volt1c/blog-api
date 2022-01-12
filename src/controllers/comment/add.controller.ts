import { Request, Response } from 'express'
import { Comment } from '../../models/comment'
import { Post } from '../../models/post'
import { UserDoc } from '../../models/user'

export default async (req: Request, res: Response) => {
  const { postId, content } = req.body
  const user = req.user as UserDoc

  if (!user?._id) return res.status(400).end('no user')

  const comment = new Comment({
    content: content,
    sender: user._id,
  })

  await Post.updateOne({ _id: postId }, { $push: { comments: comment } })

  res.status(201).end()
}
