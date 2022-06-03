function Add() {
	var a = document.getElementById("test");
	var b = document.getElementById("test1");
	let d = document.getElementById("display");
	a = parseInt(a.value);
	b = parseInt(b.value);
	d.innerHTML += a + b;
	document.getElementById("plus").disabled = true;
}
function Substract() {
	var a = document.getElementById("test");
	var b = document.getElementById("test1");
	let d = document.getElementById("display");
	a = parseInt(a.value);
	b = parseInt(b.value);
	d.innerHTML += a - b;
	document.getElementById("minus").disabled = true;
}
function Multiply() {
	var a = document.getElementById("test");
	var b = document.getElementById("test1");
	let d = document.getElementById("display");
	a = parseInt(a.value);
	b = parseInt(b.value);
	d.innerHTML += a * b;
	document.getElementById("poputaj").disabled = true;
}

function Divide() {
	var a = document.getElementById("test");
	var b = document.getElementById("test1");
	let d = document.getElementById("display");
	a = parseInt(a.value);
	b = parseInt(b.value);
	d.innerHTML += a / b;
	document.getElementById("podeli").disabled = true;
}
function Refresh() {
	var a = (document.getElementById("test").value = "");
	var b = (document.getElementById("test1").value = "");
	let d = document.getElementById("display");
	console.log(a);
	console.log(b);
	d.innerHTML = "Rezultat je: ";
	document.getElementById("plus").disabled = false;
	document.getElementById("minus").disabled = false;
	document.getElementById("poputaj").disabled = false;
	document.getElementById("podeli").disabled = false;
}
