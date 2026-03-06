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
          <FormControl>
            <InputField 
              placeholder={placeholder} 
              {...field} 
              className="bg-background py-6 px-4 border border-border rounded-lg text-foreground placeholder:text-muted-foreground mb-0 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary/50 transition-colors shadow-sm"
            />
          </FormControl>

          <FormMessage className="text-destructive text-sm mt-1" />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField
