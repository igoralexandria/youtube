import { Container, MenuItem, ButtonIcon, Separator } from "./styles";
import Shorts from '../../assets/YouTube_Shorts.png';
import Home from '../../assets/home.png';
import Inscricoes from '../../assets/incricoes.png';
import Biblioteca from '../../assets/biblioteca_videos.png';
import YourChannel from '../../assets/user.png';
import Historico from '../../assets/history.png';
import YourVideos from '../../assets/yourvideo.png';
import ViewAfter from '../../assets/viewafter.png';
import Seta from '../../assets/arrowlow.png';
import EmAlta from '../../assets/fire.png';
import Shopping from '../../assets/shopping.png';
import Music from '../../assets/music.png';
import Filmes from '../../assets/movies.png';
import AoVivo from '../../assets/transmission.png';
import Jogos from '../../assets/jogos.png'

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

            {<Separator />}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <span>Você</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={YourChannel} />
                    <span>Seu canal</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Historico} />
                    <span>Histórico</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={YourVideos} />
                    <span>Seus Vídeos</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={ViewAfter} />
                    <span>Assistir mais tarde</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Seta} />
                    <span>Mostrar mais</span>
                </MenuItem>                
            ))}

            {<Separator />}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>                    
                    <span>Inscrições</span>
                </MenuItem>                
            ))}

            {<Separator />}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>                    
                    <span>Explorar</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={EmAlta} />
                    <span>Em alta</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Shopping} />
                    <span>Shopping</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Music} />
                    <span>Música</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Filmes} />
                    <span>Filmes</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={AoVivo} />
                    <span>Ao vivo</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Jogos} />
                    <span>Jogos</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Biblioteca} />
                    <span>Notícias</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Biblioteca} />
                    <span>Esportes</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Biblioteca} />
                    <span>Aprender</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Biblioteca} />
                    <span>Podcasts</span>
                </MenuItem>                
            ))}

            {<Separator />}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>                    
                    <span>Mais do YouTube</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Biblioteca} />
                    <span>YouTube Premium</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Biblioteca} />
                    <span>YouTube Studio</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Biblioteca} />
                    <span>YouTube Music</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Biblioteca} />
                    <span>YouTube Kids</span>
                </MenuItem>                
            ))}

            {<Separator />}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Biblioteca} />
                    <span>Configurações</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Biblioteca} />
                    <span>Histórico de denún...</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Biblioteca} />
                    <span>Ajuda</span>
                </MenuItem>                
            ))}

            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={Biblioteca} />
                    <span>Enviar feedback</span>
                </MenuItem>                
            ))}

            {<Separator />}

            <p>© 2023 Google LLC</p>

        </Container>
    )
}

export default Menu;