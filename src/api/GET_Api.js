export default async function Get_Api(res) {
  const ApiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${res}`);
  const data = await ApiRes.json();

  const Get_Elementos = {
    sprite: data.sprites.front_default,
    nome: data.forms[0].name,
    id: data.id,
    habilidade1: data.abilities[0].ability.name,
    habilidade2: data.abilities[1].ability.name,
    tipo: data.types[0].type.name,
    altura: data.height,
    peso: data.weight,
  };
  return Get_Elementos;
}
