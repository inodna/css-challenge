export const classNames = (...classNames: string[]): string => {
  const result: string[] = [];

  classNames.forEach((className) => {
    if (typeof className === "string") {
      return result.push(className);
    }
  });

  return result.join(" ");
};
