import React from "react";

export default function Alert(props) {
  return (
    <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible role="alert"`}>
        <strong>{props.alert.type==='danger'?"Error":props.alert.type}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
    </div>
  );
}