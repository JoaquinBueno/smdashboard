import React from 'react';

export default function CardSmallLikes({icon, growth, likes}) {
    return(
        <div className="card-small">
                            <p className="card-small-views">Likes</p>
                            <p className="card-small-icon">
                            <img src={icon} alt=""/>
                            </p>
                            <p className="card-small-number">{likes}</p>
                            <p className="card-small-percentage">
                            <span>
                                <img src="images/icon-up.svg" alt=""/>
                                {growth}%
                            </span>
                            </p>
                        </div>
    )
}