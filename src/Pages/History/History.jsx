import React from 'react';
import Card from '../../Components/CardHistory/Card';
import { DataHistory } from './StaticData';
import BackButton from '../../Components/Button/BackButton';

function History(props) {
    return (
        <div className="container mx-auto page-wrapper">
            <br />
            <BackButton/>
            <h3 className="text-center text-page-title">History</h3>
            {
                DataHistory.map((item, idx) => (
                    <Card data={item} key={idx}/>
                ))
            }
        </div>
    );
}

export default History;