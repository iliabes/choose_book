export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean,

}

interface popUp{
    img:number,
    title:string,
    description: string
}

export interface bookState {
    id: number
    animate:boolean,
    animateBgImage:boolean,
    popUp:popUp
}


export interface IButtonQuest {
    quest:string
}
