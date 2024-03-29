import * as React from "react";

function MyComponent() {
  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7edeb7966049286467b7b98db242a2494fb6112654907e62c57fed75d1c78b8e?"
          className="img"
        />
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">
              <div className="div-5">
                <div className="column">
                  <div className="div-6">
                    <div className="div-7">
                      <div className="column-2">
                        <div className="div-8">
                          <div className="div-9">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ca4135d7747c48c244233a62c7f0488b4175aa96eb756396a2421fd47f212a2?"
                              className="img-2"
                            />
                            <div className="div-10">FarmConnect HUB</div>
                          </div>
                          <div className="div-11">
                            ...............................;
                          </div>
                        </div>
                      </div>
                      <div className="column-3">
                        <div className="div-12">
                          <div className="div-13">My Account</div>
                          <div className="div-14">My Account</div>
                          <div className="div-15">Order History</div>
                          <div className="div-16">Shoping Cart</div>
                          <div className="div-17">Wishlist</div>
                        </div>
                      </div>
                      <div className="column-4">
                        <div className="div-18">
                          <div className="div-19">Helps</div>
                          <div className="div-20">Contact</div>
                          <div className="div-21">Faqs</div>
                          <div className="div-22">Terms & Condition</div>
                          <div className="div-23">Privacy Policy</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column-5">
                  <div className="div-24">Beauty & Health</div>
                </div>
              </div>
            </div>
            <div className="div-25" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          display: flex;
          min-height: 341px;
          margin-top: -5px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div {
            max-width: 100%;
          }
        }
        .img {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-2 {
          position: relative;
          justify-content: center;
          align-items: center;
          background-color: var(--Gray-Scale-Gray-900, #1a1a1a);
          z-index: 10;
          display: flex;
          margin-bottom: -20px;
          padding: 60px 60px 0;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            margin-bottom: 10px;
            padding: 0 20px;
          }
        }
        .div-3 {
          display: flex;
          width: 100%;
          max-width: 1345px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
          }
        }
        .div-4 {
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
          }
        }
        .div-5 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-5 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 66%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-6 {
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-7 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-7 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 59%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-8 {
          display: flex;
          flex-direction: column;
          align-self: stretch;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-8 {
            margin-top: 40px;
          }
        }
        .div-9 {
          display: flex;
          gap: 8px;
          font-size: 32px;
          color: var(--Gray-Scale-White, #fff);
          font-weight: 500;
          letter-spacing: -0.96px;
          line-height: 119%;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 32px;
          margin: auto 0;
        }
        .div-10 {
          font-family: Poppins, sans-serif;
        }
        .div-11 {
          color: var(--Gray-Scale-Gray-500, #808080);
          margin-top: 16px;
          font: 400 14px/21px Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 21%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-12 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 14px;
          color: var(--Gray-Scale-Gray-400, #999);
          font-weight: 400;
          line-height: 150%;
        }
        @media (max-width: 991px) {
          .div-12 {
            margin-top: 40px;
          }
        }
        .div-13 {
          color: var(--Gray-Scale-White, #fff);
          font: 500 16px Poppins, sans-serif;
        }
        .div-14 {
          font-family: Poppins, sans-serif;
          margin-top: 20px;
        }
        .div-15 {
          font-family: Poppins, sans-serif;
          margin-top: 12px;
        }
        .div-16 {
          color: var(--Gray-Scale-White, #fff);
          font-family: Poppins, sans-serif;
          margin-top: 12px;
        }
        .div-17 {
          font-family: Poppins, sans-serif;
          margin-top: 12px;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 20%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-18 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 14px;
          color: var(--Gray-Scale-Gray-400, #999);
          font-weight: 400;
          line-height: 150%;
        }
        @media (max-width: 991px) {
          .div-18 {
            margin-top: 40px;
          }
        }
        .div-19 {
          color: var(--Gray-Scale-White, #fff);
          font: 500 16px Poppins, sans-serif;
        }
        .div-20 {
          font-family: Poppins, sans-serif;
          margin-top: 20px;
        }
        .div-21 {
          font-family: Poppins, sans-serif;
          margin-top: 12px;
        }
        .div-22 {
          font-family: Poppins, sans-serif;
          margin-top: 12px;
        }
        .div-23 {
          font-family: Poppins, sans-serif;
          margin-top: 12px;
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 34%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .div-24 {
          color: var(--Gray-Scale-Gray-400, #999);
          margin-top: 143px;
          font: 400 14px/150% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-24 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-25 {
          box-shadow: 0px -1px 0px 0px #333;
          background-color: var(--Gray-Scale-Gray-900, #1a1a1a);
          margin-top: 60px;
          height: 54px;
        }
        @media (max-width: 991px) {
          .div-25 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

