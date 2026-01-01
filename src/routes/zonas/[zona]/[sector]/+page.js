import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
  const res = await fetch(`/data/zonas/${params.zona}/sectores/${params.sector}.json`);
  if (!res.ok) {
    throw error(404, 'Sector no encontrado');
  }
  const sector = await res.json();
  return { sector };
}
