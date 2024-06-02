import PropTypes from "prop-types";

const Best = ({ className = "" }) => {
  return (
    <div
      className={`w-[638px] flex flex-col items-start justify-center gap-[24px] max-w-full text-left text-lg text-black font-clash-display ${className}`}
    >
      <h1 className="m-0 w-[618px] relative text-45xl leading-[64px] capitalize font-bold font-inherit inline-block max-w-full z-[8] mq450:text-19xl mq450:leading-[38px] mq1050:text-32xl mq1050:leading-[51px]">
        make the best financial decisions
      </h1>
      <p className="m-0 self-stretch relative leading-[28px] capitalize font-medium text-gray-500 z-[8]">
        Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
        faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
      </p>
      <div className="w-[374px] flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
        <button className="cursor-pointer [border:none] py-4 px-[23px] bg-black w-[180px] rounded flex flex-row items-start justify-center box-border gap-[8px] z-[8]">
          <div className="h-[60px] w-[180px] relative rounded bg-black hidden" />
          <div className="flex-1 relative text-lg leading-[28px] capitalize font-medium font-clash-display text-white text-left whitespace-nowrap z-[1]">
            get started
          </div>
          <div className="flex flex-col items-start justify-center pt-3.5 px-0 pb-0">
            <img
              className="w-6 h-[7.4px] relative z-[1]"
              alt=""
              src="/vector-1.svg"
            />
          </div>
        </button>
        <div className="w-[111px] flex flex-col items-start justify-center pt-[15px] px-0 pb-0 box-border">
          <div className="self-stretch relative leading-[28px] capitalize font-medium z-[8]">
            watch video
          </div>
        </div>
      </div>
    </div>
  );
};

Best.propTypes = {
  className: PropTypes.string,
};

export default Best;
