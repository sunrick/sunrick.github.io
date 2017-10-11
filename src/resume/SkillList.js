import React, { Component } from 'react';

import { Labels, Label } from '../components.js'

const SkillList = (props) => (
  <div>
    <h4>{props.title}</h4>
    <Labels>
      {props.items.map((item, index) => (
        <Label key={index}>{item}</Label>
      ))}
    </Labels>
  </div>
)

export default SkillList
