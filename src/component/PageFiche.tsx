import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { RevisionContext } from "..";
import { FicheRevision } from "../model/FicheRevision";
import Modal from "./modal";

const Fiche = observer(() => {
  const Revision = useContext(RevisionContext);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [objectInEdit, setObjectInEdit] = useState<FicheRevision>({
    Color: "#B53419",
    Difficulty: 1,
  } as FicheRevision);
  const setModalClose = () => {
    setModalIsOpen(false);
    Revision.AddFiche(
      objectInEdit.Name,
      objectInEdit.IdCours,
      objectInEdit.Difficulty,
      objectInEdit.Color
    );
    setObjectInEdit({ Color: "#B53419", Difficulty: 1 } as FicheRevision);
  };
  return (
    <div>
      <Modal
        on={modalIsOpen}
        deactivate={() => {
          setModalIsOpen(false);
          setObjectInEdit({} as FicheRevision);
        }}
        deactivateText="Annuler"
        activate={() => setModalClose()}
        activateText="Créer"
        title="Création un cour"
        Content={() => (
          <div className="flex flex-col">
            <label htmlFor="FicheName">
              Nom de la fiche :{" "}
              <input
                name="FicheName"
                type="text"
                value={objectInEdit.Name}
                onChange={(e) => {
                  objectInEdit.Name = e.currentTarget.value;
                  setObjectInEdit(objectInEdit);
                }}
              />
            </label>

            <select
              value={objectInEdit.IdCours}
              onChange={(e) => {
                setObjectInEdit({
                  ...objectInEdit,
                  IdCours: parseInt(e.currentTarget.value),
                });
              }}
            >
              <option hidden defaultChecked>
                Sélectionne un cours
              </option>
              {Revision.Cours.map(({ id, Name, IdMatter }) => (
                <option key={Name} value={id}>
                  {IdMatter !== undefined && Revision.Matters[IdMatter].Name}{" "}
                  &gt; {Name}
                </option>
              ))}
            </select>
            <label htmlFor="difficulté">
              Difficulté (/10) :{" "}
              <input
                name="difficulté"
                type="number"
                value={objectInEdit.Difficulty}
                min={1}
                max={10}
                onChange={(e) => {
                  objectInEdit.Difficulty = e.currentTarget.valueAsNumber;
                  setObjectInEdit(objectInEdit);
                }}
              />
            </label>
            <label htmlFor="color">
              Choisis la couleur
              <input
                name="color"
                type="color"
                value={objectInEdit.Color}
                onChange={(e) => {
                  objectInEdit.Color = e.currentTarget.value;
                  setObjectInEdit(objectInEdit);
                }}
              />
            </label>
          </div>
        )}
      />
      <button onClick={() => setModalIsOpen(true)}>Add Fiche</button>
      {Revision.Fiches.map(({ id, Name, IdCours, Difficulty }) => (
        <p key={id}>
          {id}&gt;{Name}:{IdCours !== undefined && Revision.Cours[IdCours].Name}
          :{Difficulty}
        </p>
      ))}
    </div>
  );
});

export default Fiche;
