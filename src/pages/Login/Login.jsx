import "./login.css";
import logo from '../../assets/images/goldenvipcar.png'

function Login() {
    return (
        <div className="Login">
            <form action="">
                <img src={logo} alt="" />
                <input type="text" placeholder="Login" />
                <input type="text" placeholder="Senha" />

                <button>Entrar</button>
            </form>
            <div className="text">
                <p>Esqueci meu usuário</p>
                <p>Esqueci minha senha</p>
            </div>
        </div>
    )
}

export { Login }