// Composant principal : regroupe tous les composants/exercices du TP.
import Compteur from './Compteur';
import MessageBouton from './MessageBouton';
import FormulaireNom from './FormulaireNom';
import CompteurEffet from './CompteurEffet';
import AffichageDynamique from './AffichageDynamique';
import FormulaireInscription from './FormulaireInscription';
import CompteurEffetPersonnalise from './CompteurEffetPersonnalise';

function App() {
  return (
    <main>
      <h1>LAB 2 - React</h1>

      <section>
        <h2>Compteur (useState)</h2>
        <Compteur />
      </section>

      <section>
        <h2>Message (useState)</h2>
        <MessageBouton />
      </section>

      <section>
        <h2>Formulaire Nom (contrôlé)</h2>
        <FormulaireNom />
      </section>

      <section>
        <h2>Compteur avec effet (useEffect)</h2>
        <CompteurEffet />
      </section>

      <section>
        <h2>Exercice 1 : Affichage dynamique</h2>
        <AffichageDynamique />
      </section>

      <section>
        <h2>Exercice 2 : Formulaire d'inscription</h2>
        <FormulaireInscription />
      </section>

      <section>
        <h2>Exercice 3 : Compteur + document.title</h2>
        <CompteurEffetPersonnalise />
      </section>
    </main>
  );
}

export default App;

