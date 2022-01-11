import { Request, Response } from 'express'
import { Post } from '../../models/post'
import { UserDoc } from '../../models/user'

export default async (req: Request, res: Response) => {
  const { title, content } = req.body
  const user: UserDoc = req.user as UserDoc

  const post = new Post({
    title: title,
    content: content,
    sender: user,
  })

  await post.save()

  return res.status(201).end()
}
