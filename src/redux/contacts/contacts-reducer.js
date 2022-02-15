import {combineReducers}  from 'redux';
import { addContact, deleteContact, changeFilter } from './contacts-actions';
import {  createReducer } from '@reduxjs/toolkit'

const contacts = createReducer ([ ], {
      [addContact]: (state, {payload}) => [...state, payload],
      [deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload),
  })

  const filter = createReducer ('', {
    [changeFilter]: (_, {payload}) => payload
  })

export default combineReducers({
    contacts,
    filter 
});