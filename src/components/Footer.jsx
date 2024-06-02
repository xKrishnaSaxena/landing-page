import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`w-[1191px] flex flex-row items-start justify-center py-0 px-[50px] box-border max-w-full text-left text-base text-black font-clash-display lg:pl-[25px] lg:pr-[25px] lg:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-center gap-[92px] max-w-full lg:gap-[46px] mq750:gap-[23px]">
        <div className="w-[1059px] flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
          <div className="w-[141px] flex flex-col items-start justify-center pt-2.5 px-0 pb-0 box-border text-8xs-2 text-gray-300">
            <div className="self-stretch flex flex-col items-start justify-center gap-[35px]">
              <div className="self-stretch flex flex-row items-start justify-end py-0 px-14">
                <div className="relative font-medium inline-block min-w-[9px] z-[8]">
                  TM
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[16px] text-base text-black">
                <div className="self-stretch relative leading-[26px] capitalize font-medium whitespace-nowrap z-[8]">
                  help@frybix.com
                </div>
                <div className="self-stretch relative leading-[26px] capitalize font-medium whitespace-nowrap z-[8]">
                  +1 234 456 678 89
                </div>
              </div>
            </div>
          </div>
          <div className="w-[82px] flex flex-col items-start justify-center gap-[16px]">
            <h2 className="m-0 self-stretch relative text-13xl leading-[42px] capitalize font-medium font-inherit text-center inline-block min-w-[82px] z-[8] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[34px]">
              links
            </h2>
            <div className="w-[53px] flex flex-row items-start justify-center py-0 px-[3px] box-border">
              <div className="flex-1 relative leading-[26px] capitalize font-medium z-[8]">
                home
              </div>
            </div>
            <div className="flex flex-row items-start justify-center py-0 pr-[7px] pl-[3px]">
              <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[72px] z-[8]">
                about us
              </div>
            </div>
            <div className="flex flex-row items-start justify-center py-0 pr-[7px] pl-[3px]">
              <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[72px] z-[8]">
                bookings
              </div>
            </div>
            <div className="flex flex-row items-start justify-center py-0 px-[3px]">
              <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[34px] z-[8]">
                blog
              </div>
            </div>
          </div>
          <div className="w-[108px] flex flex-col items-start justify-center gap-[16px]">
            <h2 className="m-0 relative text-13xl leading-[42px] capitalize font-medium font-inherit inline-block min-w-[83px] z-[8] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[34px]">
              legal
            </h2>
            <div className="self-stretch relative leading-[26px] capitalize font-medium z-[8]">
              terms of use
            </div>
            <div className="self-stretch relative leading-[26px] capitalize font-medium z-[8]">
              privacy policy
            </div>
            <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[102px] z-[8]">
              cookie policy
            </div>
          </div>
          <div className="w-32 flex flex-col items-start justify-center gap-[16px]">
            <h2 className="m-0 self-stretch relative text-13xl leading-[42px] capitalize font-medium font-inherit z-[8] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[34px]">
              product
            </h2>
            <div className="w-20 relative leading-[26px] capitalize font-medium inline-block z-[8]">
              take tour
            </div>
            <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[72px] z-[8]">
              live chat
            </div>
            <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[66px] z-[8]">
              reveiws
            </div>
          </div>
          <div className="w-[340px] flex flex-col items-start justify-center gap-[16px] max-w-full">
            <h2 className="m-0 w-[173px] relative text-13xl leading-[42px] capitalize font-medium font-inherit inline-block z-[8] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[34px]">
              Newsletter
            </h2>
            <div className="w-[122px] relative leading-[26px] capitalize font-medium inline-block z-[8]">
              Stay up to date
            </div>
            <div className="self-stretch shadow-[-13px_13px_104.09px_rgba(161,_161,_161,_0.1)] rounded bg-white flex flex-row items-start justify-between py-2.5 pr-2.5 pl-6 box-border max-w-full gap-[20px] z-[8] text-gray-200 mq450:flex-wrap">
              <div className="h-[81px] w-[340px] relative shadow-[-13px_13px_104.09px_rgba(161,_161,_161,_0.1)] rounded bg-white hidden max-w-full" />
              <div className="flex flex-col items-start justify-center pt-[18px] px-0 pb-0">
                <textarea className="relative leading-[26px] font-medium inline-block min-w-[83px] z-[1]">{`Your email `}</textarea>
              </div>
              <button className="cursor-pointer [border:none] pt-[18px] px-10 pb-[17px] bg-black w-40 rounded flex flex-row items-start justify-center box-border z-[1] hover:bg-darkslategray">
                <div className="h-[61px] w-40 relative rounded bg-black hidden" />
                <div className="flex-1 relative text-base leading-[26px] capitalize font-medium font-clash-display text-white text-left z-[1]">
                  Subscribe
                </div>
              </button>
            </div>
          </div>
        </div>
        <footer className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full text-left text-base text-black font-clash-display">
          <div className="flex-1 box-border overflow-hidden flex flex-row items-start justify-center pt-[37px] pb-[39px] pr-5 pl-6 max-w-full z-[8] border-t-[1px] border-solid border-gray-600">
            <div className="w-[356px] relative leading-[26px] capitalize font-medium inline-block max-w-full">
              Copyright 2022 uifry.com all rights reserved
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
