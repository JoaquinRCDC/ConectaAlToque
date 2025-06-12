import { useEffect, useState } from "react";

export default function InstagramFeed() {
  const [posts, setPosts] = useState([]);

  const accessToken = "TU_ACCESS_TOKEN_AQUÍ"; // ⚠️ Lo ideal es ocultarlo después con entorno

  useEffect(() => {
    fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,timestamp&access_token=${accessToken}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.data) {
          setPosts(data.data.slice(0, 6)); // Solo las 6 últimas publicaciones
        }
      })
      .catch(err => console.error("Error al obtener publicaciones:", err));
  }, []);

  return (
    <section className="bg-white p-10 text-center">
      <h2 className="text-2xl font-bold mb-6">Instagram de nuestros clientes</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map(post => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={post.media_url} alt={post.caption || "Publicación"} className="w-full h-60 object-cover" />
            <p className="text-sm text-gray-600 p-2 truncate">{post.caption}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
