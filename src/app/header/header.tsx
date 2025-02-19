export default function Header() {
  return (
    <header className="container p-4">
      <h2 className="text-2xl mb-4 mr-4">Humble Superheroes</h2>
      <a href="/list" className="text-xl mb-4 mr-4">
        Superheroes List
      </a>
      <a href="/form" className="text-xl mb-4">
        Create Superheroe
      </a>
    </header>
  );
}
