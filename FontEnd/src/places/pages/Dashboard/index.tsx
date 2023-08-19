import React from "react";
import { Widget } from "../../../shared/components/Widget";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { IconSize } from "../../../shared/Utils/FontAwesome/FontAwesomeHelper";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-56">
        <div className="flex flex-col w-fit rounded bg-zinc-800 shadow">
          <div className="flex flex-row justify-between space-x-3 p-3">
            <Widget
              FAIcon={solid("sack-dollar")}
              iconColour="#ffffff"
              iconSize={IconSize.xxl}
              widgetTitle="Income"
              NavigateTo="/user/income" //maybe change this to enum
            />
            <Widget
              FAIcon={solid("hand-holding-dollar")}
              iconColour="#ffffff"
              iconSize={IconSize.xxl}
              widgetTitle="Expenses"
              NavigateTo="/user/income" //maybe change this to enum
            />
            <Widget
              FAIcon={regular("chart-bar")}
              iconColour="#ffffff"
              iconSize={IconSize.xxl}
              widgetTitle="Summary"
              NavigateTo="/user/income" //maybe change this to enum
            />
            <Widget
              FAIcon={solid("list-check")}
              iconColour="#ffffff"
              iconSize={IconSize.xxl}
              widgetTitle="Payment Check List"
              NavigateTo="/user/income" //maybe change this to enum
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { Dashboard };
