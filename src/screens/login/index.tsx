import styles from './styles.module.css';
import { Link } from "react-router-dom";
import { routes } from '../../routes';

export function Login () {

  console.log(routes.SIGNUP, 'ruta')
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
          <Link to={routes.SIGNUP} className={styles.registerLink}> Create Account</Link>
        </span>

        <div className={styles.otherOptions}>
          <div className={styles.line}></div>
          <div className={styles.littleSpan}>or</div>
          <div className={styles.line}></div>
        </div>

        <button className={`${styles.loginButton} ${styles.google}`} >Log in with Google</button>
      </div>
    </div>
  )
}