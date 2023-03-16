class Input {
    constructor(parentId, type) {
        this.parentId = parentId;
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentId);

        const myInput = myApp.innerHTML + "<label>Ingreso de datos: </label>" + "<input type= " + this.type + " ><br>"; //.innerHTML +  hace que no se sobreescriban los elementos

        myApp.innerHTML = myInput;
    }
}

class Button{
    constructor(parentId, text) {
        this.parentId = parentId;
        this.text = text;
    }
    render(){
        let myApp = document.getElementById(this.parentId);

        const myButton = myApp.innerHTML + "<button>" + this.text + "</button>";

        myApp.innerHTML = myButton;
    }


}
let arrayButtons = ["Login","Signup","Reset","Cancel","Send"];

function RenderButtons(text){
    let myButton = new Button("array", text );
    myButton.render();
}
arrayButtons.forEach(element => RenderButtons(element));

 //<<ejercicio>>

var arrInputs = ["input", "input", "output", "input","output"];

function filtrarInput(elemento){
    return elemento = "input";
}
var inputFiltrados = arrInputs.filter(filtrarInput);

function RenderInputs(text){
    let myInput = new Input("inputsArr", text );
    myInput.render();
}
inputFiltrados.forEach(element => RenderInputs(element));
///////////////////////////////////////////////////////////



const unInput = new Input("inputs", "email");
unInput.render();

const unInputPass = new Input("inputs", "password");
unInputPass.render();

const unInputCheck = new Input("inputs", "checkbox");
unInputCheck.render();



  