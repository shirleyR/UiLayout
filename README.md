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

### Usage
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
### Test