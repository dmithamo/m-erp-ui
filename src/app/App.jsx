import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBell,
  faCheckCircle,
  faCopyright,
  faQuestionCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';
import {
  faAt,
  faBusinessTime,
  faCaretDown,
  faEllipsisH,
  faEllipsisV,
  faExclamationCircle,
  faEye,
  faEyeSlash,
  faFileInvoice,
  faFingerprint,
  faHome,
  faHourglassStart,
  faIdCardAlt,
  faLink,
  faReceipt,
  faSearch,
  faSignOutAlt,
  faTasks,
  faThLarge,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Routes from '../features/Routes';

library.add(
  faFingerprint,
  faAt,
  faEye,
  faEyeSlash,
  faIdCardAlt,
  faSignOutAlt,
  faTimesCircle,
  faCopyright,
  faCaretDown,
  faHome,
  faExclamationCircle,
  faLink,
  faQuestionCircle,
  faThLarge,
  faFileInvoice,
  faReceipt,
  faBusinessTime,
  faTasks,
  faBell,
  faHourglassStart,
  faCheckCircle,
  faEllipsisV,
  faEllipsisH,
  faSearch,
);

/**
 * @description Entry way into the application
 * @return {JSX}
 */
export function App() {
  return <Routes />;
}

export default App;
