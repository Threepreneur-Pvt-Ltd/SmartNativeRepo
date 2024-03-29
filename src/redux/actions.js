/* eslint-disable import/no-cycle */
/* SETTINGS */
export const CHANGE_LOCALE = 'CHANGE_LOCALE';

/* AUTH */
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const VERIFY_OTP = 'VERIFY_OTP';
export const VERIFY_OTP_ERROR = 'VERIFY_OTP_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';
export const PROFILE_GET_DATA = 'PROFILE_GET_DATA';
export const PROFILE_GET_DATA_SUCCESS = 'PROFILE_GET_DATA_SUCCESS';
export const PROFILE_GET_DATA_ERROR = 'PROFILE_GET_DATA_ERROR';
export const PROFILE_ADD_DATA = 'PROFILE_ADD_DATA';
export const PROFILE_ADD_DATA_SUCCESS = 'PROFILE_ADD_DATA_SUCCESS';
export const PROFILE_ADD_DATA_ERROR = 'PROFILE_ADD_DATA_ERROR';

/* MENU */
export const MENU_SET_CLASSNAMES = 'MENU_SET_CLASSNAMES';
export const MENU_CONTAINER_ADD_CLASSNAME = 'MENU_CONTAINER_ADD_CLASSNAME';
export const MENU_CLICK_MOBILE_MENU = 'MENU_CLICK_MOBILE_MENU';
export const MENU_CHANGE_DEFAULT_CLASSES = 'MENU_CHANGE_DEFAULT_CLASSES';
export const MENU_CHANGE_HAS_SUB_ITEM_STATUS =
  'MENU_CHANGE_HAS_SUB_ITEM_STATUS';

/* PROFILE */
export const PROFILE_UPDATE_DATA = 'PROFILE_UPDATE_DATA';
export const PROFILE_UPDATE_DATA_SUCCESS = 'PROFILE_UPDATE_DATA_SUCCESS';
export const PROFILE_UPDATE_DATA_ERROR = 'PROFILE_UPDATE_DATA_ERROR';

export * from './settings/actions';
