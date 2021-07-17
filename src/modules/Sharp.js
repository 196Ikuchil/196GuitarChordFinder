const initialState = {
  isSharp: false
};

export const SetIsSharp = (isSharp) => ({
  type: 'SET_ISSHARP',
  sharp: isSharp
});

export const isSharp = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ISSHARP':
      return {
        isSharp: action.sharp
      };
    default:
      return state;
  }
};

export const mapStateToProps = (state) => ({
  isSharp: state.isSharp.isSharp
});

export const mapDispatchToProps = (dispatch) => ({
  SetIsSharp: (isSharp) => dispatch(SetIsSharp(isSharp))
});
