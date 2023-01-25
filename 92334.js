const solution = (id_list, report, k) => {
  const reportMap = report.reduce((acc, cur) => {
    const [reporter, reported] = cur.split(" ");
    if (acc.has(reported)) {
      const { count, reporters } = acc.get(reported);
      if (!reporters.includes(reporter)) {
        reporters.push(reporter);
        acc.set(reported, { count: count + 1, reporters });
      }
    } else {
      acc.set(reported, { count: 1, reporters: [reporter] });
    }
    return acc;
  }, new Map());

  const answerMap = new Map();

  reportMap.forEach(({ count, reporters }, key) => {
    if (count >= k) {
      reporters.forEach((reporter) => {
        if (!answerMap.has(reporter)) answerMap.set(reporter, 1);
        else {
          const mailCount = answerMap.get(reporter);
          answerMap.set(reporter, mailCount + 1);
        }
      });
    }
  });

  const answer = id_list.map((id) => answerMap.get(id) || 0);

  return answer;
};
