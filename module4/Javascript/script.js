var names = ["suman","junaid","javaid","ahsan","Noor","Asad","John","Maheen",
"jaber","Jabeen","Faze"];
for (name in names) {
	if (names[name].charAt(0) == "j" || names[name].charAt(0) == "J") {
		bye(names[name]);
	}
	else{
		hello(names[name]);
	}
}