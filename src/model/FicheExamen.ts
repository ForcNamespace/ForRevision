import { Apprentissage } from "./Apprentissage";

export interface FicheExamen {
  idDeLaFiche: number;
  ImportanceDeLaFiche: number;
  Apprentissage: Array<Apprentissage>;
}
