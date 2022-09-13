
import "./Icon.css"

export const Icon = ({
  src,
  alt,
}: {
  src: string
  alt?: string
}) => {
  return <img className="image" src={src} alt={alt} />
}
