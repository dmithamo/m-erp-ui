import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFingerprint,
  faAt,
  faEye,
  faEyeSlash,
  faIdCardAlt,
  faSignOutAlt,
  faTimesCircle,
  faCaretDown,
  faHome,
  faExclamationCircle,
  faLink,
  faThLarge,
  faFileInvoice,
  faReceipt,
  faBusinessTime,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCopyright,
  faQuestionCircle,
  faBell,
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
);

export function App() {
  return <Routes />;
}

export default App;
