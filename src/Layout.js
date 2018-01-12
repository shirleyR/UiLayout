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
            xs, 
            children, 
            ...rest 
        } = this.props;
        const containerClass = cx({
            ['grid']: true,
            ['gFlexLayout-container']: !!container,
            ['gFlexLayout-item']: !!item,
            ['grid']: noneMedia ,
            [`grid-${String(size)}`]:  noneMedia && size,
            ['grid-xs']: xs === true,
            [`spacing-xs-${String(spacing)}`]: container && spacing !== 0,
            [`spacing-xs-${String(spacing)}-item`]: item && spacing,
            [`direction-xs-${String(direction)}`]: direction !== defaultGridProps.direction,
            [`wrap-xs-${String(wrap)}`]: wrap !== defaultGridProps.wrap,
            [`align-items-xs-${alignItems}`]: alignItems !== defaultGridProps.alignItems,
            [`justify-xs-${justify}`] : justify !== defaultGridProps.justify,
            [`align-content-xs-${alignContent}`]: alignContent !== defaultGridProps.alignContent,
            [`grid-xs-${String(xs)}`]: xs && xs!== true
        } ,className);
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
