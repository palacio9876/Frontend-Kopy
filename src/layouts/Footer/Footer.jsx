import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className="todo-footer">
        <div className='footer-copyright'>
            <p> &copy;2023 | <a href="mailto:kopycrazy@gmail.com">kopycrazy@gmail.com</a> </p>
        </div>
        <div className='footer-menu'>
            <a className='content-footer' href="">Terminos y condiciones</a>
            <a className='content-footer' href="">Politicas de privacidad</a>
            <a className='content-footer' href="">Politicas de devolucion</a>
        </div>
        </div>
    </footer>
  )
}
