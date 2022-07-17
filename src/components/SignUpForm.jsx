import {useFormik} from 'formik'
import React, {useState} from 'react'
import './signup.css'
import * as Yup from 'yup'

export const SignUpForm = () => {

    const formik = useFormik({
        initialValues:{
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmedPassword: ""
        },validationSchema: Yup.object({
            name: Yup.string().required("Required").min(4,"More than 4 characters"),
            email: Yup.string().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please input valid email address"),
            password: Yup.string().required('Required').matches(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,"At least one upper case English letter,At least one lower case English letter,At least one digit,At least one special character,Minimum eight in length"),
            phone: Yup.string().required("Required").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/,'Must be a number'),
            confirmedPassword: Yup.string().required("Required").oneOf([Yup.ref('password'),null],"Password must match")
        }),
        onSubmit: (values) =>{
            alert("submitted")
            console.log(values);
        }
    })

    console.log(formik.errors.confirmedPassword);

  return (
    <>
        <section>
            <form className='infoform' onSubmit={formik.handleSubmit}>

                <label>Your Name</label>
                <input onChange={formik.handleChange} value={formik.values.name} type='text' id='name' name='name' placeholder='Enter your name'/>
                {formik.errors.name && <p className='errorMsg'>{formik.errors.name}</p>}
                

                <label>Your Email</label>
                <input onChange={formik.handleChange} value={formik.values.email} type='email' id='email' name='email' placeholder='Enter your email'/>
                {formik.errors.email && <p className='errorMsg'>{formik.errors.email}</p>}

                <label>Your Phone</label>
                <input onChange={formik.handleChange} value={formik.values.phone} type='text' id='phone' name='phone' placeholder='Enter your phone number'/>
                {formik.errors.phone && <p className='errorMsg'>{formik.errors.phone}</p>}


                <label>Your Password</label>
                <input onChange={formik.handleChange} value={formik.values.password} type='text' id='password' name='password' placeholder='Enter your password'/>
                {formik.errors.password && <p className='errorMsg'>{formik.errors.password}</p>}
                

                <label>Confirm your password</label>
                <input onChange={formik.handleChange} value={formik.values.confirmedPassword} type='text' id='confirmedPassword' name='confirmedPassword' placeholder='Confirm your password'/>
                {formik.errors.confirmedPassword && <p className='errorMsg'>{formik.errors.confirmedPassword}</p>}


                <button type='submit'>Sign up</button>
            </form>
        </section>
    </>
  )
}
