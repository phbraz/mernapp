import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
    FAIcon: IconDefinition
    NavigateTo?: string
}


const Widget = ({ FAIcon, NavigateTo }: Props) => {
    return <>
        <FontAwesomeIcon icon={FAIcon} />
    </>
}


export { Widget }