import React from 'react'
import imageMain from '../../assets/img/canva.jpg'
import imageCafeRosa from '../../assets/img/caferosa.jpg'
import imageCafeMora from '../../assets/img/cafemora.jpg'
import imageCafeVerde from '../../assets/img/cafeverde.jpg'
import imageCafe from '../../assets/img/cafe.jpg'
import pagos from '../../assets/img/pagos.png'
import mapa from '../../assets/img/mapa.png'
import satisfecho from '../../assets/img/satisfecho.png'


export const Main = () => {
    return (
    <main>
        <section className='section-main'>
            <div className='section-left'>
                <p className='text-main'> Deleitate con nuestros <br />
                 deliciosos productos <br />
                  <span> Los mejores precios! </span> </p>
                <button className='btn-main'>
                    <span>Ver catalogo</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </div>
            <div className='section-right'>
                <img src={ imageMain } alt="imagen demostrativa" />
            </div>
        </section>
       <section className='products-container'>
            <h2>Productos destacados</h2>
            <div className='products'>
                <div className='card'>
                    <div className='image-card'>
                        <img src={ imageCafeRosa } />
                    </div>
                    <div className='info-card'>
                        <p className='tittle-product'>Cafe fresa</p>
                        <p className='price'>$7.000</p>
                    </div>
                </div>
                <div className='card'>
        < div className = 'image-card'>
        < img src = { imageCafeMora } />
                    </div >
    <div className='info-card'>
                        <p className='tittle-product'>Cafe mora</p>
    < p className = 'price' > $6.700</p >
                    </div >
                </div >
    <div className='card'>
                    <div className='image-card'>
    < img className = 'coffi' src = { imageCafeVerde } />
                    </div >
    <div className='info-card'>
                        <p className='tittle-product'>Cafe lite</p>
    < p className = 'price' > $6.500</p >
                    </div >
                </div >
    <div className='card'>
                    <div className='image-card'>
    < img src = { imageCafe } />
                    </div >
    <div className='info-card'>
                        <p className='tittle-product'>Cafe con chocolate</p>
    < p className = 'price'>$5.000</p>
                    </div >
                </div >
            </div >
    <button className='btn-products'>
                <span>Ver más</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
        </section>
        <article>
            <div className='box-mini'>
    < img  src={mapa} />
        < p > Envios a toda la ciudad</ p>
            </div >
    <div className='box-mini'>
                <img src={ pagos } />
    < p > Todos los medios de pago</ p>
            </div >
    <div className='box-mini'>
                <img  src={satisfecho} />
    <p > Cliente satisfecho</p >
            </div >
        </article >
    </main >
  )
}
