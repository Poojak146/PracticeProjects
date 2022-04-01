import { useState } from "react"
import Example3Main from './Example3Main'

function FavColor() {
  const [color, setColor] = useState("green");

  return (
    <div>
     <button type="button" onClick={() => setColor("blue")} >Change</button>
     <Example3Main />
    </div>
  )
}
export default FavColor;