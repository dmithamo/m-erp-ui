import Dashboard from '../../features/Dashboard';
import LicenseInfo from '../../features/LicenseInfo';
import Requisitions from '../../features/requisitions';
import SingleRequisitionView from '../../features/requisitions/SingleReq';
import WIPTemp from '../../features/WIPTemp';

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
    path: '/requisitions',
    component: Requisitions,
    icon: 'tasks',
    permissions: '::requisitions::',
  },

  singleRequisition: {
    resourceName: 'singleRequisition',
    path: '/requisitions/:id/edit',
    component: SingleRequisitionView,
    icon: 'tasks',
    permissions: '::requisitions::',
  },

  invoices: {
    resourceName: 'invoices',
    path: '/invoices',
    component: WIPTemp,
    icon: 'file-invoice',
    permissions: '::invoice::',
  },

  receipts: {
    resourceName: 'receipts',
    path: '/receipts',
    component: WIPTemp,
    icon: 'receipt',
    permissions: '::receipt::',
  },

  budget: {
    resourceName: 'budget',
    path: '/budgets',
    component: WIPTemp,
    icon: 'business-time',
    permissions: '::budget::',
  },

  notifications: {
    resourceName: 'notifications',
    path: '/notifications',
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
