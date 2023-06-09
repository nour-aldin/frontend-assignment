import { useState, useEffect } from "react";

import logo from "../../assets/Group-1.png";
import profile from "../../assets/profilePicture.png";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const links = ["Career Library", "Major Library", "School Library"];

  if (!user) {
    return <h1 className="text-white font-extrabold text-center">Loading...</h1>;
  }

  return (
    <nav className="relative z-10 mx-0 sm:mx-0 md:mx-0 lg:mx-28">
      <div className="max-w mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="" className="flex items-center">
                <img className="mr-3" src={logo} alt="logo" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="118"
                  height="14"
                  viewBox="0 0 118 14"
                  fill="none"
                >
                  <path
                    d="M5.40433 13.7272C8.92083 13.6939 10.6097 11.9195 10.5902 9.86236C10.5474 5.34365 3.40614 6.97627 3.38466 4.70813C3.37734 3.9345 4.0219 3.29537 5.70982 3.27938C6.79993 3.26906 7.98096 3.57438 9.12998 4.21411L9.98862 2.04314C8.83893 1.33308 7.25301 0.978834 5.70575 0.993487C2.20683 1.02662 0.535397 2.78328 0.555213 4.8756C0.598507 9.44705 7.7396 7.79685 7.76142 10.1002C7.76858 10.8562 7.08819 11.4253 5.40027 11.4413C3.92333 11.4553 2.37108 10.9425 1.32655 10.1963L0.379828 12.3505C1.47794 13.1841 3.45267 13.7457 5.40433 13.7272Z"
                    fill="white"
                  />
                  <path
                    d="M17.7172 11.0082C17.4205 11.2396 17.0173 11.3665 16.6129 11.3703C15.8744 11.3773 15.4307 10.9419 15.423 10.1331L15.3866 6.28253L17.7426 6.26022L17.7226 4.15032L15.3666 4.17263L15.3448 1.86932L12.6019 1.8953L12.6237 4.19861L11.1644 4.21243L11.1843 6.32233L12.6437 6.30851L12.6805 10.1942C12.7018 12.4448 14.0137 13.5753 16.2467 13.5542C17.0907 13.5462 17.9152 13.345 18.474 12.9352L17.7172 11.0082Z"
                    fill="white"
                  />
                  <path
                    d="M26.7153 3.85414L26.7596 8.53109C26.7761 10.2718 25.8695 11.0892 24.6035 11.1012C23.3903 11.1127 22.6804 10.4161 22.6654 8.83363L22.6186 3.89294L19.8757 3.91892L19.9264 9.264C19.954 12.1827 21.637 13.5031 24.0106 13.4807C25.1711 13.4697 26.2219 13.0201 26.9349 12.1869L26.9456 13.3122L29.5478 13.2876L29.4582 3.82817L26.7153 3.85414Z"
                    fill="white"
                  />
                  <path
                    d="M38.8577 0.151994L38.9011 4.74103C38.2081 3.97389 37.22 3.61399 36.0595 3.62498C33.387 3.65029 31.3478 5.56868 31.3759 8.54012C31.4041 11.5116 33.4792 13.391 36.1518 13.3657C37.4177 13.3537 38.4161 12.9398 39.094 12.1069L39.1043 13.197L41.7241 13.1722L41.6005 0.126017L38.8577 0.151994ZM36.6052 11.1106C35.2337 11.1236 34.1695 10.149 34.154 8.51381C34.1385 6.87864 35.1841 5.88403 36.5555 5.87104C37.9094 5.85822 38.9737 6.83285 38.9892 8.46802C39.0046 10.1032 37.959 11.0978 36.6052 11.1106Z"
                    fill="white"
                  />
                  <path
                    d="M53.4842 8.36591C53.4554 5.32414 51.2927 3.48071 48.5146 3.50702C45.6311 3.53433 43.4878 5.59438 43.5146 8.42516C43.5412 11.2384 45.6882 13.2754 48.9586 13.2444C50.6641 13.2282 51.9777 12.6883 52.8474 11.6777L51.373 10.1091C50.7283 10.7307 50.0103 11.0364 49.0081 11.0459C47.5663 11.0596 46.5573 10.3482 46.2824 9.17265L53.4385 9.10488C53.4539 8.87614 53.4862 8.5769 53.4842 8.36591ZM48.5519 5.58159C49.7827 5.56993 50.6867 6.33507 50.8914 7.52885L46.2321 7.57297C46.414 6.35795 47.3035 5.59341 48.5519 5.58159Z"
                    fill="white"
                  />
                  <path
                    d="M61.0133 3.38865C59.7298 3.4008 58.6263 3.85085 57.8955 4.66664L57.885 3.55895L55.2652 3.58376L55.3548 13.0431L58.0977 13.0172L58.0534 8.34022C58.0369 6.59955 58.9787 5.78177 60.2973 5.76928C61.5105 5.75779 62.2205 6.45443 62.235 7.98411L62.2823 12.9775L65.0252 12.9516L64.9739 7.53615C64.9466 4.65262 63.2463 3.3675 61.0133 3.38865Z"
                    fill="white"
                  />
                  <path
                    d="M72.8515 10.486C72.5547 10.7174 72.1515 10.8443 71.7471 10.8481C71.0086 10.8551 70.5649 10.4197 70.5572 9.61095L70.5208 5.76038L72.8768 5.73806L72.8568 3.62816L70.5008 3.65048L70.479 1.34717L67.7361 1.37314L67.7579 3.67645L66.2986 3.69027L66.3185 5.80017L67.7779 5.78635L67.8147 9.67209C67.836 11.9226 69.1479 13.0532 71.3809 13.032C72.2249 13.024 73.0494 12.8228 73.6082 12.4131L72.8515 10.486Z"
                    fill="white"
                  />
                  <path
                    d="M78.336 12.9662C81.1668 12.9394 82.7902 11.6755 82.7735 9.91727C82.7382 6.18978 77.0387 7.80874 77.0234 6.19115C77.0187 5.69884 77.5426 5.30702 78.7733 5.29537C79.6349 5.28721 80.5684 5.45421 81.5053 5.97286L82.4011 4.01254C81.4994 3.49356 80.0548 3.20831 78.7537 3.22063C75.9932 3.24678 74.3876 4.52804 74.4046 6.32145C74.4404 10.1017 80.1397 8.46515 80.1544 10.0124C80.1594 10.5399 79.6878 10.8784 78.4219 10.8904C77.2614 10.9014 75.9744 10.5443 75.1253 10.0073L74.2296 11.9852C75.1143 12.5571 76.736 12.9813 78.336 12.9662Z"
                    fill="white"
                  />
                  <path
                    d="M90.3515 12.7117L91.2482 12.7032L91.1317 0.395457L90.2349 0.403949L90.3515 12.7117Z"
                    fill="white"
                  />
                  <path
                    d="M99.6516 3.3744C97.9109 3.39088 96.6347 4.17667 96.0315 5.46602L96.0127 3.4792L95.1687 3.48719L95.2557 12.6653L96.1348 12.6569L96.0885 7.76899C96.0678 5.58876 97.3734 4.18726 99.536 4.16678C101.4 4.14913 102.518 5.22875 102.537 7.30349L102.588 12.5958L103.467 12.5875L103.416 7.22483C103.392 4.65778 101.885 3.35325 99.6516 3.3744Z"
                    fill="white"
                  />
                  <path
                    d="M110.743 12.5889C112.203 12.5751 113.463 11.9829 114.209 10.868L113.554 10.3995C112.894 11.3377 111.879 11.7869 110.736 11.7977C108.573 11.8182 106.976 10.2859 106.954 7.96502C106.932 5.64413 108.5 4.08188 110.663 4.0614C111.806 4.05058 112.83 4.48048 113.507 5.40603L114.153 4.92514C113.386 3.80702 112.115 3.25637 110.655 3.27019C107.965 3.29566 106.032 5.23064 106.058 7.97351C106.083 10.6988 108.053 12.6144 110.743 12.5889Z"
                    fill="white"
                  />
                  <path
                    d="M117.095 12.5288C117.499 12.5249 117.83 12.1877 117.826 11.7657C117.822 11.3437 117.485 11.0304 117.08 11.0343C116.676 11.0381 116.345 11.3577 116.349 11.7797C116.353 12.2017 116.69 12.5326 117.095 12.5288Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className="relative mx-5 hidden lg:block">
              <input
                type="text"
                placeholder="Search..."
                className="py-1 pr-8 pl-4 h-10 text-white rounded-md placeholder-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-[#252A40]"
              />

              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <circle
                    cx="6.62673"
                    cy="6.7879"
                    r="4.8688"
                    transform="rotate(-0.542612 6.62673 6.7879)"
                    stroke="white"
                    strokeWidth="1.22903"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0474 10.3949L11.9742 12.2806"
                    stroke="white"
                    strokeWidth="1.22903"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <ul className="flex flex-row items-center">
                {links.map((link, index) => (
                  <li key={index} className="mx-3">
                    <a href="#" className="text-white text-[13px] ">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-row items-center">
                <svg
                  width="27"
                  height="25"
                  viewBox="0 0 27 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer mx-5"
                >
                  <path
                    d="M21.6908 12.1246C20.9222 11.3144 20.5697 10.6092 20.5583 9.40573L20.5544 8.99651C20.5396 7.42818 20.1376 6.42141 19.275 5.419C17.9454 3.86215 15.7232 2.93729 13.5564 2.95781L13.4643 2.95868C11.3431 2.97877 9.20772 3.90147 7.88447 5.41973C6.99462 6.45901 6.5667 7.51708 6.58196 9.12884L6.58584 9.53806C6.59724 10.7416 6.28095 11.453 5.50503 12.2779C4.93411 12.8856 4.75717 13.6614 4.76511 14.4991C4.77305 15.3378 5.07975 16.1293 5.6863 16.7693C6.47729 17.5359 7.58863 18.0196 8.71991 18.0947C10.3582 18.251 11.9955 18.3002 13.656 18.2845C15.3155 18.2688 16.9512 18.1452 18.5877 18.0013C19.7163 17.9047 20.8183 17.4001 21.5946 16.6186C22.1879 15.9673 22.4806 15.1701 22.4726 14.3314C22.4647 13.4937 22.2731 12.7214 21.6908 12.1246Z"
                    fill="white"
                  />
                  <path
                    opacity="0.4"
                    d="M15.759 19.4482C15.2373 19.3508 12.0643 19.3809 11.5446 19.4881C11.1003 19.5869 10.621 19.8115 10.6256 20.2941C10.6558 20.7542 10.9526 21.1578 11.3609 21.4116L11.3599 21.4126C11.8883 21.784 12.5065 22.0175 13.1523 22.0973C13.4964 22.1375 13.8463 22.1322 14.202 22.0874C14.8451 21.9954 15.4588 21.7502 15.9801 21.3688L15.979 21.3679C16.3824 21.1063 16.6715 20.6972 16.693 20.2366C16.6885 19.7541 16.205 19.5386 15.759 19.4482Z"
                    fill="white"
                  />
                </svg>
                <div className="flex flex-row items-center">
                  <img
                    className="rounded-full w-10 h-10"
                    src={profile}
                    alt="profile"
                  />
                  <div className="flex flex-col mx-2">
                    <div className="">
                      <span className="text-[#55597D] text-sm uppercase font-normal">
                        Welcome
                      </span>
                    </div>
                    <div>
                      <span className="text-[#ADB3CC] font-semibold cursor-pointer">
                        {user.name}{" "}
                        <svg
                          className="inline"
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.05864 9.20824C6.02693 9.17793 5.89151 9.06364 5.78 8.95705C5.07909 8.33255 3.92605 6.69702 3.5707 5.83864C3.51367 5.70831 3.39246 5.37859 3.3832 5.20189C3.3816 5.03252 3.41907 4.87068 3.49669 4.71586C3.60536 4.52274 3.77777 4.36702 3.98226 4.28065C4.12419 4.22495 4.54967 4.13649 4.55725 4.13642C5.0228 4.04758 5.78012 3.99396 6.6175 3.98603C7.41534 3.97848 8.14266 4.01803 8.61671 4.08267C8.62437 4.09051 9.1549 4.16992 9.33722 4.26054C9.67031 4.42678 9.87927 4.75567 9.88262 5.10973L9.88291 5.14034C9.87697 5.371 9.67574 5.85787 9.66816 5.85794C9.32814 6.67647 8.26171 8.29502 7.54908 8.94821C7.54908 8.94821 7.3661 9.132 7.25148 9.21224C7.08691 9.33728 6.8822 9.40044 6.67692 9.40238C6.44781 9.40455 6.23375 9.33745 6.05864 9.20824Z"
                            fill="#ADB3CC"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-sm font-medium"
              onClick={toggleMenu}
            >
              Menu
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center mt-2">
              <ul className="flex flex-row items-center">
                {links.map((link, index) => (
                  <li key={index} className="mx-3 my-3">
                    <a href="#" className="text-white text-[13px] ">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
