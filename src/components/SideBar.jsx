import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
function SideBar({ isSidebarOpen }) {
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <ul>
        <li className="item-menu" onClick={(e) => {
          document.querySelectorAll(".item-menu").forEach((item) => item.classList.remove("ativo"));
          e.currentTarget.classList.add("ativo");
        }}>
          <Link to="/workspace">
            <span className="icon">
              <i className="fa-solid fa-house" style={{ fontSize: '25px' }}></i>
            </span>
            <span className="txt-link">Home</span>
          </Link>
        </li>
        <li className="item-menu" onClick={(e) => {
          document.querySelectorAll(".item-menu").forEach((item) => item.classList.remove("ativo"));
          e.currentTarget.classList.add("ativo");
        }}>
          <Link to="/topic">
            <span className="icon">
              <i className="fa-solid fa-book" style={{ fontSize: '25px' }}></i>
            </span>
            <span className="txt-link">Topicos</span>
          </Link>
        </li>
        <li className="item-menu" onClick={(e) => {
          document.querySelectorAll(".item-menu").forEach((item) => item.classList.remove("ativo"));
          e.currentTarget.classList.add("ativo");
        }} >
          <Link to="/rewrite">
            <span className="icon">
              <i className="fa-solid fa-pen" style={{ fontSize: '25px' }}></i>
            </span>
            <span className="txt-link">Escrever</span>
          </Link>
        </li>
        <li className="item-menu" onClick={(e) => {
          document.querySelectorAll(".item-menu").forEach((item) => item.classList.remove("ativo"));
          e.currentTarget.classList.add("ativo");
        }}>
           <Link to="/chatbot">
            <span className="icon">
              <i className="fa-solid fa-comments" style={{ fontSize: '25px' }}></i>
            </span>
            <span className="txt-link">Chat Bot</span>
          </Link>
        </li>
        
      </ul>
      <li className="item-menu" onClick={(e) => {
          document.querySelectorAll(".item-menu").forEach((item) => item.classList.remove("ativo"));
          e.currentTarget.classList.add("ativo");
        }}>
          <Link to="/settings">
            <span className="icon">
              <i className="fa-solid fa-gear" style={{ fontSize: '25px' }}></i>
            </span>
            <span className="txt-link">Definições</span>
          </Link>
        </li>
    </aside>
  );
}

export default SideBar;
