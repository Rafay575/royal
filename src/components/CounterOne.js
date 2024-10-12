import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
import './main.css'

const CounterOne = () => {
  return (
    <>
      {/*fact-area start*/}
      <div className='container'>
        <div
          className='fact-counter-area gradient'
          // style={{background: 'linear-gradient(270deg, #D79169, #000)'}}
        >
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-fact-wrap'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={2000} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>Loads/Year</h5>
                {/* <p>Conveniently impact front-end niches via maintainable.</p> */}
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-fact-wrap'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={100} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5> TOTAL EMPLOYEES</h5>
                {/* <p>Conveniently impact front-end niches via maintainable.</p> */}
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-fact-wrap after-none'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={450} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>NATIONWIDE CLIENTS</h5>
                {/* <p>Conveniently impact front-end niches via maintainable.</p> */}
              </div>
            </div>
            {/* <div className='col-lg-4 col-md-6'>
              <div className='single-fact-wrap after-none'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={80} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>WORLD AWARDS</h5>
                <p>Conveniently impact front-end niches via maintainable.</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/*fact-area end*/}
    </>
  );
};

export default CounterOne;
