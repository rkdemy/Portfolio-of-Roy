export async function AdjustImageWidth(imageUrl) {
  const widthBase = 40;
  const scaleFactor = 0.525;

  const tempImage = new Image();

  const loadImage = new Promise((resolve, reject) => {
    tempImage.onload = () => resolve(tempImage);
    tempImage.onerror = reject;
  });
  tempImage.src = imageUrl;

  try {
    await loadImage;

    const imageRatio = tempImage.naturalWidth / tempImage.naturalHeight;
    const adjustedWidth = Math.pow(imageRatio, scaleFactor) * widthBase;

    return adjustedWidth;
  } catch (error) {
    console.error("Error loading image:", error);
    return "auto";
  }
}
