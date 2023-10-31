function reset(elements){
    for(i=0; i<elements.length; i++){
        elements[i].value = "";
    }
}

function resetSelections(units, empty){
    for(i=0; i<units.length; i++){
        if(!empty[i]){
            units[i][0].selected = 'selected'; 
        }
    }
}

function areNums(elements){
    for(i=0; i<elements.length; i++){
        if(isNaN(elements[i].value)){
            return false;
        }
    }
    return true;
}

function areEmpty(elements){
    let empty = [];
    for(i=0; i<elements.length; i++){
        if(isEmpty(element[i])){
            empty[i] = true;
        } else{
            empty[i] = false;
        }
    }
    return empty;
}

function isEmpty(x){
    if(x.value == ""){
        return true;
    }
    return false;
};

function validBlanks(count){
    if(count <= 0){
        alert("All values given. Cannot be solved.");
        return false;
    }
    else if (count >= 2){
        alert("Not enough values given. Cannot be solved.");
        return false;
    }
    return true;
};

function check_v_units(v_units){
    switch(v_units.value){
        case "mps":
            return(1);
        case "mmps":
            return(0.001);
        case "kmps":
            return(1000);
        default:
            alert("Error in velocity units");
            return(0);
    }
};

function check_a_units(a_units){
    switch(a_units.value){
        case "mps":
            return(1);
        default:
            alert("Error in acceleration units");
            return(0);
    }
};

function check_t_units(t_units){
    switch(t_units.value){
        case "sec":
            return(1);
        default:
            alert("Error in time units");
            return(0);
    }
};

function check_x_units(x_units){
    switch(x_units.value){
        case "m":
            return(1);
        default:
            alert("Error in distance units.");
            return(0);
    }
};

function handle_units(x, x_mult, ignore){
    for(i=0; i<x.length; i++){
        if(i != ignore){
            x[i].value = x[i].value * x_mult[i];
        }
    }
    return(x);
}
