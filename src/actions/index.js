import { createAsyncActions } from 'utils'
import * as TYPES from './types'

export const getFavors = createAsyncActions(TYPES.GET_FAVORS)