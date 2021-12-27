export interface Membre {
    id:string;
    nom:string;
    prenom:string;
    email:string;
    dateNaissance?:Date;
    cin:string;
    cv:string;
    password:string;
    diplome?:string;
    grade?:string;
    sujet?:string;
    dateInscription ?: Date;
    etablissement ?: string;
}

