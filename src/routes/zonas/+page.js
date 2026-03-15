// +page zonas

export async function load({ fetch }) {
  const res = await fetch('/data/zonas.json');
  if (!res.ok) throw new Error('Non se puideron cargar as zonas');
  const zonas = await res.json();
  return { zonas };
}
