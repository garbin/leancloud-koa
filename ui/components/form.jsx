import React from 'react';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import Joi from 'joi';
import _ from 'lodash';

var {PropTypes} = React;

export default class Form extends React.Component {
  validatorTypes = {}
  static propTypes = {
    errors: PropTypes.object,
    validate: PropTypes.func,
    isValid: PropTypes.func,
    handleValidation: PropTypes.func,
    getValidationMessages: PropTypes.func,
    clearValidations: PropTypes.func,
    fields: PropTypes.object
  }
  getValidatorData(){
    var data = {};
    _.keys(this.props.fields).map((name)=>{
      try { data[name] = this.props.fields[name].value; } catch (e) {}
    });

    return data;
  }
}
