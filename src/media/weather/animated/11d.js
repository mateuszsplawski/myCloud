import React from "react";

function Weather11d(props) {
  return (
    <svg viewBox={props.viewbox} {...props}>
      <defs>
        <filter id="prefix__blur" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation={3} />
          <feOffset dy={4} result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope={0.05} />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>
          {
            "@keyframes am-weather-cloud-1{0%,to{-webkit-transform:translate(-5px,0);-moz-transform:translate(-5px,0);-ms-transform:translate(-5px,0);transform:translate(-5px,0)}50%{-webkit-transform:translate(10px,0);-moz-transform:translate(10px,0);-ms-transform:translate(10px,0);transform:translate(10px,0)}}@keyframes am-weather-cloud-2{0%,to{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}50%{-webkit-transform:translate(2px,0);-moz-transform:translate(2px,0);-ms-transform:translate(2px,0);transform:translate(2px,0)}}@keyframes am-weather-stroke{0%,12%,16%,20%,24%,28%,4%,8%,to{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}10%,14%,18%,2%{-webkit-transform:translate(.3px,0);-moz-transform:translate(.3px,0);-ms-transform:translate(.3px,0);transform:translate(.3px,0)}6%{-webkit-transform:translate(.5px,.4px);-moz-transform:translate(.5px,.4px);-ms-transform:translate(.5px,.4px);transform:translate(.5px,.4px)}22%{-webkit-transform:translate(1px,0);-moz-transform:translate(1px,0);-ms-transform:translate(1px,0);transform:translate(1px,0)}26%{-webkit-transform:translate(-1px,0);-moz-transform:translate(-1px,0);-ms-transform:translate(-1px,0);transform:translate(-1px,0)}40%{fill:orange;-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}65%{fill:#fff;-webkit-transform:translate(-1px,5px);-moz-transform:translate(-1px,5px);-ms-transform:translate(-1px,5px);transform:translate(-1px,5px)}61%{fill:orange}}"
          }
        </style>
      </defs>
      <g filter="url(#prefix__blur)" id="prefix__thunder">
        <path
          d="M38.62 25.24c0-2.76-2.22-4.92-4.92-4.92-.6 0-1.14.12-1.68.3-.18-2.04-1.86-3.72-3.96-3.72a4.02 4.02 0 00-4.02 4.02c0 .48.12.96.24 1.38-.18-.06-.42-.06-.6-.06a4.02 4.02 0 00-4.02 4.02c0 2.16 1.74 3.96 3.9 4.02h10.32c2.64-.3 4.74-2.4 4.74-5.04z"
          fill="#91C0F8"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={0.72}
        />
        <path
          d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={1.2}
        />
        <path
          fill="orange"
          stroke="#fff"
          style={{
            WebkitAnimationName: "am-weather-stroke",
            MozAnimationName: "am-weather-stroke",
            animationName: "am-weather-stroke",
            WebkitAnimationDuration: "1.11s",
            MozAnimationDuration: "1.11s",
            animationDuration: "1.11s",
            WebkitAnimationTimingFunction: "linear",
            MozAnimationTimingFunction: "linear",
            animationTimingFunction: "linear",
            WebkitAnimationIterationCount: "infinite",
            MozAnimationIterationCount: "infinite",
            animationIterationCount: "infinite"
          }}
          d="M14.3-2.9h6.2l-4.1 7.2h3.9l-8.8 10.3 3.4-7.7h-3.8z"
          transform="matrix(1.2 0 0 1.2 11 38)"
        />
      </g>
    </svg>
  );
}

export default Weather11d;
