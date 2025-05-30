import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] flex flex-col items-center justify-center relative overflow-hidden px-2 sm:px-0">
      {/* Blurred Ellipse Background */}
      <div className="absolute w-[352px] h-[402px] left-1/2 top-[74px] -translate-x-1/2 bg-[#86A0FF]/[0.35] blur-[81px] z-0" />

      {/* Logo and text in one line */}
      <div className="mt-[22px] mb-8 z-10 flex items-center justify-center gap-2">
        <svg
          width="150"
          height="36"
          viewBox="0 0 170 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[48px] w-auto"
          aria-label="Company Logo"
        >
          <g clipPath="url(#clip0_7760_114)">
            <path d="M51.2775 29.3232H63.2295V25.7232H55.5255V12.1632H51.2775V29.3232Z" fill="white" />
            <path d="M70.3105 26.9232C68.6065 26.9232 67.7185 25.4352 67.7185 23.2032C67.7185 20.9712 68.6065 19.4592 70.3105 19.4592C72.0145 19.4592 72.9265 20.9712 72.9265 23.2032C72.9265 25.4352 72.0145 26.9232 70.3105 26.9232ZM70.3345 29.7072C74.2945 29.7072 76.8865 26.8992 76.8865 23.2032C76.8865 19.5072 74.2945 16.6992 70.3345 16.6992C66.3985 16.6992 63.7585 19.5072 63.7585 23.2032C63.7585 26.8992 66.3985 29.7072 70.3345 29.7072Z" fill="white" />
            <path d="M83.7411 33.5712C85.5651 33.5712 87.1731 33.1632 88.2531 32.2032C89.2371 31.3152 89.8851 29.9712 89.8851 28.1232V17.0352H86.1411V18.3552H86.0931C85.3731 17.3232 84.2691 16.6752 82.6371 16.6752C79.5891 16.6752 77.4771 19.2192 77.4771 22.8192C77.4771 26.5872 80.0451 28.6512 82.8051 28.6512C84.2931 28.6512 85.2291 28.0512 85.9491 27.2352H86.0451V28.4592C86.0451 29.9472 85.3491 30.8112 83.6931 30.8112C82.3971 30.8112 81.7491 30.2592 81.5331 29.6112H77.7411C78.1251 32.1792 80.3571 33.5712 83.7411 33.5712ZM83.7171 25.7472C82.2531 25.7472 81.2931 24.5472 81.2931 22.6992C81.2931 20.8272 82.2531 19.6272 83.7171 19.6272C85.3491 19.6272 86.2131 21.0192 86.2131 22.6752C86.2131 24.4032 85.4211 25.7472 83.7171 25.7472Z" fill="white" />
            <path d="M97.5834 26.9232C95.8794 26.9232 94.9914 25.4352 94.9914 23.2032C94.9914 20.9712 95.8794 19.4592 97.5834 19.4592C99.2874 19.4592 100.199 20.9712 100.199 23.2032C100.199 25.4352 99.2874 26.9232 97.5834 26.9232ZM97.6074 29.7072C101.567 29.7072 104.159 26.8992 104.159 23.2032C104.159 19.5072 101.567 16.6992 97.6074 16.6992C93.6714 16.6992 91.0314 19.5072 91.0314 23.2032C91.0314 26.8992 93.6714 29.7072 97.6074 29.7072Z" fill="white" />
            <path d="M105.302 29.3232H109.214V17.0352H105.302V29.3232ZM105.302 15.3312H109.214V12.1632H105.302V15.3312Z" fill="white" />
            <path d="M110.911 33.3792H114.823V28.0512H114.871C115.639 29.0832 116.767 29.7072 118.351 29.7072C121.567 29.7072 123.703 27.1632 123.703 23.1792C123.703 19.4832 121.711 16.6752 118.447 16.6752C116.767 16.6752 115.567 17.4192 114.727 18.5232H114.655V17.0352H110.911V33.3792ZM117.343 26.6832C115.663 26.6832 114.703 25.3152 114.703 23.3232C114.703 21.3312 115.567 19.8192 117.271 19.8192C118.951 19.8192 119.743 21.2112 119.743 23.3232C119.743 25.4112 118.831 26.6832 117.343 26.6832Z" fill="white" />
            <path d="M130.072 29.7072C133.288 29.7072 135.664 28.3152 135.664 25.6272C135.664 22.4832 133.12 21.9312 130.96 21.5712C129.4 21.2832 128.008 21.1632 128.008 20.2992C128.008 19.5312 128.752 19.1712 129.712 19.1712C130.792 19.1712 131.536 19.5072 131.68 20.6112H135.28C135.088 18.1872 133.216 16.6752 129.736 16.6752C126.832 16.6752 124.432 18.0192 124.432 20.6112C124.432 23.4912 126.712 24.0672 128.848 24.4272C130.48 24.7152 131.968 24.8352 131.968 25.9392C131.968 26.7312 131.224 27.1632 130.048 27.1632C128.752 27.1632 127.936 26.5632 127.792 25.3392H124.096C124.216 28.0512 126.472 29.7072 130.072 29.7072Z" fill="white" />
            <path d="M140.978 29.6832C142.682 29.6832 143.762 29.0112 144.65 27.8112H144.722V29.3232H148.466V17.0352H144.554V23.8992C144.554 25.3632 143.738 26.3712 142.394 26.3712C141.146 26.3712 140.546 25.6272 140.546 24.2832V17.0352H136.658V25.0992C136.658 27.8352 138.146 29.6832 140.978 29.6832Z" fill="white" />
            <path d="M150.168 29.3232H154.08V22.4352C154.08 20.9712 154.8 19.9392 156.024 19.9392C157.2 19.9392 157.752 20.7072 157.752 22.0272V29.3232H161.664V22.4352C161.664 20.9712 162.36 19.9392 163.608 19.9392C164.784 19.9392 165.336 20.7072 165.336 22.0272V29.3232H169.248V21.3312C169.248 18.5712 167.856 16.6752 165.072 16.6752C163.488 16.6752 162.168 17.3472 161.208 18.8352H161.16C160.536 17.5152 159.312 16.6752 157.704 16.6752C155.928 16.6752 154.752 17.5152 153.984 18.7872H153.912V17.0352H150.168V29.3232Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M20.1014 40.3232C31.1472 40.3232 40.1014 31.3689 40.1014 20.3232C40.1014 9.27754 31.1472 0.323242 20.1014 0.323242C9.05573 0.323242 0.10144 9.27754 0.10144 20.3232C0.10144 31.3689 9.05573 40.3232 20.1014 40.3232ZM23.1884 15.7758C24.8932 14.0709 24.8932 11.3068 23.1884 9.6019C21.4835 7.89702 18.7194 7.89702 17.0145 9.6019C15.3097 11.3068 15.3097 14.0709 17.0145 15.7758L20.1014 18.8627L23.1884 15.7758ZM24.6489 23.4102C26.3538 25.1151 29.1179 25.1151 30.8228 23.4102C32.5276 21.7053 32.5276 18.9412 30.8228 17.2363C29.1179 15.5315 26.3538 15.5315 24.6489 17.2363L21.562 20.3233L24.6489 23.4102ZM23.1884 31.0446C24.8932 29.3397 24.8932 26.5756 23.1884 24.8707L20.1014 21.7838L17.0145 24.8707C15.3097 26.5756 15.3097 29.3397 17.0145 31.0446C18.7194 32.7495 21.4835 32.7495 23.1884 31.0446ZM9.38007 23.4102C7.67523 21.7053 7.67523 18.9412 9.38007 17.2363C11.085 15.5315 13.8491 15.5315 15.554 17.2363L18.6409 20.3233L15.554 23.4102C13.8491 25.1151 11.085 25.1151 9.38007 23.4102Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_7760_114">
              <rect width="170" height="41" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Heading */}
      <div className="w-full flex justify-center mb-6 z-10">
        <h1 className="font-dm-sans font-extralight text-[20px] md:text-[24px] lg:text-[32px] text-[#D9D9D9] text-center max-w-[210px] md:max-w-[320px] lg:max-w-[726px] mx-auto leading-[21px] md:leading-[28px] lg:leading-[33px] flex items-center justify-center mb-4">
          Lorem ipsum vitae enim quisque consequat.
        </h1>
      </div>

      {/* Form */}
      <form className="w-full max-w-[353px] flex flex-col gap-6 z-10 items-center justify-center mx-auto">
        {/* Name */}
        <div className="w-full flex flex-col items-center justify-center">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name*"
            className="w-full bg-transparent border-b border-[#D9D9D9] text-[#D9D9D9] text-[14px] md:text-[15px] lg:text-[16px] font-['Helvetica Neue'] font-normal focus:outline-none py-1 placeholder-[#D9D9D9] leading-[15px] md:leading-[16px] lg:leading-[17px]"
          />
        </div>
        {/* Email */}
        <div className="w-full flex flex-col items-center justify-center">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email*"
            className="w-full bg-transparent border-b border-[#D9D9D9] text-[#D9D9D9] text-[14px] md:text-[15px] lg:text-[16px] font-['Helvetica Neue'] font-normal focus:outline-none py-1 placeholder-[#D9D9D9] leading-[15px] md:leading-[16px] lg:leading-[17px]"
          />
        </div>
        {/* URL */}
        <div className="w-full flex flex-col items-center justify-center">
          <input
            id="url"
            name="url"
            type="url"
            required
            placeholder="URL*"
            className="w-full bg-transparent border-b border-[#D9D9D9] text-[#D9D9D9] text-[14px] md:text-[15px] lg:text-[16px] font-['Helvetica Neue'] font-normal focus:outline-none py-1 placeholder-[#D9D9D9] leading-[15px] md:leading-[16px] lg:leading-[17px]"
          />
        </div>
        {/* Submit Button */}
        <button type="submit" className="w-full h-[40px] bg-[#86A0FF] rounded-[30px] font-roboto-mono font-bold text-[15px] leading-[30px] tracking-[-0.015em] text-[#0F0F0F] flex items-center justify-center mt-2">
          Register
        </button>
      </form>
    </div>
  );
}
