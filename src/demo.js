import React from 'react';
import Layout from './Layout';

import { render } from 'react-dom';
render( <Layout container justify="center" alignItems="flex-end">
    <Layout item style={{height:"100px"}} >
        <div>{"Option3"}</div>
    </Layout>
    <Layout item style={{width:"30px"}}>
    <div>{"Option4"}</div>
    </Layout>
    <Layout item style={{height:"40px"}}>
    <div>{"Option7"}</div>
    </Layout>
</Layout>, document.getElementById("root"))