# UiLayout
react layout component

### current just simple flex layout

**Target** muliti Layout

### Properties: 
 defaultValue of Properties:
 >
    alignContent: 'stretch',
    alignItems: 'stretch',
    container: false,
    direction: 'row',
    item: false,
    justify: 'flex-start',
    spacing: 16,
    wrap: 'wrap'

### Support 
12 grid layout use xs/sm/md/lg/xl/common

```
// according to bootstrap 4.0

// https://v4.bootcss.com/docs/4.0/layout/overview/
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.99px) { ... }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.99px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.99px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.99px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```
Extraordinary for not mention service size, you can just simple provide className like "grid-6/ grid-12"

**AutoLayout**
<Layout grid={number} /> We will auto expand the rest space to every sub item.

spacing between the same level items can be set 0, 8, 16, 24, 40.


### Usage
1. with tag xs... and the total size is 12
```
<Layout container justify="center" alignContent="flex-start" xs>
    <Layout item xs={3}>
     Item1
    </Layout>
     <Layout item xs={4}>
     Item2
    </Layout> 
    <Layout item xs={5}>
    Item3
    </Layout>
</Layout>

```
2. default is equal
```
<Layout container justify="center" alignContent="flex-start">
    <Layout item>
     Item1
    </Layout>
     <Layout item>
     Item2
    </Layout> 
    <Layout item>
    Item3
    </Layout>
</Layout>
```
3. with class tag

```
<Layout container justify="center" alignContent="flex-start">
    <Layout item className="grid-4">
     Item1
    </Layout>
     <Layout item>
     Item2
    </Layout> 
    <Layout item>
    Item3
    </Layout>
</Layout>
```

### Demo
[Demo case](https://shirleyr.github.io/UiLayout/index.html)