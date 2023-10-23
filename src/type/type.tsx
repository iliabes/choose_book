

interface popUp{
    img:number,
    title:string,
    description: string
}

export interface bookState {
    id: any
    animate:boolean,
    animateBgImage:boolean,
    popUp:popUp
}


export interface IButtonQuest {
    quest:string
}


//----------book 
export interface IBooks  {
    id:number,
    title:string,
    autor: string,
    genre: string,
    year: string,
    link: string,
    description: string,
    simularBooks: ISimularBooks[]
}

interface ISimularBooks {
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

interface IAnsvers {
    ansverID:[string,number]
    ansver:string
}