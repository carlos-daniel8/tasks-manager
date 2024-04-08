import './styles.css';
import padlock from '../../assets/padlock.png'

export default function Login(){
    return (
        <div className="login-container">
            <section className="form">
                <form>
                    <h1 className='login-text'>Login</h1>
                    <input placeholder='Username'/>
                    <input placeholder='Password'/>
                    <button type="submit" className="button">Entrar</button>
                </form>
            </section>
        </div>
    )
}