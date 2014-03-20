module languages/Java-1.5/interfaces/types/subtype

imports
	
	include/Java
	lib/task/-
	lib/types/-
	lib/properties/-
	lib/relations/-
	
	languages/Java-1.5/interfaces/trans/desugar
	languages/Java-1.5/types/types/widening

relations

	define transitive <extends:

type rules
	
	ExtendsInterfaces(i, it) :-
	where store i <widens-ref: it
    and store i <extends: it
