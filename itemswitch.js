/*global $*/
$(function(){
    for(var i = 1; i < 50; i++){
        $(".num"+i).css("background-image","url(img/off/"+i+".png)");
    }

    $('.random_switch').click(function(){
        var truth_box = make_random_array();
        drow_item(truth_box);
        console.log("This is still in development.");
    })
    
    
});
function drow_item(truth_box){
    for(var i = 1;i < 50 ;i++){
        console.log(truth_box[i]);
        if(truth_box[i-1]){
            $(".num"+i).css("background-image","url(img/on/"+i+".png)");
        }else{
            $(".num"+i).css("background-image","url(img/off/"+i+".png)");
        }
    }
}

function make_random_array(){
    var item = get_random();
    var truth_box = [49];
    for(var i = 0; i < 49; i++){
        var m = Math.random() * 100;
        console.log(m,item[i],i,m < item[i]);
        if(m < item[i]){
            truth_box[i] = true;
        }else{
            truth_box[i] = false;
        }
    }
    return truth_box;
}
    
function get_random(){//あとで変更処理を加える
    var item = [49];
    var probability = [10,0,90,10,0,0,0,0,40,0,30,0,0,0,20,0,70,60,10,20,90,10,10,10,10,0,90,40,20,90,10,0,10,80,0,50,0,40,80,0,80,0,90,50,80,0,0,30,0];
    item = probability;
    return item;
}

