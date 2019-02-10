/*global $*/
/*global localStorage*/

$(function(){
    for(var i = 1; i < 50; i++){
        $(".num"+i).css("background-image","url(img/off/"+i+".png)");
    }
    
    for(var i = 1; i < 50; i++){
        $(".set_item_img"+i).css("background-image","url(img/small/"+i+".png)");
    }
    
    set_setting_random();

    $('.random_switch').click(function(){
        var truth_box = make_random_array();
        drow_item(truth_box);
    });
    
    $('.setting_btn').click(function(){
        $('#setting_view').fadeIn(500);
    });
    
    $('#setting_close_btn').click(function(){
        set_setting_random();
        $('#setting_view').fadeOut(500);
    });
    
    $('.save_btn').click(function(){
        save_setting_random();
        $('#setting_view').fadeOut(500);
    });
    
});
function drow_item(truth_box){
    for(var i = 1;i < 50 ;i++){
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
        if(m < item[i]){
            truth_box[i] = true;
        }else{
            truth_box[i] = false;
        }
    }
    return truth_box;
}
    
function get_random(){//あとで変更処理を加える
    var getjson = localStorage.getItem('probability');
    if(getjson){
        var item = JSON.parse(getjson);
    }else{
        var item = [10,0,90,10,0,0,0,0,40,0,30,0,0,0,20,0,70,60,10,20,90,10,10,10,10,0,90,40,20,90,10,0,10,80,0,50,0,40,80,0,80,0,90,50,80,0,0,30,0];
        var setjson = JSON.stringify(item);
        localStorage.setItem('probability', setjson);
    }
    return item;
}

function set_setting_random(){
    var item = get_random();
    for(var i = 1; i < 50; i++){
        $(".set_item_input"+i).val(item[i-1]);
    }
}

function save_setting_random(){
    var item = [49];
    for(var i = 1; i < 50; i++){
        item[i-1] = $(".set_item_input"+i).val();
    }
    var setjson = JSON.stringify(item);
    localStorage.setItem('probability', setjson);
}