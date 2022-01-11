import allController from './all.controller'
import createController from './create.controller'
import idController from './id.controller'

const PostController = {
  all: allController,
  id: idController,
  create: createController,
}

export default PostController
