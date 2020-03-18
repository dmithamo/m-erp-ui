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
} from '@fortawesome/free-regular-svg-icons';
import ContextWrappedRouter from './config/ContextWrappedRouter';

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
);

function App() {
  return <ContextWrappedRouter />;
}

export default App;
