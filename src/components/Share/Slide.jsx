import { StyledSlide } from "./Slide.styled";

import { useSelector } from "react-redux";

import { GiPauseButton } from "react-icons/gi";
import { HiVolumeUp } from "react-icons/hi";
import { BiFullscreen } from "react-icons/bi";
import { AiFillSetting, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slide = () => {
  const { streamers } = useSelector((state) => state.streamer);
  return (
    <StyledSlide>
      <div className="slide">
        <div className="three">
          <img src={streamers[1].liveScreen} />
          <img src={streamers[3].liveScreen} />
          <img src={streamers[5].liveScreen} />

          <div className="two">
            <img src={streamers[2].liveScreen} />
            <img src={streamers[4].liveScreen} />

            <div className="one">
              <div className="img">
                <img src={streamers[0].liveScreen} />
                <div className="screen-icons">
                  <div className="left">
                    <GiPauseButton className="icon-screen" />
                    <HiVolumeUp className="icon-screen" />
                  </div>
                  <div className="right">
                    <AiFillSetting className="icon-screen" />
                    <BiFullscreen className="icon-screen" />
                  </div>
                </div>

                <div className="screen-live">
                  <span>live</span>
                </div>
              </div>
              <div className="info">
                <div className="info-top">
                  <div className="profile">
                    <div className="pp">
                      <img src={streamers[0].logo} />
                    </div>
                    <div className="profile-info">
                      <div className="username">{streamers[0].username}</div>
                      <div className="game">{streamers[0].game}</div>
                      <div className="viewers">
                        {streamers[0].viewers} viewers
                      </div>
                    </div>
                  </div>
                  <div className="tags">
                    <div className="tag">Esports</div>
                    <div className="tag">English</div>
                  </div>
                </div>
                <div className="info-bottom">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                  consequatur blanditiis consequuntur ipsa tempore
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arrow arrow-left">
          <AiOutlineLeft />
        </div>
        <div className="arrow arrow-right">
          <AiOutlineRight />
        </div>
      </div>
    </StyledSlide>
  );
};

export default Slide;
