import "./passenger.css";
import Navbar from "../../components/Nav/Navbar";
import {IoChatbubblesOutline, IoPulseOutline, IoShieldCheckmarkOutline} from 'react-icons/io5'
import { Tutorial } from "../../components/Tutorial/Tutorial";
import { Footer } from "../../components/Footer/Footer";
import {AiFillAndroid, AiFillApple} from 'react-icons/ai';

function Passenger() {
    return (
        <div className="Passenger">
            <Navbar />
            <div className="top">
                <div className="text">
                    <h2>Mais segurança e as</h2>
                    <h1>Menores Taxas</h1>
                    <h4>Baixe o nosso app e concorra a prêmios incríveis 😉</h4>
                    <h4>Disponível para Android e IOS</h4>
                    <div className="buttons">
                    <button><AiFillAndroid />Android</button>
                    <button><AiFillApple />IOS</button>
                    </div>
                </div>
            </div>
            <div className="infos">
                <h1>Junte-se aos milhares de usuários Golden Vip Car</h1>
                <div className="itens">
                <div className="item">
                    <h1><IoChatbubblesOutline /></h1>
                    <h2>Bom atendimento</h2>
                    <h4>Temos uma central com atendentes especializados para garantir uma melhor agilidade no atendimento.</h4>
                </div>
                <div className="item">
                    <h1><IoPulseOutline /></h1>
                    <h2>Preço Justo</h2>
                    <h4>Taxa fixa de R$1,00 por corrida finalizada. independente da quilometragem total do trajeto e do tempo de corrida.</h4>
                </div>
                <div className="item">
                    <h1><IoShieldCheckmarkOutline /></h1>
                    <h2>Segurança</h2>
                    <h4>nosso app conta com um seguro que protege você em todas as suas corridas. </h4>
                </div>
                </div>
            </div>

            <Tutorial />
            <Footer />
        </div>
    )
}

export { Passenger}