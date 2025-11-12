const title = import.meta.env.VITE_TITLE || 'No title set';

const Header = () => {
  return (
    <div className="header">{title}</div>
  )
}

export default Header;