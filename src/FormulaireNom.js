import { useState } from 'react';

// Composant FormulaireNom : exemple de formulaire contrôlé (un champ "Nom").
function FormulaireNom() {
  // State : valeur saisie dans l'input.
  const [nom, setNom] = useState('');

  // Met à jour le state à chaque saisie.
  function handleChange(event) {
    setNom(event.target.value);
  }

  // Intercepte la soumission et affiche la valeur dans une alerte.
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Le nom saisi est : ${nom}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={nom} onChange={handleChange} />
      </label>
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default FormulaireNom;

