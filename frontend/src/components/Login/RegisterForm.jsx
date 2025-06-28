import React, { useState } from 'react';
import './sign-in.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const RegisterForm = () => {
    const {register ,handleSubmit , formState: {errors},} =  useForm();
    const [loading , setloading] = useState(false);
    const navigate = useNavigate();
    const onSubmit =  async (Data) => {
        setloading(true);
        try {
            const { data } = await axios.post(`http://localhost:5000/signup`,{
                username: Data.username,
                email: Data.email,
                password: Data.password
            });    
            console.log(data);
            navigate("/login");
            
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }
    const regexEmail = /^[a-z0-9!*?#$/_-]+@[a-z0-9!*?#$/_-]+\.[a-z0-9]{2,4}$/

    return (
        <main className="form-signin w-100 m-auto"> 
            <form className='mt-5'  onSubmit={handleSubmit(onSubmit)}> 
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1> 
              
                <div className="form-floating"> 
                    <input type="text" className="form-control" id="floatingInputuser" placeholder="@Mateo" {...register('username' , {required: "Veuillez entre votre non d'utilisateur" ,minLength:{
                        value:4,
                        message:"entrer un nom d'utilisateur de plus de 4 caracters !!!"
                    } }) }/> 
                    <label for="floatingInput">Username</label> 
                </div>
                { errors.username && <span className="error">{errors.username.message}</span>} 

                <div className="form-floating mt-3"> 
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register('email' , { required:" Veuillez entre votre address mail !!!", pattern:{value: regexEmail,message:"Address mail invalide !!!"}})}/> 
                    <label for="floatingInput">Email address</label> 
                </div> 
                { errors.email && <span className="error">{errors.email.message}</span>}
                <div className="form-floating mt-3"> 
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register("password" , {required:"veuillez entre votre mot de passe !!!" , minLength:{
                        value:6,
                        message: "veuillez saisir un mot de passe de plus de 5 caracters !!!"
                    }})}/> 
                    <label for="floatingPassword">Password</label> 
                </div> 
                { errors.password && <span className="error">{errors.password.message}</span> }
                <div className="form-check text-start my-3"> 
                    <input className="form-check-input" type="checkbox" value="remember-me" id="checkDefault"/> 
                    <label className="form-check-label" for="checkDefault">
                        Remember me
                    </label> 
                </div> 
                { loading ? 
                    ( <button class="btn btn-primary py-2 w-100 "  disabled=""> 
                        <span class="spinner-border spinner-border-sm" ></span> 
                        <span role="status">Loading...</span> 
                    </button> ) : ( <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button> )
                    
                }
                
                
                <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2025</p> 
            </form> 
        </main>
    );
};

export default RegisterForm;