import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import styles from './styles.module.css';

export function SignUp () {
  return(
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <span className={styles.title}>Sign up</span>
        <form className={styles.form}>
          <input placeholder='Username'/>
          <input placeholder='E-mail'/>
          <input placeholder='Password'/>
          <input placeholder='Confirm password'/>
          <button type='submit' className={styles.loginButton}>Sign up</button>
        </form>
        <span className={styles.span}>Already have an account?
          <Link to={routes.LOGIN} className={styles.loginLink}> Log in</Link>
        </span>

        <div className={styles.otherOptions}>
          <div className={styles.line}></div>
          <div className={styles.littleSpan}>or</div>
          <div className={styles.line}></div>
        </div>

        <button className={`${styles.loginButton} ${styles.google}`}>Sign up with Google</button>
      </div>
    </div>
  )
}