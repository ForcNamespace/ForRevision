import { FicheExamen } from "./FicheExamen";

export interface Examen {
  id: number;
  Name: string;
  Date: Date;
  Fiche: Array<FicheExamen>;
}
