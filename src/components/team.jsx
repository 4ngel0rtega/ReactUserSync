import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

import img8 from '../assets/images/img-8.jpg'
import img9 from '../assets/images/img-9.jpg'
import img10 from '../assets/images/img-10.jpg'

function Team() {
    return (
        <div>
            <div id="team" className="bg-gray-900 p-3 flex justify-center flex-col relative">
                <div className="z-10 text-white py-3">
                    <h2 className="text-center text-xl font-semibold">Equipo TechnoMasters</h2>
                    <p className="text-center font-thin">TechnoMasters es la unión de tres programadores universitarios altamente capacitados y apasionados por la innovación tecnológica</p>
                    <p></p>
                </div>
                <div className="z-10 flex flex-wrap md:flex-nowrap gap-5 justify-evenly">
                <Card className="text-white shadow-lg hover:shadow-cyan-500 border border-cyan-500 bg-cyan-950/20 py-4 hover:scale-105 hover:text-cyan-400">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-white uppercase font-bold">Carlos</p>
                        <small className="">FullStack</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={img9}
                        width={270}
                        />
                    </CardBody>
                </Card>

                <Card className="py-4 text-white shadow-lg border border-purple-500 bg-purple-950/40 hover:scale-105 hover:text-pink-400 hover:shadow-purple-500">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
                        <p className="text-white uppercase font-bold">Angel</p>
                        <small className="">FullStack & IoT</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={img8}
                        width={270}
                        />
                    </CardBody>
                </Card>

                <Card className="py-4 text-white shadow-lg border border-yellow-500 bg-yellow-950/40 hover:scale-105 hover:text-yellow-400 hover:shadow-yellow-300">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="uppercase font-bold text-white">Vanessa</p>
                        <small className="">FullStack</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={img10}
                        width={270}
                        />
                    </CardBody>
                </Card>
                </div>

                

            </div>
        </div>
    );
}

export default Team;