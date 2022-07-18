

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
