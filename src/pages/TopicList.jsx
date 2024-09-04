import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../assets/css/criar.css";
import "../assets/css/geral/styles.css";
import "../assets/css/style.css";
import "./criar.css";
import "../assets/css/progresso.css";
import "../assets/css/cards.css";
import "../assets/css/book.css";
import  LoadingAnimation from  "../components/LoadingAnimation";
function TopicList() {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await api.get("/api/topics/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTopics(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate('/login');
      }
        console.error("Erro ao buscar tópicos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  const handleViewThesis = (code) => {
    navigate(`/thesis/${code}`);
  };

  const destroyThesis = (code) => {
    navigate(`/delete/${code}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout">
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} />
      <main className="main-content">
        <div className="conteiner-topic papel">
          <div className="conteiner-cards">
            {loading ? (
              <LoadingAnimation/>
            ) : (
              topics.map((topic) => (
                <div key={topic.id} className="card" >
                  <div className="visualize">
                    <div className="mb-8">
                      <h3 className="titulo topic">{topic.topic}</h3>
                      <p className="data text-gray-700 text-base">
                        Autor: {topic.student}
                        <br />
                        Adicionado em:{" "}
                        {new Date(topic.date_added).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="conter-btn">
                      <button
                        onClick={() => handleViewThesis(topic.code)}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                      >
                        Visualizar
                      </button>
                      <button
                        className="destroy"
                        onClick={() => destroyThesis(topic.code)}
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default TopicList;
