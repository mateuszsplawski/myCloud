import React from "react";

function Weather02n(props) {
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
            "@keyframes am-weather-cloud-2{0%,to{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}50%{-webkit-transform:translate(2px,0);-moz-transform:translate(2px,0);-ms-transform:translate(2px,0);transform:translate(2px,0)}}@keyframes am-weather-moon{0%,to{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(15deg);-moz-transform:rotate(15deg);-ms-transform:rotate(15deg);transform:rotate(15deg)}}@keyframes am-weather-moon-star-1{0%{opacity:0}to{opacity:1}}@keyframes am-weather-moon-star-2{0%{opacity:0}to{opacity:1}}"
          }
        </style>
      </defs>
      <g filter="url(#prefix__blur)" id="prefix__cloudy-night-1">
        <path
          fill="orange"
          strokeMiterlimit={10}
          d="M3.3 1.5L4 2.7l1.2.6L4 4l-.7 1.2L2.7 4l-1.2-.7 1.2-.6z"
          transform="matrix(.8 0 0 .8 36 14)"
        />
        <path
          fill="orange"
          strokeMiterlimit={10}
          transform="matrix(.8 0 0 .8 52 22)"
          d="M3.3 1.5L4 2.7l1.2.6L4 4l-.7 1.2L2.7 4l-1.2-.7 1.2-.6z"
        />
        <path
          d="M47.6 24.56c0-2.96 1.6-5.52 4-6.96-1.2-.72-2.56-1.04-4-1.04-4.4 0-8 3.6-8 8s3.6 8 8 8c1.44 0 2.8-.4 4-1.04-2.4-1.36-4-4-4-6.96z"
          fill="orange"
          stroke="orange"
          strokeLinejoin="round"
          strokeWidth={1.6}
        />
        <g
          style={{
            WebkitAnimationName: "am-weather-cloud-2",
            MozAnimationName: "am-weather-cloud-2",
            animationName: "am-weather-cloud-2",
            WebkitAnimationDuration: "3s",
            MozAnimationDuration: "3s",
            animationDuration: "3s",
            WebkitAnimationTimingFunction: "linear",
            MozAnimationTimingFunction: "linear",
            animationTimingFunction: "linear",
            WebkitAnimationIterationCount: "infinite",
            MozAnimationIterationCount: "infinite",
            animationIterationCount: "infinite"
          }}
        >
          <path
            d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
            fill="#C6DEFF"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={1.2}
          />
        </g>
      </g>
    </svg>
  );
}

export default Weather02n;
