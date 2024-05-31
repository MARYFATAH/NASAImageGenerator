// FetchImage.js

import React, { useState, useEffect } from 'react';
import ErrorComponent from './ErrorComponent';
import LoadingComponent from './LoadingComponent';

import './App.css'

const FetchImage = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchDataFromNasa = async () => {
            try {
                const response = await fetch(
                    'https://api.nasa.gov/planetary/apod?api_key=OyfTxhiXibjKbG9uMqHy2CLJdn45cAWuGeCC5dPy'
                );
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                let postData = await response.json();
                setData(postData);
                setError(null);
                console.log(postData);
            } catch (err) {
                setError(err.message);
                setData(null);
            }
        };
        fetchDataFromNasa();
    }, []);

    if (error) {
        return <div>
            <ErrorComponent
            title="Oops! Something went wrong."
            message="We couldn't process your request. Please try again later."
            />
        </div>;
    }

    if (!data) {
        return <div>
            <LoadingComponent message="Loading, please wait..." />
        </div>;
    }

    return (
        <div>
            <div class="bg">
            </div>
            <div class="nft">
                <div class='main'>
                    <img class='tokenImage'  src={data.url} alt={data.title}  />
                    <h2>{data.title}<br/>Date: {data.date}</h2>
                    <p class='description'> {data.explanation}</p>
                    <div class='tokenInfo'>
                    </div>
                        <hr />
                        <div class='creator'>
                            <p><ins>Creation of</ins> NASA</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default FetchImage; 
