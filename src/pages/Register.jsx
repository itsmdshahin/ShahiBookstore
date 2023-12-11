import { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../assets/styles/register.scss';
// import LOGO from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState(''); 





  const handleRegister = async () => {

    const fullname_pattern = /[A-Za-z .]{3,20}/
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/; 

    if (email === "" || password === "" || name === "") {
      alert("Must Fill-up all form!");
      window.open("/register");
    }
    else if (!email_pattern.test(email)) {
      alert("Email is not Valid");
      window.open("/register");
    }
    else if (!fullname_pattern.test(name)) {
      alert("Name not Valid");
      window.open("/register");
    }
    else if (!password_pattern.test(password)) {
      alert("Password Must me one Uppercase one lowercase one char. and one special char!");
      window.open("/register");
    }

    try {

      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Registration successful
        alert('Registration successful!');
        navigator('/profile');
        alert('Registration successful!');
      } else {
        // Registration failed
        alert('Registration failed!');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
    // alert(`Submitted: ${name} ${email} ${password} ${mobile}`);
  };

  return (
    <>

      <div className="register">
        <div className="containerdiv"> 
          <form className="froms">
            <div className="column">
              <div className="form" id="div1">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {/* {errors.name && <span className="error">{errors.name}</span>} */}
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* {errors.email && <span className="error">{errors.email}</span>} */}

                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />


              </div>
            </div>
          </form>
        </div>
        <div className="Loginurl text-center pt-2">
          <p className="text-light pt-2">Already Have An Account?</p>{' '}
          <Link to="../../Login">Log-in</Link>
        </div>
        <div className="submit" onClick={handleRegister}>
          <Button>Register</Button>
        </div>
      </div>

    </>
  );
};

export default Register;
