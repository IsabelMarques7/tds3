import style from './Menu.module.css'

export default function Menu() {
    return(
        <div className={style['wrap-menu']}>
             <p>
                <a href={'/'}>Home</a>
            </p>
            <p>
                <a href="">Calculos</a>
            </p>
            <p>
                <a href={'/tec'}>Tecnologies</a>
            </p>
            <p>
                <a href={'/Contact'}>Contato</a>
            </p>
        </div>
    )
}