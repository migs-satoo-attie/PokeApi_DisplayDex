import Tipo from "src/components/Tipo";

export default function OutputFields() {
  return (
    <main className="flex w-full h-full flex-col gap-5 ">
      <span className="border-r-6 border-gradient pr-3 text-right -tracking-tighter text-white text-2xl">
        Tipo
      </span>
      <div className="w-full h-1.5 bg-slate-800 rounded-2xl"></div>
      <Tipo />
      <span className="border-r-6 border-gradient pr-3 text-right -tracking-tighter text-white text-2xl">
        Habilidades
      </span>
      <span className="border-r-6 border-gradient pr-3 text-right -tracking-tighter text-white text-2xl">
        Altura
      </span>
      <span className="border-r-6 border-gradient pr-3 text-right -tracking-tighter text-white text-2xl">
        Peso
      </span>
    </main>
  );
}
