function insert(num){
    document.form.textvalue.value=document.form.textvalue.value+num;
}
function equal(){
    var exp=document.form.textvalue.value
    if(exp){
        document.form.textvalue.value=eval(exp);
    }
}
function clean(){
    document.form.textvalue.value="";
}
function back(){
    var exp=document.form.textvalue.value;
    document.form.textvalue.value=exp.substring(0,exp.length-1);
}