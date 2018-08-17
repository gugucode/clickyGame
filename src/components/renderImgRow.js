import React from 'react';

const RenderImgRow = props => {
    const img1 = props.img[0];
    const img2 = props.img[1];
    const img3 = props.img[2];
    const img4 = props.img[3];

    const cardImg = {
        height: '180px',
        width: '13em'
    };

    return (
        <div className="row justify-content-md-center">
            <div key={img1.name} className="col-5 col-md-3 align-self-center" onClick={props.handleClick}>
                    <img name={img1.name} className="card-img-top img-thumbnail m-1" style={cardImg} src={img1.img} alt={img1.name} />                            
            </div>
            <div key={img2.name} className="col-5 col-md-3 align-self-center" onClick={props.handleClick}>
                    <img name={img2.name} className="card-img-top img-thumbnail m-1" style={cardImg} src={img2.img} alt={img1.name} />                            
            </div>
            <div key={img3.name} className="col-5 col-md-3 align-self-center" onClick={props.handleClick}>
                    <img name={img3.name} className="card-img-top img-thumbnail m-1" style={cardImg} src={img3.img} alt={img1.name} />                            
            </div> 
            <div key={img4.name} className="col-5 col-md-3 align-self-center" onClick={props.handleClick}>
                    <img name={img4.name} className="card-img-top img-thumbnail m-1" style={cardImg} src={img4.img} alt={img1.name} />                            
            </div>            
        </div>
    )
};
    
export default RenderImgRow;