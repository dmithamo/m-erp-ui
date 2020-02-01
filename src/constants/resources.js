import {
  fullPageLayout,
  dashboardLayout,
} from '../components/container/Layouts';
import SignInForm from '../components/container/Auth/SignInForm';
import Dashboard from '../components/container/Dashboard';

export const SECURED_RESOURCES = {
  dashboard: {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    layout: dashboardLayout,
    icon: 'tachometer-alt',
    permissions: '::dash',
  },

  requisitions: {
    name: 'requisitions',
    path: '/manage/resources/requisitions',
    component: Dashboard,
    layout: dashboardLayout,
    icon: 'file-invoice',
    permissions: '::requisitions',
  },

  receipts: {
    name: 'receipts',
    path: '/manage/resources/receipts',
    component: Dashboard,
    layout: dashboardLayout,
    icon: 'receipt',
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
