import { AbstractControl } from "@angular/forms";

export const getAdminValues = [
    { navBar:'General',         section:[   {button : 0, team:true,  admin:true, name:'Search For A Song'},
                                            {button : 1, team:true,  admin:true, name:'Upcoming Requests'},
                                            {button : 2, team:true,  admin:true, name:'Singers Team Profile'}]},
    { navBar:'Admin : DJ',      section:[   {button : 3, team:false, admin:true, name:'Reset Password'},
                                            {button : 4, team:false, admin:true, name:'View Request'},
                                            {button : 5, team:false, admin:true, name:'View Teams'}]},
    { navBar:'Admin : Set Up',  section:[   {button : 6, team:false, admin:true, name:'Set Up New Party'},
                                            {button : 7, team:false, admin:true, name:'Update Song List'},
                                            {button : 8, team:false, admin:true, name:'Admend Party Details'},
                                            {button : 9, team:false, admin:true, name:'Add New DJ'}]},
];