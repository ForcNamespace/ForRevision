import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { RevisionContext } from "..";
import { Examen } from "../model/Examen";
import Modal from "./modal";

const Examens = observer(() => {
  const Revision = useContext(RevisionContext);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [objectInEdit, setObjectInEdit] = useState<Examen>({} as Examen);
  const setModalClose = () => {
    setModalIsOpen(false);
    Revision.AddExamen(objectInEdit.Name, objectInEdit.Date);
    setObjectInEdit({} as Examen);
  };
  return (
    <div>
      <Modal
        on={modalIsOpen}
        deactivate={() => {
          setModalIsOpen(false);
          setObjectInEdit({} as Examen);
        }}
        deactivateText="Annuler"
        activate={() => setModalClose()}
        activateText="Créer"
        title="Création un Examen"
        Content={() => (
          <div className="flex flex-col">
            <label htmlFor="ExamenName">Nom de l'examen :</label>
            <input
              name="ExamenName"
              type="text"
              value={objectInEdit.Name}
              onChange={(e) => {
                objectInEdit.Name = e.currentTarget.value;
                setObjectInEdit(objectInEdit);
              }}
            />
            <label htmlFor="ExamenDate">Date de l'examen :</label>
            <input
              name="ExamenDate"
              type="date"
              value={objectInEdit.Date?.toDateString()}
              onChange={(e) => {
                if (e.currentTarget.valueAsDate != null)
                  objectInEdit.Date = e.currentTarget.valueAsDate;
                setObjectInEdit(objectInEdit);
              }}
            />
          </div>
        )}
      />
      <button onClick={() => setModalIsOpen(true)}>Add Examen</button>
      {Revision.Examens.map(({ id, Name, Date, Fiche }) => (
        <div key={id}>
          <p>
            {id}&gt;{Name} : {Date}
          </p>
          {Fiche &&
            Fiche.map(({ idDeLaFiche, ImportanceDeLaFiche, Apprentissage }) => (
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

export default Examens;
