import React from 'react';
import { 
  Letter1,
  Letter2,
  Letter3,
  Letter4,
  Letter5,
  Letter6,
  Letter7,
  Letter8,
  Letter9,
  Letter10,
} from './LoadingStyle';

/**
 * Loading component.
 */
class Loading extends React.Component {
  /**
   * render
   * @return {ReactElement} - Markup.
   */
  render() {
    return (
      <div>
        <Letter1>L</Letter1>
        <Letter2>o</Letter2>
        <Letter3>a</Letter3>
        <Letter4>d</Letter4>
        <Letter5>i</Letter5>
        <Letter6>n</Letter6>
        <Letter7>g</Letter7>
        <Letter8>.</Letter8>
        <Letter9>.</Letter9>
        <Letter10>.</Letter10>
      </div>
    );
  }
}

export default Loading;