export const fetchQuizes = () => {
  return [
    {
      type: "draggable",
      question: "Pindahkan angka dengan urutan terkecil hingga terbesar",
      asset: [
        {
          value: 3,
          image: "url"
        },
        {
          value: 6,
          image: "url"
        },
        {
          value: 7,
          image: "url"
        },
        {
          value: 9,
          image: "url"
        }
      ],
      answer: "3679"
    },
    {
      type: "single-correct-options",
      question: "Apakah ada 10 kaus kaki di bawah ini?",
      asset: "url",
      answer: "no"
    },
    {
      type: "multiple-correct-options",
      question: "Manakah gambar yang mempresentasikan 'dua'?",
      assets: ['url1', 'url2', 'url3'],
      answer: [0, 3]
    },
    {
      type: "short-response",
      question: "Berapa banyak jumlah bebek?",
      assets: "url",
      answer: 32
    },
  ]
}