let a,b,c,d,i,j,n,num, result,res,sum, str, text, text1, text2, myname, age, arr, arr1, arr2, obj, week, day, lang, min;

console.log("1 пример: ");
str = 'abcde';
console.log(str[0],str[4],str[1]);

console.log("2 пример: ");
//Арифметические операции.
num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);

console.log("3 пример: ");
a=10;
b=2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log("4 пример: ");
c=15;
d=2;
result = c+d;
console.log(result);

console.log("5 пример: ");
a=10;
b=2;
c=5;
console.log(a+b+c);

console.log("6 пример: ");
a=17;
b=10;
c=a-b;
d=7;
result=c+d;
console.log(result);

console.log("7 пример: ");
text = "Привет мир!";
console.log(text);

console.log("8 пример: ");
text1 = "Привет ";
text2= "мир!";
console.log(text1+text2);

console.log("9 пример: ");
myname = "Никита";
console.log("Привет, "+myname);

console.log("10 пример: ");
myname=prompt("Введите Ваше имя: ");
console.log("Ваше имя "+myname);

console.log("11 пример: ");
age=21;
console.log("Мне "+age+" год!");

console.log("12 пример: ");
num=prompt("Введите любое число: ");
console.log(num*num);

console.log("13 пример: ");
num = '12345';
console.log(num[0]*num[1]*num[2]*num[3]*num[4]);

console.log("14 пример: ");
arr = ["Привет, ","мир","!"];
console.log(arr[0]+arr[1]+arr[2]);

console.log("15 пример: ");
arr = ["Привет ", "мир", "!"];
text = arr[0]+arr[1]+arr[2];
console.log(text);

console.log("16 пример: ");
arr = ["Привет","мир","!"];
arr[0] = "Пока";
console.log(arr);

console.log("17 пример: ");
obj = {"Мартин":"500", "Владимир":"700", "Николай":"300"};
console.log("Зарплата Мартина "+obj["Мартин"]+" руб. Зарплата Николая "+obj["Николай"]);

console.log("18 пример: ");
arr1 = ["1","2", "3", "4","5"];
arr2 = [];
arr2[0] = 1;
arr2[1] = 2;
arr2[2] = 3;
arr2[3] = 4;
arr2[4] = 5;
console.log(arr1,arr2);

console.log("19 пример: ");
arr = {
    "ru":["голубой", "красный", "зелёный"],
    "en":["blue", "red", "green"],
};
console.log(arr["ru"][0]);

console.log("20 пример: ");
arr = ["a","b","c"];
console.log(arr);
console.log(arr[0],arr[1],arr[2]);

console.log("21 пример: ");
arr = ["a", "b", "c", "d"];
console.log("'"+arr[0]+"+"+arr[1]+", "+arr[2]+"+"+arr[3]+"'");

console.log("22 пример: ");
arr = [2,5,3,9];
result=arr[0]*arr[1]+arr[2]*arr[3];
console.log(result);

console.log("23 пример: ");
obj = {a: 1, b: 2, c: 3};
console.log(obj["c"]);
console.log(obj.c);

console.log("24 пример: ");
week = {
    1:"Понедельник",
    2:"Вторник",
    3:"Среда",
    4:"Четверг",
    5:"Пятница",
    6:"Суббота",
    7:"Воскресенье"
};
console.log(week[1]);
day = 3
console.log(week[day]);

console.log("25 пример: ");
arr = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr[1][0]);

console.log("26 пример: ");
obj = {js:["jQuery", "Angular"], php: "hello", css: "world"};
console.log(obj["js"][0]);

