import { Query } from 'react-apollo';
import { checkUser } from './checkUser.typing';

class CheckUserQuery extends Query<checkUser, null> {}

export default CheckUserQuery;
