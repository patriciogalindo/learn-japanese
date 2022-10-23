import styles from './styles.module.css';


export function Login() {

  return(
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <span className={styles.title}>Log in</span>
        <form className={styles.form}>
          <input placeholder='E-mail'/>
          <input placeholder='Password'/>
          <button type='submit' className={styles.loginButton}>Log in</button>
        </form>
        <span className={styles.span}>Don't have an account yet?
          <button className={styles.registerButton}>Create Account</button>
        </span>

        <div className={styles.otherOptions}>
          <div className={styles.line}></div>
          <div className={styles.littleSpan}>or</div>
          <div className={styles.line}></div>
        </div>

        <button className={`${styles.loginButton} ${styles.google}`}>Log in with Google</button>
      </div>
    </div>
  )
}