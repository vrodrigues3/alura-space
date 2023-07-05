import icones from './icones.json'
import { Icone } from './Icones/Icones'

import style from './Menu.module.scss'


export const Menu = () => {
    return (
        <nav className={style.menu}>
            <ul className={style.menu__lista}>
            {icones.map(icone => (<Icone key={icone.id} icone={icone} style={style} />))}
            </ul>
        </nav>
    )
}