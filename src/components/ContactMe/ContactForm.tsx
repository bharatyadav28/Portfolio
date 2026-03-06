'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import CustomFormField from './CustomFormField'

// React hook form and zod  fields validation
const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: 'Name must contain atleast 3 characters' })
    .max(50, { message: 'Name must not contain more than 50 characters' }),
  email: z
    .string()
    .trim()
    .email({ message: 'This email address is not valid' }),
  subject: z
    .string()
    .trim()
    .min(3, { message: 'Subject must contain atleast 3 characters' })
    .max(50),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^\d{10}$/) // Ensure exactly 10 digits
    .refine(
      (value) => {
        const numValue = Number(value)
        return numValue >= 1000000000 && numValue <= 9999999999
      },
      { message: 'Phone number must be between 1000000000 and 9999999999' },
    ),
  message: z
    .string()
    .trim()
    .min(3, { message: 'message must contain atleast 5 characters' })
    .max(100),
})

export type formSchemaType = z.infer<typeof formSchema>

const ContactForm = () => {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      phoneNumber: '',
      message: '',
    },
  })

  const onSubmit = async (data: formSchemaType) => {
    const path = process.env.NEXT_PUBLIC_API_KEY
    if (!path) {
      throw Error('Form submission failed')
    }
    try {
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Form not submitted')
      }

      console.log('Form successfully submitted')
      toast.success('Thank you! Your message has been successfully sent.')

      form.reset() // Reset the form
    } catch (error) {
      toast.error(
        'Oops! There was an error sending your message. Please try again later.',
      )

      console.error('Error submitting the form', error)
    }
  }

  return (
    <div
      className="glass-card mb-0 px-6 sm:px-12 py-10 w-full mx-auto"
      id="contact-form"
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-foreground text-2xl font-extrabold tracking-tight uppercase">
          GET IN TOUCH
        </h2>
        <div className="h-px bg-border flex-1"></div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CustomFormField form={form} name="name" placeholder="Name" />
          <CustomFormField form={form} name="email" placeholder="Email" />
          <CustomFormField form={form} name="subject" placeholder="Subject" />
          <CustomFormField
            form={form}
            name="phoneNumber"
            placeholder="Phone number"
          />
          <CustomFormField
            form={form}
            name="message"
            placeholder="Message"
            textarea={true}
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="mt-4 bg-primary hover:bg-primary/90 text-sm text-primary-foreground rounded-lg py-3 px-8 font-bold shadow-sm transition-all uppercase tracking-wider"
          >
            Send Message
          </motion.button>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm
