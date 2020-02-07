import { __test } from './test'
import { Head, Tail, Init } from '../type-level/lists'

__test<'a', Head<['a']>, '1'>()
__test<'a', Head<['a', 'b']>, '1'>()
__test<'a', Head<['a', 'b', ...'any'[]]>, '1'>()
__test<'a', Head<'a'[]>, '1'>()

__test<[], Init<[]>, '1'>()
__test<['any'], Init<['any']>, '1'>()
__test<['any'], Init<['any', 'x']>, '1'>()
__test<['any', 'x'], Init<['any', 'x', 'x']>, '1'>()
__test<['any', 'x'], Init<['any', 'x', 'y']>, '1'>()

__test<[], Tail<[]>, '1'>()
__test<[], Tail<['any']>, '1'>()
__test<['x'], Tail<['any', 'x']>, '1'>()
__test<['x', 'x'], Tail<['any', 'x', 'x']>, '1'>()
__test<['x', 'y', ...'z'[]], Tail<['any', 'x', 'y', ...'z'[]]>, '1'>()
