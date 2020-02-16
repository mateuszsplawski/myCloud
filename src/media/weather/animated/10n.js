import React from "react";

function Weather10n(props) {
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
            "@keyframes am-weather-rain{0%{stroke-dashoffset:0}to{stroke-dashoffset:-100}}"
          }
        </style>
      </defs>
      <g filter="url(#prefix__blur)" id="prefix__rainy-4">
        <path
          d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={1.2}
        />
        <path
          fill="none"
          stroke="#91C0F8"
          strokeDasharray="4,7"
          strokeLinecap="round"
          strokeWidth={2}
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
          d="M30.918 44.943l-1.39 7.878"
        />
      </g>
    </svg>
  );
}

export default Weather10n;
