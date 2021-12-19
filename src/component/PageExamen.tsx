import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { RevisionContext } from "..";

const Examen = observer(() => {
  const Revision = useContext(RevisionContext);
  return (
    <div>
      {Revision.Examens.map(({ id, Name, Date, Fiche }) => (
        <div key={id}>
          <p>
            {id}&gt;{Name}:{Date}
          </p>
          {Fiche.map(({ idDeLaFiche, ImportanceDeLaFiche, Apprentissage }) => (
            <div key={idDeLaFiche}>
              <p>ID de la fiche : {idDeLaFiche}</p>
              <p>Importance : {ImportanceDeLaFiche}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
});

export default Examen;
