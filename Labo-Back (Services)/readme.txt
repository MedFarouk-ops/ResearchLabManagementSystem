Partie back avec les micro-services suivant: 
 - Membre service (MS)
 - Event service (ES)
 - Outil service (OS)
 - publication service (PS)

le (MS) doit comminiquer avec tous les autre micro-services : 
	=> on doit creer les beans suivant dans MS :
		- EventBean
		- OutilBean
		- PublicationBean 
	=> on doit creer les proxies suivant dans MS :
		- EventServiceProxy
		- OutilServiceProxy
		- PublicationServiceProxy
