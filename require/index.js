const print = function(no_stars, msg){
    console.log('*'.repeat(no_stars));
    console.log({msg});
    console.log('*'.repeat(no_stars));
}

if( require.main == module){
    print(process.argv[2], process.argv[3])
}else{
    exports.print =  print
}