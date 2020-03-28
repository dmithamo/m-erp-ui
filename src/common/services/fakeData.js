const FAKE_DATA = {
  requisitions: [
    {
      id: '0002',
      title: 'equip the children for worship',
      amount: '20000',
      details: [
        ['10kg Rice', '5000'],
        ['10kg Chapati flour', '3000'],
        ['2kg Cooking oil', '2000'],
      ],
      createdAt: 'not-today',
      updatedAt: 'not-today',
      approvals: [
        {
          name: 'julie',
          role: 'hod',
          status: 'APPROVED',
          createdAt: 'soon-ago',
          comments: ['Io mchele ni expe but sawa'],
        },

        {
          name: 'lovi',
          role: 'Senior Pastor',
          status: 'REJECTED',
          createdAt: 'soon-ago',
          comments: ['Io mchele ni expe sana'],
        },
        { name: 'eunice', role: 'hr', status: 'PENDING' },
        { name: 'martin', role: 'finance', status: 'PENDING' },
      ],
    },
    {
      id: '0001',
      title: 'feed all the people of earth',
      amount: '1000',
      details: [
        ['10kg Rice', '5000'],
        ['10kg Chapati flour', '3000'],
        ['2kg Cooking oil', '2000'],
      ],
      createdAt: 'today',
      updatedAt: 'not-today',
      approvals: [
        {
          name: 'julie',
          role: 'hod',
          status: 'APPROVED',
          createdAt: 'soon-ago',
          comments: ['Io mchele ni expe but sawa'],
        },
        {
          name: 'lovi',
          role: 'Senior Pastor',
          status: 'APPROVED',
          createdAt: 'soon-ago',
          comments: ['Io mchele hapana'],
        },
        { name: 'eunice', role: 'hr', status: 'PENDING' },
      ],
    },
  ],
};
export default FAKE_DATA;
