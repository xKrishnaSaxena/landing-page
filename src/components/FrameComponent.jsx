import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[1190px] flex flex-row items-start justify-center pt-0 px-[50px] pb-[41px] box-border max-w-full text-left text-29xl text-white font-clash-display lg:pl-[25px] lg:pr-[25px] lg:box-border mq750:pb-[27px] mq750:box-border ${className}`}
    >
      <div className="flex-1 rounded-lg bg-black overflow-hidden flex flex-row items-start justify-center pt-[156px] px-[77px] pb-[232px] box-border relative max-w-full z-[8] mq750:pt-[101px] mq750:px-[38px] mq750:pb-[151px] mq750:box-border">
        <h1 className="m-0 w-[547px] relative text-inherit leading-[48px] capitalize font-bold font-inherit inline-block max-w-full z-[1] mq450:text-10xl mq450:leading-[29px] mq1050:text-19xl mq1050:leading-[38px]">
          ready to get started?
        </h1>
        <div className="w-[536px] flex flex-col items-start justify-center pt-16 px-0 pb-0 box-border max-w-full ml-[-547px] text-lg">
          <p className="m-0 self-stretch h-14 relative leading-[28px] capitalize inline-block z-[1]">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
        </div>
        <div className="h-[719.5px] w-[566.5px] absolute !m-[0] bottom-[-403.5px] left-[-175px]">
          <img
            className="absolute top-[0px] left-[-153px] w-[719.5px] h-[719.5px]"
            alt=""
            src="/group-35905.svg"
          />
          <button className="cursor-pointer [border:none] pt-3.5 pb-[14.4px] pr-[21px] pl-[22px] bg-white absolute top-[100px] left-[252px] rounded w-52 flex flex-row items-start justify-center box-border gap-[12px] z-[1]">
            <div className="h-[60px] w-52 relative rounded bg-white hidden" />
            <div className="flex-1 flex flex-col items-start justify-center pt-0.5 px-0 pb-0">
              <div className="self-stretch relative text-lg leading-[28px] capitalize font-medium font-clash-display text-black text-left z-[1]">
                download app
              </div>
            </div>
            <img
              className="self-stretch w-[25.8px] relative max-h-full min-h-[32px] z-[1]"
              alt=""
              src="/download-button-icon.svg"
            />
          </button>
        </div>
        <div className="h-[731.9px] w-[676px] absolute !m-[0] top-[-248px] right-[-175px]">
          <img
            className="absolute top-[0px] left-[141px] w-[719.5px] h-[719.5px]"
            alt=""
            src="/group-35905.svg"
          />
          <div className="absolute top-[272px] left-[0px] w-[591px] h-[459.9px]">
            <img
              className="absolute top-[75px] left-[143px] w-[378.2px] h-[367.5px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/group-35932-1@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              alt=""
              src="/iphone-13-pro@2x.png"
            />
            <img
              className="absolute top-[10px] left-[60px] w-16 h-16 z-[3]"
              loading="lazy"
              alt=""
              src="/star-7.svg"
            />
          </div>
        </div>
        <img
          className="h-[67.9px] w-[67.9px] absolute !m-[0] bottom-[102.1px] left-[412px] object-contain"
          loading="lazy"
          alt=""
          src="/star-6-1.svg"
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
