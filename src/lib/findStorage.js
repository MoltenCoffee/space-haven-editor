const findStorage = (tiles) => {
  return tiles?.filter((item) => {
    return !!item.l?.some((lItem) => !!lItem.feat?.inv);
  });
};

export default findStorage;
