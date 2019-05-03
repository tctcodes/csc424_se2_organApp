/**
 * Asynchronously loads the component for TxfLiForm
 */
import loadable from 'loadable-components';

export default loadable(() => import('./index'));
