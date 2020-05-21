import React from 'react';
import PropTypes from 'prop-types';

import './SingleBoard.scss';
import boardsData from '../../helpers/data/boardsData';

class SingleBoard extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    board: {},
    pins: [],
  }

  componentDidMount() {
    const { boardId } = this.props;
    boardsData.getSingleBoard(boardId)
      .then((request) => {
        const board = request.data;
        this.setState({ board });
      })
      .catch((err) => console.error('unable to get single board', err));
  }

  render() {
    const { boardId, setSingleBoard } = this.props;

    return (
      <div className="SingleBoard">
        <button className="btn btn-danger" onClick={() => { setSingleBoard(''); }}>X</button>
        <h2>SINGLE BOARD VIEW</h2>
        <h3>{boardId}</h3>
      </div>
    );
  }
}

export default SingleBoard;
