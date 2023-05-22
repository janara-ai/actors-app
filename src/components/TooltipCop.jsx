import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const TooltipCop = ({id, name}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
    
      <Tooltip
       
        isOpen={tooltipOpen}
        target={id}
        toggle={toggle}
      >
        {name}
      </Tooltip>
    </div>
  );
}

export default TooltipCop;