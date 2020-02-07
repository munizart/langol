import { __test } from './test'
import { Equal, EqAny, Extends } from '../type-level/eq'

__test<'1', EqAny<any>, '1'>()
__test<'0', EqAny<0>, '1'>()

__test<'0', Equal<0, 1>, '1'>()
__test<'1', Equal<1, 1>, '1'>()

__test<'0', Equal<[0], [any]>, '1'>()

__test<'1', Extends<1, 1>, '1'>()
__test<'0', Extends<1, 2>, '1'>()

__test<'1', Extends<1, number>, '1'>()
__test<'0', Extends<number, 3>, '1'>()

__test<'1', Extends<1, 1|2|3>, '1'>()
__test<'0', Extends<1|2|3, 1>, '1'>()

__test<'0', Extends<1, 2|3>, '1'>()
__test<'0', Extends<2|3, 1>, '1'>()
