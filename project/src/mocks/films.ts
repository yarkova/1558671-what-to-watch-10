import { Film } from '../types/films';

export const films: Film[] = [
  {
    id: '1',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backGroundImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    genre: 'фэнтези',
    year: 2018,
    details: {
      director: 'Дэвид Йейтс',
      starring: [
        'Эдди Редмэйн, Джонни Депп, Кэтрин Уотерстон, Элисон Судол, Дэн Фоглер, Джуд Лоу, Эзра Миллер, Зои Кравиц, Каллум Тернер, Клаудия Ким',
      ],
      runTime: 134,
      description:
        'Могущественный тёмный волшебник Геллерт Грин-де-Вальд пойман в Штатах, но не собирается молча сидеть в темнице и устраивает грандиозный побег. Теперь ничто не помешает ему добиться своей цели — установить превосходство волшебников над всеми немагическими существами на планете. ',
      rate: {
        score: 6.7,
        level: 'Good',
        count: 12564,
      },
    },
    player: {
      videolink:
        'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
      poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    },
  },
  {
    id: '2',
    name: 'Bohemian Rhapsody',
    previewImage: 'img/bohemian-rhapsody.jpg',
    backGroundImage: 'img/bohemian-rhapsody.jpg',
    genre: 'биография',
    year: 2018,
    details: {
      director: 'Брайан Сингер',
      starring: [
        'Рами Малек, Люси Бойнтон, Гвилим Ли, Бен Харди, Джозеф Маццелло, Эйдан Гиллен, Аллен Лич, Том Холландер, Майк Майерс, Аарон МакКаскер',
      ],
      runTime: 134,
      description:
        'Чествование группы Queen, их музыки и их выдающегося вокалиста Фредди Меркьюри, который бросил вызов стереотипам и победил условности, чтобы стать одним из самых любимых артистов на планете. Фильм прослеживает головокружительный путь группы к успеху благодаря их культовым песням и революционному звуку, практически распад коллектива',
      rate: {
        score: 8.0,
        level: 'Very good',
        count: 24536,
      },
    },
    player: {
      videolink:
        'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      poster: 'img/bohemian-rhapsody.jpg',
    },
  },
  {
    id: '3',
    name: 'Macbeth',
    previewImage: 'img/macbeth.jpg',
    backGroundImage: 'img/macbeth.jpg',
    genre: 'драма',
    year: 2015,
    details: {
      director: 'Джастин Курзель',
      starring: [
        'Майкл Фассбендер, Марион Котийяр, Пэдди Консидайн, Шон Харрис, Джек Рейнор, Элизабет Дебики, Дэвид Тьюлис, Росс Андерсон, Дэвид Хейман, Морис Роевз',
      ],
      runTime: 113,
      description:
        'Холодные поля Шотландии, военный лагерь, всегда готовый переместиться в другое место. Макбет всегда на войне, его жена, недавно потерявшая ребенка, боится потерять еще и мужа. Чтобы удержать его рядом, она начинает свой проект по устранению конкурентов в борьбе за королевскую корону.',
      rate: {
        score: 7.1,
        level: 'Good',
        count: 1784,
      },
    },
    player: {
      videolink:
        'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      poster: 'img/macbeth.jpg',
    },
  },
  {
    id: '4',
    name: 'Aviator',
    previewImage: 'img/aviator.jpg',
    backGroundImage: 'img/aviator.jpg',
    genre: 'драма',
    year: 2004,
    details: {
      director: 'Мартин Скорсезе',
      starring: [
        'Леонардо ДиКаприо, Кейт Бланшетт, Мэтт Росс, Джон Си Райли, Алан Алда, Кейт Бекинсейл, Алек Болдуин, Иэн Холм, Адам Скотт, Дэнни Хьюстон',
      ],
      runTime: 163,
      description:
        'Получив от отца небольшую фабрику, Говард Хьюз превратил ее в гигантское, фантастически прибыльное предприятие. Став владельцем огромной кинокомпании, он снял самый дорогой для своего времени фильм и покорил сердца прелестнейших голливудских актрис.',
      rate: {
        score: 7.6,
        level: 'Good',
        count: 8753,
      },
    },
    player: {
      videolink:
        'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      poster: 'img/aviator.jpg',
    },
  },
  {
    id: '5',
    name: 'We need to talk about Kevin',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    backGroundImage: 'img/we-need-to-talk-about-kevin.jpg',
    genre: 'триллер',
    year: 2010,
    details: {
      director: 'Линн Рэмси',
      starring: [
        'Тильда Суинтон, Джон Си Райли, Эзра Миллер, Джаспер Ньюэлл, Рок Дер, Эшли Герасимович, Шиван Фэллон, Алекс Манетт, Кеннет Франклин, Лесли Лайлс',
      ],
      runTime: 112,
      description:
        'Отложив в сторону все личные и профессиональные амбиции, Ева посвящает жизнь рождению и воспитанию сына. Однако их отношения с самого начала оказываются крайне сложными. В пятнадцать лет Кевин совершает непоправимое, и Ева мучается сознанием ответственности и собственной вины. Достаточно ли она любила своего сына? Какова доля ее вины в происшедшем?',
      rate: {
        score: 7.2,
        level: 'Good',
        count: 789,
      },
    },
    player: {
      videolink:
        'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      poster: 'img/we-need-to-talk-about-kevin.jpg',
    },
  },
  {
    id: '6',
    name: 'What We Do in the Shadows',
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    backGroundImage: 'img/what-we-do-in-the-shadows.jpg',
    genre: 'комедия',
    year: 2014,
    details: {
      director: 'Джемейн Клемент',
      starring: [
        'Джемейн Клемент, Тайка Вайтити, Джонатан Бруг, Кори Гонсалес-Макуэр, Стью Рутерфорд, Бен Френшам, Джеки ван Бик, Елена Стейко, Джейсон Хойте, Карен О’Лири',
      ],
      runTime: 85,
      description:
        'История жизни Виаго, Дикона и Владислава — трёх соседей и по совместительству бессмертных вампиров, которые всего лишь пытаются выжить в современном мире, где есть арендная плата, фейсконтроль в ночных клубах, губительный солнечный свет и другие неприятности.',
      rate: {
        score: 7.5,
        level: 'Good',
        count: 3456,
      },
    },
    player: {
      videolink:
        'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      poster: 'img/what-we-do-in-the-shadows.jpg',
    },
  },
  {
    id: '7',
    name: 'Revenant',
    previewImage: 'img/revenant.jpg',
    backGroundImage: 'img/revenant.jpg',
    genre: 'приключения',
    year: 2015,
    details: {
      director: 'Алехандро Гонсалес Иньярриту',
      starring: [
        'Леонардо ДиКаприо, Том Харди, Донал Глисон, Уилл Поултер, Форрест Гудлак, Пол Андерсон, Кристоффер Йонер, Джошуа Бёрдж, Дуан Ховард, Мила Нахеко',
      ],
      runTime: 156,
      description:
        'Охотник Хью Гласс серьезно ранен на неизведанных просторах американского Дикого Запада. Товарищ Хью по отряду покорителей новых земель Джон Фицжеральд предательски оставляет его умирать в одиночестве. Теперь у Гласса осталось только одно оружие – его сила воли. Он готов бросить вызов первобытной природе, суровой зиме и враждебным племенам индейцев, только чтобы выжить и отомстить Фицжеральду.',
      rate: {
        score: 7.8,
        level: 'Good',
        count: 5567,
      },
    },
    player: {
      videolink:
        'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      poster: 'img/revenant.jpg',
    },
  },
  {
    id: '8',
    name: 'Johnny English',
    previewImage: 'img/johnny-english.jpg',
    backGroundImage: 'img/johnny-english.jpg',
    genre: 'боевик',
    year: 2003,
    details: {
      director: 'Питер Хауит',
      starring: [
        'Роуэн Эткинсон, Натали Имбрулья, Бен Миллер, Джон Малкович, Тим Пиготт-Смит, Кевин МакНэлли, Оливер Форд Дейвис, Дуглас МакФерран, Таша ди Вашконселуш, Грег Уайз',
      ],
      runTime: 84,
      description:
        'История самого некомпетентного и недалекого Британского дипломата, которого только можно представить, которого ошибочно принимают за самого знаменитого и опасного шпиона Великобритании, Джонни Инглиша. Из-за этой путаницы герой оказывается вовлеченным в смертельную схватку с авторами очередного дьявольского плана.',
      rate: {
        score: 6.7,
        level: 'Good',
        count: 3566,
      },
    },
    player: {
      videolink:
        'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      poster: 'img/johnny-english.jpg',
    },
  },
];
