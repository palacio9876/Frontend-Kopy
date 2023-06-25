import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "../layouts/Footer/Footer";
import { HeaderCliente } from '../layouts/Header/HeaderCliente';






const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3020/admin/obtenerUsuarios');
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const notifySuccess = () => {
        toast.success('Usuario habilitado correctamente', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      };
      
      const notifyError = () => {
        toast.error('Error al habilitar el usuario', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      };
    const handleEnableUser = async (emailCliente) => {
        try {
          await axios.post('http://localhost:3020/admin/habilitarUsuario', { email: emailCliente });
          fetchUsers();
          notifySuccess();
        } catch (error) {
          console.log(error);
          notifyError();
        }
      };
      

    return (
        <>
        <ToastContainer />
        <HeaderCliente />
        <main className="py-6 px-16 bg-[color:var(--pink)]">
        <h1 className="text-center text-5xl text-brown-kopy my-3">Usuarios inhabilitados</h1>
        <table className="table-auto w-full mt-10 text-pink-kopy">
          <thead>
            <tr className="bg text-600 uppercase text-sm text-orange-kopy ">
              <th>Nombre</th>
              <th>Id</th>
              <th>Correo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id_cliente} className="bg-transparent">
                  <td className="py-5 px-10 text-brown-kopy my-3 text-center cursor-pointer">{user.nombre_cliente}</td>
                  <td className="py-5 px-10 text-brown-kopy my-3 text-center cursor-pointer">{user.id_cliente}</td>
                  <td className="py-5 px-10 text-brown-kopy my-3 text-center cursor-pointer">{user.email_cliente}</td>
                  <td className="py-5 px-10 text-brown-kopy my-3 text-center cursor-pointer">{user.habilitado === 1 ? 'Habilitado' : 'Inhabilitado'}</td>

                  <td className="py-5 px-10 text-brown-kopy my-3 text-center cursor-pointer">
                    <button
                      className={`bg-orange-600 text-white font-bold py-2 px-4 rounded ${user.habilitado === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={() => handleEnableUser(user.email_cliente)}
                      disabled={user.habilitado === 1}
                    >
                      Habilitar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-2 px-4 text-gray-500">
                  No hay usuarios disponibles
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </main>
        <Footer />
      </>
    )
}      

export default UserList;