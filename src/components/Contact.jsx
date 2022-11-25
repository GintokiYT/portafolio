import { useEffect, useState } from 'react';
import { Container } from '../styles/Components.elements';
import { ContactTitle, ContactForm, FormControl } from '../styles/Contact.elements';
import Swal from 'sweetalert2';
 
const Contact = () => {

  const [ message, setMessage ] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(message.nombre.length === 0) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese su nombre',
      })
    }

    if(message.correo.length === 0) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese su email',
      })
    }

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(!emailRegex.test(message.correo)) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese un correo valido',
      }) 
    }

    if(message.mensaje.length === 0 ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese el mensaje',
      })
    } 
    else {
      fetch("https://formsubmit.co/ajax/devrenatonavarro@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          nombre: `${message.nombre}`,
          correo: `${message.correo}`,
          mensaje: `${message.mensaje}`,
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Correo enviado',
        showConfirmButton: false,
        timer: 1500
      })

      setMessage({
        nombre: '',
        correo: '',
        mensaje: ''
      })
    }
  }


  useEffect(() => {
    const labelNombre = document.querySelector(".inputNombre label");
    const inputNombre = document.querySelector(".inputNombre input");

    inputNombre.addEventListener("focus", () => {
      labelNombre.classList.add("active-input");
      labelNombre.style.color = "#1597e0";
    })

    inputNombre.addEventListener("blur", () => {
      if(inputNombre.value.length === 0) {
        labelNombre.classList.remove("active-input")
      } 
      labelNombre.style.color = "#9e9e9e"
    })

    const labelEmail = document.querySelector(".inputEmail label");
    const inputEmail = document.querySelector(".inputEmail input");

    inputEmail.addEventListener("focus", () => {
      labelEmail.classList.add("active-input");
      labelEmail.style.color = "#1597e0";
    })

    inputEmail.addEventListener("blur", () => {
      if(inputEmail.value.length === 0) {
        labelEmail.classList.remove("active-input")
      } 
      labelEmail.style.color = "#9e9e9e"
    })

  }, []);

  return (  
    <Container>
      <ContactTitle>Contáctame</ContactTitle>
      <ContactForm 
        onSubmit={handleSubmit}
        >
        <input type="hidden" name="_template" value="table"></input>
        <FormControl 
          className='inputNombre'
          style={{
            margin: '10px 0'
          }}
        >
          <label >Nombre</label>
          <input 
            type="text" 
            name="nombre" 
            onChange={handleChange}
            value={message.nombre}
          />
        </FormControl>
        <FormControl 
          className='inputEmail'
          style={{
            margin: '10px 0'
          }}
        >
          <label >Email</label>
          <input 
            type="email"
            name='correo'
            onChange={handleChange}
            value={message.correo}
          />
        </FormControl>
        <textarea 
          name="mensaje" 
          cols="30" 
          rows="10" 
          onChange={handleChange}
          value={message.mensaje}
        />
        <button className='submit'>Enviar</button>
      </ContactForm>
    </Container>
  );
}
 
export default Contact;