import { Moves } from "./Play.types"

const WIN_CONDITIONS: Record<Moves, Moves> = {
  'rock': 'scissors',
  'paper': 'rock',
  'scissors': 'paper',
}

const LOSE_CONDITIONS = Object.entries(WIN_CONDITIONS).reduce((acc, [key, value]) => (
  {
    ...acc,
    [value]: key,
  }
), {}) as Record<Moves, Moves>;

export const win = (p1Move: Moves, p2Move: Moves) => {
  return WIN_CONDITIONS[p1Move] === p2Move
}

export const lose = (p1Move: Moves, p2Move: Moves) => {
  return LOSE_CONDITIONS[p1Move] === p2Move
}
