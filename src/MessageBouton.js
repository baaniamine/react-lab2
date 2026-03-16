import { useState } from 'react';

// Composant MessageBouton : change un message via un clic (useState).
function MessageBouton() {
  // State : message affiché à l'écran.
  const [message, setMessage] = useState('Cliquez sur le bouton');

  // Met à jour le message quand l'utilisateur clique.
  function changerMessage() {
    setMessage('Vous avez cliqué sur le bouton !');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={changerMessage}>Cliquer</button>
    </div>
  );
}

export default MessageBouton;

