export default function Activities ({ name, season, duration, difficulty }) {
  return (
    <div>
      <h2>ACTIVITY:</h2>
      <h3>{name}</h3>
      <h3>{season}</h3>
      <h4>dificultad:{difficulty}</h4>
      <h4>duración:{duration}</h4>
    </div>
  )
}
