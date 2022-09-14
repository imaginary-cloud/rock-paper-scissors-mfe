import React from "react"
import { Moves } from "../play/Play.types";
import { win, lose } from "../play/Play.utils";

import './ShowResult.css'

interface Props {
  move: Moves;
  npcMove: Moves;
}

export const ShowResult = ({ npcMove, move }: Props) => {
  if (win(move, npcMove)) {
    return <p className="show-result win">Win</p>
  }
  else if (lose(move, npcMove)) {
    return <p className="show-result loss">Loss</p>
  }
  else {
    return <p className="show-result draw">Draw</p>
  }
}
