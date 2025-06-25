import { useState } from 'react';
import './FormularioRuta.css';

export default function FormularioRuta() {
  const [form, setForm] = useState({ titulo: '', descripcion: '', autor: '' });
  const [errores, setErrores] = useState({});

  const validar = () => {
    const err = {};
    if (form.titulo.trim().length < 5) err.titulo = "Debe tener al menos 5 caracteres.";
    if (form.descripcion.trim().length < 20) err.descripcion = "Debe tener al menos 20 caracteres.";
    if (!form.autor.trim()) err.autor = "Campo obligatorio.";
    setErrores(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validar()) return;
    alert("Ruta publicada");
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Agregar Nueva Ruta</h2>

      <label>Título:</label>
      <input name="titulo" value={form.titulo} onChange={handleChange} />
      {errores.titulo && <p className="error">{errores.titulo}</p>}

      <label>Descripción:</label>
      <textarea name="descripcion" rows="4" value={form.descripcion} onChange={handleChange}></textarea>
      {errores.descripcion && <p className="error">{errores.descripcion}</p>}

      <label>Autor:</label>
      <input name="autor" value={form.autor} onChange={handleChange} />
      {errores.autor && <p className="error">{errores.autor}</p>}

      <button type="submit">Publicar</button>
    </form>
  );
}
