import React from "react";
import "./Popup.css";
interface CookieProps {
  label: string;
}
function Cookie(props:CookieProps) {
    const {label} = props
  //const { name, setShowPopup } = useContext(NameContext);
  console.log(name, "name");
  return (
    <div>
      <div className="bg-[#152745] absolute bottom-0 w-full p-4 z-10">
        <div className="flex-row flex space-x-8">
          <div className="flex-col col-span-4 space-y-4 max-w-[40%] ">
            <h1 className="text-white text-[20px]">
              We Care About Your Privacy
            </h1>
            <p className="text-white border-r-2 border-white pr-4">
              We and our 842 partners store and/or access information on a
              device, such as unique IDs in cookies to process personal data.
              You may accept or manage your choices by clicking below, including
              your right to object where legitimate interest is used, or at any
              time in the privacy policy page. These choices will be signaled to
              our partners and will not affect browsing data. Data Protection
              Portal
            </p>
          </div>
          <div className="flex-col col-span-4 space-y-4 max-w-[40%]">
            <h1 className="text-white text-[20px]">
              We and our partners process data to provide:
            </h1>
            <p className="text-white">
              Use precise geolocation data. Actively scan device characteristics
              for identification. Store and/or access information on a device.
              Personalised advertising and content, advertising and content
              measurement, audience research and services development.
            </p>
          </div>
          <div className="flex-col col-span-4 space-y-4 max-w-[40%]">
            <button className="p-4 bg-[#326295] text-white rounded-[2px] w-[100px] text-[14px]">
              I Accept
            </button>
            <button className="p-4 bg-[#326295] text-white rounded-[2px] w-[100px] text-[14px]">
              Reject All
            </button>
            <button
              onClick={() => {
                localStorage.setItem("showPopup", "true");
                //setShowPopup(true);
              }}
              className="p-4 bg-white text-[#326295] rounded-[2px] w-[100px] text-[14px] font-medium"
            >
              Show Purpose
            </button>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Cookie;
