import '../styles/sidebar.css';

export function SideBar() {
  return (
    <div className="sidebar">
      <div className="user-profile">
        <div className="user-initials">CE</div>
        <div className="user-name">Carlos Eduardo</div>
      </div>
      <div className="menu">
        <button>Painel de Controle</button>
        <button>Pagamentos...</button>
      </div>
      <button className="logout-btn">SAIR</button>
    </div>
  );
}