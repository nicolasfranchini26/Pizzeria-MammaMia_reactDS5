import React from 'react'
import FotoPerfil from '../../assets/img/foto-perfil.jpg'
import './Profile.css'

const Profile = () => {
  return (
    <>
    <div className="Perfil">
      <h2>Perfil del usuario</h2>

      <img
        src={FotoPerfil}
        alt="Foto de usuario"
        className="profile-img"
      
      />
      <p>Email: usuario@example.com</p>
      <button type="button" className="rounded btn btn-outline-success">Cerrar sesión</button>
    </div>
    </>
  )
}

export default Profile
