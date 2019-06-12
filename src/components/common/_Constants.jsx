import React from 'react';

/**
 * Inputs on signup form
 * And coinciding icons
 *
 * */
import {
  PersonPinOutlined,
  AlternateEmailOutlined,
  FingerprintOutlined,
  PersonPinCircleOutlined,
  CategoryOutlined,
  PeopleOutline,
} from '@material-ui/icons';

export const signUpInputs = [
  {
    type: 'text',
    icon: <PersonPinOutlined />,
    placeholder: 'First name',
  },
  {
    type: 'text',
    icon: <PersonPinOutlined />,
    placeholder: 'Last name',
  },
  {
    type: 'email',
    icon: <AlternateEmailOutlined />,
    placeholder: 'Email address',
  },
  {
    type: 'password',
    icon: <FingerprintOutlined />,
    placeholder: 'Password',
  },
  {
    type: 'password',
    icon: <FingerprintOutlined />,
    placeholder: 'Re-type password',
  },
  {
    isSelect: true,
    id: 'user-campus',
    icon: <PersonPinCircleOutlined />,
    options: [
      { value: '', name: 'Select your Campus' },
      { value: 'mhc-city', name: 'MHC City Campus' },
      { value: 'mhc-ruaka', name: 'MHC Ruaka Campus' },
    ],
  },
  {
    isSelect: true,
    id: 'user-department',
    icon: <CategoryOutlined />,
    options: [
      { value: '', name: 'Select your Department' },
      { value: 'ruaka-kids', name: 'Ruaka Kids' },
      { value: 'teens-for-christ', name: 'Teens for Christ' },
      { value: 'ruaka-ropes', name: 'ROPES' },
      { value: 'ruaka-ex-cans', name: 'Ex-Candidates' },
      { value: 'ruaka-missions', name: 'Missions Department' },
      { value: 'ruaka-fullcircle', name: 'Full Circle Ministry' },
    ],
  },
  {
    isSelect: true,
    id: 'user-role',
    icon: <PeopleOutline />,
    options: [
      { value: '', name: 'Select your Role' },
      { value: 'hod', name: 'Head of Department' },
      { value: 'pastoral-trainee', name: 'Pastoral Trainee' },
      { value: 'intern', name: 'Intern' },
      { value: 'pastor', name: 'Pastor' },
      { value: 'other', name: 'Other' },
    ],
  },
];

export const loginInputs = [
  {
    type: 'email',
    icon: <AlternateEmailOutlined />,
    placeholder: 'Email address',
  },
  {
    type: 'password',
    icon: <FingerprintOutlined />,
    placeholder: 'Password',
  },
];
