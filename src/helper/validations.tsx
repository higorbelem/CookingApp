export default {
  onlyNumbers: (text: string) => {
    return /^[0-9]*$/g.test(text);
  },
};
