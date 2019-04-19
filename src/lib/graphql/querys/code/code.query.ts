import { Query } from 'react-apollo';
import { code, codeVariables } from './code.typing';

class CodeQuery extends Query<code, codeVariables> {}

export default CodeQuery;
