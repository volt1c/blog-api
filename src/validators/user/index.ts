import idValidator from './id.validator'
import nameValidator from './name.validator'

const UserValidator = {
  name: nameValidator,
  id: idValidator,
}

export default UserValidator
