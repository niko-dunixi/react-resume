import React from 'react';
import { AiFillPrinter } from 'react-icons/ai';

export const PrintMe = () => {
    return <div>
        <a className='style-control-link' role="button" onClick={() => { window.print() }}><AiFillPrinter />Print Me!</a>
    </div>;
}

export const StyleControls = () => {
    return <div className='style-controls'>
        <PrintMe />
    </div>;
};

export default StyleControls;