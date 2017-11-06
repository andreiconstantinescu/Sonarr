import { createAction } from 'redux-actions';
import * as types from 'Store/Actions/actionTypes';

//
// Action Types

// TODO: fix these action types
export const SET = types.SET; // 'base/set';

export const UPDATE = types.UPDATE; // 'base/update';
export const UPDATE_ITEM = types.UPDATE_ITEM; // 'base/updateItem';
export const UPDATE_SERVER_SIDE_COLLECTION = types.UPDATE_SERVER_SIDE_COLLECTION; // 'base/updateServerSideCollection';

export const SET_SETTING_VALUE = types.SET_SETTING_VALUE; // 'base/setSettingValue';
export const CLEAR_PENDING_CHANGES = types.CLEAR_PENDING_CHANGES; // 'base/clearPendingChanges';

export const REMOVE_ITEM = types.REMOVE_ITEM; // 'base/removeItem';

//
// Action Creators

export const set = createAction(SET);

export const update = createAction(UPDATE);
export const updateItem = createAction(UPDATE_ITEM);
export const updateServerSideCollection = createAction(UPDATE_SERVER_SIDE_COLLECTION);

export const setSettingValue = createAction(SET_SETTING_VALUE);
export const clearPendingChanges = createAction(CLEAR_PENDING_CHANGES);

export const removeItem = createAction(REMOVE_ITEM);
