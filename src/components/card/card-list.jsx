import React from 'react'
import Card from './card.jsx'
import app from './images/aplicaciones_moviles.jpg'
import fotografia from './images/fotografia.jpg'
import web from './images/web.jpg'
import sistemas from './images/sistemas.jpg'

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            services : [{
                service : 'DISEÑO WEB',
                description : 'CREAMOS TU PÁGINA WEB DE PIES A CABEZA, TUS IDEAS LAS HAREMOS REALIDAD',
                link : 'Servicios/diseño_web',
                number : 0,
                backimg : web,
                id : 0,
                active : 'active'
            },
            {
                service : 'APLICACIONES MÓVILES',
                description : 'CREAMOS TU APLICACIÓN MÓVIL PERSONALIZADA, PARA CUALQUIER SISTEMA OPERATIVO',
                link : 'Servicios/aplicaciones_moviles',
                number : 1,
                backimg : app,
                id : 1
            },
            {
                service : 'SISTEMAS PERSONALIZADOS PARA EMPRESAS',
                description : 'DESDE SISTEMAS DE ASISTENCIA DE EMPLEADOS, HASTA PROGRAMAS QUE CALCULEN LA NÓMINA GENERAL, GASTOS, INGRESOS Y TODO LO QUE TE IMAGINES',
                link : 'Servicios/sistemas_empresas',
                number : 2,
                backimg : sistemas,
                id : 2
            },
            {
                service : 'FOTOGRAFÍA',
                description : 'OFRECEMOS EL SERVICIO DE FOTOGRAFÍA DE TUS PRODUCTOS, YA SEA PARA USARLOS EN PÁGINAS WEB, CARTELES, LONAS O LO QUE TE PUEDAS IMAGINAR',
                link : 'Servicios/fotografia',
                number : 3,
                backimg : fotografia,
                id : 3
            }]
        }
    }
    render() {
        return (    
            this.state.services.map(({ id, ...servicesprops }) => (
                    <Card key={ id } { ...servicesprops } />
            ))
        )
    }
}

export default List;