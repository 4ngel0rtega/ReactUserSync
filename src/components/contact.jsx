import { useRef } from "react";
import { Input, Textarea } from "@nextui-org/react";
import emailjs from '@emailjs/browser';

import img11 from '../assets/images/img-11.jpg'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tq629zr', 'template_1la1ijh', form.current, 'CzgBavZ0e-hyLxiqd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <div id="contact" className="bg-blue-800 p-3">
        <div className="bg-blue-900 border-small border-blue-500 rounded p-2 flex flex-col justify-center gap-5">
          <div className="flex flex-col items-center gap-5">
            <h3 className="text-white font-bold text-2xl text-center">¡Conéctate con la Innovación en Movilidad!</h3>
            <p className="text-white font-thin text-xl text-center">¿Tienes alguna <span className="font-semibold">sugerencia</span> o quieres reportar algun <span className="font-semibold">problema</span>? No dudes en contactarnos</p>
            <div className="w-3/4 flex flex-col gap-5 md:flex-row md:gap-0">
              <form ref={form} onSubmit={sendEmail} className="flex w-full flex-wrap md:flex-col  md:w-1/2 gap-4 text-black">
                <Input isRequired type="Text" label="Nombre" color="white" size="sm" labelPlacement="outside" name="user_name"/>
                <Input isRequired type="Email" label="Email" color="white" size="sm" labelPlacement="outside" name="user_email"/>
                <Input isRequired type="Text" label="Teléfono" color="white" size="sm" labelPlacement="outside" name="user_phone"/>
                <Textarea
                  isRequired
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Escribe tu comentario"
                  className="w-full"
                  size="sm"
                  color="white"
                  maxRows={4}
                  name="message"
                />
                <div className="flex justify-center items-center w-full">
                  <button type="submit" className=" border border-lime-500 px-5 py-2 text-white font-semibold hover:bg-lime-500">Enviar</button>
                </div>
              </form>
              <div className="flex justify-center md:w-1/2">
                <img src={img11} alt="" className="rounded w-4/5 object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Contact;
