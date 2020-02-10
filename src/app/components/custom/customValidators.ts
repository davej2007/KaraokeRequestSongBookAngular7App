import { AbstractControl } from "@angular/forms";

export function DJNumberValidator(control: AbstractControl){
    if(control && (control.value !==null || control.value!==undefined)){
        const regex = new RegExp('^[0-9]{7,9}$');
        if(!regex.test(control.value)){
            return { isError:true}
        }
    }
    return null; 
}
export function DJNameValidator(control: AbstractControl){
    if(control && (control.value !==null || control.value!==undefined)){
        const regex = new RegExp("^[A-Za-z ']{1,100}$");
        if(!regex.test(control.value)){
            return { isError:true}
        }
    }
    return null; 
}
export function passwordValidator(control: AbstractControl){
    if(control && (control.value !==null || control.value!==undefined)){
        const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$");
        if(!regex.test(control.value)){
            return { isError:true}
        }
    }
    return null; 
}
export function confirmPasswordValidator(control: AbstractControl){
    if(control && (control.value !==null || control.value!==undefined)){
        const cpw = control.value;
        const passControl = control.root.get('password');
        if(passControl && (passControl.value !==null || passControl.value!==undefined)){
            const pass=passControl.value;
            if(cpw !== pass){
                return { isError:true} 
            }
        }
    }
    return null; 
}
