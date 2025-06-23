import PokeImg from "src/components/PokeImg";
import PokeNameAndId from "src/components/PokeNameAndId";
import UserEntry from "src/components/UserEntry";
import OutputFields from "src/components/OutputFields";

export default function Dex() {
  return (
    <main className="flex relative top-3 w-250 h-170 p-7 bg-slate-700 rounded-lg">
      <left className="h-full flex flex-col w-1/2">
        <div className="h-3/5 w-full flex flex-col justify-items-center items-center">
          <div className="h-1/5 w-full flex items-center">
            <PokeNameAndId />
          </div>
          <div className="h-4/5 w-full pr-8 flex items-center justify-center">
            <PokeImg />
          </div>
        </div>
        <div className="h-2/5 w-full pr-8 pb-15 flex items-center justify-items-start">
          <UserEntry />
        </div>
      </left>
      <right className="h-full flex justify-end w-1/2">
        <OutputFields />
      </right>
    </main>
  );
}
