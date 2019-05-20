import React from "react";

const Image = props => {
    return (
        <div>

            <div className="image-container">
                <img src={props.imgSrc} />
            </div>
        </div>
    );
};

export default Image;
// 