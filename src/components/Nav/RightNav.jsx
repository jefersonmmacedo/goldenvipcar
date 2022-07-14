import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {IoLogoWhatsapp} from 'react-icons/io5'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  li a{
    text-decoration: none;
    color: var(--White);
    font-weight: 500;
  }
  li a:hover{
    color: var(--Red);
  }
  button {
    display: flex;
    padding: 10px 20px;
    background-color: var(--Red);
    border-radius: 30px;
    margin-left: 10px;
    color: var(--White);
    border: none;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;

  }

  button:hover{
    background-color: var(--White);
    color: var(--Red);
  }



  @media (max-width: 950px) {
    flex-flow: column nowrap;
    background: #780606;
    backdrop-filter: blur(4px);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 5px;
      margin: 20px 10px;
    }
    li a {
      color: var(--White);
    }
    li a:hover {
      color: var(--Magenta);
    }

    button{
      background-color: var(--Black);
      margin-left: 10px;
      margin-right: 10px;
    }
    button svg {
      margin-right: 10px;
    }

    button:hover{
      background-color: var(--Yellow);
    }
  }
  }
`;

function HandleOpen(e) {
  e.preventDefault();

  window.open("/login")
}
function HandleOpenStudent(e) {
  e.preventDefault();

  window.open("/login", "_self")
}


const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       <li className='nav-item'>
            <Link to='/'>
              Início
            </Link>
          </li>
       <li className='nav-item'>
            <Link to='/passageiro'>
              Clientes
            </Link>
          </li>
       <li className='nav-item'>
            <Link to='/motorista'>
              Motorista
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/corridapremiada' >
              Corrida premiada
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/parceiros' >
              Parceiros
            </Link>
          </li>
          <button onClick={HandleOpen}>
            Painel do Sócio
          </button>         
    </Ul>
  )
}

export default RightNav
