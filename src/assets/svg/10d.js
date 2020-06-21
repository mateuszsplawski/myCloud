import React from "react";

function Weather10d(props) {
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
            "@keyframes am-weather-sun{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes am-weather-rain{0%{stroke-dashoffset:0}to{stroke-dashoffset:-100}}"
          }
        </style>
      </defs>
      <g filter="url(#prefix__blur)" id="prefix__rainy-1">
        <g transform="matrix(1.2 0 0 1.2 20 26)">
          <g
            style={{
              WebkitAnimationName: "am-weather-sun",
              MozAnimationName: "am-weather-sun",
              msAnimationName: "am-weather-sun",
              animationName: "am-weather-sun",
              WebkitAnimationDuration: "9s",
              MozAnimationDuration: "9s",
              msAnimationDuration: "9s",
              animationDuration: "9s",
              WebkitAnimationTimingFunction: "linear",
              MozAnimationTimingFunction: "linear",
              msAnimationTimingFunction: "linear",
              animationTimingFunction: "linear",
              WebkitAnimationIterationCount: "infinite",
              MozAnimationIterationCount: "infinite",
              msAnimationIterationCount: "infinite",
              animationIterationCount: "infinite"
            }}
          >
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth={2}
              d="M0 9v3M-6.364 6.364l-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
            />
          </g>
          <circle fill="orange" r={5} stroke="orange" strokeWidth={2} />
        </g>
        <path
          d="M45.545 35.09c0-3.91-3.145-6.97-6.97-6.97-.85 0-1.615.17-2.38.425-.255-2.89-2.635-5.27-5.61-5.27a5.695 5.695 0 00-5.695 5.695c0 .68.17 1.36.34 1.955-.255-.085-.595-.085-.85-.085a5.695 5.695 0 00-5.695 5.695c0 3.06 2.465 5.61 5.525 5.695h14.62c3.74-.425 6.715-3.4 6.715-7.14z"
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={1.275}
        />
        <g
          fill="none"
          stroke="#91C0F8"
          strokeDasharray="4,7"
          strokeLinecap="round"
          strokeWidth={2}
        >
          <path
            style={{
              WebkitAnimationName: "am-weather-rain",
              MozAnimationName: "am-weather-rain",
              msAnimationName: "am-weather-rain",
              animationName: "am-weather-rain",
              WebkitAnimationDuration: "8s",
              MozAnimationDuration: "8s",
              msAnimationDuration: "8s",
              animationDuration: "8s",
              WebkitAnimationTimingFunction: "linear",
              MozAnimationTimingFunction: "linear",
              msAnimationTimingFunction: "linear",
              animationTimingFunction: "linear",
              WebkitAnimationIterationCount: "infinite",
              MozAnimationIterationCount: "infinite",
              msAnimationIterationCount: "infinite",
              animationIterationCount: "infinite"
            }}
            d="M27.918 45.943l-1.39 7.878"
          />
          <path
            style={{
              WebkitAnimationName: "am-weather-rain",
              MozAnimationName: "am-weather-rain",
              msAnimationName: "am-weather-rain",
              animationName: "am-weather-rain",
              WebkitAnimationDelay: ".25s",
              MozAnimationDelay: ".25s",
              msAnimationDelay: ".25s",
              animationDelay: ".25s",
              WebkitAnimationDuration: "8s",
              MozAnimationDuration: "8s",
              msAnimationDuration: "8s",
              animationDuration: "8s",
              WebkitAnimationTimingFunction: "linear",
              MozAnimationTimingFunction: "linear",
              msAnimationTimingFunction: "linear",
              animationTimingFunction: "linear",
              WebkitAnimationIterationCount: "infinite",
              MozAnimationIterationCount: "infinite",
              msAnimationIterationCount: "infinite",
              animationIterationCount: "infinite"
            }}
            d="M34.174 45.015l-1.39 7.879"
          />
        </g>
      </g>
    </svg>
  );
}

export default Weather10d;
