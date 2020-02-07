import { __test } from './test'
import { Not, And, Or, XOr } from '../type-level/logical'

__test<'1', Not<'0'>, '1'>()
__test<'0', Not<'1'>, '1'>()

__test<'1', And<'1', '1'>, '1'>()
__test<'0', And<'1', '0'>, '1'>()
__test<'0', And<'0', '1'>, '1'>()
__test<'0', And<'0', '0'>, '1'>()

__test<'1', Or<'1', '1'>, '1'>()
__test<'1', Or<'1', '0'>, '1'>()
__test<'1', Or<'0', '1'>, '1'>()
__test<'0', Or<'0', '0'>, '1'>()

__test<'0', XOr<'1', '1'>, '1'>()
__test<'1', XOr<'1', '0'>, '1'>()
__test<'1', XOr<'0', '1'>, '1'>()
__test<'0', XOr<'0', '0'>, '1'>()
