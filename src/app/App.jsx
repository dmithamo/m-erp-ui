import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFingerprint,
  faAt,
  faEye,
  faEyeSlash,
  faIdCardAlt,
  faSignOutAlt,
  faCaretDown,
  faHome,
  faExclamationCircle,
  faLink,
  faThLarge,
  faFileInvoice,
  faReceipt,
  faBusinessTime,
  faTasks,
  faHourglassStart,
  faEllipsisV,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCopyright,
  faQuestionCircle,
  faBell,
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';
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
);

export function App() {
  return <Routes />;
}

export default App;
