import { InifiteListErr } from './errors'

// unary
export type Head<Array extends any[]> = Array[0]
export type Last<Array extends any[]> = Array[Array['length']]
export type Init<Array extends any[]> = Array['length'] extends 0
  ? []
  : Array['length'] extends 1
  ? Array
  : Reverse<Tail<Reverse<Array>>>

export type Tail<Array extends any[]> = ((...args: Array) => void) extends (
  head: any,
  ...tail: infer Tail
) => void
  ? Tail
  : []

export type Swap<Array extends any[]> = ((...args: Array) => void) extends (
  a: infer A,
  b: infer B,
  ...tail: infer Rest
) => void
  ? ((b: B, a: A, ...tail: Rest) => void) extends (...args: infer C) => void
    ? C
    : never
  : []

interface ReverseRecur<Array extends any[], Prefix extends any[]> {
  empty: Prefix
  infinite: InifiteListErr
  nonEmpty: Reverse<Tail<Array>, Cons<Prefix, Head<Array>>>
}

export type Reverse<
  Array extends any[],
  Prefix extends any[] = []
> = ReverseRecur<Array, Prefix>[Array extends [any, ...any[]]
  ? IsFinite<Array, 'nonEmpty', 'infinite'>
  : 'empty']

// Binary
export type Cons<Array extends any[], T> = Array['length'] extends 0
  ? [T]
  : ((x: T, ...xs: Array) => void) extends (...xs: infer Prepended) => void
  ? Prepended
  : never

// Control
interface IsFiniteRecur<Array extends any[], Finite, Infinite> {
  empty: Finite
  nonEmpty: IsFinite<Tail<Array>, Finite, Infinite>
  infinite: Infinite
}
export type IsFinite<Array extends any[], Finite, Infinite> = IsFiniteRecur<
  Array,
  Finite,
  Infinite
>[Array extends []
  ? 'empty'
  : Array extends (infer Element)[]
  ? Element[] extends Array
    ? 'infinite'
    : 'nonEmpty'
  : never]
