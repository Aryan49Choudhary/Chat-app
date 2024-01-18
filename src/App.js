// import logo from './logo.svg';
import './App.css';
import Dashboard from './modules/Dashboard';
import {Routes, Route, Navigate} from 'react-router-dom';
import Form from './modules/Form';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('user:token') != null || true;
  // console.log('isLoggedIn :>> ', isLoggedIn);

  if(!isLoggedIn){
    return  <Navigate to={'/users/sign_in'} />
  }else if(isLoggedIn && ['/users/sign_in','/users/sign_up'].includes(window.location.pathname)){
    console.log('object :>> ');
    return <Navigate to={'/'} />
  }

  return children
}

function App() {
  return(
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }/>
      <Route path="/users/sign_in" element={
          <Form isSignInPage={true} />
      }/>
      <Route path="/users/sign_up" element={
          <Form isSignInPage={false} />
      }/>
    </Routes>
    // <div className="bg-primary bg-opacity-25 h-screen flex justify-center items-center">
    // <div className="h-screen flex justify-center items-center">
    //   {/* <Form/> */}
    //   <Dashboard/>
    // </div>
  );
}

export default App;