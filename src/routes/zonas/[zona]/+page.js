import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
  const res = await fetch(`/data/zonas/${params.zona}/index.json`);
  if (!res.ok) {
    throw error(404, 'Zona non encontrada');
  }
  const zona = await res.json();
  return { zona };
}
