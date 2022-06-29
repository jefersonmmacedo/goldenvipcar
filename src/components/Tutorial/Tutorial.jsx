import './tutorial.css';
import iPhoneHand from '../../assets/images/iphoneHand.png';
import { useState } from 'react';

function Tutorial() {
    const [time, setTime] = useState("1")

    setInterval(function () { 
        alternateStyleStep()
     }, 5000);

     function alternateStyleStep() {
        time === "1" ? setTime("2") : 
        time === "2" ? setTime("3") :
        time === "3" ? setTime("4") :
        time === "4" ? setTime("5") :
        time === "5" ? setTime("6") :
        time === "6" ? setTime("1") :
        setTime("1")
     }

    return (
        <div className="Tutorial">
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
                    <h3>Crie seu perfil</h3>
                    <h5>Preencha od dados de cadastro</h5>
                </div>
            </div>
            <div className={time === "3" ? 'stepsUnicSelect' : 'stepsUnic'}>
                <div className="number">
                    <h3>3</h3>
                </div>
                <div className="text">
                    <h3>Defina seu endereço</h3>
                    <h5>Acelere sua solicitação de corridas</h5>
                </div>
            </div>
            <div className={time === "4" ? 'stepsUnicSelect' : 'stepsUnic'}>
                <div className="number">
                    <h3>4</h3>
                </div>
                <div className="text">
                    <h3>Preencha seus opcionais</h3>
                    <h5>Defina forma de pagamento e outras opções</h5>
                </div>
            </div>
            <div className={time === "5" ? 'stepsUnicSelect' : 'stepsUnic'}>
                <div className="number">
                    <h3>5</h3>
                </div>
                <div className="text">
                    <h3>Veja as informações do motorista</h3>
                    <h5>Acompanhe seu trajeto em tempo real</h5>
                </div>
            </div>
            <div className={time === "6" ? 'stepsUnicSelect' : 'stepsUnic'}>
                <div className="number">
                    <h3>6</h3>
                </div>
                <div className="text">
                    <h3>Avalie o motorista</h3>
                    <h5>Caso queira, o adicione em seus favoritos</h5>
                </div>
            </div>



            </div>
            <div className="image">
                <img src={iPhoneHand} alt="Iphone Hand" />
            </div>
        </div>
    )
}

export {Tutorial}
