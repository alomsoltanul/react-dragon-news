// import React from 'react';

const News = ({ news }) => {
    const { title, image_url,published_date } = news;
    return (
        <div>
            
            <div className="card card-compact  bg-base-100 shadow-xl mb-4">
                <figure><img src={image_url} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div>
                        <h6>{published_date}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;