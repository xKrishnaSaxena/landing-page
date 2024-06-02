import Best from "../components/Heading";
import Benefits from "../components/Features";
import Questions from "../components/Questions";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="w-full relative rounded-[50px] bg-white overflow-hidden flex flex-col items-start justify-center pt-9 pb-[41.3px] pr-[25px] pl-[125px] box-border gap-[114px] leading-[normal] tracking-[normal] text-left text-[106.4px] text-black font-clash-display mq750:gap-[57px] mq750:pl-[62px] mq750:box-border mq450:gap-[28px] mq450:pl-5 mq450:box-border">
      <header className="w-[1115px] flex flex-row items-end justify-between gap-[20px] max-w-full text-left text-xl text-black font-clash-display">
        <div className="w-[542.9px] flex flex-col items-start justify-end pt-0 px-0 pb-[3.3px] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px]">
            <div className="flex-1 flex flex-col items-start justify-center py-0 pr-1.5 pl-0 text-8xs-2 font-plus-jakarta-sans">
              <div className="self-stretch flex flex-row items-start justify-end pt-[10.8px] px-3.5 pb-[31.4px] relative z-[8]">
                <b className="relative font-extrabold inline-block min-w-[9.2px]">
                  TM
                </b>
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center pt-[5.4px] px-0 pb-0 text-tomato">
              <a className="[text-decoration:none] relative leading-[26px] capitalize font-bold text-[inherit] inline-block min-w-[60px] z-[8]">
                home
              </a>
            </div>
            <div className="flex flex-col items-start justify-center pt-[5.4px] px-0 pb-0">
              <a className="[text-decoration:none] relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[89px] whitespace-nowrap z-[8]">
                about us
              </a>
            </div>
            <div className="flex flex-col items-start justify-center pt-[5.4px] px-0 pb-0">
              <a className="[text-decoration:none] relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[68px] z-[8]">
                pricing
              </a>
            </div>
            <div className="w-[89px] flex flex-col items-start justify-center pt-[5.4px] px-0 pb-0 box-border">
              <a className="[text-decoration:none] self-stretch relative leading-[26px] capitalize font-medium text-[inherit] z-[8]">
                features
              </a>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[17.3px] px-[47px] pb-[17.4px] bg-black w-[184.1px] rounded flex flex-row items-start justify-center box-border z-[8] hover:bg-darkslategray">
          <div className="h-[65px] w-[184.1px] relative rounded bg-black hidden" />
          <a className="[text-decoration:none] flex-1 relative text-lg leading-[30.3px] capitalize font-medium font-clash-display text-white text-left z-[1]">
            download
          </a>
        </button>
      </header>
      <div className="w-[688px] flex flex-row items-start justify-center relative max-w-full">
        <b className="h-[107px] w-[89px] absolute !m-[0] bottom-[63.02px] left-[16px] leading-[106.38px] capitalize inline-block [transform:_rotate(-28deg)] [transform-origin:0_0] z-[6] mq450:text-13xl mq450:leading-[43px] mq1050:text-[53px] mq1050:leading-[64px]">
          a
        </b>
        <div className="flex-1 flex flex-row items-start justify-end pt-0 px-0 pb-[450px] box-border max-w-full mq750:pb-[292px] mq750:box-border">
          <Best />
        </div>
      </div>
      <Benefits />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[180.7px] pr-0 pl-[482px] box-border max-w-full text-9xl mq750:pl-[120px] mq750:box-border mq450:pl-5 mq450:pb-[117px] mq450:box-border mq1050:pl-[241px] mq1050:box-border">
        <div className="w-[562px] flex flex-col items-start justify-center gap-[33px] max-w-full mq750:gap-[16px]">
          <div className="w-[399px] flex flex-row items-start justify-center py-0 px-[63px] box-border max-w-full text-9xl text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h3 className="m-0 flex-1 relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[8] mq450:text-3xl mq450:leading-[22px]">
              fully customizable
            </h3>
          </div>
          <p className="m-0 self-stretch h-[140px] relative text-lg leading-[28px] capitalize font-medium text-gray-500 inline-block z-[8]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[130px] pr-0 pl-[218px] box-border max-w-full text-lg mq750:pl-[54px] mq750:box-border mq450:pb-[55px] mq450:box-border mq1050:pl-[109px] mq1050:pb-[84px] mq1050:box-border">
        <div className="w-[772px] flex flex-col items-start justify-center gap-[88px] max-w-full mq450:gap-[22px] mq1050:gap-[44px]">
          <div className="w-[455px] flex flex-col items-end justify-center pt-0 px-0 pb-[37px] box-border gap-[4px] max-w-full text-center">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-6">
              <div className="relative tracking-[0.16em] leading-[28px] uppercase font-medium z-[8]">
                testimonial
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-29xl leading-[48px] capitalize font-bold font-inherit z-[8] mq450:text-10xl mq450:leading-[29px] mq1050:text-19xl mq1050:leading-[38px]">
              what our users say about us?
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-9xl">
            <div className="w-[442px] flex flex-col items-start justify-center gap-[24px] max-w-full">
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[8] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <blockquote className="m-0 self-stretch h-[196px] relative text-lg leading-[28px] capitalize font-medium text-gray-500 inline-block z-[8]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </blockquote>
            </div>
          </div>
          <div className="w-[757px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <b className="relative leading-[28px] capitalize font-semibold inline-block min-w-[97px] z-[8]">
              nick jonas
            </b>
          </div>
        </div>
      </div>
      <Questions />
      <FrameComponent />
      <main className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute top-[1123.7px] left-[1271px] w-[327px] h-[237.3px] flex items-start justify-center">
          <img
            className="w-full h-full object-contain absolute left-[-52px] top-[0px] [transform:scale(1.869)]"
            loading="lazy"
            alt=""
            src="/group-35897.svg"
          />
        </div>
        <div className="absolute top-[4689.7px] left-[34px] w-[327px] h-[237.3px] flex items-start justify-center">
          <img
            className="w-full h-full object-contain absolute left-[35px] top-[0px] [transform:scale(1.869)]"
            alt=""
            src="/group-35897.svg"
          />
        </div>
        <img
          className="absolute top-[761px] left-[454px] rounded-lg w-64 h-[71px]"
          alt=""
          src="/rectangle-4.svg"
        />
        <GroupComponent />
        <div className="absolute top-[131px] left-[915px] w-[457.2px] h-[717.1px] flex items-start justify-center">
          <img
            className="w-full h-full object-contain absolute left-[3px] top-[24px] [transform:scale(1.24)]"
            loading="lazy"
            alt=""
            src="/group-35899.svg"
          />
        </div>
        <div className="absolute top-[152px] left-[341px] w-[317px] h-[230px] flex items-start justify-center">
          <img
            className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.87)]"
            loading="lazy"
            alt=""
            src="/group-35896.svg"
          />
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[8220px] object-cover mix-blend-soft-light z-[7]"
          alt=""
          src="/footer-background@2x.png"
        />
        <img
          className="absolute top-[462px] left-[395px] w-[29px] h-[29px] z-[8]"
          loading="lazy"
          alt=""
          src="/group-3.svg"
        />
        <img
          className="absolute top-[116px] left-[46px] w-[67.9px] h-[67.9px] object-contain z-[8]"
          loading="lazy"
          alt=""
          src="/star-8.svg"
        />
        <div className="absolute top-[188px] left-[823px] w-[442px] h-[645px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg w-full h-full flex items-start justify-center">
            <img
              className="w-full h-full object-contain absolute left-[88px] top-[-2px] [transform:scale(1.401)]"
              alt=""
              src="/phone-background@2x.png"
            />
          </div>
          <img
            className="absolute top-[5px] left-[70px] w-[371.8px] h-[552.4px] object-contain z-[9]"
            alt=""
            src="/iphone13profront@2x.png"
          />
        </div>
        <img
          className="absolute top-[116px] left-[771px] w-[371.3px] h-[551.6px] object-contain z-[10]"
          alt=""
          src="/iphone13profront-1@2x.png"
        />
        <img
          className="absolute top-[3534.7px] left-[823px] w-10 h-10 object-contain z-[8]"
          loading="lazy"
          alt=""
          src="/group-28@2x.png"
        />
        <div className="absolute top-[3539.7px] left-[871px] w-36 h-[30px] opacity-[0.5] z-[8]">
          <img
            className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_72px)] w-[30px] h-[30px] object-cover"
            loading="lazy"
            alt=""
            src="/group-27@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_34px)] w-[30px] h-[30px] object-cover"
            loading="lazy"
            alt=""
            src="/group-29@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_4px)] w-[30px] h-[30px] object-cover"
            loading="lazy"
            alt=""
            src="/group-30@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_42px)] w-[30px] h-[30px] object-cover"
            loading="lazy"
            alt=""
            src="/group-31@2x.png"
          />
        </div>
        <div className="absolute top-[3089.7px] left-[80px] w-[713px] h-[713px]">
          <div className="absolute top-[249px] left-[117px] w-[327px] h-[237.3px] flex items-start justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.869)]"
              loading="lazy"
              alt=""
              src="/group-1000002356-1.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[0px] w-full h-full flex items-start justify-center">
            <img
              className="w-full h-full object-contain absolute left-[11px] top-[6px] [transform:scale(1.03)]"
              alt=""
              src="/group-1000002332.svg"
            />
          </div>
        </div>
        <img
          className="absolute top-[1659.7px] left-[1370px] w-16 h-16 z-[8]"
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="absolute top-[2861.7px] left-[1136px] w-16 h-16 z-[8]"
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="absolute top-[3941.7px] left-[779px] w-16 h-16 z-[8]"
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="absolute top-[4689.7px] left-[1323px] w-16 h-16 z-[8]"
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="absolute top-[3702.7px] left-[48px] w-[67.9px] h-[67.9px] object-contain z-[10]"
          alt=""
          src="/star-icon.svg"
        />
        <img
          className="absolute top-[4900.7px] left-[48px] w-[67.9px] h-[67.9px] object-contain z-[8]"
          loading="lazy"
          alt=""
          src="/star-icon.svg"
        />
        <img
          className="absolute top-[1892.5px] left-[175px] w-12 h-12 z-[8]"
          loading="lazy"
          alt=""
          src="/group-35899-1.svg"
        />
        <img
          className="absolute top-[2476px] left-[730px] w-12 h-12 z-[8]"
          loading="lazy"
          alt=""
          src="/group-35899-2.svg"
        />
        <img
          className="absolute top-[5439.7px] left-[175px] w-[34px] h-[34px] overflow-hidden z-[8]"
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <img
          className="absolute top-[5444.9px] left-[215.4px] w-[65.8px] h-[29.3px] z-[8]"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="absolute top-[5490.7px] left-[175px] w-6 h-6 overflow-hidden z-[8]"
          loading="lazy"
          alt=""
          src="/frame-1.svg"
        />
        <img
          className="absolute top-[5532.7px] left-[175px] w-6 h-6 overflow-hidden z-[8]"
          loading="lazy"
          alt=""
          src="/frame-2.svg"
        />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
