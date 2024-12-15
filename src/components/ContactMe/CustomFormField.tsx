import React from 'react'

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { UseFormReturn } from 'react-hook-form'
import { Input } from '../ui/input'
import { Textarea } from '@/components/ui/textarea'
import { formSchemaType } from './ContactForm'

interface propsTypes {
  form: UseFormReturn<formSchemaType>
  name: keyof formSchemaType
  placeholder: string
  textarea?: boolean
}

const CustomFormField: React.FC<propsTypes> = ({
  form,
  name,
  placeholder,
  textarea,
}) => {
  let InputField = textarea ? Textarea : Input

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl className="bg-light_bg py-6 px-4 border-none rounded-none text-heading placeholder:text-foreground mb-0">
            <InputField placeholder={placeholder} {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField
