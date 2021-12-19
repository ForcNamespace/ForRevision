import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { RevisionContext } from "..";
import { Cour } from "../model/Cours";
import Modal from "./modal";

const Cours = observer(() => {
  const Revision = useContext(RevisionContext);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [objectInEdit, setObjectInEdit] = useState<Cour>({} as Cour);
  const setModalClose = () => {
    setModalIsOpen(false);
    Revision.AddCour(objectInEdit.Name, objectInEdit.IdMatter);
    setObjectInEdit({} as Cour);
  };
  return (
    <div>
      <Modal
        on={modalIsOpen}
        deactivate={() => {
          setModalIsOpen(false);
          setObjectInEdit({} as Cour);
        }}
        deactivateText="Annuler"
        activate={() => setModalClose()}
        activateText="Créer"
        title="Création un cour"
        Content={() => (
          <div>
            <label htmlFor="CourName">Nom du cour :</label>
            <input
              name="CourName"
              type="text"
              value={objectInEdit.Name}
              onChange={(e) => {
                objectInEdit.Name = e.currentTarget.value;
                setObjectInEdit(objectInEdit);
              }}
            />
            <select
              value={objectInEdit.IdMatter}
              onChange={(e) => {
                objectInEdit.IdMatter = +e.currentTarget.value;
                setObjectInEdit(objectInEdit);
              }}
            >
              <option hidden defaultChecked>
                Sélectionne une matière
              </option>
              {Revision.Matters.map(({ id, Name }) => (
                <option key={Name} value={id}>
                  {Name}
                </option>
              ))}
            </select>
          </div>
        )}
      />
      <button onClick={() => setModalIsOpen(true)}>Add Cour</button>
      {Revision.Cours.map(({ id, Name, IdMatter }) => (
        <p key={id}>
          {id}&gt;{Name} :{" "}
          {IdMatter !== undefined && Revision.Matters[IdMatter].Name}
        </p>
      ))}
    </div>
  );
});

export default Cours;
