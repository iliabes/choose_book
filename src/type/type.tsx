

interface popUp{
    img:number,
    title:string,
    description: string
}

export interface bookState {
    id: [string ,number]
    animate:boolean,
    animateBgImage:boolean,
    popUp:popUp
}


export interface IButtonQuest {
    quest:string
}


//----------book 
export interface IBooks  {
    id?:number,
    title?:string,
    autor?: string,
    genre?: string,
    year?: string,
    link?: string,
    description?: string,
    simularBooks?: any
    func?:()=>void
}

export interface ISimularBooks {
    autor: string
    title:string
    year?:string
    link?: string
}



//------------step

export interface ISteps  {
    id:number,
    questions: string,
    ansvers: IAnsvers[]
}


export interface IQuestions{
    animation: (param:()=>void)=> void,
    ansvers: IAnsvers,
    funcDispatch: (num:number)=> void,
    question: string
}


export interface IAnsvers {
    ansverID:[string,number]
    ansver:string
}