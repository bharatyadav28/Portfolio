import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import DropdownIcon from './DropdownIcon'

const MyAvatar = () => {
  return (
    <Avatar aria-label="Avator Button">
      <AvatarImage src="/pic.jpg" alt="Avatar Image" />

      <AvatarFallback>BY</AvatarFallback>
    </Avatar>
  )
}

const AvatarButton = () => {
  return (
    <div className="flex gap-2 myavatar items-center  ">
      <MyAvatar />
      <DropdownIcon />
    </div>
  )
}

export default AvatarButton
