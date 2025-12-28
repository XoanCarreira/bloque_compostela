// +page zonas

export async function load() {
  const res = await fetch('/data/zonas.json');
  if (!res.ok) throw new Error('No se pudieron cargar las zonas');
  const zonas = await res.json();
  return { zonas };
}
