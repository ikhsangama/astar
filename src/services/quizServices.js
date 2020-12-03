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
        assets: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFFm_NqFl_nbNLQ8ttVQxmYM835hQ8LQt_A&usqp=CAU"
      },
      answer: {
        type: "singleCorrectOptions",
        assets: [
          {
            value: "ya",
            image: null
          },
          {
            value: "tidak",
            image: null
          }
        ],
        value: "tidak"
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
    {
      _id: 6,
      question: {
        text: "Pindahkan angka dengan urutan terbesar hingga terkecil",
        type: null,
        assets: null,
      },
      answer: {
        type: "draggable",
        assets: [
          {
            value: 2,
            image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/2.jpg"
          },
          {
            value: 9,
            image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/9.jpg"
          },
          {
            value: 8,
            image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/8.jpg"
          },
          {
            value: 6,
            image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/6.jpg"
          },
          {
            value: 4,
            image: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/4.jpg"
          },
        ],
        value: [9, 8, 6, 4, 2]
      },
    },
    {
      _id: 7,
      question: {
        text: "Apakah angka dibawah ini?",
        type: "image",
        assets: "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/5.jpg"
      },
      answer: {
        type: "shortResponse",
        assets: null,
        value: "lima"
      }
    },
    {
      _id: 8,
      question: {
        text: "3 * 5 = ...",
        type: null,
        assets: null,
      },
      answer: {
        type: "shortResponse",
        assets: null,
        value: 15
      }
    },
    {
      _id: 9,
      question: {
        text: "Apa profesi gambar di bawah ini?",
        type: "image",
        assets: "https://static.republika.co.id/uploads/images/detailnews/guru-_180720200202-810.jpg",
      },
      answer: {
        type: "shortResponse",
        assets: null,
        value: "guru"
      }
    },
    {
      _id: 10,
      question: {
        text: "Manakah icon negara Indonesia?",
        type: null,
        assets: null,
      },
      answer: {
        type: "singleCorrectOptions",
        assets: [
          {
            value: "monas",
            image: "https://blog.roomme.id/wp-content/uploads/2020/08/ilustrasi-monas-2_ratio-16x9-1.jpg"
          },
          {
            value: "eifel",
            image: "https://bravaradio.com/wp-content/uploads/2016/10/ruang-rahasia-di-puncak-menara-eiffel.jpg"
          },
          {
            value: "merlion",
            image: "https://media-cdn.tripadvisor.com/media/photo-s/18/33/5c/4c/1807-merlion-marinabay.jpg"
          },
          {
            value: "piramida",
            image: "https://tempatwisataunik.com/wp-content/uploads/2016/04/piramida-giza.jpg"
          },
        ],
        value: "monas"
      }
    },
  ]
}