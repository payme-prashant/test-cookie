import "../Popup/Popup.css";

import React, { useState } from 'react';

interface PopupProps {
  label: string;
}
const popupType: any = [
  {
    name: "Your Privacy",
    source: "",
    data: "We process your data to deliver content or advertisements and measure the delivery of such content or advertisements to extract insights about our website. We share this information with our partners on the basis of consent and legitimate interest. You may exercise your right to consent or object to a legitimate interest, based on a specific purpose below or at a partner level in the link under each purpose. These choices will be signaled to our vendors participating in the Transparency and Consent Framework.",
  },
  {
    name: "Performance Cookies",
    source: "",
    data: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.    All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.",
  },
  {
    name: "Functional Cookies",
    source: "",
    data: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.    If you do not allow these cookies then some or all of these services may not function properly.",
  },
  {
    name: "Strictly Neccessary Cookies",
    source: "",
    data: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.    You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.",
  },
  {
    name: "Targeting Cookies",
    source: "",
    data: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.    They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.",
  },
  {
    name: "Store and/or access information on a device",
    source: "676 partners can use this purpose",
    data: "Cookies, device or similar online identifiers (e.g. login-based identifiers, randomly assigned identifiers, network based identifiers) together with other information (e.g. browser type and information, language, screen size, supported technologies etc.) can be stored or read on your device to recognise it each time it connects to an app or to a website, for one or several of the purposes presented here.",
  },
  {
    name: "Personalised advertising and content, advertising and content measurement, audience research and services development",
    source:"fvedfvd ",
    desc: "802 partners can use this purpose",
  },
  {
    name: "Use precise geolocation data",
    source: "258 partners can use this purpose",
    data: "With your acceptance, your precise location (within a radius of less than 500 metres) may be used in support of the purposes explained in this notice.",
  },
  {
    name: "Actively scan device characteristics for identificatione",
    source: "125 partners can use this purpose",
    data: "With your acceptance, certain characteristics specific to your device might be requested and used to distinguish it from other devices (such as the installed fonts or plugins, the resolution of your screen) in support of the purposes explained in this notice.",
  },
  {
    name: "Ensure security, prevent and detect fraud, and fix errors",
    source: "507 partners can use this purpose",
    data: "Your data can be used to monitor for and prevent unusual and possibly fraudulent activity (for example, regarding advertising, ad clicks by bots), and ensure systems and processes work properly and securely. It can also be used to correct any problems you, the publisher or the advertiser may encounter in the delivery of content and ads and in your interaction with them.",
  },
  {
    name: "Deliver and present advertising and content",
    source: "501 partners can use this purpose",
    data: "ertain information (like an IP address or device capabilities) is used to ensure the technical compatibility of the content or advertising, and to facilitate the transmission of the content or ad to your device.",
  },
];


function Popup(props:PopupProps) {
    const [select, setSelect] = useState(0)
    //const { showPopup, setShowPopup } = useContext(NameContext);
    //const [dataType,  setDataType] = useState([]);
   
    const dataHandler = () => {
      //setShowPopup(false);
      //localStorage.setItem("cookie", true);
    };

    const CookieS = (id: string, active:boolean) => {
    //   CookiePut(id, active)
    //     .then(() => {
    //       //console.log(res)
    //     })
    //     .catch((err) => {});
    };
    const confirmAllHandle = () => {
      //localStorage.setItem("cookie", true);
      //setShowPopup(false);
    };

    const acceptAllHandle = () => {
    //   dataType.forEach((part, index) => {
    //     setCookie(part?.name, part?.name, 7);
    //     //console.log("running", index, part)
    //   });

      //setShowPopup(false);
      //localStorage.setItem("cookie", true);
    };
    const rejectHandle = () => {
      //localStorage.setItem("cookie", true);
     // setShowPopup(false);
    };
  return (
    <div>
      <div className="bg-slate-400 h-screen w-full justify-center align-middle items-center  absolute flex m-auto">
        <div className="flex justify-center items-center">
          <div className="h-fit w-fit max-w-600px absolute bottom-20 bg-white z-100 ">
            <div className="flex px-4 flex-row justify-between border-b-2 border-gray-400 pt-4 pb-4 ">
              <div className="flex flex-row justify-center items-center space-x-10">
                <img
                  style={{ width: 84, height: 40 }}
                  alt="logo"
                  src={"https://payme.honohr.com/assets/img/Final_Logo.png"}
                />
                <span className="text-696969 font-bold text-24px">
                  About Your Privacy
                </span>
              </div>
              <span onClick={() => {}} className="text-696969">
                x
              </span>
            </div>
            <div className="flex-row flex">
              <div className="w-40 h-400px overflow-y-auto ">
                {popupType.map((part: any, index: number) => {
                  return (
                    <div
                      className={`p-2 border-b-2 border-gray-200 ${
                        select === index
                          ? "bg-white border-l-326295 border border-l-4"
                          : "bg-gray-300"
                      } `}
                         onClick={() => {
                           setSelect(index);
                         }}
                    >
                      <h1 className="text-16px text-696969 ">{part?.name}</h1>
                      <p className="text-12px text-696969 ">{part?.soucrce}</p>
                    </div>
                  );
                })}
              </div>
              <div className="w-400px p-4">
                <div className="flex flex-row justify-between align-middle pb-12px">
                  <h1 className=" text-18px text-696969">
                    {popupType[select]?.name}
                  </h1>
                  <div>
                    {/* <ToggleButton
                      active={popupType[select]?.isActive}
                      id={popupType[select]?.id}
                      name={popupType[select]?.name}
                    /> */}
                  </div>
                </div>

                <p className="text-16px text-gray-400 text-696969">
                  {popupType[select]?.data}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between p-4 border-t-2 border-gray-200">
              <div>
                <button
                  //onClick={confirmAllHandle}
                  className="bg-326295 px-4 py-2 rounded-2px  text-white"
                >
                  Confirm My Choices
                </button>
              </div>
              <div className="flex flex-row space-x-4">
                <button
                  //onClick={rejectHandle}
                  className="bg-326295 text-white px-4 py-2 rounded-2px  "
                >
                  Reject All
                </button>
                <button
                  onClick={() => {
                    //acceptAllHandle();
                  }}
                  className="bg-326295 text-white px-4 py-2 rounded-2px  "
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup

