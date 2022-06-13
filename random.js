function getUser(data) {
 return   new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log(data);
            resolve(['212','333','3455']);
     
        },2000);
    });
    
};

console.log(`vfdbdbbnfhnhng`);



function reposData(name) {
  return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`name: ${name} , ID:1`);
              } ,2000);
    });
       
};


 reposData('vandit').then(tame=>console.log('done',tame)).then( getUser('yele data').then(kuch=>console.log('fiid',kuch) )).catch(err => console.log('error',err));



console.log(`vfdbdbbnfhnhng`);



//.then( result => console.log('fiid',result)).then( result => console.log('fiid',result)).