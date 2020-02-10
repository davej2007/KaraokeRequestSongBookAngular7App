import { AbstractControl } from "@angular/forms";

export function toCapitalFirst(str:String){
    str = str.toLowerCase();
    let words = str.split(' ');
    let capWord:String = '';
    words.forEach((word)=>{
        capWord += word.charAt(0).toUpperCase() + word.slice(1) + ' '
    })
    return capWord.trim()
}
export function randomChar(req:String){
    let all = 'AaBbCcDdEeFfGgHh0Ii1Jj2Kk3Ll4Mm5Nn6Oo7Pp8Qq9RrSsTtUuVvWwXxYyZz';
    let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    if (req == 'all'){
        return all[Math.floor(Math.random() * 62)];
    } else if (req=='capital'){
        return capitals[Math.floor(Math.random() * 26)];
    } else if(req == 'lower'){
        return lower[Math.floor(Math.random() * 26)];
    } else {
        return numbers[Math.floor(Math.random() * 10)];
    }
}
export function findWhichRota(rota:any,date:number){
    let week =-1;
    rota.forEach((r:any, i:number) => {
        if(r.startDate<=date && (r.finishDate == null || r.finishDate>date) ) week = i;;
    });
    return week;
}
