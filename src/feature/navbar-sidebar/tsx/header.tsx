import '../styles/header.css';

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo UEPB" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Comece a procurar..." />
        <button className="search-button">🔍</button>
      </div>
      <div className="header-buttons">
        <button className="contact-btn">Fale Conosco</button>
        <button className="account-btn">Minha Conta</button>
        <button className="notifications-btn">🔔</button>
      </div>
    </header>
  );
}