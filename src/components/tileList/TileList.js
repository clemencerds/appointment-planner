import React from "react";
import {Tile} from "../../components/tile/Tile.js"

export const TileList = ({tiles}) => {
  return (
    <div>
      {tiles.map((tile, index) => {
        const {name, ...description } = tile;
        return <Tile name={name} description={description} key={index}/>
      })}
    </div>
  );
};
