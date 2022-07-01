import "./passenger.css";
import Navbar from "../../components/Nav/Navbar";
import {IoChatbubblesOutline, IoPulseOutline, IoShieldCheckmarkOutline} from 'react-icons/io5'
import { Tutorial } from "../../components/Tutorial/Tutorial";
import { Footer } from "../../components/Footer/Footer";

function Passenger() {
    return (
        <div className="Passenger">
            <Navbar />
            <div className="top">
                <div className="text">
                    <h2>Alô Motoristas. Taxa Fixa de apenas:</h2>
                    <h1>R$1 Real</h1>
                    <h4>É ISSO MESMO, você motorista paga apenas R$1,00 por corrida realizada. 🤯</h4>
                    <h4>E melhor, aqui na Golden Vip Car os valores são justos, pensando em você! 😉</h4>
                    <h4>Baixe o app e conheça todos os benefícios para você motorista! Vem pro GOLDEN VIP CAR, aqui o VIP é você.✅🚗</h4>

                    <button>QUERO ME CADASTRAR</button>
                </div>
            </div>
            <div className="infos">
                <h1>Junte-se aos mais de 10.000 mil Motoristas</h1>
                <div className="itens">
                <div className="item">
                    <h1><IoChatbubblesOutline /></h1>
                    <h2>Central de Suporte Físico</h2>
                    <h4>Temos uma central com atendentes especializados para garantir uma melhor agilidade no atendimento.</h4>
                </div>
                <div className="item">
                    <h1><IoPulseOutline /></h1>
                    <h2>Tarifas Justas</h2>
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