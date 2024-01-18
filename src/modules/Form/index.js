import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import logo from './logo.svg';
import { useNavigate } from 'react-router-dom'

const Form = ({
    isSignInPage = true,
}) => {

    const [data,setdata] = useState({
        ...(!isSignInPage && {
            fullName: ''
        }),
        email: '',
        password: '',
    })

    const navigate = useNavigate()

    console.log('data :>> ', data)

    return(
        <div className="bg-primary bg-opacity-25 h-screen flex justify-center items-center">
            <div className="bg-white w-[450px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
                <img src={logo} className="App-logo h-40vmin" alt="logo" />
                <div className="text-3xl font-extrabold text-secondary">Welcome</div>
                <div className="text-xl font-light mb-10">{isSignInPage ? 'Log in to get started' : 'Sign up to get explored'}</div>
                <form className="flex flex-col items-center w-full " onSubmit={() => console.log('Submitted')}>
                    {!isSignInPage && <Input label="Full Name" name="name" placeholder="Full Name" className=" mb-6 w-1/2" value={data.fullName} onChange={(e) => setdata({...data,fullName: e.target.value})}/>}
                    <Input label="Email" name="email" type="email" placeholder="Email" className=" mb-6 w-1/2" value={data.email} onChange={(e) => setdata({...data,email: e.target.value})}/>
                    <Input label="Password" name="password" type="password" placeholder="Password" className=" mb-10 w-1/2" value={data.password} onChange={(e) => setdata({...data,password: e.target.value})}/>
                    <Button label="Sign up" type="submit" className="w-1/2 mb-2"/>
                </form>
                <div>{isSignInPage ? "Doesn't have an account? " : 'Already have an account? '}<span className=" text-blue-600 cursor-pointer underline" onClick={() => navigate(`/users/${isSignInPage ? 'sign_up' : 'sign_in'}`)}>{isSignInPage ? 'Sign Up' : 'Log In'}</span></div>
            </div>
        </div>
    )
}

export default Form