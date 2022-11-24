export interface Reward {
    idUserSender: number,
    idUserRewarded: number,
    xpPoints: number,
    date: string,
    description: string,
}

export interface ExtendedReward extends Reward{
    name: string;
    first_surname: string;
}