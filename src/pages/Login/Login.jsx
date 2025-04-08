import styles from './Login.module.css'
import { useEffect } from 'react'
import { useAuthentication } from '../..;hooks/useAuthentication'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [passWord, setPassword] = useState("")
    const [error, setError] = useState("")

    const { login, error: authError, loading } = useAuthentication()

    const handlerSubmit = async (e) => {
        e.preventDefault()

        setError("")
        const user = {
            email,
            password,
        }

        const res = await login(user)

        console.log(res)
    }

    useEffect(() => {
        console.log(authError)
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.login}>
            <h1>Entrar</h1>
            <p>Faça login em nossa plataforma de desenvolvedores</p>
            <form onSubmit={handlerSubmit}>
                <label>
                    <span>E-mail</span>
                    <input
                        type='password'
                        name='password'
                        required
                        placeholder='Insira sua senha'
                        onChange={(e) => setPassword(e.target.value)}
                        velue={passWord}
                    />
                </label>
                {!loading && <button className='btn'>Entrar</button>}
                {!loading && <button className='btn' disabled>Aguarde... </button>}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Login