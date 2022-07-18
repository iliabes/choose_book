

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
                ansverID:['step', 0],
                ansver:   'Да'                      
            },
            {   
                ansverID:['step', 0],
                ansver:   'Нет'                      
            },
            {   
                ansverID:['step', 0],
                ansver:   'Может быть'                      
            }

        ]
    },
    {
        id:3,
        questions:'Что выбереш ?',
        ansvers:[
            {   
                ansverID:['step', 0],
                ansver:   'Можно и то и другое'                      
            },
            {   
                ansverID:['step', 0],
                ansver:   'Я читаю только книги с картинками'                      
            },
            {   
                ansverID:['step', 0],
                ansver:   'Мне не нравится высе вышеперечисленное'                      
            }
        ]
    },
    {
        id:4,
        questions:'Фентези жанр для вас новый ?',
        ansvers:[
            {   
                ansverID:['step', 0],
                ansver:   'Да я совсем его не читал'                      
            },
            {   
                ansverID:['step', 0],
                ansver:   'Нет , он мне уже надоел'                      
            },
            {   
                ansverID:['book', 1],
                ansver:   'Волшебник страны оз в счет ?'                      
            }
        ]
    }
]


export default steps