import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const Wheel4 = React.memo(function Wheel4({
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
      viewBox="0 0 1109.000000 1280.000000"
      version="1.1"
      
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
      >
        <path d="M6170 11934 c-822 -475 -1589 -917 -1703 -983 l-208 -119 1 -487 c0 -268 -3 -485 -8 -483 -4 1 -193 110 -419 241 -226 130 -414 237 -417 237 -4 0 -767 -439 -1696 -975 -929 -537 -1696 -978 -1705 -981 -13 -6 -15 -212 -13 -1982 l3 -1976 1646 -951 c905 -522 1673 -966 1707 -986 33 -20 64 -33 69 -29 8 9 824 480 830 480 1 0 4 -219 5 -487 l3 -487 1685 -972 c927 -535 1694 -978 1705 -984 18 -9 251 122 1725 974 l1705 984 2 1973 3 1974 -410 235 c-225 129 -415 238 -422 243 -11 6 -11 8 0 15 7 4 197 113 422 242 l410 235 0 1978 c0 1128 -4 1977 -9 1977 -5 0 -773 441 -1706 980 -934 539 -1701 980 -1704 979 -3 0 -679 -390 -1501 -865z m1210 -1274 l0 -1291 -22 12 c-26 14 -1983 1142 -2126 1226 l-93 54 1113 644 c612 354 1116 644 1121 644 4 1 7 -580 7 -1289z m1706 650 c610 -352 1110 -644 1112 -648 1 -4 -485 -288 -1080 -632 -596 -343 -1098 -633 -1115 -643 l-33 -19 0 1291 c0 710 1 1291 3 1291 2 0 503 -288 1113 -640z m-3117 -1805 c611 -352 1110 -643 1111 -646 0 -3 -122 -76 -271 -162 l-270 -156 -847 489 -847 489 -3 316 c-1 196 1 315 7 313 5 -1 509 -291 1120 -643z m4527 -1932 c-2 -2 -477 270 -1057 605 -580 334 -1082 624 -1117 644 l-63 35 1118 646 1118 645 3 -1286 c1 -707 0 -1287 -2 -1289z m-7376 626 l0 -1291 -22 14 c-13 8 -517 299 -1121 648 l-1098 633 58 33 c32 18 533 307 1113 643 580 335 1058 610 1063 610 4 1 7 -580 7 -1290z m870 1137 l265 -154 2 -978 3 -979 -217 -125 c-119 -69 -243 -140 -275 -158 l-58 -33 0 1290 c0 710 3 1291 8 1291 4 0 126 -70 272 -154z m1407 -812 c301 -174 549 -318 551 -319 3 -3 -1092 -635 -1101 -635 -4 0 -7 286 -7 635 0 349 2 635 4 635 2 0 251 -142 553 -316z m1983 -491 l0 -318 -223 -128 c-122 -70 -246 -141 -275 -158 l-52 -31 2 319 3 318 270 157 c149 86 271 157 273 157 1 1 2 -142 2 -316z m1575 -253 c479 -276 956 -552 1062 -613 l192 -111 -27 -16 c-15 -9 -138 -81 -274 -159 l-247 -142 -846 487 -845 488 0 318 0 317 58 -33 c31 -19 449 -260 927 -536z m-7191 -765 c581 -335 1056 -612 1056 -615 0 -5 -2102 -1222 -2197 -1273 l-33 -17 0 1290 0 1291 59 -33 c32 -18 534 -307 1115 -643z m4486 362 l0 -314 -281 -162 -282 -162 -221 127 c-122 70 -245 141 -273 158 -35 20 -49 33 -40 38 112 68 1084 627 1090 628 4 0 7 -141 7 -313z m1128 -1295 l-3 -318 -270 156 -270 156 0 324 0 324 270 156 270 156 3 -318 c1 -175 1 -461 0 -636z m1691 318 c0 -3 -247 -147 -549 -321 l-550 -317 0 638 0 638 550 -316 c302 -175 549 -319 549 -322z m-4242 158 c145 -83 263 -154 263 -158 0 -8 -524 -310 -539 -310 -14 0 -541 302 -541 310 0 9 524 309 539 309 8 1 133 -67 278 -151z m1143 -660 l280 -161 0 -314 c0 -172 -3 -313 -6 -313 -4 0 -1006 576 -1077 619 l-27 17 272 157 c150 86 274 157 275 157 1 0 128 -73 283 -162z m3972 1 c145 -83 264 -152 265 -153 3 -2 70 37 -1192 -691 -550 -317 -1010 -583 -1022 -591 l-23 -14 0 317 0 318 788 455 c433 250 812 469 842 487 30 18 61 30 67 28 7 -2 131 -72 275 -156z m-6826 -2586 c-3 -3 -1012 576 -2129 1222 l-107 63 1117 645 1118 645 3 -1286 c1 -707 0 -1287 -2 -1289z m927 2387 l217 -125 -3 -978 -2 -979 -265 -154 c-146 -84 -268 -153 -272 -154 -5 0 -8 581 -8 1291 l0 1290 58 -33 c32 -18 156 -89 275 -158z m3120 -490 l217 -125 0 -318 0 -318 -42 25 c-24 14 -146 85 -273 158 l-230 133 -3 318 -2 318 58 -33 c32 -18 156 -89 275 -158z m-1751 -302 c374 -216 535 -314 525 -319 -8 -5 -256 -148 -552 -319 -295 -170 -539 -310 -541 -310 -2 0 -4 286 -4 636 0 592 1 636 17 630 9 -4 259 -147 555 -318z m5088 -969 l0 -1291 -32 20 c-18 11 -522 302 -1120 647 l-1088 627 988 570 c543 314 1043 603 1112 643 69 40 128 74 133 74 4 1 7 -580 7 -1290z m-3687 162 c147 -85 267 -157 267 -160 -1 -5 -2207 -1281 -2231 -1289 -6 -2 -8 117 -7 313 l3 317 845 488 c465 269 848 488 851 487 3 -1 126 -71 272 -156z m567 -1961 c0 -710 -2 -1290 -4 -1290 -3 0 -495 283 -1095 630 -601 346 -1103 636 -1118 644 -26 13 -26 14 -7 25 66 41 2210 1279 2217 1280 4 1 7 -579 7 -1289z m1739 630 c594 -343 1081 -627 1081 -631 0 -3 -190 -115 -422 -249 -233 -134 -733 -423 -1112 -642 -379 -219 -691 -398 -693 -398 -2 0 -3 581 -3 1290 l0 1290 34 -17 c18 -10 520 -299 1115 -643z" />
      </g>
    </svg>
  );
});
