import React from 'react';
import {
Stack,
Container
} from 'react-bootstrap';
import "./Brief.css";


const Bar = (props) => {
return (
<Container className="text-center">
            <Stack direction="vertical" gap={3}>
                        {
                        props.items.map(function(item){
                            return item;
                        })}
            </Stack>
</Container>
);
};

export default Bar;
