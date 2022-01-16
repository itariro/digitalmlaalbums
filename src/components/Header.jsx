import logo from '../assets/img/album_logo.png'

export default function Header() {
  return (
    <header>
      <nav className="p-2 mb-3 nav-background fixed-top">
        <a href="/">
          <img src={logo} width="78" height="22" aria-label="Albums" />
        </a>
      </nav>
    </header>
  )
}
