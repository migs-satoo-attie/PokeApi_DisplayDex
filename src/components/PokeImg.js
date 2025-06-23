export default function PokeImg() {
  return (
    <main className="w-full h-full border-l-6 border-b-6 border-t-2 border-r-2 border-gradient bg-[url('/images/cenario.jfif')] flex items-center justify-center">
      <div className="w-auto h-2/3">
        <img
          className="w-full h-full transform translate-x-10 translate-y-4"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
        />
      </div>
    </main>
  );
}
