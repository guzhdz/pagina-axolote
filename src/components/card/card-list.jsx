import React from 'react'
import Card from './card.jsx'

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            services : [{
                service : 'DISEÑO WEB',
                description : 'CREAMOS TU PÁGINA WEB DE PIES A CABEZA, TUS IDEAS LAS HAREMOS REALIDAD',
                link : 'Servicios/diseño_web',
                number : 0,
                backimg : 'https://image.freepik.com/foto-gratis/desarrollo-sitios-web_53876-95315.jpg',
                id : 0,
                active : 'active'
            },
            {
                service : 'APLICACIONES MÓVILES',
                description : 'CREAMOS TU APLICACIÓN MÓVIL PERSONALIZADA, PARA CUALQUIER SISTEMA OPERATIVO',
                link : 'Servicios/aplicaciones_moviles',
                number : 1,
                backimg : 'https://image.freepik.com/foto-gratis/cerca-manos-mujer-emprendedora-telefonos-inteligentes-transcurso-fecha-limite-empresaria-enviando-mensajes-texto-altas-horas-noche-mientras-trabajaba-proyecto-importante-telefono-inteligente_482257-10261.jpg',
                id : 1
            },
            {
                service : 'SISTEMAS PERSONALIZADOS PARA EMPRESAS',
                description : 'DESDE SISTEMAS DE ASISTENCIA DE EMPLEADOS, HASTA PROGRAMAS QUE CALCULEN LA NÓMINA GENERAL, GASTOS, INGRESOS Y TODO LO QUE TE IMAGINES',
                link : 'Servicios/sistemas_empresas',
                number : 2,
                backimg : 'https://image.freepik.com/foto-gratis/joven-lider-equipo-gran-corporacion-informando-companeros-trabajo-apuntando-al-grafico-reunion-personal-corporativo_482257-4169.jpg',
                id : 2
            },
            {
                service : 'FOTOGRAFÍA',
                description : 'OFRECEMOS EL SERVICIO DE FOTOGRAFÍA DE TUS PRODUCTOS, YA SEA PARA USARLOS EN PÁGINAS WEB, CARTELES, LONAS O LO QUE TE PUEDAS IMAGINAR',
                link : 'Servicios/fotografia',
                number : 3,
                backimg : 'https://image.freepik.com/foto-gratis/fotografo-producto-femenino-joven-estudio_23-2148970230.jpg',
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