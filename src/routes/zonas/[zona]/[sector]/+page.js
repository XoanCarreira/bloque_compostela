export async function load({ params, fetch }) {
  const res = await fetch(`/data/zonas/${params.zona}/sectores/${params.sector}.json`);
  if (!res.ok) {
    return { status: 404, error: new Error('Sector no encontrado') };
  }
  const sector = await res.json();
  return { sector };
}
