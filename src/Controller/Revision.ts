import { Cour } from "../model/Cours";
import { Examen } from "../model/Examen";
import { FicheRevision } from "../model/FicheRevision";
import { Matter } from "../model/Matter";

import { makeAutoObservable } from "mobx";
import { FicheExamen } from "../model/FicheExamen";

class Revision {
  Fiches: FicheRevision[] = [];
  Cours: Cour[] = [];
  Matters: Matter[] = [];
  Examens: Examen[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  AddMatter(name: string) {
    var id =
      this.Matters.length === 0
        ? 0
        : this.Matters[this.Matters.length - 1].id + 1;
    this.Matters.push({
      Name: name,
      id: id,
    } as Matter);
    return id;
  }
  AddCour(name: string, IdMatter: string) {
    var id =
      this.Cours.length === 0 ? 0 : this.Cours[this.Cours.length - 1].id + 1;
    this.Cours.push({
      Name: name,
      IdMatter: IdMatter,
      id: id,
    } as Cour);
    return id;
  }
  AddFiche(name: string, IdCours: string, Difficulty: number) {
    var id =
      this.Fiches.length === 0 ? 0 : this.Fiches[this.Fiches.length - 1].id + 1;
    this.Fiches.push({
      Name: name,
      IdCours: IdCours,
      Difficulty: Difficulty,
      id: id,
    } as FicheRevision);
    return id;
  }
  AddExamen(name: string, date: Date) {
    var id =
      this.Examens.length === 0
        ? 0
        : this.Examens[this.Examens.length - 1].id + 1;
    this.Examens.push({
      Name: name,
      Date: date,
      id: id,
    } as Examen);
    return id;
  }
  AddFicheToExamen(id: number, importance: number, idFiche: number) {
    this.Examens[id].Fiche.push({
      idDeLaFiche: idFiche,
      ImportanceDeLaFiche: importance,
    } as FicheExamen);
  }
}

export default Revision;
