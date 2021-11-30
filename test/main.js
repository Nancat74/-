// оператор if
if(10 =='10'){
   // console.log('Hello world');
}
else{
    //console.log('no');
}

/*
>
<
>=
<=
== сравнение чисел (просто равно)
=== строгое равно (сравнивается по типу данных)
!= не равно
!== строгое не равно
строки сравниваются по юникоду и кол-ву букв
при сравнении строки(числовой) с числом, строка преобразуется в число
*/

//switch case

const color = 'purple';

switch(color){
case 'green':
    console.log('Этот цвет зеленый');
    break;
case 'red':
    console.log('Этот цвет красный');
    break;
case 'black':
    console.log('Этот цвет черный');
    break;
case 'orange':
    console.log('Этот цвет оранжевый');
    break;
default:
    console.log('Такого цвета нет');
}