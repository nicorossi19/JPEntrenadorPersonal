import { useEffect, useState } from "react"
import loadingGif from '../../assets/loadingGif.gif'
import Item from "./Item"
import item1 from '../../assets/item1.jpg'
import item2 from '../../assets/item2.jpg'
import item3 from '../../assets/item3.jpg'
import item4 from '../../assets/item4.jpg'
import item5 from '../../assets/item5.jpg'
import item6 from '../../assets/item6.jpg'
import item7 from '../../assets/item7.jpg'

const ItemList = () => {

  const productos = [{
      id: '1',
      title: 'PLAN MENSUAL 100% PERSONALIZADO - PREMIUM',
      description: 'Planificá según tus objetivos y potenciá tus entrenamientos',
      price: '$3.300',
      pictureUrl: item1
    },
    {
      id: '2',
      title: 'PLAN TRIMESTRAL 100% PERSONALIZADO - PREMIUM',
      description: 'Plan de tres meses con entrenamiento progresivo',
      price: '$9.200',
      pictureUrl: item2
    },
    {
      id: '3',
      title: 'GUIA ENTRENAMIENTO HIIT PARA PRINCIPIANTES',
      description: 'Guia sobre sobre qué son y cómo aplicar entrenamientos de Intervalo de Alta Intensidad',
      price: '$800',
      pictureUrl: item3
    },
    {
      id: '4',
      title: 'PLAN MENSUAL DE ENTRENAMIENTO - BASIC',
      description: 'Te ayudo a planificarte para realizar tus entrenamientos',
      price: '$3.100',
      pictureUrl: item4
    },
    {
      id: '5',
      title: 'COMBO 2022 - PLAN PREMIUM + GUIA HIIT',
      description: 'Aprovechá esta promo de planificación y entrenamientos de Intervalo de Alta Intensidad',
      price: '$3.500',
      pictureUrl: item5
    },
    {
      id: '6',
      title: 'GUIA ENTRENAMIENTO FUNCIONAL 1 Y 2',
      description: 'Entrená donde quieras y cuando quieras',
      price: '$800',
      pictureUrl: item6
    },
    {
      id: '7',
      title: 'COMBO GUIA HIIT + GUIA ENTRENAMIENTO FUNCIONAL',
      description: 'Guia HIIT + Entrenamiento Funcional, para entrenar donde quieras y cuando quieras',
      price: '$1600',
      pictureUrl: item7
    },
    {
      id: '8',
      title: 'COMBO GUIA HIIT + GUIA ENTRENAMIENTO FUNCIONAL',
      description: 'Guia HIIT + Entrenamiento Funcional, para entrenar donde quieras y cuando quieras',
      price: '$1600',
      pictureUrl: item7
    }
  ];

  const [items, setItems] = useState([])

  useEffect(() => {

    const promesa = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(productos);
        reject();
      }, 500)
    })

    promesa.then(result => {
      setItems(result)
    })
  }, [])

  return(
    <>
      <section className="flex flex-wrap px-10">
        {
          items.length > 0 ? items.map(item => {
            return(
              <Item key={item.id} producto={item} initial='1' stock='5' />
            )
          }) : <img className="mx-auto my-auto mt-80" src={loadingGif} alt='Cargando...'/>
        }
      </section>
    </>
  )}

export default ItemList