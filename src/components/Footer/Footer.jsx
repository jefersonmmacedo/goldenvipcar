import "./footer.css";
import logo from '../../assets/images/goldenvipcar.png';
import {AiFillAndroid, AiFillApple} from 'react-icons/ai'


function Footer() {

    const date = new Date().getFullYear();
    return (
        <div className="Footer">
                <div className="blocks">
                        <div className="block">
                            <img src={logo} alt="" />
                        </div>
                        <div className="block">
                            <p><b>GOLDEN VIP CAR</b></p>
                                <h5>Termos de uso</h5>
                                <h5>Sobre nós</h5>
                                <h5>Mídia e Imh5rensa</h5>
                                <h5>Fale conosco</h5>
                        </div>
                        <div className="block">
                            <p><b>SITE</b></p>
                                <h5>Sócios</h5>
                                <h5>Passageiros</h5>
                                <h5>Motorista</h5>
                        </div>
                        <div className="block">
                            <p><b>CENTRAL DE AJUDA</b></p>
                            <h5>Faq</h5>
                            <br />
                            <p><b>DISPONÍVEL PARA DOWNLOAD:</b></p>
                            <div className="icons">
                                <div className="icon">
                                <h5>Passageiro</h5>
                                <div className="logos">
                                <h3><AiFillAndroid /></h3>       
                                <h3><AiFillApple /></h3>       
                                </div>
                                </div>
                                <div className="icon">
                                <h5>Motorista</h5>
                                <div className="logos">
                                <h3><AiFillAndroid /></h3>             
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <p><b>ATENDIMENTO</b></p>
                            <h5><b>Atendimento a Motoristas e passageiros:</b></h5>
                            <h5>+55 22 3031-3417</h5>

                                <h5><b>Cotações e Suporte a Sócios:</b></h5>
                                <h5>+55 22 3031-3417</h5>
                                <h5>atendimento@goldenvipcar.com</h5>
                        </div>
                </div>
                <div className="copy">
                    <h5>Golden Vip Car {date}. Todos os direitos reservados</h5>
                    <h5>Desenvolvido e mantido por: <a href="https://www.codingit.com.br/" target="_Blank">Coding It</a></h5>
                </div>
        </div>
    )
}

export {Footer}