export type Bool = '0' | '1'

interface UnaryTable {
  '0': Bool
  '1': Bool
}

interface BinaryTable {
  '0': Record<Bool, Bool>
  '1': Record<Bool, Bool>
}

interface NotTable extends UnaryTable {
  '0': '1'
  '1': '0'
}

interface AndTable extends BinaryTable {
  '0': { '0': '0', '1': '0' }
  '1': { '0': '0', '1': '1' }
}

interface OrTable extends BinaryTable {
  '0': { '0': '0', '1': '1' }
  '1': { '0': '1', '1': '1' }
}

interface XOrTable extends BinaryTable {
  '0': { '0': '0', '1': '1' }
  '1': { '0': '1', '1': '0' }
}

// unary
export type Not<A extends Bool> = NotTable[A]

// binary
export type And<A extends Bool, B extends Bool> = AndTable[A][B]
export type Or<A extends Bool, B extends Bool> = OrTable[A][B]
export type XOr<A extends Bool, B extends Bool> = XOrTable[A][B]

export type NAnd<A extends Bool, B extends Bool> = Not<And<A, B>>
export type NOr<A extends Bool, B extends Bool> = Not<Or<A, B>>
