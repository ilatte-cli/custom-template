import React from "react";
import { useAtom } from "jotai";
import commonStore from '../store/index';
import Button from 'antd/es/button';

const Index = () => {

    const [store, setStore] = useAtom(commonStore);

    return (
        <>
            <h1>name: {store.name}</h1>
            <Button 
                onClick={() => setStore((store) => ({...store, count: store.count + 1}))}
                >click ++
            </Button>
            <h1>count: {store.count}</h1>
        </>
    )
}

export default Index;