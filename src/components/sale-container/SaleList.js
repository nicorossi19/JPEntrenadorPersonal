import { useEffect, useState } from "react";
import Sale from "./Sale";
import loadingGif from '../../assets/loadingGif.gif'
import item1 from '../../assets/item1.jpg'
import item2 from '../../assets/item2.jpg'
import item4 from '../../assets/item4.jpg'
import item6 from '../../assets/item6.jpg'


const SaleList = () => {

    const descuentos = [{
            id: '1',
            title: 'PLAN MENSUAL 100% PERSONALIZADO - PREMIUM',
            subtitle: 'Planificá según tus objetivos y potenciá tus entrenamientos',
            price: '$3.300',
            img: item1
        },
        {
            id: '2',
            title: 'PLAN TRIMESTRAL 100% PERSONALIZADO - PREMIUM',
            subtitle: 'Plan de tres meses con entrenamiento progresivo',
            price: '$9.200',
            img: item2
        },
        {
            id: '4',
            title: 'PLAN MENSUAL DE ENTRENAMIENTO - BASIC',
            subtitle: 'Te ayudo a planificarte para realizar tus entrenamientos',
            price: '$3.100',
            img: item4
        },
        {
            id: '6',
            title: 'GUIA ENTRENAMIENTO FUNCIONAL 1 Y 2',
            subtitle: 'Entrená donde quieras y cuando quieras',
            price: '$800',
            img: item6
        }
    ];

    const [items, setItems] = useState([])

    useEffect(() => {
        
        const promesa = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(descuentos);
                reject();
            }, 500);
        })

        promesa.then(result => {
            setItems(result)
        })
    }, [])
    

    return (
        <>
            <section className="flex flex-wrap px-10">
                {
                    items.length > 0 ? items.map(item => {
                        return(
                            <Sale key={item.id} producto={item} />
                        )
                    }) : <img className="mx-auto my-auto mt-80" src={loadingGif} alt='Cargando...'/>
                }
            </section>
        </>
    )
}
export default SaleList