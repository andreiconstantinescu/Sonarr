function getSectionState(state, section) {
  const [, subSection] = section.split('.');

  if (subSection) {
    return Object.assign({}, state[subSection]);
  }

  // TODO: Remove in favour of using subSection
  if (state.hasOwnProperty(section)) {
    return Object.assign({}, state[section]);
  }

  return Object.assign({}, state);
}

export default getSectionState;
