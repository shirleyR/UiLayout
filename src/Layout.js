import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

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
            justify, 
            children, 
            ...rest 
        } = this.props;
        const containerClass = cx({
            ['gFlexLayout-container']: !!container,
            ['gFlexLayout-item']: !!item,
            [`spacing-xs-${String(spacing)}`]: container && spacing !== 0,
            [`direction-xs-${String(direction)}`]: direction !== defaultGridProps.direction,
            [`wrap-xs-${String(wrap)}`]: wrap !== defaultGridProps.wrap,
            [`align-items-xs-${alignItems}`]: alignItems !== defaultGridProps.alignItems,
            [`justify-xs-${justify}`] : justify !== defaultGridProps.justify,
            [`align-content-xs-${alignContent}`]: alignContent !== defaultGridProps.alignContent
        } ,className);

        return (
            <div className={containerClass} {...rest}>
                {children}
            </div>
        )
    }
}
Layout.propTypes = {
    alignContent: PropTypes.string,
    alignItems: PropTypes.string,
    container: PropTypes.bool,
    direction: PropTypes.string,
    item: PropTypes.bool,
    justify: PropTypes.string,
    spacing: PropTypes.number,
    wrap: PropTypes.string
}
Layout.defaultProps = {
    alignContent: 'stretch',
    alignItems: 'stretch',
    container: false,
    direction: 'row',
    item: false,
    justify: 'flex-start',
    spacing: 16,
    wrap: 'wrap'
}
