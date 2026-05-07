import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})

export class Contacto {

  mensajeEnviado: boolean = false;

  // =========================
  // WHATSAPP
  // =========================

  enviarMensaje(form: NgForm) {

    

    const nombre = form.value.nombre;
    const correo = form.value.correo;
    const mensaje = form.value.mensaje;

   const texto = ` Hola Creaciones Meli 

 Nombre: ${nombre}

 Correo: ${correo}

 Mensaje:
${mensaje}`;

    // CAMBIA ESTE NÚMERO POR EL TUYO
    const url = `https://wa.me/573023724511?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');

    this.enviarCorreo(form);

    this.mensajeEnviado = true;

    setTimeout(() => {

      this.mensajeEnviado = false;

    }, 4000);

  }

  // =========================
  // CORREO
  // =========================

  enviarCorreo(form: NgForm) {

    emailjs.send(

      // REEMPLAZA ESTOS DATOS
      'service_v4g315u', 
      'template_eqggtap',

      {
        nombre: form.value.nombre,
        correo: form.value.correo,
        mensaje: form.value.mensaje
      },

      'sTeAY1pmQ-WHl2siQ'

    )
    .then(() => {

      this.mensajeEnviado = true;

      form.resetForm();

      setTimeout(() => {

        this.mensajeEnviado = false;

      }, 4000);

    })

    .catch((error) => {

      console.log('Error:', error);

    });

  }

}