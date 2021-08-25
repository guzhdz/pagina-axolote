import React from 'react'
import Card from './card.jsx'

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            services : [{
                service : 'Diseño web',
                description : 'CREAMOS TU PÁGINA WEB DE PIES A CABEZA, TUS IDEAS LAS HAREMOS REALIDAD',
                link : 'Servicios/diseño_web',
                number : 1,
                text : 'right',
                img : 'left',
                id : 0
            },
            {
                service : 'APLICACIONES MÓVILES',
                description : 'CREAMOS TU APLICACIÓN MÓVIL PERSONALIZADA, PARA CUALQUIER SISTEMA OPERATIVO',
                link : 'Servicios/aplicaciones_moviles',
                number : 2,
                text : 'left',
                img : 'right',
                id : 1
            },
            {
                service : 'SISTEMAS PERSONALIZADOS PARA EMPRESAS',
                description : 'DESDE SISTEMAS DE ASISTENCIA DE EMPLEADOS, HASTA PROGRAMAS QUE CALCULEN LA NÓMINA GENERAL, GASTOS, INGRESOS Y TODO LO QUE TE IMAGINES',
                link : 'Servicios/sistemas_empresas',
                number : 3,
                text : 'right',
                img : 'left',
                id : 2
            },
            {
                service : 'FOTOGRAFÍA',
                description : 'OFRECEMOS EL SERVICIO DE FOTOGRAFÍA DE TUS PRODUCTOS,YA SEA PARA USARLOS EN PÁGINAS WEB, CARTELES, LONAS, LO QUE TE PUEDAS IMAGINAR',
                link : 'Servicios/fotografia',
                number : 4,
                text : 'left',
                img : 'right',
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