import React, { useContext } from "react";
import { RevisionContext } from "../..";
import { observer } from "mobx-react-lite";

const Kanban = observer(() => {
  const Revision = useContext(RevisionContext);
  return (
    <div className="flex flex-col">
      <p>{Revision.Cours.length}</p>
      <button onClick={() => Revision.AddCour("jojo", 1)}>CLICK MEEE</button>
    </div>
  );
});

export default Kanban;
