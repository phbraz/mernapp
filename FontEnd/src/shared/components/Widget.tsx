import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IconSize } from "../Utils/FontAwesome/FontAwesomeHelper";
import { useNavigate } from "react-router-dom";

interface Props {
  FAIcon: IconDefinition;
  NavigateTo?: string;
  iconColour?: string;
  iconSize?: IconSize;
  widgetTitle?: string;
}

const Widget = ({
  FAIcon,
  NavigateTo,
  iconColour,
  iconSize,
  widgetTitle,
}: Props) => {
  return (
    <>
      <a
        href={NavigateTo}
        className="flex flex-col bg-zinc-700 border border-white w-36 h-36 text-white rounded shadow items-center space-y-4
        transition ease-in-out delay-75 hover:translate-y-1 hover:scale-110 duration-300 hover:opacity-75"
      >
        <div className="mt-9">
          <FontAwesomeIcon
            icon={FAIcon}
            style={{ color: iconColour }}
            size={iconSize}
          />
        </div>
        <div className="">{widgetTitle}</div>
      </a>
    </>
  );
};

export { Widget };
