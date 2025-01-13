import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import img from '../images/contact-img.jpg'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = value => {
    console.log('Form Data is here: ', value)
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name Required')
      .min(3, 'Name must be at least 3 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email Required')
      .matches(/@.*\.com$/, 'Invalid email format'),
    message: Yup.string()
      .required('Message Required')
      .min(5, 'Message must be at least 5 characters')
  })

  return (
    <>
      <div>
        <div className='mt-14'>
          <h1 className='md:text-[50px] text-[36px] sm:border-b-2 relative z-10 bg-[#fff] w-max mx-auto px-2 py-2 border-b-4 border-orgClr font-[600]'>
            Contact
          </h1>
        </div>
        <div className='flex md:flex-row flex-col md:gap-10 items-center'>
          <div className='hidden md:block w-full'>
            <img src={img} alt='' width='100%' height='100%' />
          </div>
          <div className='w-full'>
            <Formik
              initialValues={formData} // Use initialFormValues when editing
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form>
                  <div className='md:px-16 pt-10 pb-16'>
                    <div className=''>
                      <div className='mb-5'>
                        <label
                          htmlFor='name'
                          className='block text-sm text-left font-medium'
                        >
                          Name<span className='text-red-800'>*</span>
                        </label>
                        <FaRegUserCircle
                          size={22}
                          className='text-gray-300 mt-[14px] ml-2 absolute z-10'
                        />
                        <Field
                          type='text'
                          id='name'
                          name='name'
                          placeholder='Enter Your Name'
                          className='input-style border border-gray-300 rounded-md pl-10 text-sm'
                        />
                        <ErrorMessage
                          name='name'
                          component='div'
                          className='text-red-600 text-sm text-left'
                        />
                      </div>
                      <div className='mb-5'>
                        <label
                          htmlFor='email'
                          className='block text-sm text-left font-medium'
                        >
                          Email<span className='text-red-800'>*</span>
                        </label>
                        <MdEmail
                          size={22}
                          className='text-gray-300 mt-[14px] ml-2 absolute z-10'
                        />
                        <Field
                          type='text'
                          id='email'
                          name='email'
                          placeholder='name@gmail.com'
                          className='input-style border border-gray-300 rounded-md pl-10 text-sm'
                        />
                        <ErrorMessage
                          name='email'
                          component='div'
                          className='text-red-600 text-sm text-left'
                        />
                      </div>
                      <div className='mb-5'>
                        <label
                          htmlFor='message'
                          className='block text-sm text-left font-medium'
                        >
                          Message<span className='text-red-800'>*</span>
                        </label>
                        <Field
                          as='textarea'
                          id='message'
                          name='message'
                          placeholder='Your Message...'
                          className='input-style border border-gray-300 rounded-md h-40 text-sm'
                        />
                        <ErrorMessage
                          name='message'
                          component='div'
                          className='text-red-600 text-sm text-left'
                        />
                      </div>
                      <div className='flex mt-4 justify-center '>
                        <button
                          type='submit'
                          className='px-12 py-2 text-white bg-orgClr w-full rounded-md font-[500] hover:bg-[#eb6c09] focus:outline-none focus:ring focus:ring-indigo-200'
                        >
                          {/* {isLoading ? (
                          <FaSpinner className='animate-spin text-3xl' />
                        ) : (
                          'Submit'
                        )} */}
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
