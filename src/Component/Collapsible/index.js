import React from 'react';
import { Collapsible, CollapsibleItem, Icon} from 'react-materialize';
import { FiCompass } from 'react-icons/fi';

const Index = ({header, card, children}) => {
    return (
        <div>
<Collapsible accordion>
  <CollapsibleItem
    expanded={false}
    header={header}
    icon={<Icon style={{color:"#e01860"}}><FiCompass/></Icon>}
    node="div"
          >
        {children}
  </CollapsibleItem>
</Collapsible>
        </div>
    ) 
}

export default Index;