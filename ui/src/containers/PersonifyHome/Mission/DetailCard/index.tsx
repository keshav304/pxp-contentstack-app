import React from 'react';
import "./style.scss";

interface DetailCardProps {
    heading: String;
    subheading:String;
    children: React.ReactNode | React.ReactNode[];
  }
  

const DetailCard:React.FC<DetailCardProps> = ({heading, subheading, children}) => {
        return (
          <div className="card-container">
            <h2 className="heading">
                <span>
                    {heading}
                    <span className="subheading">
                        {subheading}
                    </span>
                </span>
            </h2>
            <div>
               {children}
            </div>
          </div>
        )
}
export default DetailCard