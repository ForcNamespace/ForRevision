import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { RevisionContext } from "..";

const Matter = observer(() => {
  const Revision = useContext(RevisionContext);
  return (
    <div>
      {Revision.Matters.map(({ id, Name }) => (
        <p key={id}>
          {id}&gt;{Name}
        </p>
      ))}
    </div>
  );
});

export default Matter;
