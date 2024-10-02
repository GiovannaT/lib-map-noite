import '../styles/content.css';

export function Reservations() {
  return (
    <div className="reservations">
      <h2>Reservas</h2>
      <div className="reservation-item">
        <img src="https://via.placeholder.com/150" alt="Harry Potter" />
        <div className="reservation-details">
          <h3>Harry Potter and The Cursed Child</h3>
          <p>Reservado até 07/09/24</p>
        </div>
      </div>
    </div>
  );
}