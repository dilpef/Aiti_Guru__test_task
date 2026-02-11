import { useDispatch, useSelector } from 'react-redux';

import type { TypeDispatch, TypeState } from './type';

export const useAppDispatch = useDispatch.withTypes<TypeDispatch>();
export const useAppSelector = useSelector.withTypes<TypeState>();
