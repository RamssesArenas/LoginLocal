import React,{useState} from 'react';
import './Login.css'
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
import img_001 from '../../assets/images/img_001.jpg'

const Login = () =>{

    const[user,setUser]=useState('');
    const[password,setPassword]=useState('');
    const[passwordError,setPasswordError]=useState(false);
    const[isLogin,setIsLogin]=useState(false);
    const[hasError,setHasError]=useState(false);

    function handleChange(name,value){
        if(name === 'usuario'){
            setUser(value)
        }else{
            if(value.length < 6){
                setPasswordError(true);
            }else
            setPasswordError(false);
            setPassword(value)
        }
    }

    function ifMatch(param){
        if(param.user.length>0 && param.password.length>0){
            if(param.user === 'ramsses' && param.password === '123456'){
                const {user, password} = param;
                let ac = {user,password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account',account);
                setIsLogin(true);
            }else{
                setIsLogin(false);
                setHasError(true);
            }
        }else{
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSummit(){
        let account = {user,password}
        if(account){
            ifMatch(account)
        }
    }

    return(
        <div className='loginContainer'>

            <div className='loginLeft'>
            {!isLogin &&
            <div className='loginContent'>
                <Title text='Log in'/>
                { hasError && 
                    <label className='label-alert'>
                    Su contaseña o usario son incorrectos
                    </label>
                }
                <Label text='Usuario'/>
                <Input
                    atribute={{
                        id:'usuario',
                        name: 'usuario',
                        type: 'text',
                        placeholder:'Ingrese su usuario'
                    }}
                    handleChange={handleChange}
                />
                <Label text='Contraseña'/>
                <Input
                    atribute={{
                        id:'constraseña',
                        name: 'pass',
                        type: 'password',
                        placeholder:'Ingrese su contraseña'
                    }}
                    handleChange={handleChange}
                    param={passwordError}
                />
                { passwordError &&<label className='labelError'>Contraseña invalida</label>}
                <div><button className='botonIngresar' onClick={handleSummit}>Ingresar</button></div>
            </div>
            }
            </div>
            <div className='loginRight'>
                <img src={img_001} alt="Loish" className="BackgroundImage" />
            </div>

        </div>
    )
};
export default Login;