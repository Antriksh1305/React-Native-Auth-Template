import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SVGComponent = (props) => (
      <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="email"
            {...props}
      >
            <G fill="#134563">
                  <Path d="m55.5 18.8-1.9-1.9L36 34.5c-2.2 2.2-5.9 2.2-8.1 0L10.3 17l-1.9 1.9L21.5 32 8.4 45.1l1.9 1.9 13.1-13.1 2.6 2.6c1.6 1.6 3.7 2.5 5.9 2.5s4.3-.9 5.9-2.5l2.6-2.6L53.5 47l1.9-1.9L42.3 32l13.2-13.2" />
                  <Path d="M51.8 50.4H12.3c-2.3 0-4.2-1.9-4.2-4.2V18c0-2.3 1.9-4.2 4.2-4.2h39.5c2.3 0 4.2 1.9 4.2 4.2v28.2c0 2.3-1.9 4.2-4.2 4.2zM12.2 16.5c-.8 0-1.4.6-1.4 1.4v28.2c0 .8.6 1.4 1.4 1.4h39.5c.8 0 1.4-.6 1.4-1.4V17.9c0-.8-.6-1.4-1.4-1.4H12.2z" />
            </G>
      </Svg>
);
export default SVGComponent;