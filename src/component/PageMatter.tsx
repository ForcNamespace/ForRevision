import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { RevisionContext } from "..";
import { Matter } from "../model/Matter";
import Modal from "./modal";

const Matters = observer(() => {
  const Revision = useContext(RevisionContext);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [objectInEdit, setObjectInEdit] = useState<Matter>({} as Matter);
  const setModalClose = () => {
    setModalIsOpen(false);
    Revision.AddMatter(objectInEdit.Name);
    setObjectInEdit({} as Matter);
  };
  return (
    <div>
      <Modal
        on={modalIsOpen}
        deactivate={() => {
          setModalIsOpen(false);
          setObjectInEdit({} as Matter);
        }}
        deactivateText="Annuler"
        activate={() => setModalClose()}
        activateText="Créer"
        title="Création de matière"
        Content={() => (
          <div>
            <label htmlFor="MatterName">Nom de la matière :</label>
            <input
              name="MatterName"
              type="text"
              value={objectInEdit.Name}
              onChange={(e) => {
                objectInEdit.Name = e.currentTarget.value;
                setObjectInEdit(objectInEdit);
              }}
            />
          </div>
        )}
      />
      <button onClick={() => setModalIsOpen(true)}>Add Matter</button>
      {Revision.Matters.map(({ id, Name }) => (
        <p key={id}>
          {id}&gt;{Name}
        </p>
      ))}
    </div>
  );
});

export default Matters;
