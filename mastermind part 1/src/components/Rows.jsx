import Row from "./Row";

const Rows = () => {
  return (
    <div className='rows'>
      {new Array(10).fill('').map((_, i) => (
        <Row key={i} />
      ))}
    </div>
  )
}

export default Rows;