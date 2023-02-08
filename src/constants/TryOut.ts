const dummyText = [
  'cute cats',
  'cartoon characters',
  'mansions',
  'beautiful bridges',
  'abstract concepts',
  'super computers',
  'young boys',
  'old women',
  'african culture',
  'dairy products',
  'wonderful books',
  'volcanic eruptions',
  'rock formation',
  'hackers at work',
]

const testRequest = [
  {
    prompt: dummyText[Math.floor(Math.random() * 11)],
    number: 4
  },
  {
    prompt: dummyText[Math.floor(Math.random() * 11)],
    number: 6
  },
  {
    prompt: dummyText[Math.floor(Math.random() * 11)],
    number: 7
  },
  {
    prompt: dummyText[Math.floor(Math.random() * 11)],
    number: 3
  },
  {
    prompt: dummyText[Math.floor(Math.random() * 11)],
    number: 5
  }
]

export { testRequest }