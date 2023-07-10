import React from 'react';
import "./styles.scss";
import { Tooltip ,Button } from '@contentstack/venus-components';

interface TooltipButtonProps {
    title: String;
    tooltipContent:String;
  }
  

const TooltipButton:React.FC<TooltipButtonProps> = ({title, tooltipContent}) => {
        return (
        <div className="TooltipWrapper">
            <div
                style={{
                marginBottom: '20px'
                }}
            >
                <Tooltip
                content={tooltipContent}
                position="bottom"
                type="primary"
                variantType="dark"
                showArrow={true}
                >
                <Button buttonType="primary" style={{backgroundColor: "#ff6d00"}}>
                    {title}
                </Button>
                </Tooltip>
            </div>
        </div>
        )
}
export default TooltipButton