import Photo from "../common/assets/photo.jpg";

export interface mokTypes {
  downloadCount: number;
  fullDesc: string;
  pic: string;
  source: string;
  id: number;
}

const data: mokTypes[] = [
  {
    id: 1,
    pic: Photo,
    fullDesc: "Аватарка Ахьмада, прямой источник, качество 4k",
    source: "Телеграм",
    downloadCount: -1,
  },
  {
    id: 2,
    pic: Photo,
    fullDesc: "Какое то другое описание",
    source: "Инстаграм",
    downloadCount: 11232,
  },
  {
    id: 3,
    pic: Photo,
    fullDesc: "Мало кого волнует что будет тут написано",
    source: "Ватс ап",
    downloadCount: 1120,
  },
  {
    id: 4,
    pic: Photo,
    fullDesc: "Невообразимо важная информация, просто пушка",
    source: "Дискорд",
    downloadCount: 11314,
  },
];

export default data;
