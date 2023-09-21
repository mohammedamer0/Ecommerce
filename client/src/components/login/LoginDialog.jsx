import { useState, useContext } from "react";
import Modal from 'react-modal';
import { authenticateLogin, authenticateSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import { json, useNavigate } from "react-router-dom";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding:0
    },
  };

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}
const loginInitialValues = {
    username: '',
    password: ''
}

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}


const LoginDialog =({modalIsOpen, setIsOpen, setAccount})=>{
    const [signup, setsignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);
    const [account, toggleAccount] = useState(accountInitialValues.login);


    const onInputChange = (e) =>{
        setsignup({...signup,[e.target.name]:e.target.value})
        console.log(signup);
    }

    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return console.log("not");
        closeModal();
        setAccount(signup.firstname);
        localStorage.setItem('login',JSON.stringify(signup.firstname))
        setsignup('');
        
        
    }

    //login
    const onValueChange = (e) => {
        setLogin({...login,[e.target.name]: e.target.value})
        console.log(login);
    }
    const loginUser = async() =>{
        let response = await authenticateLogin(login);
        if(response.status === 200){
            setAccount(response.data.data.firstname);
            localStorage.setItem('login',JSON.stringify(response.data.data.firstname))
            setLogin('');
            closeModal();
        } else{
            setError(true);
            
        }
    }

    const toggleSignup = () => {
        setLogin('');
        toggleAccount(accountInitialValues.signup);
    }
    const toggleLogin = () => {
        toggleAccount(accountInitialValues.login);
        setsignup('');
    }


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    
  }
  const navigate = useNavigate();
  function closeModal() {
    setIsOpen(false);
    toggleAccount(accountInitialValues.login);
    navigate('/')
  }




    return(
       <>
    <div>
      
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <div className="modal-content">
                        <div className="Login-dialog">
                            <div className="dialog-left">
                                <h5>{account.heading}</h5>
                                <p style={{marginTop:20}}>{account.subHeading}</p>
                            </div>
                            { account.view === 'login' ?
                            <div className="dialog-right">
                                <div className="input-group">
                                    <input type="text" className="input" placeholder="____" name="username" onChange={(e)=> onValueChange(e)}/>
                                    <label className="label">Enter Username</label>
                                </div>
                                {error &&
                                <div className="error" >
                                    <p>Please enter valid username or password</p>
                                </div>
                                }
                                <div className="input-group">
                                    <input type="password" className="input" placeholder="____" name="password" onChange={(e)=> onValueChange(e)}/>
                                    <label className="label">Enter Password</label>
                                </div>
                                <p style={{fontSize:"12px",color:'#878787'}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                    <button className="login-button" onClick={()=> loginUser()} >Login</button>
                                    <p style={{textAlign:'center'}}>OR</p>
                                    <button  className="request-button">Request OTP</button>
                                    <p style={{fontSize:'14px',textAlign:'center',color:'#2874f0',fontWeight:600,cursor:'pointer'}} onClick={()=>toggleSignup()}>New to Flipkart? Create an account</p>
                            </div> :
                            <div className="dialog-right">
                            <div className="input-group">
                                <input type="text" className="input" placeholder="____" name="firstname" onChange={(e)=> onInputChange(e)}/>
                                <label className="label">Enter Firstname</label>
                            </div>
                            <div className="input-group">
                                <input type="text" className="input" placeholder="____" name="lastname" onChange={(e)=> onInputChange(e)}/>
                                <label className="label">Enter Lastname</label>
                            </div>
                            <div className="input-group">
                                <input type="text" className="input" placeholder="____" name="username" onChange={(e)=> onInputChange(e)}/>
                                <label className="label">Enter Username</label>
                            </div>
                            <div className="input-group">
                                <input type="email" className="input" placeholder="____" name="email" onChange={(e)=> onInputChange(e)}/>
                                <label className="label">Enter Email</label>
                            </div>
                            <div className="input-group">
                                <input type="password" className="input" placeholder="____" name="password" onChange={(e)=> onInputChange(e)}/>
                                <label className="label">Enter Password</label>
                            </div>
                            <div className="input-group">
                                <input type="text" className="input" placeholder="____" name="phone" onChange={(e)=> onInputChange(e)}/>
                                <label className="label">Enter Phone</label>
                            </div>
                            <p style={{fontSize:"12px",color:'#878787'}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                <button className="login-button" onClick={()=> signupUser()}>Continue</button>
                                <button  className="request-button" onClick={()=> toggleLogin()}>Existing User? Login</button>
                            </div>}
                            <div>
                            <i class="bi bi-x-lg" onClick={closeModal} style={{fontSize:'25px',cursor:'pointer'}}></i>
                        </div>
                        </div>
                </div>
            
      </Modal>
    </div>
    </>
    )
}

export default LoginDialog;