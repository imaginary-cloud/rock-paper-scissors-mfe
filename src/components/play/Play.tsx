import React, { useState } from "react"
import { Frame } from "../frame/Frame"
import { InfoPanel } from "../infoPanel/InfoPanel"
import { ShowMove } from "../showMove/ShowMove"
import { ShowResult } from "../showResult/ShowResult"
import { createPlay } from "../../api"
import { GameDateObject } from "../../scenes/game/Game"
import { RockImg } from "../../img/RockImg"
import { PaperImg } from "../../img/PaperImg"
import { ScissorsImg } from "../../img/ScissorsImg"
import { lose, win } from "./Play.utils"
import { Moves } from "./Play.types"
import { Button } from "../button/Button"

import './Play.css'

export interface State {
  wins: number;
  losses: number;
  draws: number;
  streak: number;
}

const initialState: State = {
  wins: 0,
  losses: 0,
  draws: 0,
  streak: 0,
}

const usePlay = (game: GameDateObject) => {
  const [state, setState] = useState<State>(initialState)
  const [move, setMove] = useState<Moves | null>(null)
  const [npcMove, setNpcMove] = useState<Moves | null>(null)

  const play = async (move: Moves) => {
    setMove(move)
    const npcMove = ['rock', 'paper', 'scissors'].at(Math.floor(Math.random() * 3)) as Moves;
    setNpcMove(npcMove)

    await createPlay({
      gameId: game.id,
      move,
      npcMove,
    })

    if (win(move, npcMove)) {
      setState({
        ...state,
        wins: state.wins + 1,
        streak: state.streak + 1
      })
    }
    else if (lose(move, npcMove)) {
      setState({
        ...state,
        losses: state.losses + 1,
        streak: 0,
      })
    }
    else {
      setState({
        ...state,
        draws: state.draws + 1
      })
    }
  }

  return {
    state,
    setState,
    play,
    move,
    npcMove,
  }
}


interface Props {
  game: GameDateObject
}

export const Play = ({ game }: Props) => {


  const {
    state,
    play,
    npcMove,
    move,
  } = usePlay(game)

  return <Frame>
    <div className="play-frame" >
      <InfoPanel state={state}></InfoPanel>
      <div className="play-content">
        <div className="play-result">
          {move && npcMove && (
            <>
              <ShowMove move={npcMove}></ShowMove>
              <ShowResult move={move} npcMove={npcMove} ></ShowResult>
              <ShowMove move={move}></ShowMove>
            </>
          )}
        </div>
        <div className="play-buttons">
          <Button onClick={() => play("rock")}>{RockImg}</Button>
          <Button onClick={() => play("paper")} > {PaperImg}</Button>
          <Button onClick={() => play("scissors")}>{ScissorsImg}</Button>
        </div>
      </div>
    </div >
  </Frame >
}
