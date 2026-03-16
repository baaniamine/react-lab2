import { useEffect, useRef, useState } from 'react';

// Exercice 3 : compteur + useEffect pour mettre à jour document.title.
function CompteurEffetPersonnalise() {
  // Nombre de clics.
  const [clics, setClics] = useState(0);

  // On mémorise le titre initial pour le restaurer si le composant se démonte.
  const titreInitial = useRef(document.title);

  useEffect(() => {
    // Nettoyage : rétablit le titre initial au démontage.
    return () => {
      document.title = titreInitial.current;
    };
  }, []);

  useEffect(() => {
    document.title = `Nombre de clics : ${clics}`;
  }, [clics]);

  return (
    <div>
      <p>Nombre de clics : {clics}</p>
      <button onClick={() => setClics(clics + 1)}>Incrémenter</button>
    </div>
  );
}

export default CompteurEffetPersonnalise;
