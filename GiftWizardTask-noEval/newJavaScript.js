/**
 * Created by yehuda on 7/18/2017.
 */
function add()
{
    //get the last digit:
    var newNum = $("#digits button").length;
    newNum++; //increase new num by one
    //Adding new button:
    if(newNum<10)
    {
        var btn = document.createElement("BUTTON");

        btn.className ="button";
        btn.id =+newNum;
        btn.innerHTML =newNum;
        btn.setAttribute("onclick","writeDigit(this)");

        var foo = document.getElementById("digits");
        //Append the element in page:
        foo.appendChild(btn);
    }
    else
    {
        alert("Sorry, cant add more then 9 digits!")
    }

}

function writeDigit(num)
{
    var textField = document.getElementById("textField");
    textField.innerHTML += num.id;
}
function writeOperator(operator)
{
    //Check if allowed to add operator:
    var textField = document.getElementById("textField");
    var data = textField.value;
    var lastDigit = data.charAt(data.length-1);
    if(lastDigit=="")
    {
        alert("Please start with a digit.")
    }
    else
    {
        if(lastDigit === "+" || lastDigit === "-") //lastDigit = operator, not allowed to add operator:
        {
            alert ("Cant add a sequence of operators, please insert a number!");
        }
        else //lastDigit = Digit, allowed to add operator:
        {
            textField.innerHTML += operator.id;
        }
    }
}

function deleteDigit()
{
    var textField = document.getElementById("textField");
    var data = textField.value;
    if(data.length==0)
    {
        alert("No elements to delete!")
    }
    else
    {
        data = data.substring(0, data.length - 1);
        textField.innerHTML = data;
    }
}

function calculate()
{
    var textField = document.getElementById("textField");
    var data = textField.value;
    var lastDigit = data.charAt(data.length-1);
    if(data === "")
    {
        alert("Please type a calculation")
    }
    else if(lastDigit === "+" || lastDigit === "-")
    {
        alert("Calculation must end with a number.")
    }
    else if(data.includes("="))
    {
        alert("Cant calculate more them one equals sign.")
    }
    else
    {
        textField.innerHTML += "="+yehudaEval(data);
    }
}

function yehudaEval(data) ///this time i created eval... :)
{
    var listOfNumbers = data.split(/[+-]/);
    var iter = 0;
    var result = parseInt(listOfNumbers[iter]);

    for (var i =0; i<data.length; i++)
    {
        if (data.charAt(i) === "+")
        {
            iter++;
            result = result + parseInt(listOfNumbers[iter]);
        }
        if (data.charAt(i) === "-")
        {
            iter++;
            result = result - parseInt(listOfNumbers[iter]);
        }
    }
    return result;
}

function startOver()
{
    var textField = document.getElementById("textField");
    textField.innerHTML ="";
}