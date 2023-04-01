import React, { useState } from 'react'

const Signup = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [error, seterror] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        //  email validation
        const emailRegex = /^\S+@\S+\.\S+$/ ;
        if (!emailRegex.test(email)) {
            seterror('Please enter a valid email address.')
            return;
        }

        // password matching validation
        if(password !== confirmPassword) {
            seterror('Password should match.')
            return;
        }

        alert('Form submitted successfully.')
        console.log('Email: ', email);
        console.log('Password: ', password);
        console.log('Confirm Password: ', confirmPassword);

        // empty the input fields after submitting the form
        setemail('')
        setpassword('')
        setconfirmPassword('')
        seterror('')
    };
    return (
        <div className='min-h-screen bg-slate-800 py-6 flex flex-col justify-center sm:py-12'>
            <h1 className='text-center text-6xl text-indigo-500 font-semibold m-10'>
                Next & Tailwind Form
            </h1>
            <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
                <div className='relative px-4 py-10 bg-slate-900 mx-8 md:mx-0 shadow-2xl rounded-xl sm:p-10'>
                    <div className='max-w-md mx-auto'>
                        <div className='flex items-center space-x-5'>
                            <div className='h-14 w-14 bg-indigo-500 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono'>
                                S
                            </div>
                            <div className='block font-semibold text-xl self-start text-slate-400'>
                                <h2 className='leading-relaxed'>Sign up to our platform</h2>
                                <p className='text-sm text-slate-400 font-normal leading-relaxed'>Create an account to get started</p>
                            </div>
                        </div>
                        <div className='divide-y divide-gray-200'>
                            <div className='py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7'>

                                <form onSubmit={handleSubmit}>

                                    <div className='relative'>
                                        <input
                                            type='email'
                                            id='email'
                                            required
                                            className='input-field focus:outline-none w-full px-3 py-2 border-0 rounded-md appearance-none bg-slate-800 text-slate-300 m-2'
                                            placeholder='example@gmail.com'
                                            autoComplete='off'
                                            value={email}
                                            onChange={(e) => setemail(e.target.value)}
                                        />
                                    </div>

                                    <div className='relative'>
                                        <input
                                            type='password'
                                            id='password'
                                            required
                                            className='input-field focus:outline-none w-full px-3 py-2 border-0 rounded-md appearance-none bg-slate-800 text-slate-300 m-2'
                                            placeholder='****'
                                            value={password}
                                            onChange={(e) => setpassword(e.target.value)}
                                        />
                                    </div>

                                    <div className='relative'>
                                        <input
                                            type='password'
                                            id='confirmPassword'
                                            required
                                            className='input-field focus:outline-none w-full px-3 py-2 border-0 rounded-md appearance-none bg-slate-800 text-slate-300 m-2'
                                            placeholder='****'
                                            autoComplete='off'
                                            value={confirmPassword}
                                            onChange={(e) => setconfirmPassword(e.target.value)}
                                        />
                                    </div>

                                    <div className='pl-2 font-semibold text-red-500 py-2'>
                                        {error}
                                    </div>

                                    <div className='text-center mt-6'>
                                        <button
                                        type='submit'
                                        className='bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'
                                        >Sign up</button>
                                    </div>

                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup