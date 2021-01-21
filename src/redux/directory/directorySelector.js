import { createSelector } from 'reselect'

const selectDirectory = state => state.selectDirectory

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
)