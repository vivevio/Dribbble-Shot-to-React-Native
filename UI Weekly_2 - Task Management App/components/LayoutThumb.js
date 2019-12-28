import React from "react";
import Svg, { Rect } from "react-native-svg";

const style1 = props => (
  <Svg width={16} height={13} fill="none" {...props}>
    <Rect width={16} height={6} rx={1} fill="#3E80FF" />
    <Rect y={7} width={16} height={6} rx={1} fill="#3E80FF" />
  </Svg>
);

const style2 = props => (
  <Svg width={20} height={13} fill="none" {...props}>
    <Rect width={14} height={13} rx={1} fill="#BAC5E9" />
    <Rect x={16} width={4} height={13} rx={1} fill="#BAC5E9" />
  </Svg>
);

export default {
    style1, style2
};