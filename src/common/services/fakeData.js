import { v4 as uuidv4 } from 'uuid';

const FAKE_DATA = {
  requisitions: [
    {
      id: '38f32c1d-522d-4e76-acbe-c1e064ad2fba',
      title: 'equip the children',
      amount: '20000',
      details: [
        ['10kg Rice', '5000'],
        ['10kg Chapati flour', '3000'],
        ['2kg Cooking oil', '2000'],
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      approvals: [
        {
          id: uuidv4(),
          name: 'julie',
          role: 'hod',
          status: 2,
          createdAt: new Date().toISOString(),
          comments: ['Io mchele ni expe but sawa'],
        },

        {
          id: uuidv4(),
          name: 'lovi',
          role: 'sp',
          status: 1,
          createdAt: new Date().toISOString(),
          comments: ['Io mchele ni expe sana'],
        },
        {
          id: uuidv4(),
          name: 'eunice',
          role: 'hr',
          status: 0,
        },
        {
          id: uuidv4(),
          name: 'martin',
          role: 'fin',
          status: 0,
        },
      ],
    },
    {
      id: '38f32c1d-522d-4e76-acbe-c1e064ad2fbb',
      title: 'feed the people',
      amount: '1000',
      details: [
        ['10kg Rice', '5000'],
        ['10kg Chapati flour', '3000'],
        ['2kg Cooking oil', '2000'],
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      approvals: [
        {
          id: uuidv4(),
          name: 'julie',
          role: 'hod',
          status: 1,
          createdAt: new Date().toISOString(),
          comments: ['Io mchele ni expe'],
        },
        {
          id: uuidv4(),
          name: 'lovi',
          role: 'sp',
          status: 2,
          createdAt: new Date().toISOString(),
          comments: ['Io mchele hapana'],
        },
        {
          id: uuidv4(),
          name: 'eunice',
          role: 'hr',
          status: 0,
        },
        {
          id: uuidv4(),
          name: 'martin',
          role: 'fin',
          status: 0,
        },
      ],
    },
    {
      id: '38f32c1d-522d-4e76-acbe-c1e064ad2fbc',
      title: 'buy the stuff',
      amount: '6000',
      details: [
        ['10kg Rice', '5000'],
        ['10kg Chapati flour', '3000'],
        ['2kg Cooking oil', '2000'],
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      approvals: [
        {
          id: uuidv4(),
          name: 'julie',
          role: 'hod',
          status: 0,
          createdAt: new Date().toISOString(),
          comments: ['Io mchele ni expe'],
        },
        {
          id: uuidv4(),
          name: 'lovi',
          role: 'sp',
          status: 2,
          createdAt: new Date().toISOString(),
          comments: ['Io mchele hapana'],
        },
        {
          id: uuidv4(),
          name: 'eunice',
          role: 'hr',
          status: 0,
        },
        {
          id: uuidv4(),
          name: 'martin',
          role: 'fin',
          status: 0,
        },
      ],
    },
  ],
};
export default FAKE_DATA;
