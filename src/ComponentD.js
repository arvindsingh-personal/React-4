import React from 'react'
import { useContext } from 'react'
import { UserContext } from './ComponentA'

export default function ComponentD() {
    const username = useContext(UserContext)
    return (
        <div>
            <h1></h1>
            <div>ComponentD</div>
            <p>{username}</p>
        </div>
    )
}
