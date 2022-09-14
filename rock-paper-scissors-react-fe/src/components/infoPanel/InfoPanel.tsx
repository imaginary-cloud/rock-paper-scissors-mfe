import React from "react"
import { State } from "../play/Play"

import './InfoPanel.css'

interface Props {
  state: State
}

export const InfoPanel = ({
  state: { wins, draws, losses, streak }
}: Props) => {

  return <div className="info-panel">
    <h4>Streak:</h4> <h4>{streak}</h4>
    <h5>Wins:</h5> <h5>{wins}</h5>
    <h5>Draws:</h5> <h5>{draws}</h5>
    <h5>Losses:</h5> <h5>{losses}</h5>
  </div>
}
