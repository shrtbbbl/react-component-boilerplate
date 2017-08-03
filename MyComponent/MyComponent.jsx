import React from 'react';
import PropTypes from 'prop-types';
import './MyComponent.scss';

/**
 * Just a simple boilerplate component
 */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="MyComponent">
        {props.children && props.children}
      </div>
    );
  }
}

/**
 * Set default props with defaultProps
 * @link https://github.com/facebook/prop-types/
 */
MyComponent.defaultProps = {
  children: false,
};

/**
 * Typechecking props avec PropTypes
 * @link https://github.com/facebook/prop-types/
 */
MyComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyComponent;
