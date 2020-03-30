import { v4 as uuidv4 } from 'uuid';

const FAKE_DATA = {
  requisitions: [
    {
      id: uuidv4(),
      title: 'equip the children',
      amount: '20000',
      details: [
        ['10kg Rice', '5000'],
        ['10kg Chapati flour', '3000'],
        ['2kg Cooking oil', '2000'],
      ],
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      approvals: [
        {
          id: uuidv4(),
          name: 'julie',
          role: 'hod',
          status: 'APPROVED',
          createdAt: new Date().toLocaleString(),
          comments: ['Io mchele ni expe but sawa'],
        },

        {
          id: uuidv4(),
          name: 'lovi',
          role: 'sp',
          status: 'REJECTED',
          createdAt: new Date().toLocaleString(),
          comments: ['Io mchele ni expe sana'],
        },
        {
          id: uuidv4(),
          name: 'eunice',
          role: 'hr',
          status: 'PENDING',
        },
        {
          id: uuidv4(),
          name: 'martin',
          role: 'fin',
          status: 'PENDING',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'feed the people',
      amount: '1000',
      details: [
        ['10kg Rice', '5000'],
        ['10kg Chapati flour', '3000'],
        ['2kg Cooking oil', '2000'],
      ],
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      approvals: [
        {
          id: uuidv4(),
          name: 'julie',
          role: 'hod',
          status: 'REJECTED',
          createdAt: new Date().toLocaleString(),
          comments: ['Io mchele ni expe'],
        },
        {
          id: uuidv4(),
          name: 'lovi',
          role: 'sp',
          status: 'APPROVED',
          createdAt: new Date().toLocaleString(),
          comments: ['Io mchele hapana'],
        },
        {
          id: uuidv4(),
          name: 'eunice',
          role: 'hr',
          status: 'PENDING',
        },
        {
          id: uuidv4(),
          name: 'martin',
          role: 'fin',
          status: 'PENDING',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'buy the stuff',
      amount: '6000',
      details: [
        ['10kg Rice', '5000'],
        ['10kg Chapati flour', '3000'],
        ['2kg Cooking oil', '2000'],
      ],
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      approvals: [
        {
          id: uuidv4(),
          name: 'julie',
          role: 'hod',
          status: 'PENDING',
          createdAt: new Date().toLocaleString(),
          comments: ['Io mchele ni expe'],
        },
        {
          id: uuidv4(),
          name: 'lovi',
          role: 'sp',
          status: 'APPROVED',
          createdAt: new Date().toLocaleString(),
          comments: ['Io mchele hapana'],
        },
        {
          id: uuidv4(),
          name: 'eunice',
          role: 'hr',
          status: 'PENDING',
        },
        {
          id: uuidv4(),
          name: 'martin',
          role: 'fin',
          status: 'PENDING',
        },
      ],
    },
  ],
};
export default FAKE_DATA;
