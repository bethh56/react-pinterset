import pinData from './pinsData';
import boardsData from './boardsData';

const completelyRemoveBoard = (boardId) => new Promise((resolve, reject) => {
  boardsData.deleteBoard(boardId)
    .then(() => {
      pinData.getPinsByBoardId(boardId)
        .then((pins) => {
          pins.forEach((pin) => pinData.deletePin(pin.id));
          resolve();
        });
    })
    .catch((err) => reject(err));
});

export default { completelyRemoveBoard };
