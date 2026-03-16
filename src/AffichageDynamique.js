import { useState } from 'react';

// Exercice 1 : change le texte affiché à chaque clic.
function AffichageDynamique() {
  // Nombre de clics effectués.
  const [clics, setClics] = useState(0);

  // Messages pour les 3 premiers clics, puis on continue avec "Xème clic".
  const messages = ['Premier clic', 'Deuxième clic', 'Troisième clic'];
  const texte =
    clics === 0 ? 'Cliquez sur le bouton' : messages[clics - 1] ?? `${clics}ème clic`;

  function handleClick() {
    setClics(clics + 1);
  }

  return (
    <div>
      <p>{texte}</p>
      <button onClick={handleClick}>Cliquer</button>
    </div>
  );
}

export default AffichageDynamique;
