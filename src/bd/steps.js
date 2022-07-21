

 const steps = [
    {
        id:0,
        questions:'Фантастика или фентези ?',
        ansvers:[
            {   
                ansverID:['step', 1],
                ansver:   'Фентези'                      
            },
            {   
                ansverID:['step', 2],
                ansver:   'Фантастика'                      
            },
            {   
                ansverID:['step', 3,],
                ansver:   'Ни то не другое'                      
            },
        ]
    },
    {
        id:1,
        questions:'Ты расттроешся если не найдеш Гарри Потера ?',
        ansvers:[
            {   
                ansverID:['book', 0],
                ansver:   'Да'                      
            },
            {   
                ansverID:['step', 4],
                ansver:   'Нет'                      
            }
        ]
    },
    {
        id:2,
        questions:'Киберпанк ?',
        ansvers:[
            {   
                ansverID:['step', 13],
                ansver:   'Да'                      
            },
            {   
                ansverID:['step', 14],
                ansver:   'Нет'                      
            },
            {   
                ansverID:['book', 21],
                ansver:   'Может быть'                      
            }

        ]
    },
    {
        id:3,
        questions:'Что выбереш ?',
        ansvers:[

            {   
                ansverID:['step', 21],
                ansver:   'Я читаю только книги с картинками'                      
            },
            {   
                ansverID:['step', 27],
                ansver:   'Мне больше нравится юмор'                      
            },
            {   
                ansverID:['step', 22],
                ansver:   'Ни то не другое'                      
            },

        ]
    },
    {
        id:4,
        questions:'Фентези жанр для вас новый ?',
        ansvers:[
            {   
                ansverID:['book', 1],
                ansver:   'Да я совсем его не читал'                      
            },
            {   
                ansverID:['step', 5],
                ansver:   'Нет , он мне уже надоел'                      
            },
            {   
                ansverID:['book', 15],
                ansver:   'Волшебник страны оз в счет ?'                      
            }
        ]
    },
    {
        id:5,
        questions:'Нравятся Легенда Артура?',
        ansvers:[
            {   
                ansverID:['step', 6],
                ansver:   'Да'                      
            },
            {   
                ansverID:['step', 7],
                ansver:   'Нет '                      
            },

        ]
    },
    {
        id:6,
        questions:'Какой итебе больше персонажей Легенд Артура тебе больше нравится ?',
        ansvers:[
            {   
                ansverID:['book', 2],
                ansver:   'Артур '                      
            },
            {   
                ansverID:['book', 3],
                ansver:   'Мерлин '                      
            },
            {   
                ansverID:['book', 4],
                ansver:   'Фея Моргана '                      
            },
        ]
    },
    {
        id:7,
        questions:'Нравится что-то более современное ?',
        ansvers:[
            {   
                ansverID:['step', 8],
                ansver:   'Да ,я живу в городе'                      
            },
            {   
                ansverID:['book', 3],
                ansver:   'Нет  '                      
            },
            {   
                ansverID:['step', 9],
                ansver:   'Может быть'                      
            },
        ]
    },
    {
        id:8,
        questions:'Боги или люди под городом?',
        ansvers:[
            {   
                ansverID:['book', 7],
                ansver:   'Новая мифология'                      
            },
            {   
                ansverID:['book', 8],
                ansver:   'Мир под городом '                      
            },

        ]
    },
    {
        id:9,
        questions:'Фанат вестернов ?',
        ansvers:[
            {   
                ansverID:['book', 9],
                ansver:   'Да '                      
            },
            {   
                ansverID:['book', 16],
                ansver:   'Нет слишком пыльно'                      
            },
 
        ]
    },
    {
        id:10,
        questions:'Больше нравятся животные ?',
        ansvers:[
            {   
                ansverID:['step', 10],
                ansver:   'Да я из зеленых'                      
            },
            {   
                ansverID:['step', 11],
                ansver:   'Нет у меня алергия'                      
            },
 
        ]
    },
    {
        id:11,
        questions:'Какое животные нравится больше?',
        ansvers:[
            {   
                ansverID:['book', 10],
                ansver:   'Кролик'                      
            },
            {   
                ansverID:['book', 11],
                ansver:   'Единорог'                      
            },
            {   
                ansverID:['book', 12],
                ansver:   'Дракон'                      
            },
        ]
    },

    {
        id:12,
        questions:'Что насчет альтернативной истории',
        ansvers:[
            {   
                ansverID:['book', 13],
                ansver:   'ДА'                      
            },
            {   
                ansverID:['book', 11],
                ansver:   'Нет'                      
            },

        ]
    },
    {
        id:13,
        questions:'Что интереснее ?',
        ansvers:[
            {   
                ansverID:['book', 17],
                ansver:   'Песчаный нуар'                      
            },
            {   
                ansverID:['book', 18],
                ansver:   'Нео-Викторианство'                      
            },
            {   
                ansverID:['book', 19],
                ansver:   'Кибер Самурай'                      
            },
        ]
    },
    {
        id:14,
        questions:'Готовы к выходу в космос ?',
        ansvers:[
            {   
                ansverID:['step', 15],
                ansver:   'Да'                      
            },
            {   
                ansverID:['step', 17],
                ansver:   'Нет'                      
            },
            {   
                ansverID:['book', 21],
                ansver:   'Возможно'                      
            },
        ]
    },
    {
        id:15,
        questions:'Любитель войн ?',
        ansvers:[
            {   
                ansverID:['step', 16],
                ansver:   'Да'                      
            },
            {   
                ansverID:['book', 32],
                ansver:   'Нет'                      
            },
            {   
                ansverID:['book', 33],
                ansver:   'Возможно'                      
            },
        ]
    },
    {
        id:16,
        questions:'Кто будет воевать ?',
        ansvers:[
            {   
                ansverID:['book', 22],
                ansver:   'Человек против жуков'                      
            },
            {   
                ansverID:['book', 23],
                ansver:   'Человек против далекич жуков'                      
            },
            {   
                ansverID:['book', 24],
                ansver:   'Человек против чужих'                      
            },
            {   
                ansverID:['book', 25],
                ansver:   'Человек против человека'                      
            },
        ]
    },
    {
        id:17,
        questions:'Под землей или на земле ?',
        ansvers:[
            {   
                ansverID:['step', 18],
                ansver:   'Под'                      
            },
            {   
                ansverID:['book', 31],
                ansver:   'Над'                      
            },

        ]
    },
    {
        id:18,
        questions:'Под землей или под водой?',
        ansvers:[
            {   
                ansverID:['book', 26],
                ansver:   'Землей'                      
            },
            {   
                ansverID:['book', 27],
                ansver:   'Водой'                      
            },

        ]
    },
    {
        id:19,
        questions:'Политика , религия или философия ?',
        ansvers:[
            {   
                ansverID:['step', 20],
                ansver:   'Политика'                      
            },
            {   
                ansverID:['books', 30],
                ansver:   'Религия'                      
            },
            {   
                ansverID:['book', 29],
                ansver:   'Философия'                      
            },

        ]
    },
    {
        id:20,
        questions:'Коммунизм или феменизм?',
        ansvers:[
            {   
                ansverID:['book', 29],
                ansver:   'Коммунизм'                      
            },
            {   
                ansverID:['book', 28],
                ansver:   'Феменизм'                      
            },

        ]
    },
    {
        id:21,
        questions:'?',
        ansvers:[
            {   
                ansverID:['book', 34],
                ansver:   'Heroes'                      
            },
            {   
                ansverID:['book', 35],
                ansver:   'Master of dream'                      
            },
            {   
                ansverID:['book', 49],
                ansver:   'Фашисты'                      
            },

        ]
    },
    {
        id:22,
        questions:'Что насчет хоррора ?',
        ansvers:[
            {   
                ansverID:['step', 23],
                ansver:   'Было бы неплохо'                      
            },
            {   
                ansverID:['book', 48],
                ansver:   'Незнаю'                      
            },

        ]
    },
    {
        id:23,
        questions:'Зомби и вампиры или что-то другое?',
        ansvers:[
            {   
                ansverID:['book', 36],
                ansver:   'Зомби '                      
            },
            {   
                ansverID:['book', 37],
                ansver:   'Вампиры'                      
            },
            {   
                ansverID:['book', 38],
                ansver:   'Другое'                      
            },
        ]
    },
    {
        id:24,
        questions:'Роботы или хронофантастика ?',
        ansvers:[
            {   
                ansverID:['step', 25],
                ansver:   'Роботы'                      
            },
            {   
                ansverID:['step', 0],
                ansver:   'Хронофантастика'                      
            },

        ]
    },
    {
        id:25,
        questions:'Какие роботы ?',
        ansvers:[
            {   
                ansverID:['book', 29],
                ansver:   'Роботы которые скрваются'                    
            },
            {   
                ansverID:['book', 41],
                ansver:   'Роботы убийцы'                      
            },

            {   
                ansverID:['book', 39],
                ansver:   'Роботы рабочий'                      
            },
            {   
                ansverID:['book', 40],
                ansver:   'Роботы как  боги'                      
            },

        ]
    },

    {
        id:26,
        questions:'Путешествия во времени для чего ',
        ansvers:[
            {   
                ansverID:['book', 0],
                ansver:   'Для исследований'                    
            },
            {   
                ansverID:['book', 47],
                ansver:   'Для торговли'                      
            },

            {   
                ansverID:['book', 31],
                ansver:   'Средство от депресии'                      
            },


        ]
    },
    {
        id:27,
        questions:'Какого вида юмор интересует ',
        ansvers:[
            {   
                ansverID:['step', 28],
                ansver:   'Черный '                    
            },
            {   
                ansverID:['step', 29],
                ansver:   'Фентези'                      
            },

            {   
                ansverID:['book', 52],
                ansver:   'Классика'                      
            },


        ]
    },
    {
        id:28,
        questions:'Что интереснее ? ',
        ansvers:[
            {   
                ansverID:['book', 44],
                ansver:   'Приключение хиккана '                    
            },
            {   
                ansverID:['book', 51],
                ansver:   'Паралельные миры и много пауков'                      
            },
        ]
    },
    {
        id:29,
        questions:'У отца было три сына?',
        ansvers:[
            {   
                ansverID:['book', 43],
                ansver:   'Первый умный был детина'                    
            },
            {   
                ansverID:['book', 45],
                ansver:   'Второй был и так и сяк'                      
            },

            {   
                ansverID:['book', 50],
                ansver:   'Третий вовсе был дурак'                      
            },


        ]
    },
]


export default steps
