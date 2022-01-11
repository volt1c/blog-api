import { Request, Response } from 'express'
import { Post } from '../../models/post'

export default async (req: Request, res: Response) => {
  const { id } = req.params

  const rawPost = await Post.findOne({ _id: id }).exec()

  if (!rawPost) return res.status(400)

  res.status(200).json({
    title: rawPost?.title,
    content: rawPost?.content,
    comments: rawPost?.comments,
    sender: rawPost?.sender,
  })
}
