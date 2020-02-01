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
} from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
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
);

function App() {
  return <ContextWrappedRouter />;
}

export default App;
