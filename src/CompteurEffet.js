import { useState, useEffect } from 'react';

// Composant CompteurEffet : utilise useEffect pour réagir au changement d'état.
function CompteurEffet() {
  const [compte, setCompte] = useState(0);

  // Effet : s'exécute après chaque changement de "compte".
  useEffect(() => {
    console.log(`Le compteur est à ${compte}`);
  }, [compte]);

  return (
    <div>
      <button onClick={() => setCompte(compte + 1)}>
        Incrémenter avec effet
      </button>
    </div>
  );
}

export default CompteurEffet;

