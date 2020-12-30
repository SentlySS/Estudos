//Exercise level 3

//1
let frase2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(frase2.length);

//2
let matches = 'You cannot end a sentence with because because because is a conjunction';
let pattern = /because/gi
console.log(matches.match(pattern));

//3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace(/[&\/\\#,+()$~%.;@:*<>{}]/g,''));

const sentence2 = sentence.replace(/[&\/\\#,+()$~%.;@:*<>{}]/g,'');
let pattern2 = /\w+/g;
console.log(sentence2.match(pattern2));


//4

const quote = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let month = quote.substring(9,13);
month = parseInt(month);
let annualBonus = quote.substring(42,47);
annualBonus = parseInt(annualBonus);
let coursesMonth = quote.substring(67,72);
coursesMonth = parseInt(coursesMonth);
let totalAnnual = (month*12) + annualBonus + (coursesMonth*12);
console.log(totalAnnual);