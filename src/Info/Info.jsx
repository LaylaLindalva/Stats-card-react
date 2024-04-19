import './Info.css'

const Info = ({subTitulo, subTexto}) => {
    return(
        <>
            <h1>{subTitulo}</h1>
            <p>{subTexto}</p>
        </>
    )
}

export default Info;