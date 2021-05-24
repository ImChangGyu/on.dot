import React from 'react';
import TextDataItem from "../../container/textDataItem"
import "./textBox.css";
import { useRecoilState } from "recoil"
import { textState } from '../../Atom/AtomContainer';



const TextBox: React.FC = (  ) => {
    return (
    <div className="textbox">
        <TextDataItem />
    </div>
    );
}

export default  TextBox;