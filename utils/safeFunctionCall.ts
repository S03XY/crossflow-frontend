export const safeFunctionCall = ({ func }: { func: () => any }) => {
  try {
    const response = func();
    return response;
  } catch (error) {
    console.error("Error occurred during safe function call:", error);
  }
};
export const asyncSafeFunctionCall = async ({ func }: { func: () => any }) => {
  try {
    const response = await func();
    return response;
  } catch (error) {
    console.error("Error occurred during safe function call:", error);
  }
};
