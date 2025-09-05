import { useEffect, useState } from "react";


export default function InstagramFeed() {
  const [posts, setPosts] = useState([]);

  const accessToken = import.meta.env.VITE_IG_TOKEN; // ⚠️ Lo ideal es ocultarlo después con entorno
  const userId = "122109735164899121";
  useEffect(() => {
    fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink,media_type,timestamp&access_token=${accessToken}`)
      .then(res => res.json())
      .then(data => {
        if (data.data) {
          setPosts(data.data.slice(0, 6));
        }
      })
      .catch(err => console.error("Error al obtener publicaciones:", err));
  }, []);

  return (
    <section className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-6">Últimas publicaciones en Instagram</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map(post => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded overflow-hidden shadow hover:shadow-md transition"
          >
            <img
              src={post.media_url}
              alt={post.caption || "Instagram post"}
              className="w-full h-60 object-cover"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
