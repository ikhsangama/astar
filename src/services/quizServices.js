/**
 * Assuming fetchQuizes is to fetch quizes from certain APIs
 */
export const fetchQuizes = () => {
  return [
    {
      type: "draggable",
      question: "Pindahkan angka dengan urutan terkecil hingga terbesar",
      assets: [
        {
          value: 6,
          image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/6.jpg"
        },
        {
          value: 7,
          image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/7.jpg"
        },
        {
          value: 9,
          image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/9.jpg"
        },
        {
          value: 3,
          image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/3.jpg"
        },
      ],
      answer: "3679"
    },
    // {
    //   type: "single-correct-options",
    //   question: "Apakah ada 10 kaus kaki di bawah ini?",
    //   asset: "url",
    //   answer: "no"
    // },
    // {
    //   type: "multiple-correct-options",
    //   question: "Manakah gambar yang mempresentasikan 'dua'?",
    //   assets: ['url1', 'url2', 'url3'],
    //   answer: [0, 3]
    // },
    // {
    //   type: "short-response",
    //   question: "Berapa banyak jumlah bebek?",
    //   assets: "url",
    //   answer: "32"
    // },
    // {
    //   type: "short-response",
    //   question: "Ibukota Indonesia adalah?",
    //   assets: null,
    //   answer: "Jakarta"
    // },
  ]
}