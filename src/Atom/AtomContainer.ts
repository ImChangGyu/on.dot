import { atom } from "recoil";

interface DummyData {
    id: number;
    text: string;
}

export const textState = atom({
    key: 'textState',
    default:[] as DummyData[],
})