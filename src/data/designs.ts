import img210702_1 from "../assets/images/web-design/21.07.02_1.jpg";
import img210702_2 from "../assets/images/web-design/21.07.02_2.jpg";
import img210707 from "../assets/images/web-design/21.07.07.jpg";
import img210731 from "../assets/images/web-design/21.07.31.jpg";
import img211203 from "../assets/images/web-design/21.12.03.jpg";
import img211213 from "../assets/images/web-design/21.12.13.jpg";
import img220208 from "../assets/images/web-design/22.02.08.jpg";
import img220224 from "../assets/images/web-design/22.02.24.jpg";
import img220318_1 from "../assets/images/web-design/22.03.18_1.jpg";
import img220318_2 from "../assets/images/web-design/22.03.18_2.jpg";
import img220318_3 from "../assets/images/web-design/22.03.18_3.jpg";
import img220329 from "../assets/images/web-design/22.03.29.jpg";
import img220406 from "../assets/images/web-design/22.04.06.jpg";
import img220425 from "../assets/images/web-design/22.04.25.jpg";
import img220427 from "../assets/images/web-design/22.04.27.jpg";
import img220503 from "../assets/images/web-design/22.05.03.jpg";
import img220531 from "../assets/images/web-design/22.05.31.jpg";
import img220705 from "../assets/images/web-design/22.07.05.jpg";
import img220805_1 from "../assets/images/web-design/22.08.05_1.jpg";
import img220805_2 from "../assets/images/web-design/22.08.05_2.jpg";
import img220830 from "../assets/images/web-design/22.08.30.jpg";
import img220926 from "../assets/images/web-design/22.09.26.jpg";
import img221018 from "../assets/images/web-design/22.10.18.jpg";
import img221128 from "../assets/images/web-design/22.11.28.jpg";
import img221208 from "../assets/images/web-design/22.12.08.jpg";
import img220929 from "../assets/images/web-design/22.09.29.jpg";
import img221011_1 from "../assets/images/web-design/22.10.11.jpg";
import img221011_2 from "../assets/images/web-design/22.10.11_2.jpg";
import img221012_1 from "../assets/images/web-design/22.10.12.jpg";
import img221012_2 from "../assets/images/web-design/22.10.12_2.jpg";
import img221012_3 from "../assets/images/web-design/22.10.12_3.jpg";
import img221012_4 from "../assets/images/web-design/22.10.12_4.jpg";
import img221012_5 from "../assets/images/web-design/22.10.12_5.jpg";
import img221012_6 from "../assets/images/web-design/22.10.12_6.jpg";
import img221024_1 from "../assets/images/web-design/22.10.24.jpg";
import img221024_2 from "../assets/images/web-design/22.10.24_2.jpg";
import img221026 from "../assets/images/web-design/22.10.26.jpg";

export interface Design {
  id: string;
  title: string;
  period: string;
  category: string;
  gallery: string[];
}

const designs: Design[] = [
  {
    id: "20210702",
    title: "카페 웹사이트",
    period: "2021.07.02",
    category: "personal",
    gallery: [img210702_1, img210702_2],
  },
  {
    id: "20210707",
    title: "부산디자인진흥원 리디자인",
    period: "2021.07.07",
    category: "personal",
    gallery: [img210707],
  },
  {
    id: "20210731",
    title: "클라이밍 웹사이트",
    period: "2021.07.31",
    category: "personal",
    gallery: [img210731],
  },
  {
    id: "20211203",
    title: "기린차 상세페이지 디자인",
    period: "2021.12.03",
    category: "company",
    gallery: [img211203],
  },
  {
    id: "20211213",
    title: "Heritage Airo 실링팬 상세페이지",
    period: "2021.12.13",
    category: "company",
    gallery: [img211213],
  },
  {
    id: "20220208",
    title: "무타공마켓 팬트리 수납함 상세페이지",
    period: "2022.02.08",
    category: "company",
    gallery: [img220208],
  },
  {
    id: "20220224",
    title: "자연사 민물즙 상세페이지",
    period: "2022.02.24",
    category: "company",
    gallery: [img220224],
  },
  {
    id: "20220318",
    title: "성원아이북랜드 북친구 대여서비스 시리즈",
    period: "2022.03.18",
    category: "company",
    gallery: [img220318_1, img220318_2, img220318_3],
  },
  {
    id: "20220329",
    title: "Geekstar 넥밴드 선풍기 상세페이지",
    period: "2022.03.29",
    category: "company",
    gallery: [img220329],
  },
  {
    id: "20220406",
    title: "스튜디오앤홈 소개 페이지",
    period: "2022.04.06",
    category: "company",
    gallery: [img220406],
  },
  {
    id: "20220425",
    title: "Hustle 헬스 스트랩 상세페이지",
    period: "2022.04.25",
    category: "company",
    gallery: [img220425],
  },
  {
    id: "20220427",
    title: "Fitis 압박스타킹 상세페이지",
    period: "2022.04.27",
    category: "company",
    gallery: [img220427],
  },

  {
    id: "20220503",
    title: "Sunsusanso 산소캔 상세페이지",
    period: "2022.04.27",
    category: "company",
    gallery: [img220503],
  },
  {
    id: "20220531",
    title: "Storever TPU 인덱스도마 상세페이지",
    period: "2022.05.31",
    category: "company",
    gallery: [img220531],
  },
  {
    id: "20220705",
    title: "돌고돌아가게 소개 페이지",
    period: "2022.07.05",
    category: "company",
    gallery: [img220705],
  },
  {
    id: "20220805",
    title: "Vamons 매트리스 상세페이지",
    period: "2022.08.05",
    category: "company",
    gallery: [img220805_1, img220805_2],
  },
  {
    id: "20220830",
    title: "그릴 클리너 상세페이지",
    period: "2022.08.30",
    category: "company",
    gallery: [img220830],
  },
  {
    id: "20220926",
    title: "업브레인 책상 발받침대 상세페이지",
    period: "2022.09.26",
    category: "company",
    gallery: [img220926],
  },
  {
    id: "20221018",
    title: "업브레인 바루 경추베개 상세페이지",
    period: "2022.10.18",
    category: "company",
    gallery: [img221018],
  },
  {
    id: "202210",
    title: "CJ ONE ONESTER 상세페이지 시리즈",
    period: "2022.09 - 2022.10",
    category: "company",
    gallery: [
      img220929,
      img221011_1,
      img221011_2,
      img221012_1,
      img221012_2,
      img221012_3,
      img221012_4,
      img221012_5,
      img221012_6,
      img221024_1,
      img221024_2,
      img221026,
    ],
  },
  {
    id: "20221128",
    title: "스튜디오앤홈 크몽 소개 페이지",
    period: "2022.11.28",
    category: "company",
    gallery: [img221128],
  },
  {
    id: "20221208",
    title: "힙합 불독 에어팟 케이스 상세페이지",
    period: "2022.12.08",
    category: "company",
    gallery: [img221208],
  },
];

export default designs;
