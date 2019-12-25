import {
  DashboardOutlined as dash,
  BusinessCenterOutlined as requisitions,
  ReceiptOutlined as receipts,
} from '@material-ui/icons';
import {
  fullPageLayout,
  dashboardLayout,
} from '../components/containers/layouts';
import SignInForm from '../components/containers/auth/SignInForm';
import Dashboard from '../components/containers/Dashboard';

export const SECURED_RESOURCES = {
  dashboard: {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    layout: dashboardLayout,
    icon: dash,
    permissions: '::dash',
  },

  requisitions: {
    name: 'requisitions',
    path: '/manage/resources/requisitions',
    component: Dashboard,
    layout: dashboardLayout,
    icon: requisitions,
    permissions: '::requisitions',
  },

  receipts: {
    name: 'receipts',
    path: '/manage/resources/receipts',
    component: Dashboard,
    layout: dashboardLayout,
    icon: receipts,
    permissions: '::receipts',
  },
};

export const UNSECURED_RESOURCES = {
  loginPage: {
    name: 'login',
    path: '/',
    component: SignInForm,
    layout: fullPageLayout,
    permissions: '',
  },
};
