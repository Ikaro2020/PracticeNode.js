function route( handle ,pathname, response, postData ) {
    console.log("a punto de rutear una peticion para"+ pathname);
    if (typeof handle[pathname] === "function"){
        handle [pathname](response, postData);
    }
    else{
        console.log("no se encontro manipulador para " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 No encontro");
        response.end();
    }

}

exports.route = route;