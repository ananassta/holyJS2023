import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const Wheel3 = React.memo(function Wheel3({
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
      viewBox="0 0 1254.000000 1280.000000"
      version="1.1"
      
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
      >
        <path d="M5955 12789 c-230 -12 -515 -46 -520 -63 -2 -6 17 -159 43 -341 l48 -330 -26 -7 c-14 -4 -113 -23 -220 -42 -236 -43 -403 -78 -490 -104 -36 -11 -110 -32 -165 -47 -55 -15 -122 -35 -150 -45 -27 -11 -95 -35 -150 -55 -55 -20 -134 -51 -176 -70 l-77 -33 -133 308 c-73 170 -135 314 -139 320 -8 12 -26 5 -280 -117 -230 -110 -641 -345 -705 -403 -11 -10 -35 -25 -53 -34 -53 -27 -321 -224 -402 -296 -19 -17 -41 -35 -49 -40 -7 -4 -10 -13 -7 -19 4 -6 99 -124 212 -262 113 -139 203 -255 202 -259 -2 -3 -39 -37 -83 -75 -333 -285 -653 -624 -854 -904 -26 -36 -50 -60 -57 -57 -7 3 -131 91 -275 197 l-262 191 -18 -23 c-21 -27 -113 -159 -163 -234 -96 -142 -333 -561 -387 -680 -12 -27 -48 -106 -79 -175 -63 -135 -128 -287 -132 -308 -3 -13 46 -33 465 -197 171 -66 160 -44 102 -200 -51 -135 -80 -219 -99 -285 -8 -30 -25 -89 -37 -130 -27 -92 -53 -210 -79 -353 -10 -59 -22 -112 -25 -118 -9 -14 -65 -356 -65 -396 0 -41 22 -41 -350 1 -162 19 -296 34 -297 33 -10 -12 -23 -409 -23 -737 0 -328 13 -725 23 -737 1 -1 135 14 297 33 372 42 350 42 350 2 0 -41 56 -383 65 -397 3 -6 15 -59 25 -118 26 -143 52 -261 79 -353 12 -41 29 -100 37 -130 19 -66 48 -150 99 -285 58 -156 69 -134 -102 -200 -419 -164 -468 -184 -465 -197 4 -21 69 -173 132 -308 31 -69 67 -147 79 -175 54 -119 291 -538 387 -680 50 -75 142 -207 163 -234 l18 -23 262 191 c144 106 268 194 275 197 7 3 31 -21 57 -57 178 -248 425 -517 719 -784 160 -145 171 -154 198 -172 12 -9 22 -19 22 -23 0 -4 -92 -121 -204 -259 -113 -138 -208 -256 -212 -262 -3 -6 0 -15 7 -19 8 -5 30 -23 49 -40 81 -72 349 -269 402 -296 18 -9 42 -24 53 -34 64 -58 475 -293 705 -403 254 -122 272 -129 280 -117 4 6 66 150 139 320 l133 308 77 -33 c42 -19 121 -50 176 -70 55 -20 123 -44 150 -55 28 -10 95 -30 150 -45 55 -15 129 -36 165 -47 87 -26 254 -61 490 -104 107 -19 206 -38 220 -42 l26 -7 -48 -330 c-26 -181 -45 -335 -43 -341 3 -10 62 -20 273 -44 127 -15 443 -30 622 -30 144 0 499 22 615 38 l50 7 -36 350 c-24 236 -32 352 -25 357 5 4 44 9 86 13 78 6 97 9 320 51 181 33 205 39 275 58 33 9 101 28 150 41 198 53 590 195 700 254 22 11 44 21 50 21 5 0 70 -143 144 -318 74 -174 137 -321 142 -326 8 -9 37 4 264 116 301 149 504 269 813 482 85 59 196 142 209 158 9 10 -35 74 -204 297 l-216 284 24 19 c13 11 58 45 99 75 89 67 293 253 441 403 118 119 347 374 391 435 44 60 70 95 103 135 17 21 39 49 50 64 l20 27 285 -211 c273 -202 286 -210 300 -191 77 99 82 107 193 279 95 148 311 537 359 647 20 44 52 114 71 155 56 117 110 261 100 270 -4 4 -150 65 -323 136 -173 70 -316 128 -318 130 -2 1 12 47 31 101 57 161 134 403 156 488 12 44 28 105 36 135 53 186 110 532 121 730 7 117 7 118 36 114 38 -7 671 -64 673 -62 13 18 25 330 25 638 0 308 -12 620 -25 638 -2 2 -635 -55 -673 -62 -29 -4 -29 -3 -36 114 -11 198 -68 544 -121 730 -8 30 -24 91 -36 135 -22 85 -99 327 -156 488 -19 54 -33 100 -31 101 2 2 145 60 318 130 173 71 319 132 323 136 10 9 -44 153 -100 270 -19 41 -51 111 -71 155 -48 110 -264 499 -359 647 -111 172 -116 180 -193 279 -14 19 -27 11 -300 -191 l-285 -211 -20 27 c-11 15 -33 43 -50 64 -33 40 -59 75 -103 135 -44 61 -273 316 -391 435 -148 150 -352 336 -441 403 -41 30 -86 64 -99 75 l-24 19 216 284 c169 223 213 287 204 297 -13 16 -124 99 -209 158 -309 213 -512 333 -813 482 -227 112 -256 125 -264 116 -5 -5 -68 -152 -142 -326 -74 -175 -139 -318 -144 -318 -6 0 -28 10 -50 21 -110 59 -502 201 -700 254 -49 13 -117 32 -150 41 -70 19 -94 25 -275 58 -223 42 -242 45 -320 51 -42 4 -81 9 -86 13 -7 5 1 121 25 357 l36 350 -50 7 c-239 32 -666 44 -990 27z m565 -1679 c486 -23 974 -134 1505 -343 236 -93 560 -267 820 -440 191 -128 542 -417 696 -574 155 -159 394 -434 415 -478 7 -16 56 -88 108 -160 412 -566 707 -1310 805 -2030 34 -251 43 -388 43 -685 0 -297 -9 -434 -43 -685 -98 -720 -393 -1464 -805 -2030 -52 -71 -101 -143 -108 -160 -21 -44 -260 -319 -415 -478 -154 -157 -505 -446 -696 -574 -708 -472 -1523 -745 -2343 -783 -668 -32 -1206 53 -1867 292 -227 82 -368 147 -590 272 -460 259 -721 460 -1115 863 -172 174 -292 315 -383 446 -217 315 -256 376 -368 577 -232 418 -414 942 -499 1435 -91 535 -91 1115 0 1650 85 493 267 1017 499 1435 112 201 151 262 368 577 91 131 211 272 383 446 303 310 504 478 806 679 150 100 504 295 639 353 225 98 534 204 750 259 480 122 877 160 1395 136z" />
      </g>
    </svg>
  );
});
