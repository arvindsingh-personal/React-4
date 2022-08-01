import React from 'react'
import { createContext } from 'react'
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';

export const UserContext = createContext();

export default function ComponentA() {
  return (
    <div style={{color:'red'}}>
      <p>ComponentA</p>
      <ComponentB />
      <ComponentC />
      <UserContext.Provider value={'Arvind Singh'} >
        <ComponentD />
      </UserContext.Provider>
    </div>
  )
}
