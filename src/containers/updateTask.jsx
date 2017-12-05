import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editTask } from "../actions/tasks";
import {
  setDescription,
  setTitle,
  editDescription,
  editTitle,
  hideModal
} from "../actions/ui";
import { Modal } from "react-bootstrap";
import { Input, Button } from "travix-ui-kit";
import "travix-ui-kit/_site/ui-bundle.css";
import "travix-ui-kit/_site/theme.css";

class UpdateTask extends Component {
  render() {
    return (
      <div className="static-modal">
        <Modal show={this.props.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                <Input
                  maxlength={20}
                  placeholder="Add Title.."
                  value={this.props.editedTitle}
                  onChange={(e, value) => {
                    this.props.editTitle(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6">
                <Input
                  multiline
                  placeholder="Add Description.."
                  value={this.props.editedDescription}
                  onChange={(e, value) => {
                    this.props.editDescription(e.target.value);
                  }}
                />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={() => this.props.hideModal()}>Close</Button>
            <Button
              disabled={this.props.disableButton}
              onClick={() =>
                this.props.editTask(
                  this.props.id,
                  this.props.editedTitle,
                  this.props.editedDescription
                )
              }
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const incoming = state.uiReducer;
  return {
    showModal: incoming.showModal,
    editedTitle: incoming.editedTitle,
    editedDescription: incoming.editedDescription,
    id: incoming.id,
    disableButton: !!!incoming.editedTitle
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      editTask,
      hideModal,
      editDescription,
      editTitle
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(UpdateTask);
