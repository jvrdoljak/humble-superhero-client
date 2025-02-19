import { Suspense } from 'react';
import Header from '../header/header';
import ListItems from './list-items';

export default function ListPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Superheroes</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ListItems />
        </Suspense>
      </main>
    </>
  );
}
