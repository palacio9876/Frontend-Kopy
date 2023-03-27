import React, { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom';
import  Axios  from 'axios';


export const Register = () => {

// CONECTAR CON BACKEND MEDIANTE AXIOS Y USESTATE
const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: ''

})

const handleInputChange = ({target}) => {
    setForm({
        ...form,
        [target.name]: target.value,
        [target.apellido]: target.value,
        [target.email]: target.value,
        [target.password]: target.value
    })
}

const handleSubmit = (e) => {
    alert('Usuario registrado')
    e.preventDefault()
    console.log(form)
    Axios.post('http://localhost:3020/api/registro', form)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


    return (
        <div className="bg-[url('https://res.cloudinary.com/dyhfwq81d/image/upload/v1679053889/pexels-hu%E1%BB%B3nh-%C4%91%E1%BA%A1t-2313037_qvujla.jpg')] h-screen W-full bg-cover bg-center p-24 flex items-center justify-center ">
            <form  onSubmit={handleSubmit} className="bg-[#473b3be3] bg-opacity-89 rounded-lg p-4 shadow-md max-w-xs w-full flex flex-col justify-center absolute top-90 left-90">
                <span className="text-2xl text-white text-center mb-4">Register</span>
                <label htmlFor="name" className="text-white mb-1">Nombre</label>
                <input type="" id="username" name="nombre" onChange={handleInputChange} required="" className="px-4 py-2 mb-4 w-full text-base text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500 transition duration-200 ease-in-out border border-solid border-red-400 border-opacity-20 bg-white shadow-outline-blue border-solid border-yellow-700" />
                <label htmlFor="lastname" className="text-white mb-1">Apellido</label>
                <input type="" id="apellido" name="apellido" onChange={handleInputChange} required="" className="px-4 py-2 mb-4 w-full text-base text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500 transition duration-200 ease-in-out border border-solid border-red-400 border-opacity-20 bg-white shadow-outline-blue border-solid border-yellow-700" />
                <label htmlFor="email" className="text-white mb-1">Correo</label>
                <input type="email" id="email" name="email" onChange={handleInputChange} required="" className="px-4 py-2 mb-4 w-full text-base text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500 transition duration-200 ease-in-out border border-solid border-red-400 border-opacity-20 bg-white shadow-outline-blue border border-solid border-yellow-700" />
                <label htmlFor="password" className="text-white mb-1">Contraseña</label>
                <input type="password" id="password" name="password" onChange={handleInputChange} required="" className="px-4 py-2 mb-4 w-full text-base text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500 transition duration-200 ease-in-out border border-solid border-red-400 border-opacity-20 bg-white shadow-outline-blue border border-solid border-yellow-700" />

                <button type='submit'  >

                    <a className='group relative inline-block font-[bold] text-white text-base no-underline uppercase overflow-hidden transition-[0.5s] tracking-[3px] mt-10 px-5 py-2.5 hover:bg-white ' href="#">
                        <span className='absolute block animate-[btn-anim1_1.5s_linear_infinite]-left-full w-full h-0.5 top-0 background: linear-gradient(90deg, transparent, #fff)'></span>
                        <span className='absolute block animate-[btn-anim2_1.5s_linear_infinite]-top-full w-0.5 h-full right-0 background: linear-gradient(180deg, transparent, #fff)'></span>
                        <span className='absolute block animate-[btn-anim3_1.5s_linear_infinite]-right-full bottom-0 background: linear-gradient(270deg, transparent, #fff) animation-delay: .75s'></span>
                        <span className='absolute block animate-[btn-anim4_1.5s_linear_infinite]-bottom-full w-0.5 left-0 background: linear-gradient(360deg, transparent, #fff)'></span>
                        <p className='group-hover:text-black'>Registrate</p>
                    </a>
                </button>
            </form>
        </div>
    )
}