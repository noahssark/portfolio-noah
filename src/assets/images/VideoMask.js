import * as React from "react";
import { useTheme } from "@material-ui/core/styles";

const VideoMask = (props) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 10 296 60" {...props}>
           
               <path
                fill={theme.palette.background.default}
                d="M 8.984 28.906 L 8.984 77.148 L 0 77.148 L 0 6.836 L 12.598 6.836 L 55.322 55.127 L 55.322 6.836 L 64.258 6.836 L 64.258 77.148 L 51.66 77.148 L 8.984 28.906 Z"
               />
              
              <path
                fill={theme.palette.background.default}
                d="M 136.992 54.868 A 29.309 29.309 0 0 0 137.598 48.828 A 31.605 31.605 0 0 0 137.579 47.749 A 27.931 27.931 0 0 0 136.426 40.601 A 28.839 28.839 0 0 0 133.179 33.447 Q 131.104 30.176 128.174 27.563 Q 125.244 24.951 121.753 23.145 A 33.626 33.626 0 0 0 114.282 20.361 Q 110.303 19.385 106.104 19.385 A 33.891 33.891 0 0 0 97.949 20.361 A 33.73 33.73 0 0 0 90.503 23.145 A 31.056 31.056 0 0 0 84.082 27.563 A 27.81 27.81 0 0 0 79.077 33.447 A 28.839 28.839 0 0 0 75.83 40.601 A 26.414 26.414 0 0 0 75.432 42.073 A 28.867 28.867 0 0 0 74.658 48.828 A 31.605 31.605 0 0 0 74.677 49.907 A 27.931 27.931 0 0 0 75.83 57.056 A 28.839 28.839 0 0 0 79.077 64.209 Q 81.152 67.48 84.082 70.093 Q 87.012 72.705 90.503 74.512 A 33.73 33.73 0 0 0 97.949 77.295 Q 101.904 78.271 106.104 78.271 A 34.191 34.191 0 0 0 114.282 77.295 Q 118.262 76.318 121.753 74.512 A 31.056 31.056 0 0 0 128.174 70.093 A 27.81 27.81 0 0 0 133.179 64.209 A 28.942 28.942 0 0 0 136.426 57.08 A 26 26 0 0 0 136.992 54.868 Z M 120.801 48.828 A 46.032 46.032 0 0 0 120.674 45.479 A 54.588 54.588 0 0 0 120.532 43.872 A 35.933 35.933 0 0 0 119.629 38.745 Q 118.994 36.23 117.896 33.911 A 16.385 16.385 0 0 0 115.959 30.762 A 14.691 14.691 0 0 0 115.186 29.858 Q 113.574 28.125 111.328 27.075 A 10.927 10.927 0 0 0 108.403 26.199 A 14.632 14.632 0 0 0 106.104 26.025 A 12.779 12.779 0 0 0 103.43 26.294 A 10.185 10.185 0 0 0 101.074 27.1 A 12.762 12.762 0 0 0 97.241 29.956 Q 95.605 31.738 94.507 34.082 Q 93.408 36.426 92.725 38.94 A 34.086 34.086 0 0 0 91.748 44.019 A 46.081 46.081 0 0 0 91.5 47.025 A 37.404 37.404 0 0 0 91.455 48.828 A 39.292 39.292 0 0 0 91.57 51.76 A 48.361 48.361 0 0 0 91.748 53.638 A 34.806 34.806 0 0 0 92.725 58.74 Q 93.408 61.279 94.507 63.599 A 16.529 16.529 0 0 0 96.939 67.361 A 15.458 15.458 0 0 0 97.241 67.7 A 12.762 12.762 0 0 0 101.074 70.557 A 10.508 10.508 0 0 0 104.313 71.515 A 13.44 13.44 0 0 0 106.104 71.631 A 13.898 13.898 0 0 0 108.822 71.377 A 10.734 10.734 0 0 0 111.279 70.581 A 12.437 12.437 0 0 0 115.161 67.773 A 15.598 15.598 0 0 0 117.837 63.792 A 17.424 17.424 0 0 0 117.871 63.721 Q 118.945 61.426 119.604 58.887 Q 120.264 56.348 120.532 53.76 A 50.255 50.255 0 0 0 120.775 50.317 A 42.96 42.96 0 0 0 120.801 48.828 Z"
                />

                <path
                fill={theme.palette.background.default}
                 d="M 204.785 20.752 L 204.785 77.148 L 188.281 77.148 L 188.281 70.41 A 19.328 19.328 0 0 1 184.181 74.583 A 17.241 17.241 0 0 1 181.226 76.343 A 20.756 20.756 0 0 1 173.426 78.239 A 24.459 24.459 0 0 1 172.168 78.271 A 30.981 30.981 0 0 1 165.75 77.633 A 24.827 24.827 0 0 1 160.645 75.977 A 25.09 25.09 0 0 1 152.051 69.702 A 27.221 27.221 0 0 1 147.042 61.346 A 31.324 31.324 0 0 1 146.68 60.352 A 34.364 34.364 0 0 1 144.87 50.732 A 39.636 39.636 0 0 1 144.824 48.828 Q 144.824 42.676 146.68 37.305 A 28.127 28.127 0 0 1 150.592 29.762 A 26.041 26.041 0 0 1 152.051 27.954 A 25.09 25.09 0 0 1 160.645 21.68 A 25.67 25.67 0 0 1 167.898 19.656 A 32.608 32.608 0 0 1 172.168 19.385 A 19.706 19.706 0 0 1 178.394 20.361 A 19.801 19.801 0 0 1 183.813 23.12 A 20.135 20.135 0 0 1 188.159 27.417 A 20.632 20.632 0 0 1 191.113 33.008 L 198.438 20.752 L 204.785 20.752 Z M 188.184 48.828 A 49.251 49.251 0 0 0 188.08 45.691 A 58.011 58.011 0 0 0 187.964 44.189 A 37.317 37.317 0 0 0 187.207 39.355 Q 186.67 36.963 185.718 34.79 A 14.693 14.693 0 0 0 183.369 31.038 A 13.937 13.937 0 0 0 183.276 30.933 Q 181.787 29.248 179.688 28.271 A 10.252 10.252 0 0 0 176.953 27.456 A 13.735 13.735 0 0 0 174.805 27.295 A 13.033 13.033 0 0 0 172.433 27.5 A 9.543 9.543 0 0 0 169.971 28.296 Q 167.92 29.297 166.455 30.981 A 14.704 14.704 0 0 0 164.253 34.389 A 16.708 16.708 0 0 0 164.038 34.863 Q 163.086 37.061 162.549 39.453 A 37.391 37.391 0 0 0 161.792 44.263 A 54.132 54.132 0 0 0 161.603 47.179 A 45.06 45.06 0 0 0 161.572 48.828 A 47.674 47.674 0 0 0 161.658 51.628 A 58.063 58.063 0 0 0 161.792 53.418 A 37.317 37.317 0 0 0 162.549 58.252 Q 163.086 60.645 164.038 62.842 A 15.178 15.178 0 0 0 165.924 66.074 A 13.89 13.89 0 0 0 166.455 66.724 A 10.998 10.998 0 0 0 169.971 69.409 A 9.582 9.582 0 0 0 172.51 70.219 A 13.107 13.107 0 0 0 174.805 70.41 A 10.485 10.485 0 0 0 177.344 70.114 A 8.66 8.66 0 0 0 179.321 69.36 A 11.711 11.711 0 0 0 182.788 66.553 A 16.971 16.971 0 0 0 185.039 63.103 A 19.154 19.154 0 0 0 185.303 62.549 A 29.147 29.147 0 0 0 186.963 57.91 A 35.595 35.595 0 0 0 187.891 53.149 A 41.141 41.141 0 0 0 188.11 50.885 A 30.463 30.463 0 0 0 188.184 48.828 Z"
                />

                <path
                fill={theme.palette.background.default}
                 d="M 257.373 89.16 L 251.172 85.791 A 43.26 43.26 0 0 0 252.609 82.859 A 54.741 54.741 0 0 0 253.662 80.322 A 68.528 68.528 0 0 0 255.296 75.575 A 77.566 77.566 0 0 0 255.786 73.901 Q 256.738 70.508 257.495 66.895 A 115.981 115.981 0 0 0 258.765 59.741 Q 259.277 56.201 259.546 52.856 A 86.282 86.282 0 0 0 259.763 49.24 A 68.597 68.597 0 0 0 259.814 46.631 A 56.376 56.376 0 0 0 259.757 44.146 A 68.872 68.872 0 0 0 259.668 42.554 A 30.675 30.675 0 0 0 259.058 38.208 A 26.926 26.926 0 0 0 257.813 34.033 A 12.517 12.517 0 0 0 256.352 31.305 A 11.337 11.337 0 0 0 255.737 30.518 A 10.022 10.022 0 0 0 252.612 28.076 A 8.382 8.382 0 0 0 250.24 27.307 A 11.416 11.416 0 0 0 248.291 27.148 A 9.254 9.254 0 0 0 245.731 27.491 A 7.932 7.932 0 0 0 243.945 28.247 Q 242.041 29.346 240.576 31.128 Q 239.111 32.91 238.062 35.205 Q 237.012 37.5 236.353 39.917 Q 235.693 42.334 235.4 44.678 Q 235.138 46.774 235.111 48.48 A 24.497 24.497 0 0 0 235.107 48.877 L 235.107 77.148 L 218.555 77.148 L 218.555 0 L 235.059 0 L 235.059 29.053 A 22.998 22.998 0 0 1 240.365 23.482 A 21.37 21.37 0 0 1 242.847 21.899 A 20.838 20.838 0 0 1 252.291 19.397 A 24.62 24.62 0 0 1 253.076 19.385 A 30.568 30.568 0 0 1 257.913 19.749 Q 260.745 20.203 263.128 21.223 A 19.213 19.213 0 0 1 263.281 21.289 A 20.113 20.113 0 0 1 269.077 25.078 A 18.868 18.868 0 0 1 270.508 26.587 A 21.678 21.678 0 0 1 274.222 32.94 A 25.677 25.677 0 0 1 274.805 34.644 A 32.913 32.913 0 0 1 276.082 41.459 A 40.066 40.066 0 0 1 276.221 44.824 A 51.988 51.988 0 0 1 275.502 53.289 A 61.369 61.369 0 0 1 274.829 56.738 A 72.803 72.803 0 0 1 270.947 68.896 Q 268.457 74.854 264.99 80.103 A 51.317 51.317 0 0 1 260.146 86.372 A 43.631 43.631 0 0 1 257.373 89.16 Z" 
                />

        </svg>
    );
};

export default VideoMask;
