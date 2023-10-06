export const wrightTextToClipboard = (newClipText: string) => {
  try {
    navigator.clipboard.writeText(newClipText);
    return "success";
  } catch (e) {
    console.error(e);
    return "failed";
  }
};