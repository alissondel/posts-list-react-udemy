import P from 'prop-types';
import './styles.css';
import { React, Component } from 'react';

export class Button extends Component {
  render() {
    const { text, onClickBtn, disabled = false } = this.props;

    return (
      <button className="button" onClick={onClickBtn} disabled={disabled}>
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClickBtn: P.func.isRequired,
  disabled: P.bool,
};
