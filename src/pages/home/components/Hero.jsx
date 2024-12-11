import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#F6F6F6] py-16 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding">
      <div className="flex flex-col justify-center items-center relative">
        <p className="font-bold md:text-[28px] text-[21px] md:leading-[90px] leading-[45px] text-center">
          Rejoignez notre communauté d'apprenants aujourd'hui !
        </p>
        <p className="md:h-[86px] h-[43px] md:mb-0 mb-3.5 font-bold md:text-[42px] text-[21px] md:leading-[90px] leading-[45px] text-transparent bg-clip-text bg-gradient-to-r from-[#5869d4] to-[#2234a8]  text-center ">
          Votre succès, notre priorité !
        </p>
        <p className="font-medium text-base text-center md:w-[581px] w-[340px] md:mb-11 mb-3.5">
          Accédez à une large gamme de formations certifiées, conçues par des
          experts et reconnues sur le marché du travail
        </p>
        <button className="md:h-16 h-12 md:w-[200px] w-[150px] md:rounded-[30px] rounded-[22.5px] text-white font-medium md:text-base text-xs px-[15px] py-[7px] bg-gradient-to-r from-[#5869d4] to-[#2234a8] hover:bg-bgFrom cursor-pointer">
          Notre catalogue
        </button>
        <div className="sm:flex hidden absolute -bottom-6 md:left-[calc(50%+80px)] left-[calc(50%+50px)]">
          <svg
            width="160"
            height="143"
            viewBox="0 0 160 143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.2814 95.6942C35.8014 94.6182 35.3524 93.5062 34.9828 92.4437C34.754 91.8571 34.5958 91.2593 34.4377 90.6615C34.2486 90.0998 34.1302 89.5268 34.3344 88.9333C34.7875 87.5524 36.7769 87.2966 38.1343 86.9238C39.4918 86.551 40.8271 86.2752 42.202 86.0242C43.829 85.764 44.1349 87.896 42.508 88.1561C41.3762 88.3371 40.2532 88.5789 39.1699 88.8456C38.6437 88.9609 38.1263 89.1371 37.6002 89.2524C37.357 89.3224 37.043 89.4038 36.7998 89.4738C36.7291 89.4851 36.6273 89.5325 36.5566 89.5438C36.5876 89.5077 36.6186 89.4716 36.6894 89.4603C36.7513 89.3881 36.7426 89.3272 36.8046 89.2549C36.7823 89.352 36.7911 89.4129 36.7823 89.352C37.0684 90.0851 37.279 91.0484 37.5428 91.8786C37.8949 92.8192 38.2469 93.7599 38.6697 94.6893C39.1537 96.045 36.8273 96.9778 36.2814 95.6942Z"
              fill="#D1827B"
            />
            <path
              d="M44.653 95.6579C44.1649 95.4403 44.0109 94.8723 44.3091 94.3893C44.6073 93.9063 45.2448 93.6911 45.733 93.9088L44.653 95.6579ZM93.6397 96.2897L94.2905 96.955L93.6397 96.2897ZM103.631 87.257L103.133 86.48L103.631 87.257ZM115.44 48.5058L114.447 48.8933L115.44 48.5058ZM98.8117 31.2808L98.0077 30.7737L99.3137 29.1452L100.118 29.6524L98.8117 31.2808ZM101.877 30.8401C102.302 31.1433 102.335 31.7413 101.952 32.1757C101.569 32.6102 100.914 32.7165 100.489 32.4133L101.877 30.8401ZM103.689 34.9041C103.293 34.5706 103.307 33.9665 103.719 33.5549C104.132 33.1434 104.788 33.0801 105.184 33.4137L103.689 34.9041ZM108.26 36.2104C108.628 36.5711 108.569 37.178 108.131 37.566C107.692 37.954 107.039 37.9761 106.672 37.6154L108.26 36.2104ZM109.4 40.5379C109.069 40.148 109.178 39.5411 109.644 39.1825C110.11 38.8238 110.756 38.8491 111.088 39.2391L109.4 40.5379ZM113.597 42.5362C113.88 42.9598 113.708 43.5611 113.211 43.8793C112.714 44.1974 112.082 44.1119 111.798 43.6883L113.597 42.5362ZM113.727 47.0924C113.514 46.6292 113.772 46.0453 114.303 45.7882C114.833 45.5311 115.437 45.6981 115.65 46.1613L113.727 47.0924ZM117.032 50.1278C117.162 50.6246 116.816 51.1765 116.259 51.3606C115.702 51.5446 115.145 51.291 115.015 50.7942L117.032 50.1278ZM115.8 54.726C115.726 54.2131 116.127 53.6898 116.695 53.5571C117.262 53.4245 117.781 53.7327 117.854 54.2456L115.8 54.726ZM118.233 58.4638C118.254 58.9867 117.807 59.4794 117.235 59.5641C116.663 59.6489 116.184 59.2936 116.163 58.7707L118.233 58.4638ZM116.114 62.8734C116.147 62.3448 116.637 61.8878 117.209 61.8527C117.78 61.8176 118.215 62.2176 118.182 62.7462L116.114 62.8734ZM117.673 67.0635C117.58 67.5929 117.048 68.0062 116.483 67.9866C115.919 67.967 115.536 67.5219 115.628 66.9925L117.673 67.0635ZM114.662 71.0787C114.82 70.5553 115.394 70.1976 115.944 70.2798C116.494 70.362 116.811 70.8529 116.652 71.3763L114.662 71.0787ZM115.046 75.6192C114.812 76.126 114.199 76.4117 113.677 76.2573C113.155 76.1028 112.921 75.5668 113.155 75.0601L115.046 75.6192ZM111.05 78.8342C111.366 78.3596 112.009 78.1658 112.486 78.4013C112.962 78.6369 113.092 79.2125 112.776 79.687L111.05 78.8342ZM109.8 83.4256C109.401 83.8479 108.745 83.9309 108.336 83.6111C107.926 83.2912 107.918 82.6895 108.318 82.2672L109.8 83.4256ZM104.992 85.2179C105.464 84.8669 106.109 84.9041 106.431 85.3009C106.754 85.6977 106.632 86.3039 106.16 86.6549L104.992 85.2179ZM101.911 89.1625C101.365 89.3817 100.784 89.1685 100.614 88.6863C100.444 88.204 100.749 87.6353 101.295 87.416L101.911 89.1625ZM97.4239 88.1265C97.989 88.1426 98.3754 88.5849 98.2868 89.1144C98.1983 89.644 97.6683 90.0602 97.1032 90.0441L97.4239 88.1265ZM92.6417 89.0508C92.1474 88.8433 91.9802 88.2799 92.2682 87.7925C92.5562 87.305 93.1903 87.0781 93.6846 87.2856L92.6417 89.0508ZM90.4133 85.3393C90.8237 85.6581 90.8334 86.2595 90.4349 86.6827C90.0364 87.1058 89.3807 87.1905 88.9702 86.8718L90.4133 85.3393ZM85.9863 84.0403C85.6482 83.6553 85.7483 83.0482 86.2098 82.6842C86.6713 82.3203 87.3194 82.3374 87.6575 82.7223L85.9863 84.0403ZM85.3826 79.6779C85.6561 80.108 85.4704 80.7074 84.968 81.0168C84.4655 81.3261 83.8365 81.2282 83.563 80.7981L85.3826 79.6779ZM81.6532 77.2504C81.445 76.7849 81.7082 76.2025 82.241 75.9496C82.7738 75.6968 83.3745 75.8692 83.5827 76.3347L81.6532 77.2504ZM82.317 72.7582C82.4453 73.2556 82.0974 73.8066 81.5399 73.9889C80.9825 74.1713 80.4265 73.9158 80.2982 73.4184L82.317 72.7582ZM79.731 69.2643C79.7332 68.7384 80.1987 68.2602 80.7708 68.1961C81.3428 68.132 81.8048 68.5064 81.8026 69.0323L79.731 69.2643ZM82.6672 65.5998C82.3436 66.0707 81.6989 66.2555 81.2272 66.0127C80.7554 65.7699 80.6353 65.1913 80.9589 64.7205L82.6672 65.5998ZM85.4774 62.277C86.0483 62.2443 86.4818 62.6464 86.4456 63.1752C86.4095 63.7039 85.9173 64.1591 85.3464 64.1918L85.4774 62.277ZM88.482 64.9104C88.0001 64.6828 87.8593 64.1105 88.1676 63.6321C88.4758 63.1537 89.1164 62.9503 89.5983 63.1779L88.482 64.9104ZM92.7664 65.2578C93.1619 65.5918 93.1474 66.196 92.7341 66.6071C92.3208 67.0183 91.6651 67.0808 91.2696 66.7467L92.7664 65.2578ZM93.6242 69.1411C93.2975 68.7473 93.4134 68.1408 93.883 67.7864C94.3526 67.4319 94.9981 67.4638 95.3248 67.8576L93.6242 69.1411ZM97.4079 70.7894C97.6722 71.225 97.4752 71.8226 96.9679 72.1241C96.4606 72.4255 95.835 72.3168 95.5707 71.8812L97.4079 70.7894ZM97.1091 74.8718C96.9082 74.4028 97.1796 73.8229 97.7152 73.5764C98.2509 73.33 98.8479 73.5103 99.0488 73.9793L97.1091 74.8718ZM100.223 77.3899C100.354 77.8866 100.008 78.4386 99.4512 78.6228C98.8942 78.807 98.3369 78.5537 98.2065 78.057L100.223 77.3899ZM98.7985 81.3892C98.751 80.8709 99.1747 80.3619 99.7448 80.2524C100.315 80.1429 100.815 80.4744 100.863 80.9927L98.7985 81.3892ZM100.855 84.7415C100.802 85.271 100.297 85.7143 99.7278 85.7316C99.1582 85.7489 98.7392 85.3337 98.792 84.8042L100.855 84.7415ZM98.0815 88.2017C98.2519 87.6802 98.8328 87.3334 99.3789 87.4269C99.9249 87.5205 100.229 88.019 100.059 88.5405L98.0815 88.2017ZM98.3715 92.2063C98.0772 92.691 97.441 92.9106 96.9504 92.6969C96.4599 92.4831 96.3008 91.9169 96.5952 91.4321L98.3715 92.2063ZM94.3538 94.3352C94.7563 93.9152 95.4121 93.8364 95.8186 94.1593C96.2251 94.4822 96.2284 95.0844 95.8259 95.5045L94.3538 94.3352ZM92.4134 98.3787C91.9236 98.7068 91.287 98.6355 90.9915 98.2195C90.6961 97.8036 90.8537 97.2004 91.3436 96.8723L92.4134 98.3787ZM87.6517 98.7996C88.1983 98.5815 88.7782 98.796 88.9469 99.2788C89.1156 99.7616 88.8092 100.33 88.2626 100.548L87.6517 98.7996ZM83.8622 101.879C83.2937 102.002 82.7815 101.685 82.7183 101.17C82.655 100.655 83.0647 100.137 83.6332 100.013L83.8622 101.879ZM79.4835 100.635C80.0553 100.584 80.5054 100.97 80.4888 101.498C80.4721 102.025 79.9951 102.494 79.4233 102.544L79.4835 100.635ZM75.0316 102.712C74.4647 102.708 74.0672 102.274 74.1437 101.744C74.2202 101.215 74.7418 100.789 75.3087 100.794L75.0316 102.712ZM71.1575 100.593C71.7163 100.641 72.0701 101.108 71.9477 101.635C71.8253 102.163 71.273 102.552 70.7142 102.504L71.1575 100.593ZM66.4808 102.002C65.9312 101.919 65.6145 101.428 65.7733 100.905C65.9321 100.381 66.5064 100.024 67.056 100.106L66.4808 102.002ZM63.0135 99.3853C63.5535 99.4964 63.8382 100.006 63.6494 100.524C63.4605 101.042 62.8697 101.372 62.3297 101.261L63.0135 99.3853ZM58.2598 100.32C57.7295 100.184 57.4736 99.6587 57.6881 99.1467C57.9027 98.6346 58.5065 98.3297 59.0368 98.4656L58.2598 100.32ZM55.1267 97.3695C55.647 97.5278 55.876 98.0661 55.6382 98.5716C55.4005 99.0772 54.7859 99.3586 54.2656 99.2002L55.1267 97.3695ZM50.3519 97.9142C49.8424 97.734 49.6402 97.1841 49.9003 96.6859C50.1604 96.1877 50.7843 95.9299 51.2938 96.11L50.3519 97.9142ZM47.5518 94.6857C48.0483 94.8893 48.2206 95.4509 47.9366 95.94C47.6525 96.4291 47.0197 96.6605 46.5231 96.4568L47.5518 94.6857ZM100.118 29.6524C100.641 29.9826 101.234 30.381 101.877 30.8401L100.489 32.4133C99.8695 31.9709 99.3038 31.5912 98.8117 31.2808L100.118 29.6524ZM105.184 33.4137C106.188 34.2594 107.229 35.197 108.26 36.2104L106.672 37.6154C105.673 36.6341 104.663 35.7249 103.689 34.9041L105.184 33.4137ZM111.088 39.2391C111.981 40.2884 112.83 41.3916 113.597 42.5362L111.798 43.6883C111.07 42.6015 110.259 41.5471 109.4 40.5379L111.088 39.2391ZM115.65 46.1613C115.946 46.8047 116.208 47.4577 116.432 48.1183L114.447 48.8933C114.243 48.2904 114.002 47.6895 113.727 47.0924L115.65 46.1613ZM116.432 48.1183C116.648 48.7558 116.848 49.4271 117.032 50.1278L115.015 50.7942C114.84 50.1283 114.65 49.4932 114.447 48.8933L116.432 48.1183ZM117.854 54.2456C118.046 55.5947 118.177 57.008 118.233 58.4638L116.163 58.7707C116.109 57.3741 115.984 56.0188 115.8 54.726L117.854 54.2456ZM118.182 62.7462C118.091 64.1704 117.925 65.6155 117.673 67.0635L115.628 66.9925C115.868 65.6149 116.027 64.236 116.114 62.8734L118.182 62.7462ZM116.652 71.3763C116.218 72.8101 115.686 74.2307 115.046 75.6192L113.155 75.0601C113.752 73.7641 114.252 72.4315 114.662 71.0787L116.652 71.3763ZM112.776 79.687C111.907 80.9906 110.919 82.2433 109.8 83.4256L108.318 82.2672C109.341 81.186 110.249 80.0365 111.05 78.8342L112.776 79.687ZM106.16 86.6549C105.513 87.1355 104.836 87.5958 104.129 88.0341L103.133 86.48C103.781 86.0783 104.401 85.657 104.992 85.2179L106.16 86.6549ZM104.129 88.0341C103.392 88.4899 102.652 88.8648 101.911 89.1625L101.295 87.416C101.899 87.1738 102.512 86.8644 103.133 86.48L104.129 88.0341ZM97.1032 90.0441C95.5404 89.9997 94.045 89.64 92.6417 89.0508L93.6846 87.2856C94.9043 87.7977 96.1568 88.0905 97.4239 88.1265L97.1032 90.0441ZM88.9702 86.8718C87.8998 86.0405 86.901 85.0819 85.9863 84.0403L87.6575 82.7223C88.5126 83.6962 89.4364 84.5807 90.4133 85.3393L88.9702 86.8718ZM83.563 80.7981C82.8326 79.6494 82.1915 78.454 81.6532 77.2504L83.5827 76.3347C84.0894 77.4675 84.6937 78.5946 85.3826 79.6779L83.563 80.7981ZM80.2982 73.4184C79.9271 71.98 79.7256 70.571 79.731 69.2643L81.8026 69.0323C81.7979 70.1611 81.9729 71.4246 82.317 72.7582L80.2982 73.4184ZM80.9589 64.7205C81.4906 63.9469 82.209 63.3089 83.1197 62.8753L83.8767 64.5597C83.3797 64.7963 82.9822 65.1415 82.6672 65.5998L80.9589 64.7205ZM83.1197 62.8753C83.8779 62.5142 84.6732 62.3231 85.4774 62.277L85.3464 64.1918C84.8169 64.2222 84.3277 64.3449 83.8767 64.5597L83.1197 62.8753ZM89.5983 63.1779C90.6816 63.6894 91.7488 64.3982 92.7664 65.2578L91.2696 66.7467C90.3423 65.9633 89.4003 65.344 88.482 64.9104L89.5983 63.1779ZM95.3248 67.8576C96.0705 68.7565 96.7712 69.74 97.4079 70.7894L95.5707 71.8812C94.9735 70.8969 94.3182 69.9776 93.6242 69.1411L95.3248 67.8576ZM99.0488 73.9793C99.5183 75.0754 99.9155 76.2174 100.223 77.3899L98.2065 78.057C97.9199 76.9658 97.549 75.899 97.1091 74.8718L99.0488 73.9793ZM100.863 80.9927C100.976 82.2295 100.98 83.4847 100.855 84.7415L98.792 84.8042C98.9051 83.6693 98.9027 82.526 98.7985 81.3892L100.863 80.9927ZM100.059 88.5405C99.6518 89.7857 99.0956 91.0138 98.3715 92.2063L96.5952 91.4321C97.2304 90.3859 97.7209 89.3047 98.0815 88.2017L100.059 88.5405ZM95.8259 95.5045C95.3506 96.0004 94.8392 96.4844 94.2905 96.955L92.989 95.6244C93.479 95.2042 93.9333 94.774 94.3538 94.3352L95.8259 95.5045ZM94.2905 96.955C93.6914 97.4687 93.0647 97.9426 92.4134 98.3787L91.3436 96.8723C91.916 96.4889 92.4651 96.0736 92.989 95.6244L94.2905 96.955ZM88.2626 100.548C86.8535 101.11 85.3797 101.548 83.8622 101.879L83.6332 100.013C85.0375 99.7075 86.3819 99.3064 87.6517 98.7996L88.2626 100.548ZM79.4233 102.544C77.9793 102.673 76.5107 102.725 75.0316 102.712L75.3087 100.794C76.7244 100.806 78.1203 100.756 79.4835 100.635L79.4233 102.544ZM70.7142 102.504C69.2989 102.382 67.8838 102.212 66.4808 102.002L67.056 100.106C68.4195 100.311 69.7905 100.476 71.1575 100.593L70.7142 102.504ZM62.3297 101.261C60.9461 100.976 59.5854 100.66 58.2598 100.32L59.0368 98.4656C60.3338 98.7979 61.6633 99.1074 63.0135 99.3853L62.3297 101.261ZM54.2656 99.2002C52.8991 98.7843 51.5892 98.3516 50.3519 97.9142L51.2938 96.11C52.5052 96.5383 53.7882 96.962 55.1267 97.3695L54.2656 99.2002ZM46.5231 96.4568C45.8639 96.1865 45.2393 95.9193 44.653 95.6579L45.733 93.9088C46.3015 94.1622 46.909 94.4221 47.5518 94.6857L46.5231 96.4568Z"
              fill="#D1827B"
            />
          </svg>
        </div>
        <div className="sm:hidden flex absolute -bottom-5 md:left-[calc(50%+80px)] left-[calc(50%+55px)]">
          <svg
            width="114"
            height="103"
            viewBox="0 0 114 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.4942 68.3335C25.1498 67.5615 24.8277 66.7636 24.5626 66.0013C24.3984 65.5805 24.2849 65.1516 24.1714 64.7227C24.0357 64.3197 23.9508 63.9086 24.0974 63.4828C24.4224 62.492 25.8497 62.3085 26.8237 62.041C27.7976 61.7735 28.7556 61.5756 29.7421 61.3956C30.9094 61.2089 31.1288 62.7385 29.9616 62.9252C29.1496 63.055 28.3438 63.2285 27.5666 63.4199C27.1891 63.5026 26.8179 63.629 26.4404 63.7117C26.2659 63.7619 26.0407 63.8203 25.8662 63.8706C25.8154 63.8787 25.7424 63.9127 25.6917 63.9208C25.7139 63.8949 25.7362 63.869 25.7869 63.8609C25.8314 63.8091 25.8251 63.7654 25.8696 63.7135C25.8536 63.7832 25.8599 63.8269 25.8536 63.7832C26.0589 64.3092 26.21 65.0003 26.3993 65.5959C26.6519 66.2708 26.9044 66.9457 27.2078 67.6125C27.555 68.5852 25.8859 69.2544 25.4942 68.3335Z"
              fill="#D1827B"
            />
            <path
              d="M31.5012 68.3075C31.151 68.1514 31.0405 67.7439 31.2544 67.3973C31.4684 67.0508 31.9258 66.8964 32.276 67.0526L31.5012 68.3075ZM66.6476 68.7608L67.1145 69.2381L66.6476 68.7608ZM59.3713 45.3913L59.6429 45.9955L59.3713 45.3913ZM73.8158 62.2802L74.173 62.8377L73.8158 62.2802ZM82.2883 34.4774L81.5763 34.7554L82.2883 34.4774ZM70.3583 22.119L69.7814 21.7552L70.7185 20.5868L71.2953 20.9507L70.3583 22.119ZM72.5579 21.8028C72.8625 22.0204 72.8865 22.4494 72.6114 22.7611C72.3363 23.0728 71.8664 23.1491 71.5618 22.9315L72.5579 21.8028ZM73.8575 24.7186C73.5734 24.4793 73.5832 24.0459 73.8794 23.7506C74.1756 23.4553 74.646 23.41 74.9301 23.6493L73.8575 24.7186ZM77.1375 25.6558C77.4009 25.9146 77.3592 26.3501 77.0444 26.6285C76.7296 26.9068 76.2609 26.9227 75.9975 26.6639L77.1375 25.6558ZM77.9554 28.7607C77.7174 28.4809 77.7955 28.0455 78.1299 27.7882C78.4643 27.5309 78.9283 27.549 79.1663 27.8288L77.9554 28.7607ZM80.966 30.1944C81.1696 30.4983 81.0458 30.9297 80.6894 31.158C80.3331 31.3863 79.8791 31.3249 79.6755 31.021L80.966 30.1944ZM81.0596 33.4633C80.9067 33.131 81.0916 32.712 81.4725 32.5276C81.8534 32.3431 82.2861 32.463 82.439 32.7953L81.0596 33.4633ZM83.4309 35.6411C83.5243 35.9976 83.276 36.3936 82.8764 36.5256C82.4767 36.6576 82.077 36.4757 81.9836 36.1192L83.4309 35.6411ZM82.5465 38.9402C82.4941 38.5722 82.7816 38.1967 83.1887 38.1016C83.5958 38.0064 83.9683 38.2275 84.0207 38.5955L82.5465 38.9402ZM84.2928 41.6219C84.3074 41.9971 83.9867 42.3506 83.5765 42.4114C83.1664 42.4722 82.822 42.2173 82.8074 41.8421L84.2928 41.6219ZM82.7719 44.7857C82.796 44.4064 83.1477 44.0786 83.5574 44.0534C83.9672 44.0281 84.2798 44.3152 84.2557 44.6944L82.7719 44.7857ZM83.8905 47.7919C83.8243 48.1717 83.4422 48.4683 83.0372 48.4542C82.6321 48.4402 82.3574 48.1208 82.4237 47.741L83.8905 47.7919ZM81.7301 50.6727C81.8439 50.2972 82.2558 50.0406 82.6501 50.0995C83.0445 50.1585 83.2719 50.5107 83.1582 50.8862L81.7301 50.6727ZM82.0056 53.9304C81.8379 54.294 81.3983 54.4989 81.0237 54.3882C80.649 54.2774 80.4813 53.8928 80.649 53.5292L82.0056 53.9304ZM79.1388 56.237C79.3657 55.8965 79.8269 55.7575 80.1689 55.9265C80.511 56.0954 80.6043 56.5084 80.3774 56.8489L79.1388 56.237ZM78.2424 59.5312C77.9557 59.8342 77.4852 59.8938 77.1915 59.6643C76.8978 59.4348 76.8921 59.0031 77.1788 58.7001L78.2424 59.5312ZM74.7923 60.8171C75.1313 60.5653 75.5937 60.592 75.8251 60.8767C76.0566 61.1614 75.9694 61.5963 75.6305 61.8482L74.7923 60.8171ZM72.5819 63.6472C72.19 63.8046 71.7735 63.6516 71.6515 63.3056C71.5296 62.9596 71.7484 62.5515 72.1403 62.3942L72.5819 63.6472ZM69.3626 62.904C69.7681 62.9155 70.0453 63.2329 69.9817 63.6128C69.9182 63.9927 69.538 64.2913 69.1325 64.2798L69.3626 62.904ZM65.9315 63.5671C65.5769 63.4182 65.4569 63.014 65.6635 62.6643C65.8702 62.3146 66.3251 62.1518 66.6798 62.3007L65.9315 63.5671ZM64.3327 60.9043C64.6272 61.1329 64.6341 61.5644 64.3482 61.8681C64.0623 62.1717 63.5918 62.2324 63.2974 62.0037L64.3327 60.9043ZM61.1565 59.9722C60.9139 59.696 60.9857 59.2604 61.3168 58.9993C61.6479 58.7382 62.113 58.7504 62.3555 59.0267L61.1565 59.9722ZM60.7233 56.8424C60.9196 57.1509 60.7864 57.581 60.4259 57.803C60.0654 58.0249 59.6141 57.9547 59.4179 57.6461L60.7233 56.8424ZM58.0476 55.1007C57.8983 54.7667 58.0871 54.3489 58.4693 54.1675C58.8516 53.986 59.2826 54.1097 59.432 54.4437L58.0476 55.1007ZM58.5239 51.8777C58.6159 52.2346 58.3663 52.6299 57.9664 52.7607C57.5664 52.8915 57.1675 52.7083 57.0754 52.3514L58.5239 51.8777ZM56.6685 49.3709C56.6701 48.9936 57.0041 48.6505 57.4145 48.6045C57.8249 48.5586 58.1564 48.8272 58.1548 49.2045L56.6685 49.3709ZM58.7752 46.7418C58.543 47.0796 58.0804 47.2122 57.742 47.038C57.4035 46.8638 57.3173 46.4487 57.5495 46.1109L58.7752 46.7418ZM60.7914 44.3578C61.201 44.3343 61.512 44.6228 61.4861 45.0022C61.4601 45.3815 61.107 45.7081 60.6974 45.7316L60.7914 44.3578ZM62.9471 46.2471C62.6013 46.0839 62.5003 45.6733 62.7215 45.33C62.9426 44.9868 63.4022 44.8409 63.748 45.0041L62.9471 46.2471ZM66.021 46.4964C66.3047 46.7361 66.2944 47.1695 65.9978 47.4645C65.7013 47.7595 65.2309 47.8043 64.9471 47.5646L66.021 46.4964ZM66.6364 49.2825C66.402 49 66.4852 48.5649 66.8221 48.3106C67.159 48.0563 67.6222 48.0792 67.8565 48.3617L66.6364 49.2825ZM69.3511 50.4652C69.5408 50.7777 69.3994 51.2064 69.0354 51.4227C68.6714 51.639 68.2226 51.561 68.033 51.2484L69.3511 50.4652ZM69.1367 53.3941C68.9926 53.0577 69.1873 52.6416 69.5716 52.4647C69.9559 52.2879 70.3843 52.4173 70.5284 52.7538L69.1367 53.3941ZM71.3712 55.2008C71.4648 55.5572 71.2167 55.9532 70.8171 56.0854C70.4175 56.2175 70.0177 56.0358 69.9241 55.6794L71.3712 55.2008ZM70.3488 58.0702C70.3148 57.6983 70.6187 57.3331 71.0278 57.2546C71.4368 57.176 71.796 57.4138 71.83 57.7857L70.3488 58.0702ZM71.8241 60.4754C71.7863 60.8552 71.4243 61.1733 71.0156 61.1857C70.6069 61.1981 70.3063 60.9002 70.3442 60.5203L71.8241 60.4754ZM69.8344 62.9579C69.9567 62.5838 70.3734 62.3349 70.7652 62.402C71.157 62.4692 71.3755 62.8269 71.2532 63.201L69.8344 62.9579ZM70.0425 65.8311C69.8313 66.1788 69.3748 66.3364 69.0229 66.1831C68.671 66.0297 68.5568 65.6234 68.768 65.2756L70.0425 65.8311ZM67.1599 67.3585C67.4487 67.0572 67.9192 67.0007 68.2109 67.2323C68.5025 67.464 68.5048 67.8961 68.2161 68.1974L67.1599 67.3585ZM65.7678 70.2596C65.4163 70.495 64.9595 70.4438 64.7476 70.1454C64.5356 69.8469 64.6487 69.4142 65.0002 69.1788L65.7678 70.2596ZM62.3514 70.5616C62.7436 70.4051 63.1596 70.559 63.2806 70.9054C63.4016 71.2517 63.1818 71.6594 62.7896 71.8159L62.3514 70.5616ZM59.6325 72.7707C59.2246 72.8595 58.8572 72.6319 58.8118 72.2624C58.7664 71.8928 59.0603 71.5212 59.4682 71.4324L59.6325 72.7707ZM56.491 71.8783C56.9012 71.8418 57.2241 72.119 57.2122 72.4974C57.2002 72.8757 56.858 73.212 56.4477 73.2484L56.491 71.8783ZM53.2969 73.3689C52.8901 73.3654 52.6049 73.0545 52.6598 72.6744C52.7147 72.2944 53.0889 71.989 53.4956 71.9925L53.2969 73.3689ZM50.5173 71.8484C50.9183 71.8828 51.1721 72.2175 51.0842 72.5961C50.9964 72.9746 50.6002 73.2536 50.1993 73.2192L50.5173 71.8484ZM47.1619 72.8588C46.7676 72.7997 46.5404 72.4473 46.6543 72.0719C46.7683 71.6964 47.1803 71.44 47.5746 71.4991L47.1619 72.8588ZM44.6743 70.9818C45.0617 71.0615 45.2659 71.4274 45.1305 71.799C44.995 72.1707 44.5711 72.4073 44.1837 72.3276L44.6743 70.9818ZM41.2636 71.6523C40.8832 71.5548 40.6995 71.178 40.8535 70.8106C41.0074 70.4432 41.4407 70.2244 41.8211 70.3219L41.2636 71.6523ZM39.0157 69.5355C39.389 69.6491 39.5533 70.0353 39.3827 70.398C39.2121 70.7607 38.7712 70.9626 38.3979 70.849L39.0157 69.5355ZM35.59 69.9263C35.2244 69.7971 35.0794 69.4025 35.266 69.0451C35.4526 68.6876 35.9002 68.5026 36.2658 68.6319L35.59 69.9263ZM33.581 67.61C33.9372 67.7561 34.0608 68.159 33.857 68.5099C33.6532 68.8608 33.1992 69.0268 32.843 68.8807L33.581 67.61ZM71.2953 20.9507C71.6709 21.1876 72.0966 21.4734 72.5579 21.8028L71.5618 22.9315C71.1173 22.6141 70.7113 22.3417 70.3583 22.119L71.2953 20.9507ZM74.9301 23.6493C75.6505 24.256 76.3976 24.9287 77.1375 25.6558L75.9975 26.6639C75.2811 25.9598 74.5566 25.3075 73.8575 24.7186L74.9301 23.6493ZM79.1663 27.8288C79.8068 28.5816 80.4159 29.3732 80.966 30.1944L79.6755 31.021C79.1531 30.2412 78.5715 29.4848 77.9554 28.7607L79.1663 27.8288ZM82.439 32.7953C82.6513 33.2569 82.8398 33.7254 83.0002 34.1994L81.5763 34.7554C81.4299 34.3228 81.2566 33.8917 81.0596 33.4633L82.439 32.7953ZM83.0002 34.1994C83.155 34.6567 83.2991 35.1384 83.4309 35.6411L81.9836 36.1192C81.8583 35.6414 81.7219 35.1858 81.5763 34.7554L83.0002 34.1994ZM84.0207 38.5955C84.1585 39.5635 84.2522 40.5774 84.2928 41.6219L82.8074 41.8421C82.7685 40.8401 82.6786 39.8677 82.5465 38.9402L84.0207 38.5955ZM84.2557 44.6944C84.1908 45.7162 84.0716 46.753 83.8905 47.7919L82.4237 47.741C82.596 46.7526 82.7099 45.7633 82.7719 44.7857L84.2557 44.6944ZM83.1582 50.8862C82.8465 51.915 82.465 52.9342 82.0056 53.9304L80.649 53.5292C81.0777 52.5994 81.436 51.6433 81.7301 50.6727L83.1582 50.8862ZM80.3774 56.8489C79.7541 57.7842 79.045 58.6829 78.2424 59.5312L77.1788 58.7001C77.9128 57.9244 78.564 57.0996 79.1388 56.237L80.3774 56.8489ZM75.6305 61.8482C75.1664 62.1929 74.6808 62.5232 74.173 62.8377L73.4585 61.7226C73.9239 61.4344 74.3683 61.1322 74.7923 60.8171L75.6305 61.8482ZM74.173 62.8377C73.6448 63.1647 73.1139 63.4337 72.5819 63.6472L72.1403 62.3942C72.5733 62.2204 73.0131 61.9985 73.4585 61.7226L74.173 62.8377ZM69.1325 64.2798C68.0113 64.2479 66.9384 63.9899 65.9315 63.5671L66.6798 62.3007C67.5549 62.6681 68.4535 62.8781 69.3626 62.904L69.1325 64.2798ZM63.2974 62.0037C62.5294 61.4073 61.8127 60.7196 61.1565 59.9722L62.3555 59.0267C62.969 59.7253 63.6318 60.36 64.3327 60.9043L63.2974 62.0037ZM59.4179 57.6461C58.8938 56.8219 58.4338 55.9643 58.0476 55.1007L59.432 54.4437C59.7955 55.2565 60.2291 56.0651 60.7233 56.8424L59.4179 57.6461ZM57.0754 52.3514C56.8092 51.3194 56.6646 50.3085 56.6685 49.3709L58.1548 49.2045C58.1514 50.0144 58.277 50.9209 58.5239 51.8777L57.0754 52.3514ZM57.5495 46.1109C57.9309 45.5558 58.4464 45.0982 59.0998 44.787L59.6429 45.9955C59.2863 46.1653 59.0012 46.413 58.7752 46.7418L57.5495 46.1109ZM59.0998 44.787C59.6438 44.5279 60.2144 44.3908 60.7914 44.3578L60.6974 45.7316C60.3175 45.7534 59.9665 45.8414 59.6429 45.9955L59.0998 44.787ZM63.748 45.0041C64.5252 45.3711 65.2909 45.8797 66.021 46.4964L64.9471 47.5646C64.2818 47.0026 63.6059 46.5582 62.9471 46.2471L63.748 45.0041ZM67.8565 48.3617C68.3916 49.0066 68.8943 49.7122 69.3511 50.4652L68.033 51.2484C67.6045 50.5423 67.1344 49.8827 66.6364 49.2825L67.8565 48.3617ZM70.5284 52.7538C70.8652 53.5402 71.1503 54.3596 71.3712 55.2008L69.9241 55.6794C69.7184 54.8965 69.4524 54.1311 69.1367 53.3941L70.5284 52.7538ZM71.83 57.7857C71.9113 58.673 71.914 59.5736 71.8241 60.4754L70.3442 60.5203C70.4253 59.706 70.4236 58.8857 70.3488 58.0702L71.83 57.7857ZM71.2532 63.201C70.9611 64.0944 70.562 64.9755 70.0425 65.8311L68.768 65.2756C69.2238 64.525 69.5757 63.7493 69.8344 62.9579L71.2532 63.201ZM68.2161 68.1974C67.8751 68.5532 67.5082 68.9005 67.1145 69.2381L66.1807 68.2834C66.5322 67.982 66.8582 67.6733 67.1599 67.3585L68.2161 68.1974ZM67.1145 69.2381C66.6846 69.6067 66.235 69.9467 65.7678 70.2596L65.0002 69.1788C65.4109 68.9037 65.8049 68.6057 66.1807 68.2834L67.1145 69.2381ZM62.7896 71.8159C61.7787 72.2194 60.7213 72.5337 59.6325 72.7707L59.4682 71.4324C60.4758 71.213 61.4404 70.9252 62.3514 70.5616L62.7896 71.8159ZM56.4477 73.2484C55.4117 73.3404 54.358 73.3778 53.2969 73.3689L53.4956 71.9925C54.5114 72.001 55.5129 71.9651 56.491 71.8783L56.4477 73.2484ZM50.1993 73.2192C49.1838 73.1321 48.1685 73.0098 47.1619 72.8588L47.5746 71.4991C48.5529 71.6459 49.5365 71.7643 50.5173 71.8484L50.1993 73.2192ZM44.1837 72.3276C43.1909 72.1233 42.2147 71.896 41.2636 71.6523L41.8211 70.3219C42.7516 70.5604 43.7055 70.7824 44.6743 70.9818L44.1837 72.3276ZM38.3979 70.849C37.4175 70.5506 36.4777 70.2402 35.59 69.9263L36.2658 68.6319C37.1349 68.9391 38.0554 69.2432 39.0157 69.5355L38.3979 70.849ZM32.843 68.8807C32.37 68.6868 31.9218 68.495 31.5012 68.3075L32.276 67.0526C32.6839 67.2344 33.1198 67.4209 33.581 67.61L32.843 68.8807Z"
              fill="#D1827B"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
