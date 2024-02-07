import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import { motion, useViewportScroll, useTransform } from "framer-motion"

import img2 from '../assets/images/img-2.jpg'
import img12 from '../assets/images/img-12.jpg'
import img13 from '../assets/images/img-13.jpg'
import logo from '../assets/images/logo.jpeg'

function Introduction() {
    const { scrollYProgress } = useViewportScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const x3 = useTransform(scrollYProgress, [0, 1], [0, 300]);

    let tabs = [
      {
        id: "tracking",
        label: "Rastreo",
        content: "Proporciona información en tiempo real sobre la ubicación de los camiones. Los usuarios pueden acceder a esta información a través de una aplicación móvil, lo que les permite planificar sus rutas de manera más eficiente."
      },
      {
        id: "access",
        label: "Control de Acceso",
        content: "Mejora la seguridad y la comunicación dentro del sistema de transporte. Incluye la implementación de códigos QR exclusivos para cada usuario, lo que permite un control de acceso más eficiente y seguro."
      },
      {
        id: "inclusión",
        label: "Discapacidad Visual",
        content: "Mejora la accesibilidad del sistema de transporte para las personas con discapacidad visual. Incluye la implementación de un sistema de retroalimentación específico, como altavoces que proporcionen información auditiva sobre las rutas y los tiempos de llegada de los camiones."
      }
    ];

    return (
      <div className=''>
          <div id='introduction' className='bg-blue-500 dark:bg-blue-800'>
            <div className="flex flex-wrap md:flex-nowrap items-center overflow-hidden">
              <div className="w-full md:w-1/2 p-4 space-y-5 text-white">
                
                <h2 className=" text-center font-semibold text-3xl">¡Bienvenido a la Revolución de TechnoMasters!</h2>
                <p className=" text-center text-lg font-thin">Descubre cómo enfrentamos los desafíos del transporte urbano con tecnología de vanguardia. Nos dedicamos a mejorar la eficiencia y la experiencia del usuario para transformar por completo el futuro de la movilidad urbana. ¡Únete a nosotros en este emocionante viaje hacia una nueva era del transporte!</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center overflow-hidden">
                <motion.img src={img2} alt="" className='object-cover' style={{ x }} />
              </div>
            </div>

            <div className="flex flex-col-reverse flex-wrap md:flex-nowrap md:flex-row items-center overflow-hidden">
              <div className="w-full md:w-1/2 flex justify-center overflow-hidden">
                <motion.img src={img12} alt="" className='object-contain w-3/4 rounded  shadow-md shadow-black/70 rotate-2' style={{ x: x2 }} />
              </div>
              <div className="w-full md:w-1/2 p-4 space-y-5 text-white">
                <h2 className=" text-center font-semibold text-2xl">Necesidad de una Solución Integral</h2>
                <p className=" text-center text-lg font-thin"> Los problemas que enfrenta el sistema de transporte urbano son multifacéticos y están interconectados. Por lo tanto, una solución parcial o aislada no sería suficiente para abordar todos estos desafíos de manera efectiva.</p>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap items-center pb-5 overflow-hidden">
              <div className="w-full md:w-1/2 p-4 space-y-5 text-white">
                <h2 className=" text-center font-semibold text-3xl">¡Bustrack - Revolucionando el Transporte Urbano!</h2>
                <p className=" text-center text-lg font-thin">Bustrack es un proyecto innovador que busca abordar los desafíos significativos en el sistema de transporte urbano actual. Su objetivo es mejorar la eficiencia operativa y la experiencia del usuario mediante la implementación de un sistema integral</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center overflow-hidden">
                <motion.img src={img13} alt="" className='object-contain w-3/4 rounded shadow-md shadow-black/70 -rotate-3' style={{ x: x3 }} />
              </div>
            </div>
          </div>
          

          <div className="bg-gray-200 dark:bg-blue-950  flex flex-col items-center pb-5">
            <div className="w-full md:w-1/2 p-4 space-y-5 text-blue-700 dark:text-white">
                <h2 className=" text-center font-semibold text-5xl">¡Bustrack!</h2>
            </div>
            <div className="w-3/4 md:w-2/5 flex justify-center">
              <div className="flex w-full flex-col items-center">
                <Tabs aria-label="Dynamic tabs" items={tabs} size='md' color='primary' variant='underlined'>
                  {(item) => (
                    <Tab className='text-wrap' key={item.id} title={item.label}>
                      <Card className='drop-shadow-xl shadow-md  shadow-black/20'>
                        <CardBody>
                          {item.content}
                        </CardBody>
                      </Card>  
                    </Tab>
                  )}
                </Tabs>
              </div> 
            </div>
            <div className="w-1/2 md:w-1/4 flex justify-center">
                <img src={logo} alt="" className='object-cover w-1/2 rounded-full  shadow-md shadow-black'/>
            </div>
          </div>

          <div id='problem' className='bg-blue-900 flex justify-center'>
            <div className='w-full md:w-1/2 p-4 space-y-5 text-white'>
              <h2 className='text-center font-semibold text-3xl'>¡<span className='text-orange-500'>Eliminando</span> Obstáculos, <span className='text-green-500'>Creando</span> Experiencias Inigualables!</h2>
              <p className='text-center text-lg font-thin'>En TechnoMasters, nos enfrentamos valientemente a los desafíos del transporte urbano. La falta de información en tiempo real y las deficiencias en el control de acceso no solo son problemas; son oportunidades para innovar. <span className='font-bold'>¡Descubre cómo estamos dando forma al futuro del transporte!</span> </p>
              <div className='flex justify-center'>
                <a href="#solution" className='p-2 font-semibold border border-orange-500 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-400'>Conocer Más</a>
              </div>
            </div>
          </div>

          <div id='team-introduction' className='h-80 md:h-40 w-full bg-fixed'>
            <div className='bg-black/70 h-full w-full p-4 flex flex-col space-y-5 justify-center items-center flex-wrap gap-5'>
              <h3 className='text-2xl font-semibold text-white text-center'>¿Quieres conocer al equipo detrás de esta tecnologia?</h3>
              <div>
               <a href="#team" className='border rounded-md bg-teal-500/50 p-2 text-white hover:font-bold hover:bg-teal-500 hover:shadow-xl hover:shadow-teal-200'>TechnoMasters</a>
              </div>
            </div>
          </div>
      </div>
     
    );
  
  }
  
  export default Introduction;
  