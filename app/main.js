import React from 'react';
import Layout from '../src';
import { render } from 'react-dom';
import './main.less';
render( <Layout className="myContainer" container spacing={24} justify="center" alignItems="flex-end">
    <Layout className="myItem" item xs={2}style={{height:"80px"}} >
        <div>{"contains 2"}</div>
    </Layout>
    <Layout  className="myItem" item xs={8}>
         <div>{"8"}</div>
    </Layout>
    <Layout className="myItem" xs={2}item style={{height:"80px"}}>
        <div>{"2"}</div>
    </Layout>
</Layout>, document.getElementById("root"))