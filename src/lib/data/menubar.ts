import { IoMdHome as HomeIcon, IoMdPerson as AboutIcon } from 'react-icons/io'
import { BiDetail as ResumeIcon } from 'react-icons/bi'
import { MdContactMail as ContactIcon } from 'react-icons/md'

export const menubarData = [
  {
    Icon: HomeIcon,
    title: 'Home',
    path: '#home',
  },
  {
    Icon: AboutIcon,
    title: 'About',
    path: '#about-me',
  },
  {
    Icon: ResumeIcon,
    title: 'Resume',
    path: '#resume',
  },
  {
    Icon: ContactIcon,
    title: 'Contact',
    path: '#contact-form',
  },
]
