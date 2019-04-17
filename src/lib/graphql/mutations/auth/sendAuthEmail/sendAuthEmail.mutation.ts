import { Mutation } from 'react-apollo';
import { sendAuthEmail, sendAuthEmailVariables } from './sendAuthEmail.typing';

class SendAuthEmailMutation extends Mutation<
  sendAuthEmail,
  sendAuthEmailVariables
> {}

export default SendAuthEmailMutation;
