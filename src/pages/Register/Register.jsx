import styles from "./Register.module.css"

import { useEffect, useState } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

const Register = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const {createUser, error: authError, loading} = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais")
            return
        }

        const user = {
            displayName, 
            email,
            password,
        }

        const res = await createUser(user)

        console.log(res)

        if (!res) {
            setError("Erro ao criar usuário")
            return
        }

        alert('Usuário criado com sucesso!')
        setDisplayName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return(
        <div className={styles.cadastro}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe suas histórias</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" required placeholder="Nome do usuário" onChange={(e) => setDisplayName(e.target.value)} value={displayName} className={styles.caixadeinput}/>
                </label>
                <label>
                    <span className={styles.email}>E-mail:</span>
                    <input type="email" name="Email" required placeholder="E-mail do usuário" onChange={(e) => setEmail(e.target.value)} value={email} className={styles.caixadeinput}/>
                </label>
                <label>
                    <span className={styles.senha}>Senha:</span>
                    <input type="password" name="password" required placeholder="Insira a senha" onChange={(e) => setPassword(e.target.value)} value={password} className={styles.caixadeinput}/>
                </label>
                <label>
                    <span className={styles.confirmesenha}>Confirmação de senha:</span>
                    <input type="password" name="confirmPassword" required placeholder="Confirme a senha" onChange={(e) => setConfirmPassword (e.target.value)} value={confirmPassword} className={styles.caixadeinput}/>
                </label>
                {!loading && <button className={`btn ${styles.corrigindo3}`}>Entrar</button>}
                {loading && (<button className="btn" disabled>Aguarde...</button>)}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export default Register