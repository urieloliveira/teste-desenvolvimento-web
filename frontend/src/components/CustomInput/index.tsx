/* eslint-disable */
import React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';

import { Input } from './styles';

const CustomInput: React.FC<TextFieldProps> = props => {
  return <Input {...props} />;
};

export default CustomInput;
