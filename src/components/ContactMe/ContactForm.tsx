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
      className=" sm:mx-[3.8rem] sm:mt-10 mb-0 m-5 mx-3  pt-8 pb-10 sm:px-7 px-5 bg-dark_bg rounded-lg  "
      id="contact-form"
    >
      <h2 className="text-md text-highlight font-black mb-5">GET IN TOUCH</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
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
            whileHover={{ scale: 1.05, backgroundColor: '#f38e0a' }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="bg-highlight  text-sm text-[#0f0f0f] rounded-md py-[0.5rem] px-[1rem]  font-extrabold"
          >
            Send Message
          </motion.button>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm
