import './styles.css';

export default function Login(){
    return (
        <div className="login-container">
            <section className="form">
                <form>
                    <h1>Login</h1>
                    <input placeholder="Username"/>
                    <input placeholder="Password"/>
                    <button type="submit" className="button">Entrar</button>
                </form>
            </section>
        </div>
    )
}