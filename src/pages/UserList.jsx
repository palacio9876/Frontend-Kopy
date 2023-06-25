import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      
    




    return (<>
        <ToastContainer />
        <HeaderCliente />
        <div className="container">
            <h1>Lista de usuarios</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Id</th>
                        <th>Correo</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(users) && users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id_cliente}>
                                <td>{user.nombre_cliente}</td>
                                <td>{user.apellido_cliente}</td>
                                <td>{user.id_cliente}</td>
                                <td>{user.email_cliente}</td>
                                <td>{user.habilitado === 1 ? 'Habilitado' : 'Inhabilitado'}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
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
                            <td colSpan="5">No hay usuarios disponibles</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default UserList;
