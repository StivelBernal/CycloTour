import rutas from './../data/data-pages.json'

const randomRoutes = (qty = 3) => {
  const shuffled = [...rutas].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, qty);
}

export default randomRoutes;