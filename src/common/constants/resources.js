import Dashboard from '../../features/Dashboard';
import WIPTemp from '../../features/WIPTemp';
import LicenseInfo from '../../features/LicenseInfo';
import Requisitions from '../../features/requisitions';

const RESOURCES = {
  dashboard: {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    icon: 'th-large',
    permissions: '::dash::',
  },

  requisitions: {
    name: 'requisitions',
    path: '/manage/resources/requisitions',
    component: Requisitions,
    icon: 'tasks',
    permissions: '::requisitions::',
  },

  invoices: {
    name: 'invoices',
    path: '/manage/resources/invoices',
    component: WIPTemp,
    icon: 'file-invoice',
    permissions: '::invoice::',
  },

  receipts: {
    name: 'receipts',
    path: '/manage/resources/receipts',
    component: WIPTemp,
    icon: 'receipt',
    permissions: '::receipt::',
  },

  budget: {
    name: 'budget',
    path: '/manage/resources/budgets',
    component: WIPTemp,
    icon: 'business-time',
    permissions: '::budget::',
  },

  notifications: {
    name: 'notifications',
    path: '/manage/resources/notifications',
    component: WIPTemp,
    icon: ['far', 'bell'],
    permissions: '::notifications::',
  },

  help: {
    name: 'help',
    path: '/help',
    component: WIPTemp,
    icon: ['far', 'question-circle'],
    permissions: '::help::',
  },

  about: {
    name: 'LLC 2020',
    path: '/about',
    component: LicenseInfo,
    icon: ['far', 'copyright'],
    permissions: '::about::',
  },
};

export default RESOURCES;
