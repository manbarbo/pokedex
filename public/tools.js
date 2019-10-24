function pad(input, length, padding, position = "right") { 
    var str = input + "";
    if(position == "right")
        return (length <= str.length) ? str : pad(str+padding, length, padding, position);
    else
        return (length <= str.length) ? str : pad(padding+str, length, padding, position);
}