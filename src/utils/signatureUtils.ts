export const computeSignature = (r: number, g: number, b: number): number => {
  return ((r << 16) | (g << 8) | b) + 1;
};

export const checkSignatureAvailability = async (
  signature: number
): Promise<boolean> => {
  try {
    const response = await fetch(`https://rgb.fun/signatures/${signature}`);
    return response.status !== 200;
  } catch (error) {
    console.error("Error checking signature availability:", error);
    return false;
  }
};
