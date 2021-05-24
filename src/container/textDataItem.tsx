import React from 'react';
import { useRecoilValue } from "recoil";
import { textState } from "../Atom/AtomContainer";

interface DummyData {
    id: number;
    text: string;
}

const textData: Array<DummyData> = [
    {
        id: 1,
        text: "안녕하세요 여러분 저는 임창규라고 합니다."
    },
    {
        id: 2,
        text: "이건. 좀. 아니지."
    }
]

const TextDataItem: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const text = useRecoilValue(textState);
    return (
        <div>{text}</div>
    );
}

export default TextDataItem
