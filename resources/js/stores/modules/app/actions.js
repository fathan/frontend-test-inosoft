const actions = {
  setFilterOptionsProductType ({ commit }, data) {
    commit('SET_FILTER_OPTIONS_PRODUCT_TYPE', data);
  },
  setSelectedFilterProductType ({ commit }, data) {
    commit('SET_SELECTED_FILTER_PRODUCT_TYPE', data);
  },
  setFilterOptionsSize ({ commit }, data) {
    commit('SET_FILTER_OPTIONS_SIZE', data);
  },
  setSelectedFilterSize ({ commit }, data) {
    commit('SET_SELECTED_FILTER_SIZE', data);
  },
  setFilterOptionsGrade ({ commit }, data) {
    commit('SET_FILTER_OPTIONS_GRADE', data);
  },
  setSelectedFilterGrade ({ commit }, data) {
    commit('SET_SELECTED_FILTER_GRADE', data);
  },
  setFilterOptionsConnection ({ commit }, data) {
    commit('SET_FILTER_OPTIONS_CONNECTION', data);
  },
  setSelectedFilterConnection ({ commit }, data) {
    commit('SET_SELECTED_FILTER_CONNECTION', data);
  }
};

export default actions;