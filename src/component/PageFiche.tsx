import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { RevisionContext } from "..";

const Fiche = observer(() => {
  const Revision = useContext(RevisionContext);
  return (
    <div>
      {Revision.Fiches.map(({ id, Name, IdCours, Difficulty }) => (
        <p key={id}>
          {id}&gt;{Name}:{IdCours}:{Difficulty}
        </p>
      ))}
    </div>
  );
});

export default Fiche;
