import React, { Component } from 'react';

class SVGBackground extends Component {
  render() {
    return (
      <div style={{position: "absolute", top: 0, left: 0, width: "100%", zIndex: -1}} className="SVGBackground">
        <svg width="100%" height="100%" viewBox="0 0 1440 1024" preserveAspectRatio="none">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Desktop-HD">
                  <polygon id="Path-4" fill="#DF2929" points="1179 0 1116 57 1179 102 1107 170 1177.5 236 1129 320 1184 403 1103 517 1184 589 1107 678 1218 751 1116 852 1201 951 1140 1027 1166 1027 1228 951 1146 852 1252 751 1135 671 1211 585 1135 513.5 1211 403 1156 315 1211 227 1146 170 1211 102 1146 57 1211 0"></polygon>
                  <polygon id="Path-2" fill="#D40C0C" points="1210 -1 1142 57 1210 103 1142 170 1206 229 1153 315 1210 403 1133 513 1206 588 1133 670 1248 750 1142 853 1224 950 1163 1025 1202 1025 1243 950 1159 849 1283 750 1159 659 1243 571 1159 506 1232 403 1180 308 1236 220 1163 162 1232 103 1163 53 1236 -1"></polygon>
                  <polygon id="Path-3" fill="#FF0000" points="1179 0 1120 56 1186 102 1116 171 1186 234 1133 318 1186 402 1104 517 1186 589 1109 678 1222 752 1120 852 1205 951 1142 1025 1098 1025 1186 951 1088 852 1186 747 1069 678 1159 585 1074 517 1168 402 1104 311 1168 238 1088 171 1145.5 107 1088 56 1145.5 0"></polygon>
              </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default SVGBackground;
