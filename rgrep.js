function rGrep(str, obj) {
	//console.log('Trying', obj)
	if (arguments.length == 2) {
		var set = new Set()
		var prefix = ''
    }
	else if (arguments.length == 4)
    {
		var set = arguments[2]
		var prefix = arguments[3]
    }
	else
		throw new Error('watch your arguments dude')
	//console.log(obj)
	for (var prop of Object.getOwnPropertyNames(obj)) {
		//debugger
		var new_prefix = prefix + '.' + prop
		try {
			//debugger
			var child = (function(){return obj[prop]}).apply(obj)
			var gline = new_prefix //+ '=' + child
		} catch(e) {continue}
		if (gline.match(str))
			console.log(gline);
		if (!(child === null || child === undefined) && !set.has(child)) {
			set.add(child)
			rGrep(str, child, set, new_prefix)
        }
    }
}
