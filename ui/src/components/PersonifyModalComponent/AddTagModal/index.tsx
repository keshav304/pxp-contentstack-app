import React from 'react';
import { ModalHeader, ModalBody,ModalFooter,ButtonGroup,Button } from '@contentstack/venus-components';
import "./style.scss";

// interface ModalProps {
//     closeModal : ()=>void;
// }

const AddTagModal:React.FC<any> = (props) => {
  const [tag,setTag] = React.useState("")
        return (
          <div className="addTagModal">
            <ModalHeader closeModal={props.closeModal} />
    
            <ModalBody className='modalBodyCustomClass'>
              <form>
                <div>
                  <input className="addTagInput" id="tags" name="tags" type="text" value={tag} onChange={(e)=>setTag(e.target.value)} placeholder="Add tag" spellCheck="true"/>
                </div>
                <div>
                  <Button className="addTagBtn">Add tag</Button>
                </div>
              </form>
            </ModalBody>
          </div>
        )
}
export default AddTagModal