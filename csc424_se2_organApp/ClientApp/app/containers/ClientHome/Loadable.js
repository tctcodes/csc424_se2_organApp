/**
 *
 * Asynchronously loads the component for ClientHome
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));
