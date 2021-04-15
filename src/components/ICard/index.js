import React from "react"
import "./styles.css";

export const ICard = (props) => {
  return (
    <div>
      <div class="card">
      <div class="card-body">
          <h1>{props.tittle}</h1>
          <h3 class="text-muted">{props.sub}</h3>
          <p>{props.text}</p>
          <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target={"#"+props.id}>
            Certificado
          </button>
      </div>

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
    </div>
  );
};

export default ICard