import { Container, MenuItem, ButtonIcon } from "./styles";
import Shorts from '../../assets/YouTube_Shorts.png';
import Home from '../../assets/home.png';
import Inscricoes from '../../assets/incricoes.png';
import Biblioteca from '../../assets/biblioteca_videos.png';

const items = [0]

interface IProps {
    openMenu: boolean;
}

function Menu({ openMenu }: IProps){
    return (
        <Container openMenu={openMenu}>

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Home} />
                    <span>Início</span>
                </MenuItem>
                
            ))}
            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Shorts} />
                    <span>Shorts</span>
                </MenuItem>
                
            ))}
            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Inscricoes} />
                    <span>Inscrições</span>
                </MenuItem>
                
            ))}

            {/* <Separation /> */}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Biblioteca} />
                    <span>Biblioteca</span>
                </MenuItem>                
            ))}

        </Container>
    )
}

export default Menu;