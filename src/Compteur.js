import { useState } from 'react';

// Composant Compteur : démonstration de useState (compter les clics).
function Compteur() {
  // State : nombre de clics.
  const [compte, setCompte] = useState(0);

  // Incrémente le compteur.
  function incrementer() {
    setCompte(compte + 1);
  }

  return (
    <div>
      <p>Vous avez cliqué {compte} fois.</p>
      <button onClick={incrementer}>Incrémenter</button>
    </div>
  );
}

export default Compteur;

