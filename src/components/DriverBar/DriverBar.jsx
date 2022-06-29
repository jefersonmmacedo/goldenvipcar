import "./driverBar.css";
import appstore from '../../assets/images/appstore.png';
import playstore from '../../assets/images/playstore.png';
import iphone from '../../assets/images/iphone.png';

function DriverBar() {
    return (
        <div className="DriverBar">
            <div className="block1">
                <h1>DESEMPREGADO ?</h1>
                <div className="logos">
                    <img src={appstore} alt="" />
                    <img src={playstore} alt="" />
                </div>
            </div>
            <div className="block2">
                <div className="blockCenter">
                <div className="text">
                    <h1>BAIXE O APP PARA MOTORISTAS</h1>
                    <h3><b>COMEÇE A TER LUCOS DE FORMA RÁPIDA E SEGURA!</b></h3>
                </div>
                    <img src={iphone} alt="" />
                </div>
            </div>
            <div className="block3">
            <h3>SAIBA MAIS SOBRE O NOSSO APP PARA MOTORISTAS</h3>
            <button>SAIBA MAIS</button>
            </div>
        </div>
    )
}

export {DriverBar}


