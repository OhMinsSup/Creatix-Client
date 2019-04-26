import { Mutation } from 'react-apollo';
import { logout } from './logout.typing';

class LogOutMutation extends Mutation<logout, null> {}

export default LogOutMutation;
