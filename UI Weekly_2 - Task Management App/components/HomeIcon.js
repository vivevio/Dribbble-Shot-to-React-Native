import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = props => (
  <Svg width={22} height={22} fill="none" {...props}>
    <Path
      d="M19.831 6.61H2.169V4.39h17.662v2.22zM17.611 0H4.39v2.169h13.22V0zM22 11v8.831c0 .62-.207 1.136-.62 1.55-.413.412-.93.619-1.549.619H2.169c-.62 0-1.136-.207-1.55-.62C.208 20.967 0 20.45 0 19.831V11c0-.62.207-1.136.62-1.55.413-.412.93-.636 1.549-.67h17.662c.62.034 1.136.258 1.55.67.412.414.619.93.619 1.55z"
      fill="#3E80FF"
    />
  </Svg>
);

export default HomeIcon;