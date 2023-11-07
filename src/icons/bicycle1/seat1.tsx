import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const Seat1 = React.memo(function Seat1({
  className,
  color,
  x,
  y,
  onClick,
  width,
  angle,
}: IIconProps) {
  const style: CSSProperties = {};
  if (y) {
    style.top = `${y}`;
  }
  if (x) {
    style.left = `${x}`;
  }
  return (
    <svg
      transform={angle ? `rotate(${angle})` : undefined}
      onClick={onClick}
       width={width ? `${width}px` : undefined}
      style={style}
      fill={color}
      className={className}
      viewBox="0 0 21.951593 8.1001167"
      version="1.1"
      
    >
      <path
        d="m 21.115375,3.7874049 c -1.05834,-0.687916 -2.77813,-0.846666 -5.18584,-1.084791 -2.7252,-0.264584 -6.4293697,-0.608542 -10.8479097,-1.93145902 -1.00542,-0.3175 -2.83104,-0.820208 -3.57188,-0.767291 -0.58208004,0.02646 -1.03187004,0.3175 -1.29646004,0.79375 -0.34395,0.60854102 -0.26458,1.45520802 0.18521,2.22250002 0.58209,0.978958 1.82563004,2.063749 3.30729004,2.751666 l 1.50813,1.5875 c 0.60854,0.635 1.03187,0.687917 1.85208,0.687917 1.53459,0 2.40771,0.02646 3.1749997,0.02646 0.55563,0 1.00542,0.02646 1.61396,0.02646 1.21708,0 1.42875,-0.15875 4.10104,-2.169583 l 0.15875,-0.132292 c 0.44979,0.05292 1.00542,0.185209 1.5875,0.3175 0.97896,0.211667 1.98438,0.423334 2.72521,0.423334 0.10583,0 0.21167,0 0.3175,-0.02646 0.55563,-0.05292 1.03188,-0.47625 1.16417,-1.058333 0.15875,-0.582083 -0.13229,-1.243542 -0.79375,-1.666875 z m -10.87438,3.518958 c -0.7408297,0 -1.6404097,-0.02646 -3.1749997,-0.02646 -0.71437,0 -0.87312,-0.02646 -1.27,-0.449792 l -0.47625,-0.502708 c 0.3175,0.05292 0.60854,0.105833 0.92604,0.132292 1.13771,0.07937 2.3548,-0.132292 3.65125,-0.3175 1.4816697,-0.238125 3.1485497,-0.502709 5.0270897,-0.423334 -2.09021,1.561042 -2.2225,1.5875 -3.06917,1.5875 -0.60854,0 -1.05833,0 -1.61396,0 z m 10.90084,-1.984375 c -0.0529,0.238125 -0.26459,0.423334 -0.50271,0.449792 -0.635,0.07937 -1.77271,-0.185208 -2.77813,-0.396875 -0.66146,-0.15875 -1.29646,-0.291042 -1.82562,-0.343958 -0.635,-0.07937 -1.27,-0.105834 -1.85209,-0.105834 -1.64041,0 -3.09562,0.238125 -4.4185397,0.449792 -1.29646,0.211667 -2.43416,0.396875 -3.46604,0.3175 -2.35479,-0.15875 -4.55083,-1.852083 -5.21229,-3.042708 C 0.76891526,2.1205299 0.71599526,1.5384469 0.90120526,1.1680299 1.0334953,0.92990488 1.2451653,0.82407188 1.5362053,0.79761388 v 0 c 0.34396,-0.02646 1.40229,0.15875 3.28083,0.74083302 4.49792,1.349375 8.2549997,1.719792 11.0066697,1.984375 2.27542,0.211667 3.94229,0.370417 4.81542,0.9525 0.39687,0.211666 0.58208,0.529166 0.50271,0.846666 z"
        id="path1"
      />
    </svg>
  );
});
