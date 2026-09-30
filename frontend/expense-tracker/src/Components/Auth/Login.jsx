import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import bg from '../../img/bg.png'//this gives the url (bg=url)
const API_URL = process.env.REACT_APP_URL;

export default function Login({setUser}) {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Background image url",bg);

//  async function handleSubmit(e) {
//     e.preventDefault();
//     setError('');
//     const endPoint=isLogin?`${API_URL}/login`:`${API_URL}/register`;

//     try{
//       const response=await axios.post(endPoint,{email,password});

//       //save user data to localStorage
//       console.log("respose data after login or register",[...response.data],response.data);
//       const userData=response.data;

//       localStorage.setItem('user',JSON.stringify(userData));//if user is registered or loggedin then save this data in localStorage
//       setUser(userData);
//     }
//    catch (error) {
//     console.log(error.response?.data);

//     setError(
//         error.response?.data?.message ||
//         "Something went wrong. Please try again."
//     );
// }
//   }


async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        // --- LOGIN FLOW ---
        const response = await axios.post(`${API_URL}/login`, { email, password });
        const userData = response.data;

        // Save user data to localStorage ONLY on login
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      } else {
        // --- REGISTER FLOW ---
        await axios.post(`${API_URL}/register`, { email, password });

        // Do NOT save to localStorage or set user. 
        // Just switch back to the login view so they can sign in securely.
        setIsLogin(true);
        setPassword(""); // Clear password field
      }
    } catch (error) {
      console.log(error.response?.data);

      setError(
        error.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    }
  }

  return (
    <AuthStyled bg={bg}>
      <div className="auth-container">
        <h2>{isLogin ? "Welcome Back!" : "Create Account"}</h2>
        <p>
          {isLogin ? "Login to manage your expenses" : "Sign up to get started"}
        </p>
        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-control">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-control">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Dont have an account" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </AuthStyled>
  );
}

const AuthStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.bg});
    background-size: cover;
    background-position: center;
    position: relative;

    .auth-container {
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        padding: 3rem;
        border-radius: 32px;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        width: 100%;
        max-width: 450px;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        h2 {
            color: rgba(34, 34, 96, 1);
            font-size: 2rem;
        }

        p {
            color: rgba(34, 34, 96, 0.6);
            font-size: 0.9rem;
        }

        .error-msg {
            color: red;
            background: #ffe6e6;
            padding: 0.5rem;
            border-radius: 5px;
            text-align: center;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;

            .input-control {
                input {
                    width: 100%;
                    font-family: inherit;
                    font-size: inherit;
                    outline: none;
                    border: none;
                    padding: 0.8rem 1rem;
                    border-radius: 5px;
                    border: 2px solid #fff;
                    background: transparent;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    color: rgba(34, 34, 96, 0.9);
                    
                    &::placeholder {
                        color: rgba(34, 34, 96, 0.4);
                    }
                    
                    &:focus {
                        border-color: #222260;
                    }
                }
            }

            .submit-btn {
                background: #222260;
                color: white;
                padding: 0.8rem;
                border: none;
                border-radius: 30px;
                font-size: 1rem;
                cursor: pointer;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                transition: background 0.3s ease;

                &:hover {
                    background: var(--color-green, #42AD83) !important;
                }
            }
        }

        .toggle-text {
            text-align: center;
            font-size: 0.9rem;
            color: rgba(34, 34, 96, 0.8);
            span {
                color: #222260;
                font-weight: bold;
                cursor: pointer;
                margin-left: 0.3rem;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;
