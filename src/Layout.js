import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.css';
import './base.less';

const defaultGridProps = {
    alignContent: 'stretch',
    alignItems: 'stretch',
    container: false,
    direction: 'row',
    item: false,
    justify: 'flex-start',
    spacing: 16,
    wrap: 'wrap'
};
const gridSize = [true, false, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export default class Layout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { 
            className, 
            container, 
            item, 
            alignContent, 
            alignItems,
            direction, 
            spacing, 
            wrap,
            grid, 
            justify,
            children,
            size, 
            ...rest 
        } = this.props;
        let classObj = {
            ['gFlexLayout-container']: !!container,
            ['gFlexLayout-item']: !!item
        };
        ["common", "xs", 'sm', 'md', 'lg', 'xl'].forEach((sizeTag) => {
            const itemTagOrSize = rest[sizeTag];
            if (typeof itemTagOrSize === 'number') {
                // child tag value is size, prop is tag
                const specClass = {
                    // [`spacing-${sizeTag}-${String(spacing)}`]: container && spacing !== 0,
                    [`spacing-${sizeTag}-${String(spacing)}-item`]: item && spacing,
                    [`direction-${sizeTag}-${String(direction)}`]: direction !== defaultGridProps.direction,
                    [`wrap-${sizeTag}-${String(wrap)}`]: wrap !== defaultGridProps.wrap,
                    [`align-items-${sizeTag}-${alignItems}`]: alignItems !== defaultGridProps.alignItems,
                    [`justify-${sizeTag}-${justify}`] : justify !== defaultGridProps.justify,
                    [`align-content-${sizeTag}-${alignContent}`]: alignContent !== defaultGridProps.alignContent,
                    [`grid-${sizeTag}-${String(itemTagOrSize)}`]: !!itemTagOrSize 
                };
                classObj = {...classObj, ...specClass};
            } else if(typeof itemTagOrSize === 'boolean' && itemTagOrSize){
                const specClass = {
                    [`spacing-${sizeTag}-${String(spacing)}`]: container && spacing !== 0,
                    [`direction-${sizeTag}-${String(direction)}`]: direction !== defaultGridProps.direction,
                    [`wrap-${sizeTag}-${String(wrap)}`]: wrap !== defaultGridProps.wrap,
                    [`justify-${sizeTag}-${justify}`] : justify !== defaultGridProps.justify,
                    [`align-content-${sizeTag}-${alignContent}`]: alignContent !== defaultGridProps.alignContent
                };
                classObj = {...classObj, ...specClass};
            }
        });
        const containerClass = cx(classObj ,className);
        let finalLayout = children;
        if(container){
            finalLayout = React.Children.map(children, (child)=>{
                if(React.isValidElement(child)){
                    return React.cloneElement(child, {
                        spacing
                    })
                }
            });
        }

        return (
            <div className={containerClass} {...rest}>
                {finalLayout}
            </div>
        )
    }
}
Layout.propTypes = {
    alignContent: PropTypes.oneOf(["stretch", "flex-start", "flex-end", "center", "space-around", "space-between"]),
    alignItems: PropTypes.oneOf(["flex-start", "flex-end", "center", "stretch", "baseline"]),
    container: PropTypes.bool,
    direction: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
    item: PropTypes.bool,
    justify: PropTypes.oneOf(["flex-start", "flex-end", "center", "space-around", "space-between"]),
    size: PropTypes.string,
    xs: PropTypes.oneOf(gridSize),
    sm: PropTypes.oneOf(gridSize),
    md: PropTypes.oneOf(gridSize),
    lg: PropTypes.oneOf(gridSize),
    xl: PropTypes.oneOf(gridSize),
    space: PropTypes.oneOf([0, 8, 16, 24, 40]),
    wrap: PropTypes.oneOf(["wrap", "nowrap", "wrap-reverse"])
}
Layout.defaultProps = {
    alignContent: 'flex-start',
    alignItems: 'stretch',
    container: false,
    direction: 'row',
    item: false,
    justify: 'flex-start',
    spacing: 16,
    wrap: 'wrap'
}
