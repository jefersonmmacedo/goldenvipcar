import './tutorialDriver.css';
import iPhoneHand1 from '../../assets/images/Motorista/1.png';
import iPhoneHand2 from '../../assets/images/Motorista/2.png';
import iPhoneHand3 from '../../assets/images/Motorista/3.png';
import iPhoneHand4 from '../../assets/images/Motorista/4.png';
import iPhoneHand5 from '../../assets/images/Motorista/5.png';
import iPhoneHand6 from '../../assets/images/Motorista/6.png';

import { useState } from 'react';

function TutorialDriver() {
    //const [time, setTime] = useState("1")

    setInterval(function () { 
        alternateStyleStep("1")
     }, 5000);

     let time = "1"
     function alternateStyleStep(step) {
        time === "1" ? time = "2" : 
        time === "2" ? time = "3" :
        time === "3" ? time = "4" :
        time === "4" ? time = "5" :
        time === "5" ? time = "1" :
        time = "1"
     }

    return (
        <div className="TutorialDriver">
            <div className="steps">
            <h1>É MUITO FÁCIL</h1>
            <h1><b>UTILIZAR O NOSSO APP:</b></h1>
            <br />
            <br />
            <div className={time === "1" ? 'stepsUnicSelect' : 'stepsUnic'}>
                <div className="number">
                    <h3>1</h3>
                </div>
                <div className="text">
                    <h3>Baixe o App Golden Vip Car</h3>
                    <h5>Disponível para Android e IOS</h5>
                </div>
            </div>
            <div className={time === "2" ? 'stepsUnicSelect' : 'stepsUnic'}>
                <div className="number">
                    <h3>2</h3>
                </div>
                <div className="text">
                    <h3>Faça login</h3>
                    <h5>Caso já possua uma conta</h5>
                </div>
            </div>
            <div className={time === "3" ? 'stepsUnicSelect' : 'stepsUnic'}>
                <div className="number">
                    <h3>3</h3>
                </div>
                <div className="text">
                    <h3>Não tem conta? Faça seu cadastro</h3>
                    <h5>É fácil e rápido.</h5>
                </div>
            </div>
            <div className={time === "4" ? 'stepsUnicSelect' : 'stepsUnic'}>
                <div className="number">
                    <h3>4</h3>
                </div>
                <div className="text">
                    <h3>Adicione sua foto</h3>
                    <h5>Esta passo é importante para sua segurança e do seu motorista.</h5>
                </div>
            </div>
            <div className={time === "5" ? 'stepsUnicSelect' : 'stepsUnic'}>
                <div className="number">
                    <h3>5</h3>
                </div>
                <div className="text">
                    <h3>Solicite sua corrida</h3>
                    <h5>Adicione o trajeto desejado</h5>
                </div>
            </div>
            </div>
            <div className="image">
                {time === "1" ?
                <img src={iPhoneHand1} alt="Iphone Hand" />
                : time === "2" ?
                <img src={iPhoneHand2} alt="Iphone Hand" />
                : time === "3" ?
                <img src={iPhoneHand3} alt="Iphone Hand" />
                : time === "4" ?
                <img src={iPhoneHand4} alt="Iphone Hand" />
                : time === "5" ?
                <img src={iPhoneHand5} alt="Iphone Hand" />
                :""}
            </div>
        </div>
    )
}

export {TutorialDriver}
