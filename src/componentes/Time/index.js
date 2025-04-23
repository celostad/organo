import './Time.css';

const Time = (props) => {

    const colorSecundaria = { backgroundColor: props.corSecundaria }

    return(
        <section className='time' style={colorSecundaria}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}
export default Time