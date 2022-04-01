import { useState } from "react"

function FavoriteColor() {
  const [color, setColor] = useState("Black");

  return (
    <div>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>Change</button>
    </div>
  )
}
export default FavoriteColor;