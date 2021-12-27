import { Membre } from "./membre";

export class Etudiant implements Membre{
    id:string;
    nom:string;
    prenom :string;
    email :string;
    dateNaissance :Date;
    cin :string;
    cv :string;
    password :string;
    diplome? :string;
    sujet? :string;
    dateInscription  ?: Date;
}
