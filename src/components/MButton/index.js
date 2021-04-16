import React from "react"
import "./styles.scss";

export const MButton = (props) => {
  return (
    <div>
        <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target={"#"+props.id}>
        <h3>{props.name}</h3>
        </button>

      {/* <!-- Modal --> */}
      <div class="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h1>{props.tittle}</h1>
              <button type="button" class="close btn btn-primary btn-lg" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">X</span>
              </button>
            </div>
            <div class="modal-body">
              <iframe title="Certification" src={props.cert} width="100%" height="500px"></iframe>
            </div>
          </div>
        </div>
      </div>
          
    </div>
  );
};

export default MButton