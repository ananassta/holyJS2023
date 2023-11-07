import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const Wheel1 = React.memo(function Wheel1({
  className,
  color,
  x,
  y,
  width,
  onClick,
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
      className={`rotate ${className}`}
      viewBox="0 0 29.483686 29.483757"
      version="1.1"
      
    >
      <g
        id="g10"
        transform="matrix(0.03527778,0,0,-0.03527778,-14.549521,132.87816)"
      >
        <path
          d="m 837.02,3342.75 -7.754,6.31 238.884,293.57 7.76,-6.31 -238.89,-293.57"
          id="path222"
        />
        <path
          d="m 837.934,3344.48 -9.579,2.86 108.36,362.64 9.578,-2.86 -108.359,-362.64"
          id="path224"
        />
        <path
          d="m 833.656,3340.93 -1.023,9.95 376.507,38.67 1.02,-9.95 -376.504,-38.67"
          id="path218"
        />
        <path
          d="m 835.516,3341.51 -4.746,8.8 333.05,179.8 4.74,-8.8 -333.044,-179.8"
          id="path220"
        />
        <path
          d="m 1123.56,3103.14 -293.572,238.89 6.313,7.75 293.569,-238.88 -6.31,-7.76"
          id="path214"
        />
        <path
          d="m 1194.35,3232.76 -362.635,108.36 2.859,9.58 362.646,-108.36 -2.87,-9.58"
          id="path216"
        />
        <path
          d="m 831.715,3341.12 -362.645,108.36 2.864,9.58 362.64,-108.36 -2.859,-9.58"
          id="path200"
        />
        <path
          d="m 457.152,3302.26 -1.023,9.96 376.504,38.66 1.023,-9.95 -376.504,-38.67"
          id="path202"
        />
        <path
          d="m 502.469,3161.7 -4.746,8.8 333.047,179.81 4.746,-8.8 -333.047,-179.81"
          id="path204"
        />
        <path
          d="m 598.137,3049.18 -7.754,6.31 238.883,293.57 7.754,-6.31 -238.883,-293.57"
          id="path206"
        />
        <path
          d="m 729.574,2981.83 -9.578,2.87 108.359,362.64 9.579,-2.86 -108.36,-362.65"
          id="path208"
        />
        <path
          d="m 866.836,2968.89 -38.668,376.5 9.953,1.03 38.664,-376.5 -9.949,-1.03"
          id="path210"
        />
        <path
          d="m 1008.55,3010.49 -179.804,333.04 8.797,4.75 179.807,-333.05 -8.8,-4.74"
          id="path212"
        />
        <path
          d="m 828.168,3345.39 -38.664,376.51 9.949,1.02 38.668,-376.5 -9.953,-1.03"
          id="path194"
        />
        <path
          d="m 828.746,3343.53 -179.805,333.05 8.797,4.75 179.805,-333.05 -8.797,-4.75"
          id="path196"
        />
        <path
          d="m 829.988,3342.03 -293.566,238.89 6.308,7.75 293.571,-238.89 -6.313,-7.75"
          id="path198"
        />
        <path
          d="M 833.145,3340.91 H 454.691 v 10 h 378.454 v -10"
          id="path178"
        />
        <path
          d="m 829.809,3310.19 -373.414,61.57 1.632,9.86 373.414,-61.56 -1.632,-9.87"
          id="path180"
        />
        <path
          d="m 831.23,3341.29 -349.648,144.83 3.828,9.24 349.649,-144.83 -3.829,-9.24"
          id="path182"
        />
        <path
          d="m 816.395,3314.18 -321.43,199.78 5.285,8.49 321.43,-199.77 -5.285,-8.5"
          id="path184"
        />
        <path
          d="m 829.609,3342.37 -267.605,267.61 7.066,7.07 267.61,-267.61 -7.071,-7.07"
          id="path186"
        />
        <path
          d="m 805.531,3323.01 -220.508,307.57 8.125,5.83 220.508,-307.57 -8.125,-5.83"
          id="path188"
        />
        <path
          d="m 828.523,3343.99 -144.828,349.65 9.239,3.82 144.828,-349.64 -9.239,-3.83"
          id="path190"
        />
        <path
          d="m 798.871,3335.32 -86.019,368.55 9.738,2.27 86.019,-368.55 -9.738,-2.27"
          id="path192"
        />
        <path
          d="m 1073.14,3055.4 -220.507,307.58 8.125,5.83 220.502,-307.58 -8.12,-5.83"
          id="path156"
        />
        <path
          d="m 973.355,2994.34 -144.832,349.65 9.239,3.83 144.832,-349.65 -9.239,-3.83"
          id="path158"
        />
        <path
          d="m 943.699,2985.67 -86.019,368.55 9.738,2.28 86.02,-368.55 -9.739,-2.28"
          id="path160"
        />
        <path
          d="m 838.145,2967.45 h -10 v 378.46 h 10 v -378.46"
          id="path162"
        />
        <path
          d="m 807.297,2969.16 -9.867,1.63 61.562,373.41 9.863,-1.63 -61.558,-373.41"
          id="path164"
        />
        <path
          d="m 692.934,2994.34 -9.239,3.83 144.828,349.65 9.239,-3.83 -144.828,-349.65"
          id="path166"
        />
        <path
          d="m 665.09,3007.73 -8.496,5.28 199.777,321.43 8.496,-5.28 -199.777,-321.43"
          id="path168"
        />
        <path
          d="m 569.07,3074.76 -7.066,7.07 267.605,267.61 7.071,-7.07 -267.61,-267.61"
          id="path170"
        />
        <path
          d="m 548.469,3097.79 -5.832,8.12 307.578,220.51 5.832,-8.13 -307.578,-220.5"
          id="path172"
        />
        <path
          d="m 485.41,3196.46 -3.828,9.24 349.648,144.83 3.829,-9.24 -349.649,-144.83"
          id="path174"
        />
        <path
          d="m 475.184,3225.61 -2.274,9.74 368.551,86.02 2.273,-9.74 -368.55,-86.02"
          id="path176"
        />
        <path
          d="m 807.297,3347.61 -9.867,1.63 61.562,373.41 9.863,-1.63 -61.558,-373.41"
          id="path132"
        />
        <path
          d="m 837.762,3343.99 -9.239,3.83 144.832,349.64 9.239,-3.82 -144.832,-349.65"
          id="path134"
        />
        <path
          d="m 809.918,3357.37 -8.496,5.28 199.778,321.44 8.5,-5.29 -199.782,-321.43"
          id="path136"
        />
        <path
          d="m 836.68,3342.37 -7.071,7.07 267.611,267.61 7.07,-7.07 -267.61,-267.61"
          id="path138"
        />
        <path
          d="m 816.074,3365.39 -5.832,8.13 307.578,220.51 5.83,-8.13 -307.576,-220.51"
          id="path140"
        />
        <path
          d="m 835.059,3341.29 -3.829,9.24 349.65,144.83 3.83,-9.24 -349.651,-144.83"
          id="path142"
        />
        <path
          d="m 824.828,3370.44 -2.273,9.74 368.545,86.02 2.28,-9.74 -368.552,-86.02"
          id="path144"
        />
        <path d="M 1211.6,3340.91 H 833.145 v 10 H 1211.6 v -10" id="path146" />
        <path
          d="m 1208.26,3310.19 -373.412,61.57 1.632,9.86 373.41,-61.56 -1.63,-9.87"
          id="path148"
        />
        <path
          d="m 1180.88,3196.46 -349.65,144.83 3.829,9.24 349.651,-144.83 -3.83,-9.24"
          id="path150"
        />
        <path
          d="m 1166.04,3169.35 -321.431,199.78 5.282,8.5 321.429,-199.78 -5.28,-8.5"
          id="path152"
        />
        <path
          d="m 1097.22,3074.76 -267.611,267.61 7.071,7.07 267.61,-267.61 -7.07,-7.07"
          id="path154"
        />
        <path
          d="m 838.145,3345.91 h -10 v 378.45 h 10 v -378.45"
          id="path130"
        />
        <path
          d="m 833.145,3723.79 c -208.364,0 -377.883,-169.52 -377.883,-377.88 0,-208.37 169.519,-377.88 377.883,-377.88 208.365,0 377.875,169.51 377.875,377.88 0,208.36 -169.51,377.88 -377.875,377.88 z m 0,-795.76 c -230.422,0 -417.883,187.46 -417.883,417.88 0,230.42 187.461,417.88 417.883,417.88 230.415,0 417.875,-187.46 417.875,-417.88 0,-230.42 -187.46,-417.88 -417.875,-417.88"
          id="path126"
        />
        <path
          d="m 833.145,3714.36 c -203.165,0 -368.454,-165.29 -368.454,-368.45 0,-203.17 165.289,-368.46 368.454,-368.46 203.165,0 368.455,165.29 368.455,368.46 0,203.16 -165.29,368.45 -368.455,368.45 z m 0,-756.91 c -214.196,0 -388.454,174.26 -388.454,388.46 0,214.19 174.258,388.45 388.454,388.45 214.195,0 388.455,-174.26 388.455,-388.45 0,-214.2 -174.26,-388.46 -388.455,-388.46"
          id="path128"
        />
      </g>
    </svg>
  );
});
