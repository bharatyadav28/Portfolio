import Ravallusion1 from '../../../public/Ravallusion/Ravallusion_One.png'
import Ravallusion2 from '../../../public/Ravallusion/Ravallusion_Two.png'
import Ravallusion3 from '../../../public/Ravallusion/Ravallusion_Three.png'
import Ravallusion4 from '../../../public/Ravallusion/Ravallusion_Four.png'
import Ravallusion5 from '../../../public/Ravallusion/Ravallusion_Five.png'
import Ravallusion6 from '../../../public/Ravallusion/Ravallusion_Six.png'

import OMS1 from '../../../public/OMS/OMS_One.png'
import OMS2 from '../../../public/OMS/OMS_Two.png'
import OMS3 from '../../../public/OMS/OMS_Three.png'
import OMS4 from '../../../public/OMS/OMS_Four.png'
import OMS5 from '../../../public/OMS/OMS_Five.png'

import CareWorks1 from '../../../public/Careworks/Careworks_one.png'
import CareWorks2 from '../../../public/Careworks/Careworks_two.png'
import CareWorks3 from '../../../public/Careworks/Careworks_three.png'
import CareWorks4 from '../../../public/Careworks/Careworks_four.png'
import CareWorks5 from '../../../public/Careworks/Careworks_five.png'
import CareWorks6 from '../../../public/Careworks/Careworks_six.png'

import Intensify1 from '../../../public/Intensify/Intensify_one.png'
import Intensify2 from '../../../public/Intensify/Intensify_two.png'
import Intensify3 from '../../../public/Intensify/Intensify_three.png'
import Intensify4 from '../../../public/Intensify/Intensify_four.png'
import Intensify5 from '../../../public/Intensify/Intensify_five.png'



export const projectsData = [
  {
    id: 1,
    title: 'Intensify',
    description:
      'It is a comprehensive MERN-based learning platform designed to enhance the educational experience.',
    detailDescriptiom: `It offers advanced search, secure authentication, and user engagement. Integrated shopping cart, Stripe payments, and implemented a robust course rating system for a dynamic online community.`,
    techUsed: ['React js', 'Nodejs', 'React Bootstrap', 'Mongodb', 'Redux'],
    images: [Intensify1, Intensify2, Intensify3, Intensify4, Intensify5],
    github: 'https://github.com/bharatyadav28/Intensify-frontend',
    live: 'https://intensify-jet.vercel.app/',
  },
  {
    id: 2,
    title: 'CareWorks',
    description:
      'A caretaker booking platform that connects users with professional caretakers for home assistance and healthcare support.',
    detailDescriptiom: `Built the backend with Node.js, PostgreSQL, and Drizzle ORM, implementing APIs for booking and user management. Developed a React.js admin panel for managing caretakers, bookings, and platform users.`,
    techUsed: ['Node.js', 'PostgreSQL', 'Drizzle ORM', 'TypeScript', 'React.js'],
    images: [CareWorks1, CareWorks2, CareWorks3, CareWorks4, CareWorks5, CareWorks6],
    github: '',
    live: 'https://www.careworks.biz',
  },
  {
    id: 3,
    title: 'Ravallusion',
    description:
      'It is a scalable e-learning platform designed to deliver and manage online education efficiently.',
    detailDescriptiom: `Developed the backend using Node.js, PostgreSQL, and Drizzle ORM. Built RESTful APIs for caretaker booking, user management, and services. Created a React.js admin panel to manage bookings, caretakers, and users efficiently.`,
    techUsed: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
    images: [Ravallusion1, Ravallusion2, Ravallusion3, Ravallusion4, Ravallusion5, Ravallusion6], // Added placeholders for demonstration
    github: '',
    live: 'https://ravallusion.com/',
  },
{
  id: 4,
  title: 'Oswal Management System',
  description:
    'A university ERP system designed to manage and track institutional assets efficiently.',
  detailDescriptiom: `Developed and optimized React components to ensure smooth data flow between the frontend and backend. Fixed bugs and improved system stability. Built and integrated APIs using Node.js with PostgreSQL to manage and track university assets, enabling efficient inventory handling and administrative control.`,
  techUsed: ['React.js', 'Node.js', 'PostgreSQL', 'REST API'],
  images: [OMS1, OMS2, OMS3, OMS4, OMS5],
  github: '',
  live: '',
},
]
