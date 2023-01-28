import React from 'react'

const WorkBox = (props) => {
    return (
        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title">{props.title}</p>

                    </div>
                    <div className="flip-card-back">
                        <img className="work-img" src={props.img} alt="work" />
                        <div>
                             <a className="link" target="_blank" rel="noreferrer" href={props.url}>
                            {props.buttons === "2" ? props.icon : props.icon}
                        </a>
                        {props.buttons === "2" && <a className="link" target="_blank" rel="noreferrer"
                            href={props.url2}>
                            {props.icon2}
                        </a>}
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkBox