import React from 'react';

function NameList() {
    const names = ['Bilal', 'Ahmad', 'Abdullah', 'Saif']
    const nameList = names.map((name,index) => {
        return <h1 key={index}>{name}</h1>
    })
    return <div>{nameList}</div>
}

export default NameList;
