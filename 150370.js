const solution = (today, terms, privacies) => {
  const termsMap = terms.reduce((acc, cur) => {
    const [terms, validity] = cur.split(" ");
    acc.set(terms, Number(validity));
    return acc;
  }, new Map());

  const answer = privacies.reduce((acc, cur, index) => {
    const [date, terms] = cur.split(" ");
    const validity = termsMap.get(terms);
    const collectionDate = new Date(date);
    collectionDate.setMonth(collectionDate.getMonth() + validity);
    if (new Date(today) >= collectionDate) acc.push(index + 1);
    return acc;
  }, []);

  return answer;
};
