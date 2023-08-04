import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/AVATAR0.jpg'
import AVTR2 from '../../assets/AVATAR01.jpg'
import AVTR3 from '../../assets/AVATAR1.jpg'
import AVTR4 from '../../assets/AVATAR2.jpg'
import AVTR5 from '../../assets/AVATAR3.jpg'
import AVTR6 from '../../assets/AVATAR4.jpg'
import AVTR7 from '../../assets/AVATAR5.jpg'
import AVTR8 from '../../assets/AVATAR6.jpg'
import AVTR9 from '../../assets/AVATAR7.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

const data = [
  {
    avatar: AVTR1,
    name: 'Juan Sebastian Gallon',
    text: 'Andrés es un verdadero líder de equipo. Cuando trabajamos juntos, siempre se asegura de que todos estemos en la misma página y distribuye las responsabilidades de manera justa. Es un compañero confiable.'
  },
  {
    avatar: AVTR2,
    name: 'Lina Maria Arnaches',
    text: 'Andrés es un trabajador excepcional. Puede enfrentar tareas difíciles en solitario y siempre logra resultados asombrosos. Es impresionante su capacidad para resolver problemas de manera autónoma.'
  },
  {
    avatar: AVTR3,
    name: 'Victor Manuel Lozano',
    text: 'Lo que más admiro de Andrés es su iniciativa. Siempre está buscando oportunidades para mejorar los procesos y aumentar la eficiencia, ya sea trabajando solo o colaborando con otros. Es un gran ejemplo a seguir.'
  },
  {
    avatar: AVTR4,
    name: 'Miguel Negrete Nuñez',
    text: 'Andrés es un excelente mentor y compañero. Cuando trabajamos juntos en un proyecto, siempre está dispuesto a compartir su conocimiento y brindar orientación a aquellos que necesitan ayuda. Es un verdadero activo para el crecimiento profesional del equipo.'
  },
  {
    avatar: AVTR5,
    name: 'Luis de las Salas',
    text: 'Andrés es un comunicador excepcional. Tiene la habilidad de explicar conceptos complejos de manera clara y concisa, lo que facilita la colaboración y mejora la eficiencia del equipo, y tambien trabaja muy duro cuando le toca solo.'
  },
  {
    avatar: AVTR6,
    name: 'Geraldin Parody',
    text: 'Andrés tiene una autoconfianza impresionante que le permite enfrentar desafíos de manera independiente. Pero lo que más valoro de él es que también sabe cómo escuchar y trabajar en equipo, lo que lo convierte en un colaborador excepcional.'
  },
  {
    avatar: AVTR7,
    name: 'Yudys Alexandra Lopez',
    text: 'Lo que más me impresiona de Andrés es su capacidad para mantener la calma incluso en las situaciones más estresantes. Su actitud tranquila y positiva es contagiosa, y siempre encontramos soluciones cuando él está involucrado.'
  },
  {
    avatar: AVTR8,
    name: 'Bryan Alexander Varela',
    text: 'Andrés es una persona sumamente confiable. Cuando trabaja en un proyecto, siempre puedo estar seguro de que cumplirá con su parte y entregará resultados de alta calidad. Su ética de trabajo es ejemplar.'
  },
  {
    avatar: AVTR9,
    name: 'Alexander Henry Varela',
    text: 'Andrés es un creativo excepcional. Su mente siempre está generando nuevas ideas y enfoques innovadores para resolver problemas. Es genial contar con alguien como él en el equipo para encontrar soluciones frescas.'
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <div className="container title__container">
        <h3 className='text-light'>Review from clients</h3>
        <h1>Testimonials</h1>
      </div>
      <Swiper className="container testimonials__container"
        effect={'cards'}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCards]}
      >
        {
          data.map(({ avatar, name, text }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h3 className='client__name'>{name}</h3>
                <small className='client__review'>{text}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default testimonials