import React from 'react'
import { HookReducer } from '../components/HookReducer'
import { HookUseEffect } from '../components/HookUseEffect'
import { HookUseContext } from '../components/HookUseContext'
import { HookUseRef } from '../components/HookUseRef'
import { HookUseCallback } from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import { HookUseImperativeHandle } from '../components/HookUseImperativeHandle'
import HookusePrevious from '../components/HookusePrevious'


export const Home = () => {
  return (
    <div>
        <HookReducer></HookReducer>
        <HookUseEffect></HookUseEffect>
        <HookUseContext></HookUseContext>
        <HookUseRef></HookUseRef>
        <HookUseCallback></HookUseCallback>
        <HookUseMemo></HookUseMemo>
        <HookUseImperativeHandle></HookUseImperativeHandle>
        <HookusePrevious></HookusePrevious>
    </div>
  )
}
