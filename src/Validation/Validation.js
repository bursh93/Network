






export const required=value=> {
    if(value)  return undefined;
    return "нужно ввести хоть один символ ";
}

export const maxLengthCreator11=(maxLenght)=>(value)=> {
    if(value.length>maxLenght)  return  `Max length is ${maxLenght} symbols`;
    return undefined;
}
export const maxLengthCreator55=(maxLenght)=>(value)=> {
    if(value.length>maxLenght)  return  `Max length is ${maxLenght} symbols`;
    return undefined;
}
































