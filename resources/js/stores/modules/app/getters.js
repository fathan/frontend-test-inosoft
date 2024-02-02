const getters = {
  getFilterOptionsProductType (state) {
    return state.filterOptionsProductType;
  },
  getSelectedFilterProductType (state) {
    return state.selectedFilterProductType;
  },
  getFilterOptionsSize (state) {
    return state.filterOptionsSize;
  },
  getSelectedFilterSize (state) {
    return state.selectedFilterSize;
  },
  getFilterOptionsGrade (state) {
    return state.filterOptionsGrade;
  },
  getSelectedFilterGrade (state) {
    return state.selectedFilterGrade;
  },
  getFilterOptionsConnection (state) {
    return state.filterOptionsConnection;
  },
  getSelectedFilterConnection (state) {
    return state.selectedFilterConnection;
  }
};

export default getters;