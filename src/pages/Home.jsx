import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PostList from "../components/PostList";
import "../styles.css"; // Importamos los estilos

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Función para obtener datos de la API con búsqueda
  const fetchData = async (query = "") => {
    setLoading(true);
    try {
      const url = query
        ? `https://dummyjson.com/posts/search?q=${query}` // Si hay búsqueda, filtra en la API
        : `https://dummyjson.com/posts`; // Si no hay búsqueda, carga todos los posts
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data.posts); // Accedemos a data.posts porque DummyJSON devuelve un objeto
    } catch (error) {
      console.error("Error al cargar los datos", error);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Lista de Publicaciones</h1>
      <SearchBar onSearch={fetchData} />
      <button onClick={() => fetchData()} className="load-button">
        Cargar Todos los Datos
      </button>
      {loading ? <p className="loading">Cargando...</p> : <PostList posts={posts} />}
    </div>
  );
};

export default Home;


