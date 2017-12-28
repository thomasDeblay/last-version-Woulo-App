import  database from '../firebase/firebase';

export const addWoulo = (woulo) => ({
    type: 'ADD_WOULO',
    woulo
});

export const startAddWoulo = (wouloData = {}) => {
    return (dispatch, getState) => {
        const {
            woulo = ''
        } = wouloData;
        const woulos = {woulo};

        database.ref(`waitinglist/woulos`).push(woulo).then((ref) => {
            dispatch(addWoulo({
                woulos
            }))
        })
    };
};

export const setWoulo = (woulo) => ({
    type: 'SET_WOULO',
    woulo
  }) ;

  export const startSetWoulo = () => {
    return (dispatch) => {
      return database.ref(`waitinglist/woulos`).once('value').then((snapshot) => {
        const woulo = [];

        snapshot.forEach((childSnapshot) => {
          woulo.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setWoulo(woulo));
      });
    };
  };