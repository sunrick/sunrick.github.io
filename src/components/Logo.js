import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <svg style={{height: "60px"}} className="Logo" width="75px" preserveAspectRatio="xMinYMin meet" viewBox="0 0 150 198" version="1.1">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group" transform="translate(0.000000, 1.000000)" stroke={this.props.color || "#000"}>
            <path d="M52.7181762,149.750498 C46.9561347,144.364242 43.8245856,137.662731 43.3235402,129.645977 L0.484,139.040613 C1.23557088,147.307893 4.30448722,155.825698 9.6907433,164.594023 C15.0769994,173.362348 23.4695447,180.81543 34.8683678,186.953257 C46.2671909,193.091084 60.4844106,196.16 77.5200153,196.16 C92.8019585,196.16 105.891816,193.278976 116.789594,187.516935 C127.687372,181.754893 135.829391,174.239185 141.215648,164.969808 C146.601904,155.700432 149.295034,145.804751 149.295034,135.282759 C149.295034,121.253437 144.597716,109.228303 135.20308,99.2073563 C125.808444,89.1864093 112.217536,82.2970115 94.4303602,78.5391571 L68.1253793,72.9023755 C62.8643831,71.9002791 58.7307433,70.0213519 55.7244598,67.2655939 C52.7181762,64.5098359 51.2150345,60.8772414 51.2150345,56.3678161 C51.2150345,51.1068199 53.5323799,46.7226545 58.1670651,43.2153257 C62.8017503,39.7079968 68.3759048,37.9543295 74.8895172,37.9543295 C84.6599387,37.9543295 91.8624949,40.3969349 96.4971801,45.2821456 C101.131865,50.1673563 104.075522,55.9920307 105.328138,62.7561686 L147.040322,53.3615326 C146.288751,45.5952982 143.3451,37.6411769 138.209364,29.4991571 C133.073628,21.3571373 125.182133,14.4051066 114.534881,8.64306513 C103.887629,2.88102362 90.5472458,0 74.5137318,0 C61.4865013,0 49.7118927,2.6931309 39.1899004,8.07938697 C28.667908,13.465643 20.4006284,20.7934591 14.3880613,30.0628352 C8.37549425,39.3322114 5.36921073,49.4784183 5.36921073,60.5014559 C5.36921073,74.0297318 9.6907433,85.6790805 18.3338084,95.4495019 C26.9768736,105.219923 39.9414713,111.984061 57.2276015,115.741916 L81.6536552,121.378697 C94.9314055,124.134455 101.570284,130.147022 101.570284,139.416398 C101.570284,144.677395 99.5034636,149.06156 95.3698238,152.568889 C91.2361839,156.076218 85.160984,157.829885 77.1442299,157.829885 C66.6222375,157.829885 58.4802178,155.136754 52.7181762,149.750498 Z" id="s"></path>
            <path d="M51.2150345,152 C45.452993,146.613744 41.5010453,142.016754 41,134 L4,142 C4.75157088,150.26728 6.61374393,154.231675 12,163 C17.3862561,171.768325 25.6011769,178.862173 37,185 C48.3988231,191.137827 60.1086252,193 77.1442299,193 C92.426173,193 103.637103,190.762042 114.534881,185 C125.432659,179.237958 132.823108,173.269376 138.209364,164 C143.59562,154.730624 147.040322,145.521992 147.040322,135 C147.040322,120.970679 142.394636,112.020947 133,102 C123.605364,91.979053 111.787176,84.7578544 94,81 L67,76 C61.7390038,74.9979036 54.221318,70.755758 51.2150345,68 C48.208751,65.244242 47,60.5094253 47,56 C47,50.7390038 52.5929163,42.5073289 57.2276015,39 C61.8622867,35.4926711 69.0065485,34 75.5201609,34 C85.2905824,34 94.3653148,38.1147893 99,43 C103.634685,47.8852107 106.747384,52.2358621 108,59 L144,51 C143.248429,43.2337656 141.135736,38.204855 136,30.0628352 C130.864264,21.9208155 123.647252,16.7620415 113,11 C102.352748,5.23795849 91.553675,3 75.5201609,3 C62.4929304,3 49.5219923,5.61374393 39,11 C28.4780077,16.3862561 23.012567,22.7306239 17,32 C10.987433,41.2693761 9,50.9769623 9,62 C9,75.5282759 12.3569349,84.2295785 21,94 C29.6430651,103.770421 41.7138697,109.242146 59,113 L85,118 C98.2777503,120.755758 105,130.730624 105,140 C105,145.260996 100.13364,152.492671 96,156 C91.8663602,159.507329 85.160984,161 77.1442299,161 C66.6222375,161 56.977076,157.386256 51.2150345,152 Z" id="s"></path>
            <path d="M47,155 C41.2379585,149.613744 39.5010453,146.016754 39,138 L8,144 C8.75157088,152.26728 10.6137439,154.231675 16,163 C21.3862561,171.768325 27.6011769,175.862173 39,182 C50.3988231,188.137827 60.4845562,190 77.5201609,190 C92.8021041,190 103.102222,187.762042 114,182 C124.897778,176.237958 130.613744,172.269376 136,163 C141.386256,153.730624 143,144.521992 143,134 C143,119.970679 140.394636,114.020947 131,104 C121.605364,93.979053 110.787176,87.7578544 93,84 L65,79 C59.7390038,77.9979036 50.0062835,71.755758 47,69 C43.9937165,66.244242 43,59.5094253 43,55 C43,49.7390038 50.3653148,39.5073289 55,36 C59.6346852,32.4926711 69.9863876,30.0628352 76.5,30.0628352 C86.2704215,30.0628352 97.3653148,34.1147893 102,39 C106.634685,43.8852107 108.747384,49.2358621 110,56 L141,49 C140.248429,41.2337656 138.135736,38.204855 133,30.0628352 C127.864264,21.9208155 121.647252,18.7620415 111,13 C100.352748,7.23795849 91.533514,5 75.5,5 C62.4727695,5 49.5219923,8.61374393 39,14 C28.4780077,19.3862561 25.012567,23.7306239 19,33 C12.987433,42.2693761 12,49.9769623 12,61 C12,74.5282759 15.3569349,82.2295785 24,92 C32.6430651,101.770421 43.7138697,106.242146 61,110 L88,115 C101.27775,117.755758 110,130.730624 110,140 C110,145.260996 105.13364,153.492671 101,157 C96.8663602,160.507329 85.5369151,165 77.5201609,165 C66.9981686,165 52.7620415,160.386256 47,155 Z" id="s"></path>
            <path d="M46,160 C39.6673636,153.344503 36.3340302,147.344503 36,142 L12,147 C12.7515709,155.26728 13.6137439,154.231675 19,163 C24.3862561,171.768325 29.6011769,172.862173 41,179 C52.3988231,185.137827 60.4845562,187 77.5201609,187 C92.8021041,187 102.102222,184.762042 113,179 C123.897778,173.237958 127.613744,170.269376 133,161 C138.386256,151.730624 139,144.521992 139,134 C139,119.970679 137.394636,116.020947 128,106 C118.605364,95.979053 109.787176,91.7578544 92,88 L63,83 C57.7390038,81.9979036 46.0062835,72.755758 43,70 C39.9937165,67.244242 39,56.5094253 39,52 C39,46.7390038 49.3653148,35.5073289 54,32 C58.6346852,28.4926711 71.0065485,26 77.5201609,26 C87.2905824,26 101.365315,31.1147893 106,36 C110.634685,40.8852107 111.747384,45.2358621 113,52 L137,46 C136.248429,38.2337656 135.135736,38.1420198 130,30 C124.864264,21.8579802 118.647252,20.7620415 108,15 C97.3527478,9.23795849 91.533514,8 75.5,8 C62.4727695,8 51.5219923,10.6137439 41,16 C30.4780077,21.3862561 28.012567,24.7306239 22,34 C15.987433,43.2693761 16,48.9769623 16,60 C16,73.5282759 19.3569349,81.2295785 28,91 C36.6430651,100.770421 44.7138697,102.242146 62,106 L92,112 C105.27775,114.755758 114,129.730624 114,139 C114,144.260996 108.13364,156.492671 104,160 C99.8663602,163.507329 83.5167542,169 75.5,169 C68.4853384,169 58.6520051,166 46,160 Z" id="s"></path>
            <path d="M42,163 C37.0006969,156.344503 34.3340302,150.344503 34,145 L16,150 C16.7515709,158.26728 17.6137439,154.231675 23,163 C28.3862561,171.768325 33.6011769,169.862173 45,176 C56.3988231,182.137827 60.9643953,183 78,183 C93.2819432,183 101.102222,180.762042 112,175 C122.897778,169.237958 123.613744,168.269376 129,159 C134.386256,149.730624 134,144.521992 134,134 C134,119.970679 132.394636,117.020947 123,107 C113.605364,96.979053 108.787176,95.7578544 91,92 L59,87 C53.7390038,85.9979036 41.0062835,72.755758 38,70 C34.9937165,67.244242 35,54.5094253 35,50 C35,44.7390038 48.3653148,30.5073289 53,27 C57.6346852,23.4926711 72.4863876,23 79,23 C88.7704215,23 106.365315,29.1147893 111,34 C115.634685,38.8852107 115.747384,41.2358621 117,48 L133,44 C132.248429,36.2337656 131.135736,37.1420198 126,29 C120.864264,20.8579802 114.647252,21.7620415 104,16 C93.3527478,10.2379585 91.033514,12 75,12 C61.9727695,12 54.5219923,13.6137439 44,19 C33.4780077,24.3862561 31.012567,26.7306239 25,36 C18.987433,45.2693761 20,48.9769623 20,60 C20,73.5282759 23.3569349,79.2295785 32,89 C40.6430651,98.7704215 46.7138697,98.2421456 64,102 L96,108 C109.27775,110.755758 119,129.730624 119,139 C119,144.260996 110.13364,160.492671 106,164 C101.86636,167.507329 82.0167542,174 74,174 C66.9853384,174 56.3186718,170.333333 42,163 Z" id="s"></path>
            <path d="M37,165 C34.0006969,159.677836 32.3340302,154.344503 32,149 L20,152 C20.7515709,160.26728 22.6137439,153.231675 28,162 C33.3862561,170.768325 36.6011769,166.862173 48,173 C59.3988231,179.137827 61.9643953,179 79,179 C94.2819432,179 98.1022222,176.762042 109,171 C119.897778,165.237958 120.613744,165.269376 126,156 C131.386256,146.730624 130,144.521992 130,134 C130,119.970679 128.394636,120.020947 119,110 C109.605364,99.979053 106.787176,100.757854 89,97 L55,91 C49.7390038,89.9979036 35.0062835,73.755758 32,71 C28.9937165,68.244242 31,51.5094253 31,47 C31,41.7390038 46.3653148,27.5073289 51,24 C55.6346852,20.4926711 74.4863876,19 81,19 C90.7704215,19 109.365315,26.1147893 114,31 C118.634685,35.8852107 118.747384,37.2358621 120,44 L129,42 C128.248429,34.2337656 128.135736,39.1420198 123,31 C117.864264,22.8579802 112.647252,24.7620415 102,19 C91.3527478,13.2379585 90.033514,15 74,15 C60.9727695,15 56.5219923,16.6137439 46,22 C35.4780077,27.3862561 34.012567,29.7306239 28,39 C21.987433,48.2693761 25,48.9769623 25,60 C25,73.5282759 26.3569349,76.2295785 35,86 C43.6430651,95.7704215 48.7138697,94.2421456 66,98 L102,105 C115.27775,107.755758 124,130.730624 124,140 C124,145.260996 113.13364,163.492671 109,167 C104.86636,170.507329 82.0167542,177 74,177 C66.9853384,177 54.6520051,173 37,165 Z" id="s"></path>
          </g>
        </g>
      </svg>
    );
  }
}

export default Logo;
