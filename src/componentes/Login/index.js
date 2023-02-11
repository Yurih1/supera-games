import './Login.css';

const Login = () =>{
    return (
        <div className="login">
            <label>Usuário</label>
            <input placeholder="Digite seu usuário"/>
            <label>Senha</label>
            <input type ="password" placeholder="Digite sua senha"/>
        </div>
    );
}

export default Login;