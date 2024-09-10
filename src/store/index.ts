import { atom } from "jotai";

const commonStore = atom({
    count: 0,
    name: 'hello jotai'
});

export default commonStore;