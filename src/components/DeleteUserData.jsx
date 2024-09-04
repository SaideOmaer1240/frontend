import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

import Header from "../components/Header";
import SideBar from "../components/SideBar";

const DeleteUserData = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    const navigate = useNavigate();
  
    const regressar = () => {
      navigate(`/settings`);
    };
    const handleDelete = async () => {
        try {
            const response = await api.delete('/api/delete/user-data/');
            if (response.status === 204) {
                regressar()
            }
        } catch (error) {
            console.error('Erro ao deletar dados do usuário', error);
        }
    };
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="layout">
      <div className="confirmar-exclusao">
        <h2 className="se-confir-exlusao">
          Deseja realimente excluir dados predefinidos?
        </h2>
        <p className="confirmo-sim">
          Essa decisão resultará na perda total de todos os dados usados automaticamente para criação de trabalho.<br></br>Dessa forma sempre que criar novo trabalho vai ter que redefinir manualimente!
        </p>
        <div className="conter-btn">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={regressar}>
            Cancelar
          </button>
          <button className="destroy" onClick={handleDelete}>
            Confirmar
          </button>
        </div>
      </div>
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} />
      <main className="main-content">
        <div className="conteiner-topic papel"></div>
      </main>
    </div>
    );
};

export default DeleteUserData;
