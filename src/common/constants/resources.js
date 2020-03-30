import Dashboard from '../../features/Dashboard';
import WIPTemp from '../../features/WIPTemp';
import LicenseInfo from '../../features/LicenseInfo';
import Requisitions from '../../features/requisitions';
import SingleRequisitionView from '../../features/requisitions/SingleReq';

const RESOURCES = {
  dashboard: {
    resourceName: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    icon: 'th-large',
    permissions: '::dash::',
  },

  requisitions: {
    resourceName: 'requisitions',
    path: '/manage/resources/requisitions',
    component: Requisitions,
    icon: 'tasks',
    permissions: '::requisitions::',
  },

  singleRequisition: {
    resourceName: 'singleRequisition',
    path: '/manage/resources/requisitions/:id/edit',
    component: SingleRequisitionView,
    icon: 'tasks',
    permissions: '::requisitions::',
  },

  invoices: {
    resourceName: 'invoices',
    path: '/manage/resources/invoices',
    component: WIPTemp,
    icon: 'file-invoice',
    permissions: '::invoice::',
  },

  receipts: {
    resourceName: 'receipts',
    path: '/manage/resources/receipts',
    component: WIPTemp,
    icon: 'receipt',
    permissions: '::receipt::',
  },

  budget: {
    resourceName: 'budget',
    path: '/manage/resources/budgets',
    component: WIPTemp,
    icon: 'business-time',
    permissions: '::budget::',
  },

  notifications: {
    resourceName: 'notifications',
    path: '/manage/resources/notifications',
    component: WIPTemp,
    icon: ['far', 'bell'],
    permissions: '::notifications::',
  },

  help: {
    resourceName: 'help',
    path: '/help',
    component: WIPTemp,
    icon: ['far', 'question-circle'],
    permissions: '::help::',
  },

  about: {
    resourceName: 'LLC 2020',
    path: '/about',
    component: LicenseInfo,
    icon: ['far', 'copyright'],
    permissions: '::about::',
  },
};

export default RESOURCES;
