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

 //=> {});

let arrInputs = ["nombre", "apellido", "fecNac", "email"];


const unInput = new Input("inputs", "email");
unInput.render();

const unInputPass = new Input("inputs", "password");
unInputPass.render();

const unInputCheck = new Input("inputs", "checkbox");
unInputCheck.render();


///////////////chat GPT//////////////////
// const data = ['input1', 'input2', 'input3'];
// const elemento = data.filter(item => item.startsWith('input'));
// const elemento2 = data.filter(item => item.startsWith('input')).map(item => {
//     const input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     input.setAttribute('value', item);
//     return input;
//   });
  