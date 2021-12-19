import React, { useContext } from "react";
import { RevisionContext } from "../..";
import { Cour } from "../../model/Cours";
import { observer } from "mobx-react-lite";

const Kanban = observer(() => {
  const Revision = useContext(RevisionContext);
  return (
    <div className="flex flex-col">
      <p>{Revision.Cours.length}</p>
      <button
        onClick={() =>
          Revision.Cours.push({ id: 0, Name: "JOJO", IdMatter: "0" } as Cour)
        }
      >
        CLICK MEEE
      </button>
    </div>
  );
});

export default Kanban;
