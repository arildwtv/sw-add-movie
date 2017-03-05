const previewReducer = (preview = false, action) => {
  switch (action.type) {
    case 'PREVIEW_ACTIVATED': return true;
    case 'PREVIEW_DEACTIVATED': return false;
    default: return preview;
  }
};

export default previewReducer;
