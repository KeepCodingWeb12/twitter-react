import classNames from 'classnames';

import './Textarea.css';
import React from 'react';

const Textarea = ({ className, ...props }) => (
  <div className={classNames('textarea', className)}>
    <textarea {...props} className="textarea-input" />
  </div>
);

export default Textarea;
