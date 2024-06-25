import Intensify from '../../../public/Intensify.png'
import EcommerceAPI from '../../../public/EcommerceAPI.png'
import TodoList from '../../../public/TodoList.png'
import FoodOrderApp from '../../../public/FoodOrderApp.png'

export const projectsData = [
  {
    id: 1,
    title: 'Intensify',
    description:
      'It is a dynamic online assessment tool designed to enhance the learning experience.',
    detailDescriptiom: ` It features an intuitive user interface, advanced assessment
                creation capabilities, and seamless integration with existing
                learning platforms.`,
    techUsed: ['React js', 'Nodejs', 'React Bootstrap', 'Mongodb', 'Redux'],
    image: Intensify,
    github: 'https://github.com/bharatyadav28/Intensify-frontend',
    live: 'https://intensify-jet.vercel.app/',
  },
  {
    id: 2,
    title: 'Ecommerce api',
    description: 'A robust e-commerce API designed to support online stores. ',
    detailDescriptiom: ` Features secure user authentication, product management, order processing, and Stripe payment integration, ensuring seamless transactions and efficient backend operations.`,
    techUsed: [
      'Node js',
      'Exprees js',
      'Mongodb',
      'Tanstack Query',
      'Redux toolkit',
    ],
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
