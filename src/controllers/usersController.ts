interface IUser {
    name: string;
    email: string;
    password: string;
    id: number;
}

let data: IUser[] = [
    {
        email: "skasaks@gmail.com",
        name: "Luan",
        password: "323213",
        id: 1,
    },
    {
        email: "talala@gmail.com",
        name: "Vitor",
        password: "333333",
        id: 2,
    }

];

export const getAllUsers = ((req: any, res: { json: (arg0: IUser[]) => void }) => {
    res.json(data);
})

export const getUserById = ((req: { params: { userId : string } }, res : { json:  (arg0: IUser | string) => void}) => {
    const id = req.params.userId;
    
    const userSearch = data.filter((user) => user.id === Number(id));   

    if(userSearch.length > 0) {
        res.json(userSearch[0]);
    } else {
        res.json("This user does not exist");
    }
})

