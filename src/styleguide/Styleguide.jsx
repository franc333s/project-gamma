import Nav from "./Nav"
import Button from "../components/buttons/Button"
import './Styleguide.scss'


export default function Styleguide() {
    return <>
        <Nav />

        <div className="main--padding">
            <h1 className="topbar-padding">Guía de <strong>estilos</strong></h1>
            <p className="main--p">Marina Francés</p>
        </div>

        <div className="main--padding" id="colors">
            <h2>Colors</h2>
        </div>

        <div className="main--padding" id="fonts">
            <h2>Fonts</h2>
        </div>


        <div className="sectionHeaders main--padding" id="headers">
            <h2>Encabezados</h2>
            <h1>Hola soy un encabezado 1</h1>
            <h2>Hola soy un encabezado 2</h2>
            <h3>Hola soy un encabezado 3</h3>
            <h4>Hola soy un encabezado 4</h4>
            <h5>Hola soy un encabezado 5</h5>
            <h6>Hola soy un encabezado 6</h6>
            <p>Sed auctor consectetur metus eget congue. Etiam lorem enim, dapibus ut luctus eget, molestie sed quam. Praesent eget dolor lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas et iaculis purus. Sed eget porttitor leo, vel porta arcu. Vestibulum dignissim suscipit sem, ac finibus metus viverra at.</p>
            <p>Etiam lorem enim, dapibus ut luctus eget, molestie sed quam. Praesent eget dolor lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas et iaculis purus. Sed eget porttitor leo, vel porta arcu. Vestibulum dignissim suscipit sem, ac finibus metus viverra at.</p>
        </div>


        <div className="main--padding" id="buttons">
            <h2>Botones</h2>
            <Button/>
        </div>

        <div className="main--padding" id="other">
            <h2>Otros</h2>
        </div>

        

    </>

}

