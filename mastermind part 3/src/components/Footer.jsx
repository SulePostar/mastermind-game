import Check from './Check';
import NewGame from './NewGame';

const Footer = ({ onClick, onReset }) => {
  return (
    <div className="footer">
      <Check onClick={onClick} />
      <NewGame onClick={onReset} />
    </div>
  )
}

export default Footer;