/**
 *
 * Asynchronously loads the component for RegForm
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));
