//@ts-check
import { ON_CHANGE_SCREEN } from "./constant";

/**
 * @param {{screen: string}} state
 * @param {{ type: string; screen: string; }} action
 */
export const manageScreen = (state, action) => {
  if (state === undefined) return "home";
  switch (action.type) {
    case ON_CHANGE_SCREEN:
      return action.screen;
    default:
      return state;
  }
};
