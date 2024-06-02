import PropTypes from "prop-types";

const Questions = ({ className = "" }) => {
  return (
    <div
      className={`w-[1190px] flex flex-row items-start justify-center pt-0 px-[50px] pb-[41px] box-border max-w-full text-left text-lg text-tomato font-clash-display lg:pl-[25px] lg:pr-[25px] lg:box-border mq450:pb-5 mq450:box-border mq1050:pb-[27px] mq1050:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-center gap-[40px] max-w-full mq750:gap-[20px]">
        <div className="w-[497px] flex flex-col items-start justify-center gap-[4px] max-w-full">
          <div className="relative tracking-[0.16em] leading-[28px] uppercase font-medium inline-block min-w-[44px] z-[8]">
            faq
          </div>
          <h1 className="m-0 self-stretch relative text-29xl leading-[48px] capitalize font-bold font-inherit text-black z-[8] mq450:text-10xl mq450:leading-[29px] mq1050:text-19xl mq1050:leading-[38px]">
            Frequently asked questions
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[20px] max-w-full z-[8] text-9xl text-white">
          <div className="flex-1 flex flex-col items-start justify-center gap-[20px] min-w-[348px] max-w-full mq750:min-w-full">
            <div className="self-stretch rounded-lg bg-tomato flex flex-col items-start justify-center pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] max-w-full">
              <div className="w-[535px] h-[181px] relative rounded-lg bg-tomato hidden max-w-full" />
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[1] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <p className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-justify z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-center pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] max-w-full text-black">
              <div className="w-[535px] h-[181px] relative rounded-lg bg-white hidden max-w-full" />
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[1] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <p className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-gray-500 text-justify z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="self-stretch rounded-lg bg-tomato flex flex-col items-start justify-center pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] max-w-full">
              <div className="w-[535px] h-[181px] relative rounded-lg bg-tomato hidden max-w-full" />
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[1] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <p className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-justify z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-[20px] min-w-[348px] max-w-full text-black mq750:min-w-full">
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-center pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] max-w-full">
              <div className="w-[535px] h-[181px] relative rounded-lg bg-white hidden max-w-full" />
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[1] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <p className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-gray-500 text-justify z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="self-stretch rounded-lg bg-tomato flex flex-col items-start justify-center pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] max-w-full text-white">
              <div className="w-[535px] h-[181px] relative rounded-lg bg-tomato hidden max-w-full" />
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[1] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <p className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-justify z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-center pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] max-w-full">
              <div className="w-[535px] h-[181px] relative rounded-lg bg-white hidden max-w-full" />
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[1] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <p className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-gray-500 text-justify z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Questions.propTypes = {
  className: PropTypes.string,
};

export default Questions;
