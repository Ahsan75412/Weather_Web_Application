import React from 'react';

const ButtonSearch = () => {
    return (
        <div className='wrap'>
            <div className="search">
                <input type="search" placeholder='type city name..' id="search" />
            </div>
            <button className='searchButton'>search city</button>
        </div>
    );
};

export default ButtonSearch;