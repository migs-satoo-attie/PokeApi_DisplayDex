import DOM from "src/components/api/dom";

export default function UserEntry() {
  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit(valor);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-auto flex gap-6 flex-col "
    >
      <input
        className="border-l-6 border-gradient p-2 placeholder-gray-400 outline-0 text-white"
        name="query"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        type="text"
        placeholder="Nome ou ID do pokémon"
        required
      ></input>
      <div className="w-3/5 h-16 flex rounded-md justify-items-start items-center bg-slate-800">
        <button className="pl-8 text-gradient cursor-pointer" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}
