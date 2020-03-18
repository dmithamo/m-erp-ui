import {
  fullPageLayout,
  dashboardLayout,
} from '../components/container/Layouts';
import SignInForm from '../components/container/Auth/SignInForm';
import Dashboard from '../components/container/Dashboard';
import WIPTemp from '../components/container/WIPTemp';
import LicenseInfo from '../components/container/LicenseInfo';

export const SECURED_RESOURCES = {
  dashboard: {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    layout: dashboardLayout,
    icon: 'th-large',
    permissions: '::dash',
  },

  requisitions: {
    name: 'requisitions',
    path: '/manage/resources/requisitions',
    component: WIPTemp,
    layout: dashboardLayout,
    icon: 'tasks',
    permissions: '',
  },

  invoices: {
    name: 'invoices',
    path: '/manage/resources/invoices',
    component: WIPTemp,
    layout: dashboardLayout,
    icon: 'file-invoice',
    permissions: '',
  },

  receipts: {
    name: 'receipts',
    path: '/manage/resources/receipts',
    component: WIPTemp,
    layout: dashboardLayout,
    icon: 'receipt',
    permissions: '',
  },

  budget: {
    name: 'budget',
    path: '/manage/resources/budgets',
    component: WIPTemp,
    layout: dashboardLayout,
    icon: 'business-time',
    permissions: '',
  },

  help: {
    name: 'help',
    path: '/help',
    component: WIPTemp,
    layout: dashboardLayout,
    icon: ['far', 'question-circle'],
    permissions: '',
  },

  about: {
    name: 'LLC 2020',
    path: '/about',
    component: LicenseInfo,
    layout: dashboardLayout,
    icon: ['far', 'copyright'],
    permissions: '',
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
