import "../styles.css"; // Importamos los estilos

const PostList = ({ posts }) => {
  return (
    <div className="posts-container">
      {posts.length === 0 ? (
        <p>No hay publicaciones disponibles.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;

