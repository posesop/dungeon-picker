import { actionPrefix } from 'redux/utils';

/* Prefix all action types */
const ACTION_PREFIX = 'MODAL';
const prefix = actionPrefix(ACTION_PREFIX);

/* Action types */
export const OPEN = prefix('SHOW');
export const CLOSE = prefix('CLOSE');

