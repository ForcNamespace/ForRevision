import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { RevisionContext } from "..";

const Cours = observer(() => {
  const Revision = useContext(RevisionContext);
  return (
    <div>
      {Revision.Cours.map(({ id, Name, IdMatter }) => (
        <p key={id}>
          {id}&gt;{Name}:{IdMatter}
        </p>
      ))}
    </div>
  );
});

export default Cours;
