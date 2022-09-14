import React from "react"

import './ShowMove.css'
import { Moves } from "../play/Play.types"
import { RockImg } from "../../img/RockImg";
import { PaperImg } from "../../img/PaperImg";
import { ScissorsImg } from "../../img/ScissorsImg";

interface Props {
  move: Moves;
}

export const ShowMove = ({ move }: Props) => {
  switch (move) {
    case 'rock':
      return <div className="show-move rock">{RockImg}</div>;
    case 'paper':
      return <div className="show-move rock">{PaperImg}</div>;
    case 'scissors':
      return <div className="show-move rock">{ScissorsImg}</div>;
    default:
      return null;
  }
}
