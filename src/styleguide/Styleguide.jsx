import Nav from "./Nav"
import Button from "../components/buttons/button"
import './Styleguide.scss'


export default function Styleguide() {
    return <>
        <h1 className="topbar-padding">Hola, soy la guía de <strong>estilos</strong></h1>
        <Nav />
        <Button />

        <div className="sectionHeaders">
            <h1>Hola soy un encabezado 1</h1>
            <h2>Hola soy un encabezado 2</h2>
            <h3>Hola soy un encabezado 3</h3>
            <h4>Hola soy un encabezado 4</h4>
            <h5>Hola soy un encabezado 5</h5>
            <h6>Hola soy un encabezado 6</h6>
        </div>

    </>

}

