module languages/Java-1.5/types/types/widening

imports
	
	include/Java
	lib/task/-
	lib/types/-
	lib/properties/-
	lib/relations/-
	
	languages/Java-1.5/types/types/references
	
relations

  a-ty <widens: e-ty
  where a-ty <widens-prim: e-ty
     or a-ty <widens-ref: e-ty

	a-ty <widens-ref: e-ty
	where a-ty == Null()
     or (a-ty <is: Interface() and e-ty <is: Object())
     or (a-ty <is: Array() and e-ty <is: Object())
     or (a-ty <is: Array() and e-ty <is: Cloneable())
     or (a-ty <is: Array() and e-ty <is: Serializable())
     or a-ty <widens-array: e-ty
 
	ArrayType(a-ty) <widens-array: ArrayType(e-ty)
	where a-ty <widens-ref: e-ty

  Byte()   <widens-prim: Short()
  Byte()   <widens-prim: Int()
  Byte()   <widens-prim: Long()
  Byte()   <widens-prim: Float()
  Byte()   <widens-prim: Double()
  
  Short()  <widens-prim: Int()
  Short()  <widens-prim: Long()
  Short()  <widens-prim: Float()
  Short()  <widens-prim: Double()
  
  Char()   <widens-prim: Int()
  Char()   <widens-prim: Long()
  Char()   <widens-prim: Float()
  Char()   <widens-prim: Double()
  
  Int()    <widens-prim: Long()
  Int()    <widens-prim: Float()
  Int()    <widens-prim: Double()
   
  Long()   <widens-prim: Float()
  Long()   <widens-prim: Double()
  
  Float()  <widens-prim: Double()

