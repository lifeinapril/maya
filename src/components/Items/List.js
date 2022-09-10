import React from 'react';
import {
Stack,
ListGroupItem
} from 'react-bootstrap';
import "../../css/Brief.css";
import  { FcApproval } from "react-icons/fc";


const List = (props) => {
return (
<>
            <Stack direction="vertical" gap={4}>
                        {
                        props.items.map(function(item){
                            return (
                                <ListGroupItem className="dark" key={item}>
                                 <FcApproval />   {item.title}
                                </ListGroupItem>
                            )
                        })}
            </Stack>
</>
);
};

export default List;
