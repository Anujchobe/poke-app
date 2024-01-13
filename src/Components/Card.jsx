import React from "react";
const Card = ({ pokemon, loading }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <div className="card" key={item.id}>
              <h2>{item.id}</h2>
              <img src={item.sprites.front_default} alt="" />
              <h2>{item.name}</h2>
              <div className="abilities">
                {item.abilities.map((poke) => (
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                ))}
              </div>
              <div className="base-stat">
                {item.stats.map((poke) => (
                  <h3>
                    {poke.stat.name}:{poke.base_stat}
                  </h3>
                ))}
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Card;
