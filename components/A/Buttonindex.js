import styles from './Button.module.css'

export default function Button(){
  return(
  <div className={styles.button}>
        <div>
          <button>Sign up with google</button>
        </div>
          <div className="c">
            <div className="a"></div>
            <div className="b">OR</div>
            <div className="a"></div>
          </div>
          <div>
            <button>Sign up with Apple</button>
          </div>
          <div>
            <button>Create account</button>
          </div>
        <p className="p">By signing up, you agree to the <span style={{color: `rgb(29, 155, 240)`}}>Terms of Service</span> and <span style= {{color: `rgb(29, 155, 240)`}}>Privacy Policy</span>, including <span style={{color: `rgb(29, 155, 240)`}}>Cookie Use.</span></p>
        <h3>Already have an account?</h3>
        <div>
          <button>Sign in </button>
        </div>
    </div>
  )
}