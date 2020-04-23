var names = ["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula",
"Laura","Jim"];
for (name in names) {
	if (names[name].charAt(0) == "j" || names[name].charAt(0) == "J") {
		bye(names[name]);
	}
	else{
		hello(names[name]);
	}
}