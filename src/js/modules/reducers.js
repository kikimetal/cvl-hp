export const windowSize = (state = "sm", action) => {
  if (action.type === "SET_WINDOW_SIZE") {
    return action.size
  }
  return state
}

export const windowWidth = (state = window.innerWidth, action) => {
  if (action.type === "SET_WINDOW_WIDTH") {
    return action.width
  }
  return state
}

export const windowHeight = (state = window.innerHeight, action) => {
  if (action.type === "SET_WINDOW_HEIGHT") {
    return action.height
  }
  return state
}

export const isReverseWebsite = (state = false, action) => {
  if (action.type === "REVERSE_WEBSITE") {
    return !state
  }
  return state
}

export const websitesDataCondition = (state = false, action) => {
  if (action.type === "SET_WEBSITES_DATA_CONDITION") {
    return action.condition
  }
  return state
}

export const websitesData = (state = [], action) => {
  if (action.type === "SET_DATA") {
    return action.data
  }
  return state
}

export const wpData = (state = null, action) => {
  if (action.type === "SET_WP_DATA") {
    return action.data
  }
  return state
}

export const isPageMoving = (state = false, action) => {
  if (action.type === "PAGE_MOVING") {
    return true
  }
  if (action.type === "PAGE_MOVED") {
    return false
  }
  return state
}

export const moveToPathname = (state = "", action) => {
  if (action.type === "SET_MOVE_TO_PATHNAME") {
    return action.nextPath
  }
  return state
}

export const shortMessage = (state = "", action) => {
  if (action.type === "SET_NEXT_PAGE_SHORT_MESSAGE") {
    return action.shortMessage
  }
  return state
}

export const mobileMenuContext = (state = false, action) => {
  if (action.type === "SET_MOBILE_MENU_CONTEXT") {
    return action.context
  }
  return state
}
