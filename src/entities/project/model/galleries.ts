import type { GalleryBlock } from "@/entities/project/model/types";

/**
 * The full photo essay for every project, taken from the reference site in its
 * original order. Blocks alternate between single, paired and portrait layouts;
 * each image keeps the reference's height / width ratio so the page never
 * shifts while media loads.
 */
export const projectGalleries: Record<string, GalleryBlock[]> = {
  "van-raak-l-ravels": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/01.webp",
          alt: "Van Raak L. — photograph 1",
          ratio: 0.66653948874475,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/02.webp",
          alt: "Van Raak L. — photograph 2",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/03.webp",
          alt: "Van Raak L. — photograph 3",
          ratio: 1.5005241090147,
        },
        {
          src: "/images/projects/van-raak-l-ravels/04.webp",
          alt: "Van Raak L. — photograph 4",
          ratio: 1.5002589331952,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/05.webp",
          alt: "Van Raak L. — photograph 5",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/06.webp",
          alt: "Van Raak L. — photograph 6",
          ratio: 0.66654545454545,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/07.webp",
          alt: "Van Raak L. — photograph 7",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/08.webp",
          alt: "Van Raak L. — photograph 8",
          ratio: 1.5,
        },
        {
          src: "/images/projects/van-raak-l-ravels/09.webp",
          alt: "Van Raak L. — photograph 9",
          ratio: 1.5007594936709,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/10.webp",
          alt: "Van Raak L. — photograph 10",
          ratio: 0.66630116959064,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/11.webp",
          alt: "Van Raak L. — photograph 11",
          ratio: 0.66655484736666,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/12.webp",
          alt: "Van Raak L. — photograph 12",
          ratio: 0.66643258426966,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/13.webp",
          alt: "Van Raak L. — photograph 13",
          ratio: 1.4997369805366,
        },
        {
          src: "/images/projects/van-raak-l-ravels/14.webp",
          alt: "Van Raak L. — photograph 14",
          ratio: 1.4997098084736,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/15.webp",
          alt: "Van Raak L. — photograph 15",
          ratio: 1.5005005005005,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/16.webp",
          alt: "Van Raak L. — photograph 16",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/17.webp",
          alt: "Van Raak L. — photograph 17",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/18.webp",
          alt: "Van Raak L. — photograph 18",
          ratio: 1.5002686727566,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/van-raak-l-ravels/19.webp",
          alt: "Van Raak L. — photograph 19",
          ratio: 0.55813953488372,
        },
      ],
    },
  ],
  "schooltje-van-de-hei-mol": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/01.webp",
          alt: "Schooltje van de Hei — photograph 1",
          ratio: 0.66659262549978,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/02.webp",
          alt: "Schooltje van de Hei — photograph 2",
          ratio: 0.66673121611154,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/03.webp",
          alt: "Schooltje van de Hei — photograph 3",
          ratio: 1.4998595900028,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/04.webp",
          alt: "Schooltje van de Hei — photograph 4",
          ratio: 1.5,
        },
        {
          src: "/images/projects/schooltje-van-de-hei-mol/05.webp",
          alt: "Schooltje van de Hei — photograph 5",
          ratio: 1.4998615342011,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/06.webp",
          alt: "Schooltje van de Hei — photograph 6",
          ratio: 0.66673003802281,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/07.webp",
          alt: "Schooltje van de Hei — photograph 7",
          ratio: 0.66660265027847,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/08.webp",
          alt: "Schooltje van de Hei — photograph 8",
          ratio: 0.66673014663874,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/09.webp",
          alt: "Schooltje van de Hei — photograph 9",
          ratio: 1.5001575795777,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/10.webp",
          alt: "Schooltje van de Hei — photograph 10",
          ratio: 1.4998198198198,
        },
        {
          src: "/images/projects/schooltje-van-de-hei-mol/11.webp",
          alt: "Schooltje van de Hei — photograph 11",
          ratio: 1.4998568565703,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/12.webp",
          alt: "Schooltje van de Hei — photograph 12",
          ratio: 0.66675338189386,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/13.webp",
          alt: "Schooltje van de Hei — photograph 13",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/14.webp",
          alt: "Schooltje van de Hei — photograph 14",
          ratio: 0.66673833584175,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/15.webp",
          alt: "Schooltje van de Hei — photograph 15",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/16.webp",
          alt: "Schooltje van de Hei — photograph 16",
          ratio: 1.5,
        },
        {
          src: "/images/projects/schooltje-van-de-hei-mol/17.webp",
          alt: "Schooltje van de Hei — photograph 17",
          ratio: 1.4998623726947,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/18.webp",
          alt: "Schooltje van de Hei — photograph 18",
          ratio: 1.4996964177292,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/19.webp",
          alt: "Schooltje van de Hei — photograph 19",
          ratio: 0.66672254819782,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/20.webp",
          alt: "Schooltje van de Hei — photograph 20",
          ratio: 1.50015211439,
        },
        {
          src: "/images/projects/schooltje-van-de-hei-mol/21.webp",
          alt: "Schooltje van de Hei — photograph 21",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/22.webp",
          alt: "Schooltje van de Hei — photograph 22",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/23.webp",
          alt: "Schooltje van de Hei — photograph 23",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/24.webp",
          alt: "Schooltje van de Hei — photograph 24",
          ratio: 0.66672553867891,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/25.webp",
          alt: "Schooltje van de Hei — photograph 25",
          ratio: 1.5,
        },
        {
          src: "/images/projects/schooltje-van-de-hei-mol/26.webp",
          alt: "Schooltje van de Hei — photograph 26",
          ratio: 1.4998402045382,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/27.webp",
          alt: "Schooltje van de Hei — photograph 27",
          ratio: 0.66660950094323,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/28.webp",
          alt: "Schooltje van de Hei — photograph 28",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/29.webp",
          alt: "Schooltje van de Hei — photograph 29",
          ratio: 1.5,
        },
        {
          src: "/images/projects/schooltje-van-de-hei-mol/30.webp",
          alt: "Schooltje van de Hei — photograph 30",
          ratio: 1.500171998624,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/schooltje-van-de-hei-mol/31.webp",
          alt: "Schooltje van de Hei — photograph 31",
          ratio: 0.66666666666667,
        },
      ],
    },
  ],
  "woning-c-mol": [
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/woning-c-mol/01.webp",
          alt: "Woning C — photograph 1",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-c-mol/02.webp",
          alt: "Woning C — photograph 2",
          ratio: 1.5,
        },
        {
          src: "/images/projects/woning-c-mol/03.webp",
          alt: "Woning C — photograph 3",
          ratio: 1.39984080658,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/woning-c-mol/04.webp",
          alt: "Woning C — photograph 4",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-c-mol/05.webp",
          alt: "Woning C — photograph 5",
          ratio: 1.5,
        },
        {
          src: "/images/projects/woning-c-mol/06.webp",
          alt: "Woning C — photograph 6",
          ratio: 1.3998935037274,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-c-mol/07.webp",
          alt: "Woning C — photograph 7",
          ratio: 1.4001612469766,
        },
        {
          src: "/images/projects/woning-c-mol/08.webp",
          alt: "Woning C — photograph 8",
          ratio: 1.4410173160173,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-c-mol/09.webp",
          alt: "Woning C — photograph 9",
          ratio: 1.5,
        },
        {
          src: "/images/projects/woning-c-mol/10.webp",
          alt: "Woning C — photograph 10",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-c-mol/11.webp",
          alt: "Woning C — photograph 11",
          ratio: 1.3998418555614,
        },
        {
          src: "/images/projects/woning-c-mol/12.webp",
          alt: "Woning C — photograph 12",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/woning-c-mol/13.webp",
          alt: "Woning C — photograph 13",
          ratio: 1.5,
        },
      ],
    },
  ],
  "jakob-smits-museum-mol": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/jakob-smits-museum-mol/01.webp",
          alt: "Jakob Smits Museum — photograph 1",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/jakob-smits-museum-mol/02.webp",
          alt: "Jakob Smits Museum — photograph 2",
          ratio: 0.66674975074776,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/jakob-smits-museum-mol/03.webp",
          alt: "Jakob Smits Museum — photograph 3",
          ratio: 1.5001891789633,
        },
        {
          src: "/images/projects/jakob-smits-museum-mol/04.webp",
          alt: "Jakob Smits Museum — photograph 4",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/jakob-smits-museum-mol/05.webp",
          alt: "Jakob Smits Museum — photograph 5",
          ratio: 0.66674727932285,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/jakob-smits-museum-mol/06.webp",
          alt: "Jakob Smits Museum — photograph 6",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/jakob-smits-museum-mol/07.webp",
          alt: "Jakob Smits Museum — photograph 7",
          ratio: 0.66683480453972,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/jakob-smits-museum-mol/08.webp",
          alt: "Jakob Smits Museum — photograph 8",
          ratio: 1.5,
        },
        {
          src: "/images/projects/jakob-smits-museum-mol/09.webp",
          alt: "Jakob Smits Museum — photograph 9",
          ratio: 1.5001880406168,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/jakob-smits-museum-mol/10.webp",
          alt: "Jakob Smits Museum — photograph 10",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/jakob-smits-museum-mol/11.webp",
          alt: "Jakob Smits Museum — photograph 11",
          ratio: 0.666748046875,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/jakob-smits-museum-mol/12.webp",
          alt: "Jakob Smits Museum — photograph 12",
          ratio: 1.4998018232263,
        },
        {
          src: "/images/projects/jakob-smits-museum-mol/13.webp",
          alt: "Jakob Smits Museum — photograph 13",
          ratio: 1.5001761183515,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/jakob-smits-museum-mol/14.webp",
          alt: "Jakob Smits Museum — photograph 14",
          ratio: 0.666750439809,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/jakob-smits-museum-mol/15.webp",
          alt: "Jakob Smits Museum — photograph 15",
          ratio: 0.66683804627249,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/jakob-smits-museum-mol/16.webp",
          alt: "Jakob Smits Museum — photograph 16",
          ratio: 0.66656787196206,
        },
      ],
    },
  ],
  "woning-s-ravels": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-s-ravels/01.webp",
          alt: "Woning S — photograph 1",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/woning-s-ravels/02.webp",
          alt: "Woning S — photograph 2",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-s-ravels/03.webp",
          alt: "Woning S — photograph 3",
          ratio: 0.66685067623516,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-s-ravels/04.webp",
          alt: "Woning S — photograph 4",
          ratio: 1.4997898276587,
        },
        {
          src: "/images/projects/woning-s-ravels/05.webp",
          alt: "Woning S — photograph 5",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-s-ravels/06.webp",
          alt: "Woning S — photograph 6",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-s-ravels/07.webp",
          alt: "Woning S — photograph 7",
          ratio: 0.66685912240185,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-s-ravels/08.webp",
          alt: "Woning S — photograph 8",
          ratio: 0.66648793565684,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-s-ravels/09.webp",
          alt: "Woning S — photograph 9",
          ratio: 1.5,
        },
        {
          src: "/images/projects/woning-s-ravels/10.webp",
          alt: "Woning S — photograph 10",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/woning-s-ravels/11.webp",
          alt: "Woning S — photograph 11",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-s-ravels/12.webp",
          alt: "Woning S — photograph 12",
          ratio: 0.6667516573177,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-s-ravels/13.webp",
          alt: "Woning S — photograph 13",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-s-ravels/14.webp",
          alt: "Woning S — photograph 14",
          ratio: 1.5,
        },
        {
          src: "/images/projects/woning-s-ravels/15.webp",
          alt: "Woning S — photograph 15",
          ratio: 1.5001844337883,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-s-ravels/16.webp",
          alt: "Woning S — photograph 16",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/woning-s-ravels/17.webp",
          alt: "Woning S — photograph 17",
          ratio: 0.66657068816585,
        },
      ],
    },
  ],
  "bko-rauw-mol": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-rauw-mol/01.webp",
          alt: "BKO Rauw — photograph 1",
          ratio: 1.5,
        },
        {
          src: "/images/projects/bko-rauw-mol/02.webp",
          alt: "BKO Rauw — photograph 2",
          ratio: 1.5003709198813,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-rauw-mol/03.webp",
          alt: "BKO Rauw — photograph 3",
          ratio: 0.66657191586128,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-rauw-mol/04.webp",
          alt: "BKO Rauw — photograph 4",
          ratio: 0.66658911121452,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/bko-rauw-mol/05.webp",
          alt: "BKO Rauw — photograph 5",
          ratio: 1.5001943256899,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-rauw-mol/06.webp",
          alt: "BKO Rauw — photograph 6",
          ratio: 0.66682974559687,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-rauw-mol/07.webp",
          alt: "BKO Rauw — photograph 7",
          ratio: 0.66659212880143,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-rauw-mol/08.webp",
          alt: "BKO Rauw — photograph 8",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-rauw-mol/09.webp",
          alt: "BKO Rauw — photograph 9",
          ratio: 0.66659085740277,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-rauw-mol/10.webp",
          alt: "BKO Rauw — photograph 10",
          ratio: 1.5001750087504,
        },
        {
          src: "/images/projects/bko-rauw-mol/11.webp",
          alt: "BKO Rauw — photograph 11",
          ratio: 1.4996249062266,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-rauw-mol/12.webp",
          alt: "BKO Rauw — photograph 12",
          ratio: 1.5001787629603,
        },
        {
          src: "/images/projects/bko-rauw-mol/13.webp",
          alt: "BKO Rauw — photograph 13",
          ratio: 1.5001970831691,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-rauw-mol/14.webp",
          alt: "BKO Rauw — photograph 14",
          ratio: 0.66657775406775,
        },
      ],
    },
  ],
  "tumag-turnhout": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/tumag-turnhout/01.webp",
          alt: "Tumag — photograph 1",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/tumag-turnhout/02.webp",
          alt: "Tumag — photograph 2",
          ratio: 1.5001755001755,
        },
        {
          src: "/images/projects/tumag-turnhout/03.webp",
          alt: "Tumag — photograph 3",
          ratio: 1.4996350364964,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/tumag-turnhout/04.webp",
          alt: "Tumag — photograph 4",
          ratio: 0.66659096070861,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/tumag-turnhout/05.webp",
          alt: "Tumag — photograph 5",
          ratio: 1.5001769911504,
        },
        {
          src: "/images/projects/tumag-turnhout/06.webp",
          alt: "Tumag — photograph 6",
          ratio: 1.500365230095,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/tumag-turnhout/07.webp",
          alt: "Tumag — photograph 7",
          ratio: 0.66658272475447,
        },
        {
          src: "/images/projects/tumag-turnhout/08.webp",
          alt: "Tumag — photograph 8",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/tumag-turnhout/09.webp",
          alt: "Tumag — photograph 9",
          ratio: 1.5,
        },
        {
          src: "/images/projects/tumag-turnhout/10.webp",
          alt: "Tumag — photograph 10",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/tumag-turnhout/11.webp",
          alt: "Tumag — photograph 11",
          ratio: 1.4996515679443,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/tumag-turnhout/12.webp",
          alt: "Tumag — photograph 12",
          ratio: 1.5,
        },
        {
          src: "/images/projects/tumag-turnhout/13.webp",
          alt: "Tumag — photograph 13",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/tumag-turnhout/14.webp",
          alt: "Tumag — photograph 14",
          ratio: 0.6665905979005,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/tumag-turnhout/15.webp",
          alt: "Tumag — photograph 15",
          ratio: 0.66659412404788,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/tumag-turnhout/16.webp",
          alt: "Tumag — photograph 16",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/tumag-turnhout/17.webp",
          alt: "Tumag — photograph 17",
          ratio: 0.66673927248965,
        },
      ],
    },
  ],
  "bko-sluis-mol": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-sluis-mol/01.webp",
          alt: "BKO Sluis — photograph 1",
          ratio: 0.66674238982281,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-sluis-mol/02.webp",
          alt: "BKO Sluis — photograph 2",
          ratio: 0.66684238270954,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-sluis-mol/03.webp",
          alt: "BKO Sluis — photograph 3",
          ratio: 0.66658566221142,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-sluis-mol/04.webp",
          alt: "BKO Sluis — photograph 4",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-sluis-mol/05.webp",
          alt: "BKO Sluis — photograph 5",
          ratio: 1.4998264491496,
        },
        {
          src: "/images/projects/bko-sluis-mol/06.webp",
          alt: "BKO Sluis — photograph 6",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-sluis-mol/07.webp",
          alt: "BKO Sluis — photograph 7",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/bko-sluis-mol/08.webp",
          alt: "BKO Sluis — photograph 8",
          ratio: 1.4998106777736,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-sluis-mol/09.webp",
          alt: "BKO Sluis — photograph 9",
          ratio: 1.4996138996139,
        },
        {
          src: "/images/projects/bko-sluis-mol/10.webp",
          alt: "BKO Sluis — photograph 10",
          ratio: 1.5001682935039,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-sluis-mol/11.webp",
          alt: "BKO Sluis — photograph 11",
          ratio: 0.66650921114785,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/bko-sluis-mol/12.webp",
          alt: "BKO Sluis — photograph 12",
          ratio: 1.5,
        },
        {
          src: "/images/projects/bko-sluis-mol/13.webp",
          alt: "BKO Sluis — photograph 13",
          ratio: 1.5,
        },
      ],
    },
  ],
  "de-dobbelsteen-antwerpen": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/01.webp",
          alt: "De Dobbelsteen — photograph 1",
          ratio: 1.5003819709702,
        },
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/02.webp",
          alt: "De Dobbelsteen — photograph 2",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/03.webp",
          alt: "De Dobbelsteen — photograph 3",
          ratio: 0.66683046683047,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/04.webp",
          alt: "De Dobbelsteen — photograph 4",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/05.webp",
          alt: "De Dobbelsteen — photograph 5",
          ratio: 1.5,
        },
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/06.webp",
          alt: "De Dobbelsteen — photograph 6",
          ratio: 1.5001762425097,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/07.webp",
          alt: "De Dobbelsteen — photograph 7",
          ratio: 0.66649457924626,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/08.webp",
          alt: "De Dobbelsteen — photograph 8",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/09.webp",
          alt: "De Dobbelsteen — photograph 9",
          ratio: 1.5001781261133,
        },
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/10.webp",
          alt: "De Dobbelsteen — photograph 10",
          ratio: 1.5005060728745,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/11.webp",
          alt: "De Dobbelsteen — photograph 11",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/12.webp",
          alt: "De Dobbelsteen — photograph 12",
          ratio: 1.5002060156572,
        },
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/13.webp",
          alt: "De Dobbelsteen — photograph 13",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/14.webp",
          alt: "De Dobbelsteen — photograph 14",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/15.webp",
          alt: "De Dobbelsteen — photograph 15",
          ratio: 0.66658097686375,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/16.webp",
          alt: "De Dobbelsteen — photograph 16",
          ratio: 1.5002565418163,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/de-dobbelsteen-antwerpen/17.webp",
          alt: "De Dobbelsteen — photograph 17",
          ratio: 0.66657901656587,
        },
      ],
    },
  ],
  "kmo-park-de-zillen-mol": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/kmo-park-de-zillen-mol/01.webp",
          alt: "KMO Park De Zillen — photograph 1",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/kmo-park-de-zillen-mol/02.webp",
          alt: "KMO Park De Zillen — photograph 2",
          ratio: 1.5002296738631,
        },
        {
          src: "/images/projects/kmo-park-de-zillen-mol/03.webp",
          alt: "KMO Park De Zillen — photograph 3",
          ratio: 1.499793814433,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/kmo-park-de-zillen-mol/04.webp",
          alt: "KMO Park De Zillen — photograph 4",
          ratio: 0.66684155299056,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/kmo-park-de-zillen-mol/05.webp",
          alt: "KMO Park De Zillen — photograph 5",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/kmo-park-de-zillen-mol/06.webp",
          alt: "KMO Park De Zillen — photograph 6",
          ratio: 1.5,
        },
        {
          src: "/images/projects/kmo-park-de-zillen-mol/07.webp",
          alt: "KMO Park De Zillen — photograph 7",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/kmo-park-de-zillen-mol/08.webp",
          alt: "KMO Park De Zillen — photograph 8",
          ratio: 0.66675406397483,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/kmo-park-de-zillen-mol/09.webp",
          alt: "KMO Park De Zillen — photograph 9",
          ratio: 1.5,
        },
        {
          src: "/images/projects/kmo-park-de-zillen-mol/10.webp",
          alt: "KMO Park De Zillen — photograph 10",
          ratio: 1.4996326230713,
        },
      ],
    },
  ],
  "meneer-miel-mol": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/01.webp",
          alt: "Meneer Miel — photograph 1",
          ratio: 1.5,
        },
        {
          src: "/images/projects/meneer-miel-mol/02.webp",
          alt: "Meneer Miel — photograph 2",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/03.webp",
          alt: "Meneer Miel — photograph 3",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/04.webp",
          alt: "Meneer Miel — photograph 4",
          ratio: 1.4998281196287,
        },
        {
          src: "/images/projects/meneer-miel-mol/05.webp",
          alt: "Meneer Miel — photograph 5",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/06.webp",
          alt: "Meneer Miel — photograph 6",
          ratio: 0.66685600681625,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/07.webp",
          alt: "Meneer Miel — photograph 7",
          ratio: 1.5001751313485,
        },
        {
          src: "/images/projects/meneer-miel-mol/08.webp",
          alt: "Meneer Miel — photograph 8",
          ratio: 1.4998330550918,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/09.webp",
          alt: "Meneer Miel — photograph 9",
          ratio: 0.66656925774401,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/10.webp",
          alt: "Meneer Miel — photograph 10",
          ratio: 0.66684901531729,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/11.webp",
          alt: "Meneer Miel — photograph 11",
          ratio: 1.50019462826,
        },
        {
          src: "/images/projects/meneer-miel-mol/12.webp",
          alt: "Meneer Miel — photograph 12",
          ratio: 1.500171762281,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/13.webp",
          alt: "Meneer Miel — photograph 13",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/14.webp",
          alt: "Meneer Miel — photograph 14",
          ratio: 1.5,
        },
        {
          src: "/images/projects/meneer-miel-mol/15.webp",
          alt: "Meneer Miel — photograph 15",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/16.webp",
          alt: "Meneer Miel — photograph 16",
          ratio: 1.4998310239946,
        },
        {
          src: "/images/projects/meneer-miel-mol/17.webp",
          alt: "Meneer Miel — photograph 17",
          ratio: 1.5001761183515,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/18.webp",
          alt: "Meneer Miel — photograph 18",
          ratio: 1.4996084573218,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/19.webp",
          alt: "Meneer Miel — photograph 19",
          ratio: 1.50032404407,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/meneer-miel-mol/20.webp",
          alt: "Meneer Miel — photograph 20",
          ratio: 0.66666666666667,
        },
      ],
    },
  ],
  "heilig-graf-internaat-turnhout": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-internaat-turnhout/01.webp",
          alt: "Heilig Graf Internaat — photograph 1",
          ratio: 0.66673975005481,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-internaat-turnhout/02.webp",
          alt: "Heilig Graf Internaat — photograph 2",
          ratio: 0.66673975005481,
        },
        {
          src: "/images/projects/heilig-graf-internaat-turnhout/03.webp",
          alt: "Heilig Graf Internaat — photograph 3",
          ratio: 0.66673975005481,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-internaat-turnhout/04.webp",
          alt: "Heilig Graf Internaat — photograph 4",
          ratio: 0.66673975005481,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/heilig-graf-internaat-turnhout/05.webp",
          alt: "Heilig Graf Internaat — photograph 5",
          ratio: 1.4998355804012,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-internaat-turnhout/06.webp",
          alt: "Heilig Graf Internaat — photograph 6",
          ratio: 0.66673975005481,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-internaat-turnhout/07.webp",
          alt: "Heilig Graf Internaat — photograph 7",
          ratio: 0.66673975005481,
        },
        {
          src: "/images/projects/heilig-graf-internaat-turnhout/08.webp",
          alt: "Heilig Graf Internaat — photograph 8",
          ratio: 0.66673975005481,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-internaat-turnhout/09.webp",
          alt: "Heilig Graf Internaat — photograph 9",
          ratio: 0.66673975005481,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/heilig-graf-internaat-turnhout/10.webp",
          alt: "Heilig Graf Internaat — photograph 10",
          ratio: 1.4998355804012,
        },
      ],
    },
  ],
  "heilig-graf-apostoliekenstraat-turnhout": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/01.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 1",
          ratio: 1.4998355804012,
        },
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/02.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 2",
          ratio: 1.4998355804012,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/03.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 3",
          ratio: 0.66673975005481,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/04.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 4",
          ratio: 1.4998355804012,
        },
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/05.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 5",
          ratio: 1.4998355804012,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/06.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 6",
          ratio: 0.66673975005481,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/07.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 7",
          ratio: 0.66673975005481,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/08.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 8",
          ratio: 0.66673975005481,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/09.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 9",
          ratio: 1.4998355804012,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/10.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 10",
          ratio: 0.66673975005481,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/11.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 11",
          ratio: 0.66673975005481,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/12.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 12",
          ratio: 1.4998355804012,
        },
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/13.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 13",
          ratio: 1.4998355804012,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/14.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 14",
          ratio: 0.66673975005481,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/heilig-graf-apostoliekenstraat-turnhout/15.webp",
          alt: "Heilig Graf Apostoliekenstraat — photograph 15",
          ratio: 0.66673975005481,
        },
      ],
    },
  ],
  "sint-annacollege-middenschool-antwerpen": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/01.webp",
          alt: "Sint-Annacollege Middenschool — photograph 1",
          ratio: 0.66674478556363,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/02.webp",
          alt: "Sint-Annacollege Middenschool — photograph 2",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/03.webp",
          alt: "Sint-Annacollege Middenschool — photograph 3",
          ratio: 1.5001783803068,
        },
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/04.webp",
          alt: "Sint-Annacollege Middenschool — photograph 4",
          ratio: 1.4996746909564,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/05.webp",
          alt: "Sint-Annacollege Middenschool — photograph 5",
          ratio: 0.66687817258883,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/06.webp",
          alt: "Sint-Annacollege Middenschool — photograph 6",
          ratio: 1.5001870557426,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/07.webp",
          alt: "Sint-Annacollege Middenschool — photograph 7",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/08.webp",
          alt: "Sint-Annacollege Middenschool — photograph 8",
          ratio: 0.66658630665381,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/09.webp",
          alt: "Sint-Annacollege Middenschool — photograph 9",
          ratio: 1.5001824151769,
        },
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/10.webp",
          alt: "Sint-Annacollege Middenschool — photograph 10",
          ratio: 1.5004370629371,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/11.webp",
          alt: "Sint-Annacollege Middenschool — photograph 11",
          ratio: 0.66658948830748,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/12.webp",
          alt: "Sint-Annacollege Middenschool — photograph 12",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/13.webp",
          alt: "Sint-Annacollege Middenschool — photograph 13",
          ratio: 0.66650330801274,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/14.webp",
          alt: "Sint-Annacollege Middenschool — photograph 14",
          ratio: 0.66650330801274,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/15.webp",
          alt: "Sint-Annacollege Middenschool — photograph 15",
          ratio: 1.5,
        },
        {
          src: "/images/projects/sint-annacollege-middenschool-antwerpen/16.webp",
          alt: "Sint-Annacollege Middenschool — photograph 16",
          ratio: 1.4998226321391,
        },
      ],
    },
  ],
  "b-b-met-woonst-balen-2": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/b-b-met-woonst-balen-2/01.webp",
          alt: "B&B met woonst — photograph 1",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/b-b-met-woonst-balen-2/02.webp",
          alt: "B&B met woonst — photograph 2",
          ratio: 0.66640625,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/b-b-met-woonst-balen-2/03.webp",
          alt: "B&B met woonst — photograph 3",
          ratio: 0.66640625,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/b-b-met-woonst-balen-2/04.webp",
          alt: "B&B met woonst — photograph 4",
          ratio: 0.66640625,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/b-b-met-woonst-balen-2/05.webp",
          alt: "B&B met woonst — photograph 5",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/b-b-met-woonst-balen-2/06.webp",
          alt: "B&B met woonst — photograph 6",
          ratio: 0.62289831865492,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/b-b-met-woonst-balen-2/07.webp",
          alt: "B&B met woonst — photograph 7",
          ratio: 0.66640625,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/b-b-met-woonst-balen-2/08.webp",
          alt: "B&B met woonst — photograph 8",
          ratio: 0.66640625,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/b-b-met-woonst-balen-2/09.webp",
          alt: "B&B met woonst — photograph 9",
          ratio: 0.66666666666667,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/b-b-met-woonst-balen-2/10.webp",
          alt: "B&B met woonst — photograph 10",
          ratio: 0.66666666666667,
        },
      ],
    },
  ],
  "wouters-cutting-welding-turnhout": [
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/01.webp",
          alt: "Wouters Cutting & Welding — photograph 1",
          ratio: 0.66658921933086,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/02.webp",
          alt: "Wouters Cutting & Welding — photograph 2",
          ratio: 1.5,
        },
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/03.webp",
          alt: "Wouters Cutting & Welding — photograph 3",
          ratio: 1.4997752808989,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/04.webp",
          alt: "Wouters Cutting & Welding — photograph 4",
          ratio: 1.499584717608,
        },
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/05.webp",
          alt: "Wouters Cutting & Welding — photograph 5",
          ratio: 1.4996371552975,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/06.webp",
          alt: "Wouters Cutting & Welding — photograph 6",
          ratio: 0.66658310353472,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/07.webp",
          alt: "Wouters Cutting & Welding — photograph 7",
          ratio: 1.4998291766314,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/08.webp",
          alt: "Wouters Cutting & Welding — photograph 8",
          ratio: 1.4995766299746,
        },
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/09.webp",
          alt: "Wouters Cutting & Welding — photograph 9",
          ratio: 1.5001702417433,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/10.webp",
          alt: "Wouters Cutting & Welding — photograph 10",
          ratio: 1.5001914975105,
        },
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/11.webp",
          alt: "Wouters Cutting & Welding — photograph 11",
          ratio: 1.5,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/12.webp",
          alt: "Wouters Cutting & Welding — photograph 12",
          ratio: 0.66658970214731,
        },
      ],
    },
    {
      portrait: true,
      images: [
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/13.webp",
          alt: "Wouters Cutting & Welding — photograph 13",
          ratio: 1.500179018976,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/14.webp",
          alt: "Wouters Cutting & Welding — photograph 14",
          ratio: 0.66658927327606,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/15.webp",
          alt: "Wouters Cutting & Welding — photograph 15",
          ratio: 0.66675050301811,
        },
      ],
    },
    {
      portrait: false,
      images: [
        {
          src: "/images/projects/wouters-cutting-welding-turnhout/16.webp",
          alt: "Wouters Cutting & Welding — photograph 16",
          ratio: 0.66666666666667,
        },
      ],
    },
  ],
};
