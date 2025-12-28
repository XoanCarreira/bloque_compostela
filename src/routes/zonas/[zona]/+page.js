export async function load({ params }) {
  const res = await fetch(`/data/zonas/${params.zona}/index.json`);
  if (!res.ok) {
    return { status: 404, error: new Error('Zona non encontrada') };
  }
  const zona = await res.json();
  return { zona };
}
