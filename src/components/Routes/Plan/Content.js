/* eslint-disable quotes */
export const content = {
  banner: {
    title: 'Welcome to the best <br/>safe harbor package in the world',
    description:
      'We offer an investment property portfolio & permanent residency in the Cayman Islands with the option of no out-of-pocket expenses. With our seamless and completely transparent process, you know your future is taken care of.',
  },
  ctaBanner: {
    title: 'Download our brochure for additional information.',
  },
  paginationBar: {
    prev: {
      title: 'Back to Overview',
      link: '/',
    },
    next: {
      title: 'Go to the Process',
      link: '/process',
    },
  },
  points: {
    cols: [
      { id: 1, iconId: 'pasport', title: 'Permanent residency application', more: { to: '#', label: 'Learn more' } },
      {
        id: 2,
        iconId: 'portfolio',
        title: '$2.4 million+ property portfolio (up to 3 properties)',
        more: { to: '#', label: 'Learn more' },
      },
      { id: 3, iconId: 'stamp', title: 'Stamp Duty', more: { to: '#', label: 'Learn more' } },
      { id: 4, iconId: 'bank', title: 'Conveyancing', more: { to: '#', label: 'Learn more' } },
      { id: 5, iconId: 'safe', title: 'Creative financial structures', more: { to: '#', label: 'Learn more' } },
      { id: 6, iconId: 'design', title: 'Interior design', more: { to: '#', label: 'Learn more' } },
      { id: 7, iconId: 'pocket', title: 'Furnishing', more: { to: '#', label: 'Learn more' } },
      { id: 8, iconId: 'list', title: '5 Years of property management', more: { to: '#', label: 'Learn more' } },
    ],
  },
  figures: {
    title: 'Investment Property Portfolio & Permanent Residency',
    content: [
      'Your dedicated team will coordinate between banks, lawyers, government, property managers, interior designers and maintenance to deliver you a seamless & stress free experience. ',
      'All your paperwork will be handled by our experts to secure your residency in this modern, tax-neutral Caribbean paradise. The result: a hassle free property portfolio under 5 years management in the Cayman Islands’ buoyant property market.',
    ],
    list: [
      { id: 1, label: 'Minimum contribution', value: '$7,000,000' },
      { id: 2, label: 'Creates Additional Liquidity', value: '$3,500,000' },
      { id: 3, label: 'LTV', value: '50%' },
      { id: 4, label: 'Interest Rate', value: '+1.37%' },
      { id: 5, label: 'Annualised rate of return', value: '4% Capital Return' },
      { id: 6, label: 'Will increse with inflation', value: '2% Dividends' },
      { id: 7, label: 'Principal under Management', value: '$7,000,000' },
    ],
    ways: {
      title: 'The <span>4</span> ways we generate wealth for you',
      list: [
        { id: 1, label: 'Creates Additional Liquidity', value: '$3,500,000' },
        { id: 2, num: '1', label: 'Rental Income', value: '$1,099,489' },
        { id: 3, num: '2', label: 'Portfolio Value', value: '$6,367,914' },
        { id: 4, label: 'Principal under Management', value: '$7,000,000' },
        { id: 5, num: '3', label: 'Capital Returns', value: '$15,337,862' },
        { id: 6, num: '4', label: 'Dividends', value: '$10,401,631' },
      ],
      total: { label: 'Total Gains', value: '$33,206,896' },
    },
  },
  tax: {
    title: 'Residency in a tax neutral jurisdiction',
    boxTitle: 'Cayman Island Tax',
    cols: [
      {
        title: 'At a glance',
        list: [
          'Corporate Income Tax Rate (%) 0',
          'Capital Gains Tax Rate (%) 0',
          'Branch Tax Rate (%) 0',
          'Withholding Tax (%)',
          'Dividends 0',
          'Interest 0',
          'Royalties from Patents, ',
          'Know-how, etc. 0',
          'Branch Remittance Tax 0',
        ],
      },
      {
        title: 'Taxes on corporate income & gains',
        description: 'The Cayman Islands does not impose taxes on: ',
        list: ['Income', 'Profits', 'Wealth', 'Capital gains'],
        source: '<strong>Source:</strong> EY Global Tax Guides 2021',
      },
    ],
  },
};
