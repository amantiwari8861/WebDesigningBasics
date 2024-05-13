// let arr=[10,20,30,40];

// let [a,,b]=arr;//array destructuring

// console.log(a);
// console.log(b);

let user={
    "uname":"Aman",
    "mobileno":9891062743,
    skills:["MEAN","MERN","JAVA full Stack","etc"],
    address:{
        city:"delhi",
        pincode:110096
    },
    getSkills:function abc(){
        console.log(`the skills are ${skills}`);
    }
};
let {uname,skills,getSkills}=user;
console.log(uname);
console.log(skills);
getSkills();