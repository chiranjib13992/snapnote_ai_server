export function cleanBase64(base64) {
  return base64.replace(/^data:image\/\w+;base64,/, "");
}

export function isValidImageSize(base64, maxMB = 5) {
  const sizeInBytes = Buffer.byteLength(base64, "base64");
  const sizeInMB = sizeInBytes / (1024 * 1024);
  return sizeInMB <= maxMB;
}
