import {Card, CardHeader, CardFooter, Image} from "@nextui-org/react";

import img4 from '../assets/images/img-4.jpg'
import img5 from '../assets/images/img-5.jpg'
import img6 from '../assets/images/img-6.jpg'
import img7 from '../assets/images/img-7.jpg'

function Solution() {

    return (
        <div>
            <div id="solution" className="bg-blue-800 p-3 space-y-5">
                <h2 className="text-white text-center font-bold text-3xl">Tecnología Revolucionaria</h2>
                <p className="text-white text-center font-thin">En nuestra búsqueda para resolver los desafíos del transporte urbano, no escatimamos en tecnologías avanzadas. Te presentamos las armas de nuestra revolución:</p>
            </div>

            <div className="bg-blue-800 p-5 flex flex-wrap md:flex-nowrap gap-5">
            
                <Card isFooterBlurred className="w-full md:w-1/4 h-[300px] col-span-12 sm:col-span-5">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <h4 className="text-white font-medium text-2xl">React Native</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover hover:scale-150"
                        src={img4}
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                        <p className="text-black text-tiny">Desarrollo Móvil</p>
                        </div>
                        <a href="https://reactnative.dev/" className=" bg-green-500 p-2 rounded text-tiny text-white hover:font-semibold hover:bg-green-600" radius="full" size="sm">
                            Ver Más
                        </a>
                    </CardFooter>
                </Card>

                <Card isFooterBlurred className="w-full md:w-1/4 h-[300px] col-span-12 sm:col-span-5">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <h4 className="text-white font-medium text-2xl">Firebase</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover hover:scale-150"
                        src={img5}
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                        <p className="text-black text-tiny">Base de Datos NoSQL</p>
                        </div>
                        <a href="https://firebase.google.com/?hl=es" className=" bg-green-500 p-2 rounded text-tiny text-white hover:font-semibold hover:bg-green-600" radius="full" size="sm">
                            Ver Más
                        </a>
                    </CardFooter>
                </Card>

                <Card isFooterBlurred className="w-full md:w-1/4 h-[300px] col-span-12 sm:col-span-5">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <h4 className="text-white font-medium text-2xl">ESP32</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover hover:scale-150"
                        src={img6}
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                        <p className="text-black text-tiny">Hardware IoT</p>
                        </div>
                        <a href="https://www.espressif.com/en/products/socs/esp32" className=" bg-green-500 p-2 rounded text-tiny text-white hover:font-semibold hover:bg-green-600" radius="full" size="sm">
                            Ver Más
                        </a>
                    </CardFooter>
                </Card>

                <Card isFooterBlurred className="w-full md:w-1/4 h-[300px] col-span-12 sm:col-span-5">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <h4 className="text-white font-medium text-2xl">React</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover hover:scale-150"
                        src={img7}
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                        <p className="text-black text-tiny">Desarrollo Web</p>
                        </div>
                        <a href="https://es.react.dev/" className=" bg-green-500 p-2 rounded text-tiny text-white hover:font-semibold hover:bg-green-600" radius="full" size="sm">
                            Ver Más
                        </a>
                    </CardFooter>
                </Card>

            </div>
        </div>
       
    );
}

export default Solution;
