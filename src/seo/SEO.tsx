import { Helmet } from "react-helmet-async";

const BASE = "https://conectaaltoque.cl";

export default function SEO({
  title = "Conecta Al Toque — Sitios web que venden",
  description = "Creamos sitios web rápidos, seguros y optimizados para SEO. Entrega ágil, soporte en Chile y planes para emprendedores.",
  canonical = BASE + "/",
  ogImage = BASE + "/og-cover.jpg",
  jsonLd,               // objeto o array de objetos JSON-LD
}) {
  const arr = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Conecta Al Toque" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD extra por página */}
      {arr.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}
