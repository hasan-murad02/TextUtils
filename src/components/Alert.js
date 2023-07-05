import React from "react";

export default function Alert(props) {

    const Capitalize = (word) => {
        const text = word.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {props.alert.msg}.  <strong>{Capitalize(props.alert.type)}!</strong>
    </div>
  );
}
