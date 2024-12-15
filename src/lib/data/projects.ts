import Intensify from '../../../public/Intensify.png'
import EcommerceAPI from '../../../public/EcommerceAPI.png'
import TodoList from '../../../public/TodoList.png'
import FoodOrderApp from '../../../public/FoodOrderApp.png'

export const projectsData = [
  {
    id: 1,
    title: 'Intensify',
    description:
      'It is a comprehensive MERN-based learning platform designed to enhance the educational experience.',
    detailDescriptiom: `It offers advanced search, secure authentication, and user engagement. Integrated shopping cart, Stripe payments, and implemented a robust course rating system for a dynamic online community.`,
    techUsed: ['React js', 'Nodejs', 'React Bootstrap', 'Mongodb', 'Redux'],
    image: Intensify,
    github: 'https://github.com/bharatyadav28/Intensify-frontend',
    live: 'https://intensify-jet.vercel.app/',
  },
  {
    id: 2,
    title: 'Ecommerce api',
    description:
      'A robust and scalable e-commerce API designed to seamlessly support the diverse needs of online stores. ',
    detailDescriptiom: ` Features includes authentication, cart management, ordering, reviews, filters, and pagination etc`,
    techUsed: ['Node js', 'Exprees js', 'Mongodb'],
    image: EcommerceAPI,

    github: 'https://github.com/bharatyadav28/E-commerce-api',
    live: 'https://e-commerce-api-scyx.onrender.com/',
  },

  {
    id: 3,
    title: 'Todo List',
    description:
      'TodoList elevates task management , optimal cache management, and secure database storage.  ',
    detailDescriptiom: ` Without login, tasks transition to local storage, ensuring continuous accessibility for all users.`,
    techUsed: [
      'Next js',
      'Typescript',
      'Tailwind CSS',
      'Tanstack Query',
      'Redux toolkit',
    ],
    image: TodoList,
    github: 'https://github.com/bharatyadav28/Todo-List',
    live: 'https://todo-list-teal-omega.vercel.app/',
  },
  {
    id: 4,
    title: 'Food Order App',
    description:
      'A React-based online food ordering app with a user-friendly interface for hassle-free dummy food ordering.  ',
    detailDescriptiom: `Features include menu browsing, order placement, and easy navigation to simulate a seamless ordering experience.`,
    techUsed: ['React js', 'CSS', 'Firebase', 'React Context API'],
    image: FoodOrderApp,
    github: 'https://github.com/bharatyadav28/Food-order-app',
    live: 'https://react-projects-f5420.web.app/',
  },
]
