'use client'
import { ReactNode, createContext, useContext, useReducer } from "react"

type IAction = {
    type:'ADD',
    payload:number
}

interface IState{
    ids:number[]
}

interface IActionState{
    handleChangeView:(id:number)=>void
}

interface IContextState extends IState,IActionState{

}

const Context = createContext<IContextState>({} as IContextState)
function reducer(state:IState,action:IAction){
    console.log('HOLA MUNDO DESDE ANTES DEL SWITCH',action.type)
  switch(action.type){
    case 'ADD':{
        console.log('HOLA MUNDO DESDE EL SWITCH')
        state.ids.push(action.payload)
        return {
            ...state,
            ids:state.ids
        }
    }
  }
}


export function ContextTest({children}:{children:ReactNode}){
    const [state,dispatch] = useReducer(reducer,{ids:[]})

    const handleChangeView = () =>{
        console.log('HOLA MUNDO DESDE LA LINEA 35 DE EL USECAUSES')
        dispatch({type:'ADD',payload:1})
    }

    return <Context.Provider value={{handleChangeView,ids:state.ids}}>{children}</Context.Provider>
}

export function useCauses(){
    return useContext(Context)
}