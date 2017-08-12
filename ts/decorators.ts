export const HasMusic = (config) => {
    return (target) => {
        console.log(target);
        target.prototype.play = () => {
            console.log(config.vehicle + 'O! La! La!');
        }
    };
}

export class X {}

