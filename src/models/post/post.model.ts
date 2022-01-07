import { model } from 'mongoose'
import { PostDoc } from './post.document'
import { PostSchema } from './post.schema'

export const Post = model<PostDoc>('Post', PostSchema)
