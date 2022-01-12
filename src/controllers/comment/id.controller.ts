import { Request, Response } from 'express'
import { Comment } from '../../models/comment'

export default async (req: Request, res: Response) => {
  const { id } = req.params

  const rawComment = await Comment.findOne({ _id: id }).exec()

  if (!rawComment) return res.status(400).end()

  res.status(200).json({
    id: rawComment?._id,
    content: rawComment?.content,
    sender: rawComment?.sender,
  })
}
