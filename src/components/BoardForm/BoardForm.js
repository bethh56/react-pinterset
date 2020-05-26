import React from 'react';

import './BoardForm.scss';

class BoardForm extends React.Component {
  state = {
    boardName: '',
    boardDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ boardName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({boardDescription: e.target.value });
  }

  render() {
    const { boardName, boardDescription } = this.state;
    return (
      <div>
        <form className="col-6 offset-3 mb-3">
  <div className="form-group">
    <label for="board-name">Board Name</label>
    <input
    type="text"
    className="form-control"
    id="board-name"
    aria-describedby="emailHelp"
    placeholder="Name"
    value={boardName}
    onChange={this.nameChange}
     />
  </div>
  <div className="form-group">
    <label for="board-description">Description</label>
    <input
    type="text"
    className="form-control"
    id="board-description"
    placeholder="Description"
    value={boardDescription}
    onChange={this.descriptionChange}
    />
  </div>
  <button type="submit" className="btn btn-primary">Save Board</button>
</form>
      </div>
    );
  }
}

export default BoardForm;
