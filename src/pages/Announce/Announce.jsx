import "./announce.css";
import Navbar from "../../components/Nav/Navbar";
import { Footer } from "../../components/Footer/Footer";
import {FaMugHot, FaBoxOpen, FaPercentage, FaHandHoldingUsd, FaChalkboardTeacher} from 'react-icons/fa'

function Announce() {
    return (
        <div className="Announce">
                        <Navbar />
                        <div className="top">
                            <div className="text">
                            <h1>Anuncie em nosso App</h1>
                            <h3>Apareça em tempo real para clientes próximos à você, obtenha conversões e aumente seu lucro.</h3>
                            <button>Quero me Cadastrar</button>
                            </div>
                            <div className="animation">
            <iframe src='https://my.spline.design/iphone13copycopy-9603cbaed396af44d5f28aa78ab09fa0/' frameborder='0' width='100%' height='100%'></iframe>
                            </div>
                        </div>
                        <div className="infos">
                                <h1>Como Funciona ?</h1>
                                <div className="list-infos">
                                    <div className="infoUnic">
                                        <h1><FaChalkboardTeacher /></h1>
                                        <p>Você faz o cadastro clicando no botão abaixo e nossa equipe irá entrar em contato com você.</p>
                                    </div>
                                    <div className="infoUnic">
                                        <h1><FaMugHot /></h1>
                                        <p>Pelo preço de um Cafezinho diário a sua empresa estará aos olhares dos milhares clientes e motoristas cadastrados em nosso app.</p>
                                    </div>
                                    <div className="infoUnic">
                                        <h1><FaHandHoldingUsd /></h1>
                                        <p>Será cobrado um valor simbólico mensal para a divulgação do parceiro no app de apenas R$3,33 / diário.</p>
                                    </div>
                                    <div className="infoUnic">
                                        <h1><FaBoxOpen /></h1>
                                        <p>Para ter ainda mais visibilidade, o parceiro pode oferecer algum produto ou serviço para sortearmos na plataforma, fazendo com que sua empresa tenha destaque entre as demais, através dos banners de divulgação.</p>
                                    </div>
                                </div>
                            </div>

            <Footer />
        </div>
    )
}

export {Announce}