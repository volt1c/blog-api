import allValidator from './all.validator'
import createValidator from './create.validator'
import idValidator from './id.validator'

const PostValidator = {
  all: allValidator,
  create: createValidator,
  id: idValidator,
}

export default PostValidator
