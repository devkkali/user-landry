import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Progress from "src/components/Progress";
import Link from "next/link";
import { useRouter } from "next/router";

function SidebarLink({ href = "#", icon = <></>, title = "" }) {
  const { pathname } = useRouter();
  return (
    <li
      className={`rounded-lg hover:bg-[#185ADB]/10 ${
        pathname === href ? "bg-[#185ADB]/10" : ""
      }`}>
      <Link href={href}>
        <a className="flex items-center space-x-3 p-2.5">
          {icon}
          <span className="text-sm font-medium text-dark">{title}</span>
        </a>
      </Link>
    </li>
  );
}

function Sidebar() {
  return (
    <div className="flex h-full w-full shrink-0 flex-col overflow-y-auto p-2 md:overflow-y-hidden md:p-0">
      <div className="relative flex shrink-0 flex-wrap-reverse items-center justify-between gap-2 overflow-hidden rounded-lg bg-gradient-to-b from-[#185ADB]/70 to-[#185ADB] px-4 py-3.5 text-white">
        <div className="relative z-[1]">
          <p className="font-medium">Gabbar Singh</p>
          <p>+1-231-213-122</p>
        </div>
        <div className="flex items-center rounded-full bg-white py-2 px-3 font-semibold text-[#FFB400]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1959_3137)">
              <path
                d="M2 19H22V21H2V19ZM2 5L7 8L12 2L17 8L22 5V17H2V5Z"
                fill="#FFB400"
              />
            </g>
            <defs>
              <clipPath id="clip0_1959_3137">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="px-2">VIP</span>
        </div>

        <svg
          className="absolute inset-x-0 bottom-0"
          viewBox="0 0 410 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M410 14.1667L396.851 13.8889C382.507 13.3333 355.015 12.5 327.522 11.9444C301.224 11.3889 273.732 11.3889 246.239 11.3889C218.746 11.3889 191.254 11.3889 163.761 11.9444C136.268 12.5 108.776 13.3333 82.4781 11.3889C54.9854 9.44444 27.4927 4.72222 13.1487 2.22222L2.74181e-06 -9.53674e-07V20H13.1487C27.4927 20 54.9854 20 82.4781 20C108.776 20 136.268 20 163.761 20C191.254 20 218.746 20 246.239 20C273.732 20 301.224 20 327.522 20C355.015 20 382.507 20 396.851 20H410V14.1667Z"
            fill="#5697FF"
          />
        </svg>
      </div>
      <div className="relative mt-3 shrink-0 overflow-hidden rounded-lg bg-white p-4 shadow-[0_0_24px_rgba(0,0,0,0.04)]">
        <svg
          className="absolute inset-x-0 top-0"
          viewBox="0 0 409 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 11.0833L13.1166 11.6111C27.4257 12.6667 54.8513 14.25 82.277 15.3056C108.51 16.3611 135.936 16.3611 163.362 16.3611C190.787 16.3611 218.213 16.3611 245.638 15.3056C273.064 14.25 300.49 12.6667 326.723 16.3611C354.149 20.0556 381.574 29.0278 395.883 33.7778L409 38V0H395.883C381.574 0 354.149 0 326.723 0C300.49 0 273.064 0 245.638 0C218.213 0 190.787 0 163.362 0C135.936 0 108.51 0 82.277 0C54.8513 0 27.4257 0 13.1166 0H0V11.0833Z"
            fill="#D7E4FD"
          />
        </svg>

        <div className="z-[1]">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-dark/60 to-dark p-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1797_3052)">
                  <path
                    d="M8.12208 5H31.8787C32.1417 4.99996 32.401 5.06216 32.6353 5.1815C32.8697 5.30085 33.0724 5.47395 33.2271 5.68667L39.5987 14.4467C39.712 14.6025 39.7678 14.7928 39.7565 14.9852C39.7453 15.1775 39.6677 15.3601 39.5371 15.5017L20.6121 36.0033C20.5341 36.0877 20.4394 36.1549 20.3342 36.2009C20.2289 36.247 20.1153 36.2707 20.0004 36.2707C19.8855 36.2707 19.7719 36.247 19.6666 36.2009C19.5614 36.1549 19.4668 36.0877 19.3887 36.0033L0.463742 15.5033C0.332661 15.3616 0.254851 15.1788 0.243604 14.986C0.232357 14.7933 0.28837 14.6027 0.402075 14.4467L6.77374 5.68667C6.92838 5.47395 7.13115 5.30085 7.36549 5.1815C7.59984 5.06216 7.85909 4.99996 8.12208 5Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1797_3052">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-max">
              <p className="text-sm font-medium text-dark/70">VIP Membership</p>
              <p className="font-bold">DE-LITE</p>
            </div>
            <ChevronRightIcon className="h-4 w-4 stroke-[3] text-blue-500" />
          </div>
          <div className="mt-5 text-sm">
            <div className="flex justify-between">
              <span className="text-dark/60">1 bag monthly</span>
              <span className="font-bold text-dark/70">1 bag left</span>
            </div>
            <div className="mt-1">
              <Progress variant="blue" total="4" current="1" />
            </div>
            <div className="mt-5 flex justify-between">
              <span className="text-dark/60">1 bag monthly</span>
              <span className="font-bold text-dark/70">1 bag left</span>
            </div>
            <div className="mt-1">
              <Progress variant="black" total="4" current="3" />
            </div>
          </div>
          <button className="mt-4 w-full rounded-lg bg-[#FFA700] p-3 text-sm font-semibold text-white hover:bg-[#FFA700]/80">
            Upgrade
          </button>
        </div>
      </div>
      <div className="mt-4 grow md:overflow-y-hidden">
        <ul className="h-full space-y-1 overflow-auto px-4 scrollbar-thin scrollbar-thumb-gray-200">
          <SidebarLink
            href="/account/summary"
            icon={
              <svg
                width="22"
                height="22"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1797_2890)">
                  <path
                    d="M4 17.3333H14.6667V4H4V17.3333ZM4 28H14.6667V20H4V28ZM17.3333 28H28V14.6667H17.3333V28ZM17.3333 4V12H28V4H17.3333Z"
                    fill="#185ADB"
                    fillOpacity="0.7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1797_2890">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            title="Summary"
          />
          <SidebarLink
            href="#"
            icon={
              <svg
                width="22"
                height="22"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1797_2872)">
                  <path
                    d="M6.49727 4H25.5026C25.713 3.99997 25.9204 4.04973 26.1079 4.1452C26.2953 4.24068 26.4576 4.37916 26.5813 4.54933L31.6786 11.5573C31.7692 11.682 31.8138 11.8343 31.8048 11.9882C31.7958 12.142 31.7338 12.288 31.6293 12.4013L16.4893 28.8027C16.4269 28.8701 16.3512 28.9239 16.267 28.9608C16.1827 28.9976 16.0918 29.0166 15.9999 29.0166C15.908 29.0166 15.8171 28.9976 15.7329 28.9608C15.6487 28.9239 15.573 28.8701 15.5106 28.8027L0.370603 12.4027C0.265738 12.2893 0.20349 12.143 0.194492 11.9888C0.185495 11.8347 0.230305 11.6821 0.32127 11.5573L5.4186 4.54933C5.54231 4.37916 5.70453 4.24068 5.892 4.1452C6.07948 4.04973 6.28688 3.99997 6.49727 4Z"
                    fill="#185ADB"
                    fillOpacity="0.7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1797_2872">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            title="VIP Membership"
          />
          <SidebarLink
            href="#"
            icon={
              <svg
                width="22"
                height="22"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1797_2859)">
                  <path
                    d="M2.66699 14.6663H29.3337V26.6663C29.3337 27.02 29.1932 27.3591 28.9431 27.6091C28.6931 27.8592 28.3539 27.9997 28.0003 27.9997H4.00033C3.6467 27.9997 3.30756 27.8592 3.05752 27.6091C2.80747 27.3591 2.66699 27.02 2.66699 26.6663V14.6663ZM22.667 3.99967H28.0003C28.3539 3.99967 28.6931 4.14015 28.9431 4.3902C29.1932 4.64025 29.3337 4.97939 29.3337 5.33301V11.9997H2.66699V5.33301C2.66699 4.97939 2.80747 4.64025 3.05752 4.3902C3.30756 4.14015 3.6467 3.99967 4.00033 3.99967H9.33366V1.33301H12.0003V3.99967H20.0003V1.33301H22.667V3.99967Z"
                    fill="#185ADB"
                    fillOpacity="0.7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1797_2859">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            title="Bookings"
          />
          <SidebarLink
            href="/account/details"
            icon={
              <svg
                width="22"
                height="22"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1797_2850)">
                  <path
                    d="M16.0003 2.66699C23.3603 2.66699 29.3337 8.64033 29.3337 16.0003C29.3337 23.3603 23.3603 29.3337 16.0003 29.3337C8.64033 29.3337 2.66699 23.3603 2.66699 16.0003C2.66699 8.64033 8.64033 2.66699 16.0003 2.66699ZM8.03099 20.555C9.98833 23.475 12.927 25.3337 16.2137 25.3337C19.499 25.3337 22.439 23.4763 24.395 20.555C22.176 18.4811 19.2509 17.3294 16.2137 17.3337C13.1759 17.3291 10.2503 18.4808 8.03099 20.555ZM16.0003 14.667C17.0612 14.667 18.0786 14.2456 18.8288 13.4954C19.5789 12.7453 20.0003 11.7279 20.0003 10.667C20.0003 9.60613 19.5789 8.58871 18.8288 7.83857C18.0786 7.08842 17.0612 6.66699 16.0003 6.66699C14.9395 6.66699 13.922 7.08842 13.1719 7.83857C12.4218 8.58871 12.0003 9.60613 12.0003 10.667C12.0003 11.7279 12.4218 12.7453 13.1719 13.4954C13.922 14.2456 14.9395 14.667 16.0003 14.667Z"
                    fill="#185ADB"
                    fillOpacity="0.7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1797_2850">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            title="Account Details"
          />
          <SidebarLink
            href="/account/saved-address"
            icon={
              <svg
                width="22"
                height="22"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1797_2867)">
                  <path
                    d="M24.4853 23.1522L16 31.6376L7.51467 23.1522C5.83646 21.474 4.69358 19.3358 4.23057 17.008C3.76756 14.6803 4.00521 12.2675 4.91346 10.0748C5.82172 7.88205 7.35979 6.00792 9.33318 4.68935C11.3066 3.37078 13.6266 2.66699 16 2.66699C18.3734 2.66699 20.6934 3.37078 22.6668 4.68935C24.6402 6.00792 26.1783 7.88205 27.0865 10.0748C27.9948 12.2675 28.2324 14.6803 27.7694 17.008C27.3064 19.3358 26.1636 21.474 24.4853 23.1522ZM16 17.3336C16.7072 17.3336 17.3855 17.0526 17.8856 16.5525C18.3857 16.0524 18.6667 15.3741 18.6667 14.6669C18.6667 13.9596 18.3857 13.2814 17.8856 12.7813C17.3855 12.2812 16.7072 12.0002 16 12.0002C15.2928 12.0002 14.6145 12.2812 14.1144 12.7813C13.6143 13.2814 13.3333 13.9596 13.3333 14.6669C13.3333 15.3741 13.6143 16.0524 14.1144 16.5525C14.6145 17.0526 15.2928 17.3336 16 17.3336Z"
                    fill="#185ADB"
                    fillOpacity="0.7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1797_2867">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            title="Saved Address"
          />
          <SidebarLink
            href="/account/change-password"
            icon={
              <svg
                width="22"
                height="22"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1797_2862)">
                  <path
                    d="M24 10.6663H26.6667C27.0203 10.6663 27.3594 10.8068 27.6095 11.0569C27.8595 11.3069 28 11.6461 28 11.9997V27.9997C28 28.3533 27.8595 28.6924 27.6095 28.9425C27.3594 29.1925 27.0203 29.333 26.6667 29.333H5.33333C4.97971 29.333 4.64057 29.1925 4.39052 28.9425C4.14048 28.6924 4 28.3533 4 27.9997V11.9997C4 11.6461 4.14048 11.3069 4.39052 11.0569C4.64057 10.8068 4.97971 10.6663 5.33333 10.6663H8V9.33301C8 7.21128 8.84285 5.17644 10.3431 3.67615C11.8434 2.17586 13.8783 1.33301 16 1.33301C18.1217 1.33301 20.1566 2.17586 21.6569 3.67615C23.1571 5.17644 24 7.21128 24 9.33301V10.6663ZM14.6667 20.9757V23.9997H17.3333V20.9757C17.8417 20.6822 18.239 20.2291 18.4637 19.6868C18.6883 19.1444 18.7277 18.5431 18.5758 17.9761C18.4239 17.4091 18.0891 16.908 17.6234 16.5507C17.1576 16.1933 16.587 15.9996 16 15.9996C15.413 15.9996 14.8424 16.1933 14.3766 16.5507C13.9109 16.908 13.5761 17.4091 13.4242 17.9761C13.2723 18.5431 13.3117 19.1444 13.5363 19.6868C13.761 20.2291 14.1583 20.6822 14.6667 20.9757ZM21.3333 10.6663V9.33301C21.3333 7.91852 20.7714 6.56197 19.7712 5.56177C18.771 4.56158 17.4145 3.99967 16 3.99967C14.5855 3.99967 13.229 4.56158 12.2288 5.56177C11.2286 6.56197 10.6667 7.91852 10.6667 9.33301V10.6663H21.3333Z"
                    fill="#185ADB"
                    fillOpacity="0.7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1797_2862">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            title="Change Password"
          />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
