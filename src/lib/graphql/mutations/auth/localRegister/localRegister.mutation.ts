import { Mutation } from 'react-apollo';
import { localRegister, localRegisterVariables } from './localRegister.typing';

class LocalRegisterMutation extends Mutation<
  localRegister,
  localRegisterVariables
> {}

export default LocalRegisterMutation;
