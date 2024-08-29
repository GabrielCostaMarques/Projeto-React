import { useContext } from 'react'
import { SomeContext } from '../components/HookuseContext'

import HookReducer from '../components/HookReducer'
import HookReducerWithAction from '../components/HookReducerWithAction'
import HookuseEffect from '../components/HookuseEffect'

import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookImperativeHandle from '../components/HookImperativeHandle'

const Home = () => {
    const {contextValue}=useContext(SomeContext)
    return (
        <div>
                <HookReducer />
                <HookReducerWithAction />
                <HookuseEffect />
                <hr/>
                <h2>useContext</h2>
                <p>Valor Contexto: {contextValue}</p>
                <hr />
                <hr />
                <hr />
                <HookUseRef/>
                <hr />
                <hr />
                <hr />
                <HookUseCallback/>
                <hr />
                <hr />
                <hr />
                <HookUseMemo/>
                <hr />
                <hr />
                <hr />
                <HookUseLayoutEffect/>
                <hr />
                <hr />
                <hr />
                <HookImperativeHandle/>
        </div>
    )
}

export default Home
