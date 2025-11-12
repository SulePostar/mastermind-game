import Circle from './Circle';

const Colors = () => {
  return (
    <div className='colors'>
      {new Array(8).fill('').map((_, i) => (
        <Circle key={i} />
      ))}
    </div>
  )
}

export default Colors;