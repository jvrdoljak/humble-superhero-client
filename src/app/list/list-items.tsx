import { use } from 'react';
import { Superhero } from '../form/page';

async function fetchItems() {
  const res = await fetch('http://localhost:4000/superheroes', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch items');
  return res.json();
}

export default function ListItems() {
  const items = use(fetchItems());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item: Superhero) => (
        <div key={item.name} className="bg-white shadow rounded p-4">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.superpower}</p>
          <p className="text-sm text-gray-600">{item.humilityScore}</p>
        </div>
      ))}
    </div>  
    
  );
}
