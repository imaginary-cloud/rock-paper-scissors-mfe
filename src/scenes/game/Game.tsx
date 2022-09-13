import React, { useEffect, useState } from "react"
import { createGame } from "../../api"
import { Loader } from "../../components/loader/Loader";
import { Play } from "../../components/play/Play";

export interface GameDateObject {
  id: number;
}



export const Game = () => {
  debugger
  const [game, setGame] = useState<GameDateObject>()

  useEffect(() => {
    (async () => {
      const newGame = await createGame();

      setGame(newGame);
    })()

  }, [])


  if (!game) {
    return <Loader />;
  }

  return <Play game={game}></Play>
}
