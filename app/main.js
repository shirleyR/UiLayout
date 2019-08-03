import React from 'react';
import Layout from '../src';
import { render } from 'react-dom';
import './main.less';
render( 
<Layout className="container" container spacing={0} xs justify="center" xl={true} alignItems="flex-end">
    <Layout className="item grid-2" item xs ={5} xl={2}style={{height:"80px"}} >
        <div>{" xs-5 & xl-2"}</div>
    </Layout>
    <Layout className="item" item xs={2} xl={2}style={{height:"80px"}} >
        <div>{" xs-2 & xl-2"}</div>
    </Layout>
    <Layout  className="item" item xs={2} xl={6}>
         <div>{"xs-2&xl-6"}</div>
    </Layout>
    <Layout className="item" xl={2} xs={3}item style={{height:"80px"}}>
        <div>{"xs-3&xl-2"}</div>
    </Layout>
</Layout>, document.getElementById("root"))