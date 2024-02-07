
import { Link } from '@nextui-org/react';
import img3 from '../assets/images/img-3.jpg'

function Footer() {
    return (
        <div className="bg-gray-900 text-white py-5 px-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/5 mb-10 md:mb-0 flex flex-col items-center md:items-start">
            <img src={img3} alt="" className="mb-2"/>
            <h5 className="text-center md:text-left">© TechnoMasters</h5>
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-around items-center gap-5">
            <div className="mb-10 md:mb-0">
              <h5 className="mb-2 font-semibold">Enlaces:</h5>
              <ul className="space-y-2">
                <li><Link href="#introduction">Inicio</Link></li>
                <li><Link href="#solution">Proyecto</Link></li>
                <li><Link href="#team">TechnoMasters</Link></li>
                <li><Link href="#contact">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="mb-2 font-semibold">Información de Contacto:</h5>
              <ul className="space-y-2">
                <li className='font-thin'><span className='font-semibold'>Correo:</span>  T3chnoMast3rs@gmail.com</li>
                <li className='font-thin'><span className='font-semibold'>Telefono:</span>  +52-614-578-4786</li>
                <li className='font-thin'><span className='font-semibold'>Dirección:</span>  Av. Montes Americanos, Sector 35, 31216 Chihuahua, Chih.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default Footer;