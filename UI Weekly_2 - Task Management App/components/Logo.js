import React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const Logo = props => (
  <Svg width={42} height={44} fill="none" {...props}>
    <Rect
      x={1.105}
      y={1.105}
      width={39.789}
      height={41.519}
      rx={15.695}
      fill="#fff"
      stroke="#EBF2FF"
      strokeWidth={2.211}
    />
    <Path
      d="M9.947 18.909a5.646 5.646 0 015.646-5.646h4.302V29.29a4.974 4.974 0 01-9.947 0V18.91z"
      fill="#3ECDFF"
    />
    <Path
      d="M32.053 24.196a5.646 5.646 0 01-5.646 5.646h-4.302V13.816a4.974 4.974 0 119.947 0v10.38z"
      fill="#3E80FF"
    />
  </Svg>
);

export default Logo;