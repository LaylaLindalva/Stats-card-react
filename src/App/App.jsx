import './App.css'
import Img from "../../images/image-header-desktop.jpg"
import Titulo from "../Titulo/Titulo"
import Info from "../Info/Info"
import Texto from "../Texto/Texto"

const App = () => {
    return(
        <section>
            <article className='principal'>
            <Titulo titulo="Get insights that help your business grow."/>
            <Texto texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsum reiciendis quia illum? A ipsam nostrum perferendis totam."/>
            <div className='info-principal'>
            <div className='info-1'>
            <Info subTitulo="10k+" subTexto="COMPANES"/>
            </div>
            <div className='info-2'>
            <Info subTitulo="314" subTexto="TEMPLATES"/>
            </div>
            <div className='info-3'>
            <Info subTitulo="12M+" subTexto="QUERIES"/>
            </div>
            </div>
            </article>
            <article>
            <img className="img" src={Img} alt="" />
            </article>
            </section>
    )
}

export default App;