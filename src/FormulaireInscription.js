import { useState } from 'react';

// Exercice 2 : formulaire contrôlé (Prénom + Email) avec alerte à la soumission.
function FormulaireInscription() {
  // Champs contrôlés du formulaire.
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    // Empêche le rechargement de la page.
    event.preventDefault();
    alert(`Prénom : ${prenom}\nEmail : ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Prénom :
        <input
          type="text"
          value={prenom}
          onChange={(event) => setPrenom(event.target.value)}
        />
      </label>

      <label>
        Email :
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <button type="submit">Soumettre</button>
    </form>
  );
}

export default FormulaireInscription;
