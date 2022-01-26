import styles from "../styles/home.module.scss";

import logoImg from "../assets/Logo.png";
import logoImgBranco from "../assets/LogoB.png";

import { Link } from "react-router-dom";
import { useAuthContext } from "../context/Authentication";

export function Home() {
  const { RouteAuthentication, changeTheme, themeState } = useAuthContext();

  return (
    <div className={styles.HomeContainer}>
      <div className={styles.StructurePage}>
        {themeState ? (
          <img
            src={logoImgBranco}
            alt="Imagem da Logo"
            className={styles.LogoImg}
          />
        ) : (
          <img src={logoImg} alt="Imagem da Logo" className={styles.LogoImg} />
        )}
        {themeState ? (
          <button className={styles.ChangeThemeButton} onClick={changeTheme}>
            <img
              src="moon-light.svg"
              alt="Lua Branca"
              className={styles.ChangeTheme}
            />
          </button>
        ) : (
          <button className={styles.ChangeThemeButton} onClick={changeTheme}>
            <img
              src="moon-dark.svg"
              alt="Lua Preta"
              className={styles.ChangeTheme}
            />
          </button>
        )}

        <div className={styles.HomeStructureSection}>
          <div>
            <h1>
              Olá Dev, entre para fazer uso da <br /> nossa{" "}
              <strong>ToDoList.</strong>
            </h1>
            <Link to="/todo">
              <button onClick={RouteAuthentication}>
                <span>Entrar</span>
                <svg
                  width="36"
                  height="29"
                  viewBox="0 0 36 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.25 27.5H23.3438C22.8797 27.5 22.5 27.1203 22.5 26.6563V23.8438C22.5 23.3797 22.8797 23 23.3438 23H29.25C30.4945 23 31.5 21.9945 31.5 20.75V7.25C31.5 6.00547 30.4945 5 29.25 5H23.3438C22.8797 5 22.5 4.62031 22.5 4.15625V1.34375C22.5 0.879688 22.8797 0.5 23.3438 0.5H29.25C32.9766 0.5 36 3.52344 36 7.25V20.75C36 24.4766 32.9766 27.5 29.25 27.5ZM25.9453 13.3672L14.1328 1.55469C13.0781 0.5 11.25 1.23828 11.25 2.75V9.5H1.6875C0.752344 9.5 0 10.2523 0 11.1875V17.9375C0 18.8727 0.752344 19.625 1.6875 19.625H11.25V26.375C11.25 27.8867 13.0781 28.625 14.1328 27.5703L25.9453 15.7578C26.5992 15.0969 26.5992 14.0281 25.9453 13.3672Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </button>
            </Link>
          </div>

          <svg
            width="492"
            height="575"
            viewBox="0 0 492 575"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_10)">
              <path
                d="M476.098 211.93H15.4804C11.3762 211.925 7.44139 210.289 4.53928 207.381C1.63716 204.473 0.00467801 200.531 -6.10352e-05 196.419V15.5111C0.00467801 11.3988 1.63716 7.45621 4.53928 4.54833C7.44139 1.64044 11.3762 0.00471794 15.4804 -3.05176e-05H476.098C480.202 0.00471794 484.137 1.64044 487.039 4.54833C489.941 7.45621 491.574 11.3988 491.578 15.5111V196.419C491.574 200.531 489.941 204.473 487.039 207.381C484.137 210.289 480.202 211.925 476.098 211.93Z"
                fill="#F2F2F2"
              />
              <path
                d="M368.672 202.037H88.5964C67.7256 202.013 47.7163 193.696 32.9584 178.908C18.2005 164.121 9.89916 144.072 9.87561 123.16V88.7786C9.89914 67.8662 18.2004 47.8171 32.9583 33.0298C47.7162 18.2425 67.7255 9.92451 88.5964 9.90079H402.985C423.856 9.92451 443.865 18.2425 458.623 33.0298C473.381 47.8171 481.682 67.8662 481.706 88.7786C481.672 118.806 469.752 147.594 448.561 168.827C427.371 190.06 398.64 202.003 368.672 202.037Z"
                fill="white"
              />
              <path
                d="M296.424 61.6886H111.29C110.232 61.6886 109.216 61.2671 108.467 60.5169C107.719 59.7667 107.298 58.7492 107.298 57.6883C107.298 56.6273 107.719 55.6098 108.467 54.8596C109.216 54.1094 110.232 53.6879 111.29 53.6879H296.424C297.483 53.6879 298.498 54.1094 299.247 54.8596C299.995 55.6098 300.416 56.6273 300.416 57.6883C300.416 58.7492 299.995 59.7667 299.247 60.5169C298.498 61.2671 297.483 61.6886 296.424 61.6886Z"
                fill="#E6E6E6"
              />
              <path
                d="M390.141 104.37H111.29C110.232 104.37 109.216 103.948 108.467 103.198C107.719 102.448 107.298 101.43 107.298 100.369C107.298 99.3082 107.719 98.2907 108.467 97.5405C109.216 96.7903 110.232 96.3689 111.29 96.3689H390.141C391.2 96.3689 392.216 96.7903 392.964 97.5405C393.713 98.2907 394.134 99.3082 394.134 100.369C394.134 101.43 393.713 102.448 392.964 103.198C392.216 103.948 391.2 104.37 390.141 104.37Z"
                fill="#E6E6E6"
              />
              <path
                d="M390.141 147.051H111.29C110.232 147.051 109.216 146.629 108.467 145.879C107.719 145.129 107.298 144.111 107.298 143.05C107.298 141.989 107.719 140.972 108.467 140.222C109.216 139.471 110.232 139.05 111.29 139.05H390.141C391.2 139.05 392.216 139.471 392.964 140.222C393.713 140.972 394.134 141.989 394.134 143.05C394.134 144.111 393.713 145.129 392.964 145.879C392.216 146.629 391.2 147.051 390.141 147.051Z"
                fill="#E6E6E6"
              />
              <path
                d="M390.141 147.051H111.29C110.232 147.051 109.216 146.629 108.467 145.879C107.719 145.129 107.298 144.111 107.298 143.05C107.298 141.989 107.719 140.972 108.467 140.222C109.216 139.471 110.232 139.05 111.29 139.05H390.141C391.2 139.05 392.216 139.471 392.964 140.222C393.713 140.972 394.134 141.989 394.134 143.05C394.134 144.111 393.713 145.129 392.964 145.879C392.216 146.629 391.2 147.051 390.141 147.051Z"
                fill="#E6E6E6"
              />
              <path
                d="M276.887 109.268C276.932 110.473 277.239 111.654 277.788 112.727C278.337 113.8 279.114 114.739 280.065 115.479C281.015 116.218 282.116 116.74 283.29 117.007C284.463 117.274 285.681 117.28 286.857 117.025L302.082 142.052L308.562 128.274L293.111 106.62C292.551 104.669 291.297 102.991 289.586 101.904C287.875 100.818 285.825 100.398 283.825 100.724C281.825 101.051 280.015 102.101 278.736 103.675C277.457 105.25 276.8 107.24 276.887 109.268H276.887Z"
                fill="#FFB6B6"
              />
              <path
                d="M391.145 180.994L338.675 152.477L322.125 136.919C322.125 136.919 314.93 134.989 317.578 132.645C320.226 130.301 312.68 128.04 312.68 128.04L303.795 119.688L291.17 128.638L294.824 134.313C294.824 134.313 294.573 143.708 299.709 141.901C304.846 140.093 303.562 147.885 303.562 147.885L334.22 195.503L391.145 180.994Z"
                fill="#3F3D56"
              />
              <path
                d="M236.259 154.127C264.564 154.127 287.51 131.136 287.51 102.774C287.51 74.4132 264.564 51.422 236.259 51.422C207.954 51.422 185.009 74.4132 185.009 102.774C185.009 131.136 207.954 154.127 236.259 154.127Z"
                fill="#28415D"
              />
              <path
                d="M391.307 555.035H380.651L375.58 513.85H391.307V555.035Z"
                fill="#FFB6B6"
              />
              <path
                d="M396.932 573.535H389.29L387.926 566.305L384.432 573.535H364.163C363.192 573.535 362.246 573.224 361.463 572.647C360.681 572.07 360.103 571.257 359.813 570.328C359.524 569.399 359.539 568.401 359.856 567.481C360.173 566.561 360.775 565.766 361.574 565.213L377.76 554.012V546.703L394.785 547.721L396.932 573.535Z"
                fill="#2F2E41"
              />
              <path
                d="M306.078 555.035H295.421L290.35 513.85H306.078V555.035Z"
                fill="#FFB6B6"
              />
              <path
                d="M311.702 573.535H304.06L302.696 566.305L299.203 573.535H278.934C277.963 573.535 277.016 573.224 276.234 572.647C275.451 572.07 274.873 571.257 274.584 570.328C274.295 569.399 274.31 568.401 274.627 567.481C274.943 566.561 275.546 565.766 276.345 565.213L292.531 554.012V546.703L309.556 547.721L311.702 573.535Z"
                fill="#2F2E41"
              />
              <path
                d="M380 243.559H326.215V304.913H380V243.559Z"
                fill="#FFB6B6"
              />
              <path
                d="M327.456 273.821L318.354 284.6L302.632 317.764L263.017 412.209L254.638 432.182L261.404 467.491C261.404 467.491 262.499 492.367 262.499 496.439C262.499 504.73 269.42 509.324 269.42 509.324L274.498 535.821L323.732 533.749C323.732 533.749 322.014 504.541 311.702 497.173C301.39 489.806 296.65 451.408 296.65 451.408L291.047 434.373L345.66 369.506L346.013 392.18L346.183 403.155C346.183 403.155 338.186 474.536 347.508 488.389C356.831 502.242 347.698 500.612 347.698 500.612L348.143 529.189L406.479 529.603L393.609 447.332C393.609 447.332 387.074 442.162 390.571 436.965C394.067 431.768 387.182 425.403 387.182 425.403L390.27 361.176C390.27 361.176 386.851 350.082 390.873 348.64C394.895 347.198 391.401 337.658 391.401 337.658L391.998 325.227L380 286.673L327.456 273.821Z"
                fill="#2F2E41"
              />
              <path
                d="M380.828 243.559L386.62 226.147L390.757 220.344L392.412 203.761C392.412 158.989 382.445 166.445 382.445 166.445L376.69 150.698L350.211 149.869L333.248 166.037L319.181 171.011L313.673 199.691L323.732 230.293L326.215 246.875C321.479 255.635 321.88 251.491 325.801 258.068L372.553 270.92C389.102 276.723 389.102 261.799 385.784 258.068C382.465 254.337 380.828 243.559 380.828 243.559Z"
                fill="#3F3D56"
              />
              <path
                d="M360.03 144.303C373.587 144.303 384.577 133.291 384.577 119.707C384.577 106.124 373.587 95.1117 360.03 95.1117C346.473 95.1117 335.483 106.124 335.483 119.707C335.483 133.291 346.473 144.303 360.03 144.303Z"
                fill="#FFB6B6"
              />
              <path
                d="M392.801 152.539C393.032 152.93 393.172 153.368 393.211 153.821C393.25 154.274 393.186 154.729 393.025 155.154C392.863 155.579 392.608 155.962 392.279 156.274C391.949 156.586 391.554 156.82 391.121 156.958C387.828 158.052 385.801 161.244 383.434 163.798C381.076 166.343 377.278 168.458 374.266 166.725C371.262 165 371.055 160.598 368.54 158.21C366.09 155.888 362.019 156.17 359.14 157.936L359.053 157.989C358.556 158.314 357.975 158.486 357.382 158.483C356.789 158.48 356.209 158.303 355.715 157.974C355.221 157.645 354.834 157.178 354.602 156.63C354.37 156.083 354.303 155.48 354.41 154.895C355.419 149.518 356.427 144.142 357.435 138.767C354.787 145.16 350.941 150.986 346.107 155.93C344.775 157.47 343.088 158.659 341.192 159.395C339.471 159.943 337.799 158.16 336.128 158.483C340.282 154.844 354.249 131.512 351.75 115.917C348.813 116.248 345.875 116.58 342.938 116.912C342.62 115.519 341.94 114.234 340.968 113.189C341.087 114.545 340.915 115.91 340.464 117.194C339.239 117.334 338.006 117.467 336.781 117.608C335.077 117.799 333.223 117.965 331.759 117.069C329.318 115.577 329.243 112.045 329.938 109.259C331.974 101.158 338.147 94.3846 345.701 90.836C353.256 87.2957 355.49 95.1805 363.451 92.6601C379.173 87.6854 391.221 96.1921 395.465 111.978C399.032 125.219 396.442 139.273 392.801 152.539Z"
                fill="#2F2E41"
              />
              <path
                d="M460.758 574.07H430.701L430.572 573.835C430.188 573.137 429.817 572.397 429.47 571.636C426.374 564.995 425.065 557.399 423.91 550.697L423.041 545.645C422.936 545.034 423.015 544.404 423.269 543.838C423.523 543.271 423.939 542.794 424.465 542.466C424.992 542.138 425.604 541.976 426.223 541.998C426.842 542.021 427.44 542.229 427.941 542.594C432.509 545.924 437.079 549.252 441.65 552.576C443.381 553.838 445.358 555.298 447.251 556.877C447.434 555.988 447.625 555.096 447.816 554.217C447.948 553.61 448.257 553.056 448.705 552.626C449.152 552.197 449.718 551.911 450.329 551.805C450.94 551.699 451.568 551.778 452.134 552.032C452.7 552.287 453.177 552.704 453.504 553.232L457.021 558.893C459.586 563.027 461.85 567.101 461.389 571.495C461.391 571.549 461.387 571.602 461.377 571.655C461.284 572.377 461.113 573.086 460.866 573.77L460.758 574.07Z"
                fill="#F0F0F0"
              />
              <path
                d="M490.927 574.721L205.304 575C205.019 574.999 204.746 574.884 204.545 574.682C204.344 574.479 204.231 574.205 204.231 573.919C204.231 573.634 204.344 573.36 204.545 573.157C204.746 572.955 205.019 572.84 205.304 572.839L490.927 572.56C491.212 572.561 491.485 572.676 491.686 572.878C491.887 573.081 492 573.355 492 573.641C492 573.926 491.887 574.2 491.686 574.403C491.485 574.605 491.212 574.72 490.927 574.721Z"
                fill="#CACACA"
              />
              <path
                d="M231.6 171.891L200.183 145.307C199.109 144.396 198.44 143.095 198.322 141.691C198.203 140.286 198.646 138.892 199.553 137.814L205.335 130.953C206.244 129.877 207.542 129.206 208.944 129.088C210.346 128.969 211.737 129.413 212.813 130.321L244.231 156.906C245.304 157.816 245.974 159.117 246.092 160.521C246.21 161.926 245.767 163.32 244.861 164.398L239.078 171.259C238.17 172.335 236.872 173.006 235.47 173.125C234.068 173.243 232.676 172.799 231.6 171.891Z"
                fill="#3F3D56"
              />
              <path
                d="M201.832 138.367C201.343 138.948 201.105 139.699 201.168 140.456C201.232 141.213 201.593 141.914 202.171 142.405L233.589 168.989C234.169 169.479 234.918 169.718 235.674 169.654C236.429 169.59 237.129 169.228 237.619 168.649L243.401 161.788C243.89 161.207 244.128 160.456 244.064 159.699C244.001 158.942 243.64 158.241 243.061 157.75L211.644 131.166C211.064 130.676 210.314 130.437 209.559 130.501C208.803 130.565 208.104 130.926 207.614 131.506L201.832 138.367Z"
                fill="white"
              />
              <path
                d="M220.276 148.701C220.167 148.854 220.024 148.979 219.858 149.067C219.692 149.155 219.508 149.203 219.321 149.207L214.384 149.321C214.226 149.325 214.068 149.297 213.92 149.24C213.772 149.182 213.637 149.096 213.522 148.986C213.408 148.876 213.316 148.745 213.252 148.6C213.188 148.454 213.153 148.298 213.149 148.139C213.145 147.98 213.173 147.822 213.23 147.674C213.288 147.525 213.374 147.39 213.483 147.275C213.593 147.16 213.724 147.068 213.869 147.004C214.014 146.94 214.17 146.905 214.329 146.901L217.558 146.827L214.378 138.418C214.265 138.118 214.276 137.786 214.408 137.494C214.539 137.202 214.781 136.974 215.08 136.86C215.38 136.747 215.711 136.756 216.003 136.888C216.295 137.019 216.523 137.261 216.637 137.56L220.423 147.568C220.491 147.75 220.515 147.944 220.493 148.137C220.471 148.329 220.403 148.513 220.295 148.674L220.276 148.701Z"
                fill="#28415D"
              />
              <path
                d="M220.909 150.814C222.099 150.99 223.237 151.424 224.242 152.088C225.247 152.751 226.094 153.627 226.725 154.655C227.355 155.682 227.753 156.835 227.89 158.033C228.028 159.231 227.901 160.444 227.52 161.588L250.694 179.474L236.32 184.431L216.518 166.685C214.643 165.916 213.114 164.485 212.222 162.662C211.33 160.839 211.137 158.752 211.678 156.796C212.219 154.839 213.458 153.15 215.159 152.048C216.86 150.945 218.906 150.506 220.909 150.814L220.909 150.814Z"
                fill="#FFB6B6"
              />
              <path
                d="M341.557 159.658L282.225 196.211C282.225 196.211 258.302 187.342 262.978 183.236C267.653 179.131 252.77 176.355 252.77 176.355L236.328 165.272L226.787 176.382C226.787 176.382 228.526 194.428 231.484 191.303C234.441 188.178 238.863 196.714 238.863 196.714C238.863 196.714 240.169 206.245 248.589 203.847C257.009 201.448 279.603 226.589 279.603 226.589L352.623 199.301L341.557 159.658Z"
                fill="#3F3D56"
              />
              <path
                d="M234.457 123.374C233.769 123.374 233.091 123.213 232.476 122.905C231.86 122.597 231.325 122.149 230.913 121.598L220.046 107.08C219.697 106.613 219.443 106.083 219.299 105.518C219.154 104.953 219.122 104.366 219.205 103.788C219.287 103.211 219.482 102.656 219.778 102.154C220.075 101.653 220.467 101.215 220.932 100.865C221.873 100.158 223.054 99.855 224.217 100.022C224.793 100.104 225.348 100.299 225.848 100.596C226.349 100.893 226.786 101.286 227.135 101.753L234.245 111.25L252.504 83.8069C253.156 82.8272 254.169 82.1471 255.322 81.9161C256.474 81.6852 257.671 81.9224 258.648 82.5755C259.626 83.2287 260.305 84.2443 260.535 85.3989C260.766 86.5534 260.529 87.7525 259.877 88.7322L238.144 121.397C237.751 121.988 237.222 122.475 236.602 122.819C235.982 123.163 235.289 123.353 234.58 123.373C234.539 123.373 234.498 123.374 234.457 123.374Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_10">
                <rect width="492" height="575" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}