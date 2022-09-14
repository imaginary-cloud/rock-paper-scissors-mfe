import {
  useQuery,
} from '@tanstack/react-query'
import { fetchRecords } from "../../api/records"
import { Frame } from "../../components/frame/Frame"
import { Loader } from "../../components/loader/Loader"

import './Records.css'

interface Props {
  title: string
  data: number[]
}

export const RecordList = ({ data, title }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {data.map(win => {
          return <h4>{win}</h4>
        })}
      </div>
    </div>)
}


export const Records = () => {
  const { data, isLoading } = useQuery(['records'], fetchRecords)

  if (isLoading) {
    return <Loader />
  }

  return (
    <Frame>
      <div className="streaks-frame">
        <h2>Longest streaks</h2>
        <div className="records-frame">
          <RecordList title="Wins" data={data?.wins || []} />
          <RecordList title="Draws" data={data?.draws || []} />
          <RecordList title="Losses" data={data?.losses || []} />
        </div>
      </div>
    </Frame>
  )
}
