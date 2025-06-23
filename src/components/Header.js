export default function Header() {
  return (
    <header className="w-full h-20 top-0 bg-slate-700 absolute flex">
      <div className="w-1/2 flex items-center p-10 gap-5 justify-items-start">
        <img alt="pikachuDex" className="w-20  " src="images/logo.png"></img>
        <span className="text-2xl text-rose-700 text-gradient">
          PokeDex_Api (v.1)
        </span>
      </div>
      <div className="w-1/2 flex items-center p-10 gap-5 justify-end">
        <img className="w-14" src="images/pokeball.gif"></img>
        <a href="https://github.com/migs-satoo-attie" target="_blank">
          <img className="w-12" src="images/github-logo.png"></img>
        </a>
      </div>
    </header>
  );
}
