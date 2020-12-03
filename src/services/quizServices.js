/**
 * Assuming fetchQuizes is to fetch quizes from certain backend APIs
 * type can be assumed as "ID_TYPE" that map to unique form of question
 */
export const fetchQuizes = () => {
  return [
    {
      _id: 1,
      question: {
        text: "Pindahkan angka dengan urutan terkecil hingga terbesar",
        type: null,
        assets: null,
      },
      answer: {
        type: "draggable",
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
        value: [3, 6, 7, 9]
      },
    },
    {
      _id: 2,
      question: {
        text: "Apakah ada 10 kaus kaki di bawah ini?",
        type: "counting",
        count: 9,
        assets: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/3.jpg"
      },
      answer: {
        type: "singleCorrectOptions",
        assets: null,
        value: "no"
      }
    },
    {
      _id: 3,
      question: {
        text: "Manakah gambar yang mempresentasikan angka 'dua' dan 'empat'?",
        type: null,
        assets: null,
      },
      answer: {
        type: "multipleCorrectOptions",
        assets: [
          {
            value: 1,
            image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/1.jpg"
          },
          {
            value: 2,
            image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/2.jpg"
          },
          {
            value: 3,
            image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/3.jpg"
          },
          {
            value: 4,
            image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/4.jpg"
          },
        ],
        value: [2, 4]
      }
    },
    {
      _id: 4,
      question: {
        text: "Berapa banyak jumlah bebek?",
        type: "counting",
        count: 8,
        assets: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/four-ducks.png",
      },
      answer: {
        type: "shortResponse",
        assets: null,
        value: 32
      }
    },
    {
      _id: 5,
      question: {
        text: "Ibukota Negara Indonesia adalah?",
        type: null,
        assets: null,
      },
      answer: {
        type: "shortResponse",
        assets: null,
        value: "Jakarta"
      }
    },
    // {
    //   _id: 6,
    //   question: {
    //     text: "Pindahkan angka dengan urutan terbesar hingga terkecil",
    //     type: null,
    //     assets: null,
    //   },
    //   answer: {
    //     type: "draggable",
    //     assets: [
    //       {
    //         value: 2,
    //         image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/2.jpg"
    //       },
    //       {
    //         value: 9,
    //         image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/9.jpg"
    //       },
    //       {
    //         value: 8,
    //         image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/8.jpg"
    //       },
    //       {
    //         value: 6,
    //         image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/6.jpg"
    //       },
    //       {
    //         value: 4,
    //         image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/4.jpg"
    //       },
    //     ],
    //     value: [9, 8, 6, 4, 2]
    //   },
    // },
    // {
    //   _id: 7,
    //   question: {
    //     text: "Apakah angka dibawah ini?",
    //     type: "image",
    //     assets: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/5.jpg"
    //   },
    //   answer: {
    //     type: "shortResponse",
    //     assets: null,
    //     value: "lima"
    //   }
    // },
    // {
    //   _id: 8,
    //   question: {
    //     text: "Manakah gambar yang mempresentasikan angka 'satu' dan 'tiga'?",
    //     type: null,
    //     assets: null,
    //   },
    //   answer: {
    //     type: "multipleCorrectOptions",
    //     assets: [
    //       {
    //         value: 1,
    //         image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/1.jpg"
    //       },
    //       {
    //         value: 2,
    //         image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/2.jpg"
    //       },
    //       {
    //         value: 3,
    //         image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/3.jpg"
    //       },
    //       {
    //         value: 4,
    //         image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/4.jpg"
    //       },
    //     ],
    //     value: [1, 3]
    //   }
    // },
    // {
    //   _id: 9,
    //   question: {
    //     text: "Berapa banyak jumlah bebek?",
    //     type: "counting",
    //     count: 8,
    //     assets: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/four-ducks.png",
    //   },
    //   answer: {
    //     type: "shortResponse",
    //     assets: null,
    //     value: 32
    //   }
    // },
    // {
    //   _id: 10,
    //   question: {
    //     text: "Ibukota Negara Indonesia adalah?",
    //     type: null,
    //     assets: null,
    //   },
    //   answer: {
    //     type: "shortResponse",
    //     assets: null,
    //     value: "Jakarta"
    //   }
    // },
  ]
}