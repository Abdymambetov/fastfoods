import {SiBurgerking} from 'react-icons/si'
import Link from 'next/link';
const Header = () => {
    return(
        <header>
            <div>
                <SiBurgerking/>
            </div>
            <nav>
                <Link href='/'>
                    <p>Домой</p>
                </Link>
                <Link href='/about'>
                    <p >О нас</p>
                </Link>
                <Link href='/reviews'>
                    <p>Отзывы</p>
                </Link>
                <Link href='/burgers'>
                    <p >Бургер</p>
                </Link>
            </nav>
        </header>
    )
}

export default Header;