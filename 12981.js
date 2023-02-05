const solution = (n, words) => {
  const wordSet = new Set();

  let answer = [0, 0];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const rule3 = i === 0 ? true : words[i - 1].at(-1) === word[0];
    const rule4 = !wordSet.has(word);
    const rule5 = !(word.length === 1);

    if (rule3 && rule4 && rule5) wordSet.add(word);
    else {
      const who = (i + 1) % n;
      const order = Math.ceil((i + 1) / n);
      answer = [who === 0 ? n : who, order];
      break;
    }
  }
  return answer;
};
