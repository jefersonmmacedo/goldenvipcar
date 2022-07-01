import "./premier.css";
import video from '../../assets/videos/corridapremiada.mp4'
import { Footer } from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/Navbar";

function Premier() {
    return (
        <div className="Premier">
             <Navbar />
             <div className="top">
                <div className="text">
                <h1>Corrida Premiada 🤑</h1>
                </div>
                </div>
                {/* <h1>Corrida Premiada</h1> */}
            <iframe width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


            <div className="questions">
                <div className="question">
                    <div className="question-top">
                    <h2>Como participar do sorteio ?</h2>
                    </div>
                    <div className="text">
                    <p>Em cada corrida que você fizer (motorista ou passageiro) você concorre a um pix de R$1.000,00, quanto mais corridas fizer mais chances de ganhar! </p> 
                    </div>
                </div>
                <div className="question">
                    <div className="question-top">
                        <h2>Quando ocorrerá o primeiro sorteio?</h2>
                    </div>
                    <div className="text">
                        <p>No dia 30 de maio, divulgaremos o resultado no nosso Instagram @goldenvipcar , siga para acompanhar as novidades!</p>
                    </div>
                </div>
                <div className="question">
                    <div className="question-top">
                        <h2>O pix será dividido entre motorista e passageiro?</h2>
                    </div>
                    <div className="text">
                        <p>Não! Sortearemos a corrida, então o passageiro e o motorista  que fizeram acontecer aquela corrida serão os ganhadores. No caso R$1.000,00 para cada um dos sorteados (passageiro e motorista).</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export { Premier}