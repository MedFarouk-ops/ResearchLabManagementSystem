import { Membre } from "./membre";

export class EnseignementChercheur implements Membre{
    id:string;
    nom:string;
    prenom:string;
    email:string;
    dateNaissance:Date;
    cin:string;
    cv:string;
    password:string;
    grade?:string;
    etablissement ?: string;
}
