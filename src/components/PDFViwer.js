import React from "react";

export default function SinglePage(props) {

  const { pdf } = props;

  return (
    <iframe
        src={pdf}
        title="resume"
        width="100%"
        height="1000px"
    >
    </iframe>
  );
}