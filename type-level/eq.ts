import { Or, And, Not } from './logical'

type BothAny<A, B> = And<EqAny<A>, EqAny<B>>
type NoneAny<A, B> = Not<Or<EqAny<A>, EqAny<B>>>

export type Equal<A, B> = Or<
  BothAny<A, B>,
  And<
    NoneAny<A, B>,
    And<
      Extends<A, B>,
      Extends<B, A>
    >
  >
>

export type EqAny<Type> = And<
  _Extends<Type, 0>,
  _Extends<Type, 1>
>

type _Extends<A, B> = [A] extends [B] ? '1' : '0'

export type Extends<A, B> = Or<
  EqAny<B>,
  {
    '1': EqAny<B>,
    '0': _Extends<A, B>
  }[EqAny<A>]
>
