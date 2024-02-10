import {ISteps} from  './../type/type'



const steps:ISteps[] = [
    {
        id:0,
        questions:'Фантастика или фентези ?',
        ansvers:[
            {   
                // ansverID:['step', 1],
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
        questions:'Ты расcтроешся если не найдеш Гарри Потера ?',
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
                ansverID:['step', 18],
                ansver:   'Как насчет ужасов?'                      
            },
            {   
                ansverID:['step', 17],
                ansver:   'Может быть нехудожественная литература?'                      
            },
            {   
                ansverID:['book', 26],
                ansver:   'Мне не нравится все вышеперечисленное'                      
            }
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
        questions:'Какой из персонажей Легенд Артура тебе больше нравится ?',
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
                ansver:   'Нет слишком пыльно  '                      
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
        questions:'Какое животное нравится больше?',
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
                ansverID:['book', 20],
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
        questions:'Любитель космических войн ?',
        ansvers:[
            {   
                ansverID:['step', 16],
                ansver:   'Да'                      
            },
            {   
                ansverID:['book', 6],
                ansver:   'Нет'                      
            },
            {   
                ansverID:['book', 20],
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
        questions:'Что интереснее развитие общества, технологии или музыки ?',
        ansvers:[
            {   
                ansverID:['book', 27],
                ansver:   'Общество'                      
            },
            {   
                ansverID:['book', 29],
                ansver:   'Технология'                      
            },
            {   
                ansverID:['book', 28],
                ansver:   'Музыка'                      
            },
        ]
    },
    {
        id:18,
        questions:'Какие ужасы вам боольше нравятся?',
        ansvers:[
            {   
                ansverID:['step', 19],
                ansver:   'Новые'                      
            },
            {   
                ansverID:['step', 20],
                ansver:   'Старые'                      
            },
        ]
    },
    {
        id:19,
        questions:'Что больше пугает',
        ansvers:[
            {   
                ansverID:['book', 34],
                ansver:   'Сумашедший химик-цветовод'                      
            },
            {   
                ansverID:['book', 32],
                ansver:   'Замкнутое пространство'                      
            },
            {   
                ansverID:['book', 30],
                ansver:   'Големы из людей'                      
            },
        ]
    },
    {
        id:20,
        questions:'Что интереснее?',
        ansvers:[
            {   
                ansverID:['book', 33],
                ansver:   'Погоня в опустевшем городе'                      
            },
            {   
                ansverID:['book', 31],
                ansver:   'Пытки заключенного перед казнью'                      
            },
        ]
    },
]


export default steps