console.log("27 пример: ");
obj = {
    "ru":["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],
    "en":["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
}
console.log(obj["ru"][0], obj["en"][2]);

console.log("28 пример: ");
lang = "ru";
day = 3;
console.log(obj[lang][day-1]);

console.log("29 пример: ");
a = 10;
if (a==10){
    console.log("Верно");
}else{
    console.log("Неверно");
}

console.log("30 пример: ");
min = 30;

if(min >= 0 && min <= 15){
    console.log("Первая четверть");
}
else if(min> 15 && min <= 30){
    console.log("Вторая четверть");
}
else if(min> 30 && min <= 45){
    console.log("Третья четверть");
}
else if(min> 45 && min <= 59){
    console.log("Четвертая четверть");
}

console.log("31 пример: ");
lang="en";
if(lang == "ru"){
    arr = obj["ru"];
}
else if (lang == "en"){
    arr = obj["en"];
}
console.log(arr);

switch(lang){
    case "ru": 
        arr = obj["ru"];
        break;
    case "en": 
        arr = obj["en"];
        break;
}
console.log(arr);

arr["ru"] = obj[lang];
console.log(arr);

console.log("32 пример: ");
num = "123502";
a = Number(num[0])+Number(num[1])+Number(num[2]);
b = Number(num[3])+Number(num[4])+Number(num[5]);
if(a == b){
    console.log("Да");
}
else{
    console.log("Нет");
}

console.log("33 пример: ");
for(let i = 1;i<=50;i++){
    console.log(i);
}

console.log("34 пример: ");
arr = [1,2,3,4,5];
for(let i = 0;i<arr.length;i++){
    console.log(i+" - "+arr[i]);
}

console.log("34 пример: ");
arr = [2, 3, 4, 5];
result=1;
for(let i = 0;i<arr.length;i++){
    result*=arr[i];
}
console.log(result);

console.log("35 пример: ");
obj = { 
        "Минск":"Беларусь",
        "Москва":"Россия", 
        "Киев":"Украина"
};
for(g in obj){
    console.log(g+" - это "+obj[g]+".");
}

console.log("36 пример: ");
i=1;
while(i<=100){
    console.log(i);
    i++;
}

console.log("37 пример: ");
i=11;
while(i<=33){
    console.log(i);
    i++;
}

console.log("38 пример: ");

for(i=0;i<=100;i++){
    if((i%2)==0){
        console.log(i);
    }
    
}

console.log("39 пример: ");

result=0;
for(i=1;i<=100;i++){
    result+=i;
}
console.log(result);

console.log("40 пример: ");

obj = {
    "Коля": '200', 
    "Вася": '300', 
    "Петя": '400'
}
for(k in obj){
    console.log(k+" - зарплата "+obj[k]+" долларов");
}

console.log("41 пример: ");
arr = [10, 20, 30, 50, 235, 3000];
for(let i=0;i<arr.length;i++){
    str = arr[i].toString()[0];
    switch(str){
        case "1": console.log(arr[i]);
        break;
        case "2": console.log(arr[i]);
        break;
        case "5": console.log(arr[i]);
        break;
    }
}

console.log("42 пример: ");
n=1000;
result=0;
num=0;
do{
    n=n/2;
    result=n;
    num++;
}while(result>=50);
console.log(result);
console.log(num);


console.log("43 пример: ");
function factn(n){
    if (n == 1){
        return n;
    }else{
        return n*factn(n-1);
    }
}
console.log(factn(4));

console.log("44 пример: ");
num = 245;
console.log(Math.sqrt(num));

console.log("45 пример: ");
arr1 = ['a', 'b', 'c'];
arr2 = [1, 2, 3];
a = arr1.concat(arr2);
console.log(a);

console.log("Добавление в массив: ");
arr = ["a","b","c"];
arr.push(1,2,3);
console.log(arr);

console.log("Изменение массива");
arr = [1, 2, 3, 4, 5];
arr.splice(1,2);
console.log(arr);

console.log("Сортировка массива");
arr = [3, 4, 1, 2, 7];
arr.sort();
console.log(arr);

console.log("Ключи объекта");
obj = {js:'test', jq: 'hello', css: 'world'};
console.log(Object.keys(obj));

console.log("Добавление в массив");
arr = [1,2,3];
arr.push(4,5,6);
console.log(arr);

arr = [1,2,3];
arr.unshift(4,5,6);
console.log(arr);

console.log("Удаление из массива");
arr = ['js', 'css', 'jq'];
console.log(arr.shift());

arr = ['js', 'css', 'jq'];
console.log(arr.pop());

console.log("46 пример: ");
function numberOperations(a,b,c){
    return (a - b)/c;
}
a = numberOperations(16,2,5);
console.log(a);

console.log("47 пример: ");
function daysOfWeek(n){
    week = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
    if(n >= 1 && n <= 7){
        return week[n-1];
    }
}
console.log(daysOfWeek(3));


res = "";
i=0;
j=0;
for(i=1;i<10;i++){
    str = "";
    for(j=0;j<i;j++){
        str += i;
    }
    document.write(str+"<br>");
}

console.log("48 пример: ");
sum = 0;
arr = [[1, 2, 3], [4, 5], [6]];
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        sum+=arr[i][j];
    }
}
console.log(sum);

console.log("Сумма трехмерного многомерного массива");
arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
sum=0;

for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        for(k=0;k<arr[i][j].length;k++){
            sum += arr[i][j][k];
        }
    }
}
console.log(sum);

console.log("49 пример: ");
function isNumberInRange(num){
    if(num > 0 && num < 10){
        return true;
    }
    else{
        return false;
    }
}
console.log(isNumberInRange(9));

console.log("50 пример: ");
arr1 = [3,11,55,-5,4,2,3,15,9,5];
arr2 = [];
for(i=0;i<arr1.length;i++){
    if(isNumberInRange(arr1[i]))
        arr2.push(arr1[i]);
}
console.log(arr2);

console.log("51 пример: ");
num=0;
res=0;
function getDigitsSum(digit){
    digit = String(digit);
    num = digit.split("");
    for(i=0;i<num.length;i++){
        res += Number(num[i]);
    }
    return res;
}
console.log(getDigitsSum(39145));

console.log("52 пример: ");
function isEven(num){
    if((num % 2) == 0){
        return num;
    }
}
console.log(isEven(2));

arr1 = [1,2,5,9,4,7,45,34,22];
arr2 = [];
for(i=0;i<arr1.length;i++){
    if(isEven(arr1[i])){
        arr2.push(arr1[i]);
    }
}
console.log(arr2);
