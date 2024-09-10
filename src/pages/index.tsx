import React from "react";
import { useAtom } from "jotai";
import commonStore from '../store/index';

const Index = () => {

    const [store, setStore] = useAtom(commonStore);

    return (
        <>
            <button 
                onClick={() => setStore((store) => ({...store, count: store.count + 1}))}
                >click ++
            </button>
            <h1>count: {store.count}</h1>
            <h1>name: {store.name}</h1>
        </>
    )
}

export default Index;