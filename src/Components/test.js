import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

const countries = [
  { code: "en", name: "English", country_code: "us" },
  { code: "fr", name: "Français", country_code: "fr" },
];

const LangIcon = ({ langCode }) => {
  const countryCode = langCode.toLowerCase();
  const flagUrl = `https://flagcdn.com/w20/${countryCode}.png`;

  return <img src={flagUrl} alt={langCode} className="w-5 h-5" />;
};

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Menu as="div" className="px-3 pl-0 relative flex" aria-label="usermenu">
        <Menu.Button className="group w-full  text-sm text-left font-medium text-gray-700 focus:outline-none" aria-label="usermenu-button">
          <span className="flex w-full justify-between items-center">
            <LangIcon langCode={"fr"} />
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
         <Menu.Items
            aria-label="menu-item-container"
            className="z-10 mx-3 origin-top absolute left-[-36px] sm:left-[-25px] md:left-[-25px] top-[42px] xl:left-[-80px] right-0 min-w-max mt-1 rounded-md shadow-lg bg-transparent ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              position: "absolute",
              top: "100%",
              zIndex: 1000,
              width: "110px",
              border: "none",
              alignItems: 'left',
              backgroundColor: "transparent" // Added this line
              
            }}
          >
            <div className="px-1 py-1" aria-label="menu-items">
              {countries.map((lng) => (
                <Menu.Item key={lng.code}
                style={{
                  width: "100px",
                  height: '60px',
                  border: "none",
                  alignItems: 'left',
                  backgroundColor: "transparent" // Added this line
            
                }}>
                  <button
                    className={classNames(
                      "flex items-center space-x-2 px-4 py-2 text-sm cursor-pointer max-w-[50px] whitespace-nowrap overflow-hidden text-ellipsis",
                      "bg-white hover:bg-gray-100",
                      "border border-gray-300 rounded",
                      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    )}
                    onClick={() => i18n.changeLanguage(lng.code)} // used to change language that needs to be rendered
                  >
                    <LangIcon langCode={lng.country_code} />
                    <span>{lng.name}</span>
                  </button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
export default LanguageSelector;