
nomeArrayODIADO = [];

function EnviarODIADO()
{
    var displayStudentArray = [];

    for (var j = 1; j <= 4; j++)
    {
   
    var ODIADO1 = document.getElementById("NomeDoMeuODIADOaluninho1").value;
    console.log(ODIADO1);
    nomeArrayODIADO.push(ODIADO1);
    }

    
    
    console.log(nomeArrayODIADO);

    
    var lenghtOfNameOfStudentsArray = nomeArrayODIADO.length; 
    console.log(lenghtOfNameOfStudentsArray);

    for (var k = 0; k <= lenghtOfNameOfStudentsArray; k++)
    {
        displayStudentArray.push("<h4>NAME"+ nomeArrayODIADO[k] + "</h4>"); 
        console.log(displayStudentArray);
    }
    console.log(displayStudentArray)
    document.getElementById("MostarNomeODIADO").innerHTML = displayStudentArray;

    var removeCommas = displayStudentArray.join(" ");
    console.log(removeCommas); 
    document.getElementById("MostrarNomeODIADO2").innerHTML = removeCommas;
    document.getElementById("submitButton").style.display = "none"; 
    document.getElementById("sortButton").style.display = "inline-block";
    

}
function OrdenarODIADOS()
{
    nomeArrayODIADO.sort();
    console.log(nomeArrayODIADO);

    var displayStudentArraySort = [];

    var lenghtOfNameOfStudentsArray = nomeArrayODIADO.length;
    console.log(lenghtOfNameOfStudentsArray);

    for (var k = 0; k < lenghtOfNameOfStudentsArray; k++)
    {
      displayStudentArraySort.push("<h4>NAME - " + nomeArrayODIADO[k] + "</h4>");
      console.log(displayStudentArraySort);

    }

    var removeCommas = displayStudentArraySort.join(" ");
    console.log(removeCommas)

    document.getElementById("MostarNomeODIADO2").innerHTML = removeCommas;
}
