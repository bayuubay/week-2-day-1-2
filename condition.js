class menghitungluas{
    constructor(){
        console.log("otomatis terpanggil")
    }
    segitiga(s,t){
        let luas=0.5*s*t;
        return luas;
    }
    persegi(p,l){
        let luas=p*l;
        return luas;
    }
    
}
let hitungluas= new menghitungluas

console.log(hitungluas.segitiga(5,10))
console.log(hitungluas.persegi(10,10))
