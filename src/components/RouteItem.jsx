export default function RouteItem({ image, title, description, slug }) {
  return (
    <div className="route-item" >
      <div className="route-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={`/routes/${slug}`}>Ver ruta</a>
      </div>
      <img src={`/images/rutas/${image}`} alt={title} />
    </div>
  );
}
